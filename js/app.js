(function () {
  "use strict";

  var STORAGE_KEY = "ch11-12-practice-test-v1";
  var LETTERS = ["A", "B", "C", "D", "E", "F"];
  var QS = window.QUESTIONS || [];
  var byId = {};
  QS.forEach(function (q) { byId[q.id] = q; });

  var els = {
    stage: document.getElementById("stage"),
    mapGrid: document.getElementById("mapGrid"),
    filter: document.getElementById("filter"),
    shuffle: document.getElementById("shuffle"),
    restart: document.getElementById("restart"),
    finish: document.getElementById("finish"),
    segCorrect: document.getElementById("segCorrect"),
    segMissed: document.getElementById("segMissed"),
    ledgerBar: document.getElementById("ledgerBar"),
    ledgerText: document.getElementById("ledgerText")
  };

  /* ---------- Helpers ---------- */
  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function range(n) {
    var a = [];
    for (var i = 0; i < n; i++) a.push(i);
    return a;
  }

  function formatNumber(n) {
    var parts = String(n).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  function parseNumber(raw) {
    var t = String(raw).toLowerCase().replace(/[$,\s]/g, "").replace(/billion$|bil$|b$/, "");
    if (t === "" || t === "-" || t === ".") return null;
    var n = Number(t);
    return isFinite(n) ? n : null;
  }

  /* ---------- State ---------- */
  function newState(filter, shuffle, ids) {
    var pool = ids || QS.filter(function (q) {
      return filter === "all" || String(q.ch) === filter;
    }).map(function (q) { return q.id; });

    var perms = {};
    pool.forEach(function (id) {
      var q = byId[id];
      if (q.type === "mc") perms[id] = shuffleArray(range(q.options.length));
    });

    return {
      filter: filter,
      shuffle: shuffle,
      order: shuffle ? shuffleArray(pool) : pool,
      perms: perms,
      idx: 0,
      responses: {},
      drafts: {},
      view: "quiz",
      retryRound: !!ids
    };
  }

  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (s && Array.isArray(s.order) && s.order.length &&
          s.order.every(function (id) { return byId[id]; })) {
        s.drafts = s.drafts || {};
        s.perms = s.perms || {};
        s.order.forEach(function (id) {
          var q = byId[id];
          if (q.type === "mc" && (!s.perms[id] || s.perms[id].length !== q.options.length)) {
            s.perms[id] = shuffleArray(range(q.options.length));
          }
        });
        return s;
      }
    } catch (e) { /* storage unavailable or corrupt */ }
    return null;
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  var state = load() || newState("all", false);

  /* ---------- Grading ---------- */
  function grade(q, given) {
    if (q.type === "num") {
      var tol = typeof q.tolerance === "number" ? q.tolerance : 0.01;
      return Math.abs(given - q.answer) <= tol + 1e-9;
    }
    return given === q.answer;
  }

  function correctText(q) {
    if (q.type === "tf") return q.answer ? "True" : "False";
    if (q.type === "num") {
      return (q.prefix || "") + formatNumber(q.answer) + (q.suffix ? " " + q.suffix : "");
    }
    var pos = state.perms[q.id].indexOf(q.answer);
    return LETTERS[pos] + ". " + q.options[q.answer];
  }

  function stats() {
    var correct = 0, missed = 0;
    state.order.forEach(function (id) {
      var r = state.responses[id];
      if (!r) return;
      if (r.correct) correct++; else missed++;
    });
    return { correct: correct, missed: missed, total: state.order.length, answered: correct + missed };
  }

  /* ---------- Rendering ---------- */
  function render() {
    els.filter.value = state.filter;
    els.shuffle.checked = !!state.shuffle;
    renderLedger();
    renderMap();
    if (state.view === "results") renderResults(); else renderQuestion();
    save();
  }

  function renderLedger() {
    var s = stats();
    var pc = s.total ? (s.correct / s.total) * 100 : 0;
    var pm = s.total ? (s.missed / s.total) * 100 : 0;
    els.segCorrect.style.width = pc + "%";
    els.segMissed.style.width = pm + "%";
    var label = s.correct + " correct, " + s.missed + " missed, " + (s.total - s.answered) + " left";
    els.ledgerBar.setAttribute("aria-label", label);
    var pct = s.answered ? Math.round((s.correct / s.answered) * 100) : 0;
    els.ledgerText.innerHTML =
      "<strong>" + s.correct + "</strong> correct, <strong>" + s.missed + "</strong> missed, " +
      (s.total - s.answered) + " left" + (s.answered ? " (" + pct + "%)" : "");
  }

  function renderMap() {
    var html = "";
    state.order.forEach(function (id, i) {
      var r = state.responses[id];
      var cls = "map-btn";
      var status = "not answered";
      if (r) { cls += r.correct ? " correct" : " missed"; status = r.correct ? "correct" : "missed"; }
      if (state.view === "quiz" && i === state.idx) cls += " current";
      html += '<li><button type="button" class="' + cls + '" data-go="' + i + '" aria-label="Question ' +
        (i + 1) + ", " + status + '">' + (i + 1) + "</button></li>";
    });
    els.mapGrid.innerHTML = html;
  }

  function typeLabel(q) {
    if (q.type === "tf") return "True / False";
    if (q.type === "num") return "Numeric Response";
    return "Multiple Choice";
  }

  function renderQuestion() {
    var id = state.order[state.idx];
    var q = byId[id];
    var r = state.responses[id];
    var draft = state.drafts[id];
    var total = state.order.length;
    var html = "";

    html += '<div class="q-head"><span class="q-num">Question ' + (state.idx + 1) + " of " + total +
      "</span><span>Chapter " + q.ch + ": " + q.topic + "</span></div>";
    html += '<div class="q-body">';
    html += '<p class="q-type">' + typeLabel(q) + "</p>";
    html += '<p class="q-prompt">' + q.prompt + "</p>";

    if (q.type === "num") {
      html += '<p class="q-instructions"><b>Instructions:</b> ' + q.instructions + "</p>";
      var fieldCls = "num-field" + (r ? (r.correct ? " is-correct" : " is-wrong") : "");
      var val = r ? r.raw : (draft != null ? draft : "");
      html += '<div class="num-entry"><span class="' + fieldCls + '">';
      if (q.prefix) html += '<span class="affix">' + q.prefix + "</span>";
      html += '<input id="numInput" type="text" inputmode="decimal" autocomplete="off" aria-label="Your answer" value="' +
        String(val).replace(/"/g, "&quot;") + '"' + (r ? " disabled" : "") + ">";
      if (q.suffix) html += '<span class="affix">' + q.suffix + "</span>";
      html += "</span></div>";
      html += '<p class="num-error" id="numError" hidden>Enter a number, for example 125 or 133.33.</p>';
    } else {
      var order = q.type === "tf" ? [true, false] : state.perms[id];
      html += '<ul class="options" role="list">';
      order.forEach(function (val, pos) {
        var text = q.type === "tf" ? (val ? "True" : "False") : q.options[val];
        var cls = "option";
        var mark = "";
        if (r) {
          if (val === q.answer) { cls += " is-correct"; mark = "Correct answer"; }
          else if (val === r.given) { cls += " is-wrong"; mark = "Your answer"; }
        } else if (draft === val) {
          cls += " is-selected";
        }
        html += '<li><button type="button" class="' + cls + '" data-pos="' + pos + '"' +
          (r ? " disabled" : "") + ' aria-pressed="' + (draft === val || (r && r.given === val) ? "true" : "false") + '">' +
          '<span class="letter">' + LETTERS[pos] + "</span><span>" + text + "</span>" +
          '<span class="mark">' + mark + "</span></button></li>";
      });
      html += "</ul>";
    }

    if (r) {
      html += '<div class="feedback ' + (r.correct ? "good" : "bad") + '" role="status">';
      html += '<p class="feedback-verdict">' + (r.correct ? "Correct" : "Incorrect") + "</p>";
      if (!r.correct) html += '<p class="feedback-answer">Correct answer: <strong>' + correctText(q) + "</strong></p>";
      html += '<div class="feedback-expl">' + q.explanation + "</div>";
      if (q.breakdown) {
        html += '<button type="button" class="btn btn-quiet btn-breakdown" id="breakdownBtn" aria-expanded="false" aria-controls="breakdown">Break it down</button>';
        html += '<div class="breakdown" id="breakdown" hidden>' + q.breakdown + "</div>";
      }
      html += "</div>";
    }

    html += "</div>";

    var isLast = state.idx === total - 1;
    html += '<div class="q-actions">';
    html += '<button type="button" class="btn btn-quiet" id="prevBtn"' + (state.idx === 0 ? " disabled" : "") + ">Previous</button>";
    html += '<div class="right">';
    if (!r) {
      var canCheck = q.type === "num" ? true : draft !== undefined && draft !== null;
      html += '<button type="button" class="btn btn-primary" id="checkBtn"' + (canCheck ? "" : " disabled") + ">Check answer</button>";
    } else {
      html += '<button type="button" class="btn btn-primary" id="nextBtn">' + (isLast ? "See results" : "Next question") + "</button>";
    }
    html += "</div></div>";

    els.stage.innerHTML = html;
    bindQuestion(q);
  }

  function bindQuestion(q) {
    var id = q.id;
    var options = els.stage.querySelectorAll(".option");
    Array.prototype.forEach.call(options, function (btn) {
      btn.addEventListener("click", function () { selectPos(Number(btn.getAttribute("data-pos"))); });
    });

    var input = document.getElementById("numInput");
    if (input) {
      input.addEventListener("input", function () {
        state.drafts[id] = input.value;
        document.getElementById("numError").hidden = true;
        save();
      });
      if (!state.responses[id]) input.focus({ preventScroll: true });
    }

    var check = document.getElementById("checkBtn");
    if (check) check.addEventListener("click", checkAnswer);
    var next = document.getElementById("nextBtn");
    if (next) next.addEventListener("click", goNext);
    var prev = document.getElementById("prevBtn");
    if (prev) prev.addEventListener("click", function () { goTo(state.idx - 1); });
    var bdBtn = document.getElementById("breakdownBtn");
    if (bdBtn) bdBtn.addEventListener("click", function () {
      var panel = document.getElementById("breakdown");
      var open = panel.hidden;
      panel.hidden = !open;
      bdBtn.setAttribute("aria-expanded", String(open));
      bdBtn.textContent = open ? "Hide breakdown" : "Break it down";
    });
  }

  function selectPos(pos) {
    var id = state.order[state.idx];
    var q = byId[id];
    if (state.responses[id] || q.type === "num") return;
    var order = q.type === "tf" ? [true, false] : state.perms[id];
    if (pos < 0 || pos >= order.length) return;
    state.drafts[id] = order[pos];
    renderQuestion();
    save();
    var btn = els.stage.querySelector('.option[data-pos="' + pos + '"]');
    if (btn) btn.focus({ preventScroll: true });
  }

  function checkAnswer() {
    var id = state.order[state.idx];
    var q = byId[id];
    if (state.responses[id]) return;
    var given, raw;
    if (q.type === "num") {
      var input = document.getElementById("numInput");
      raw = input ? input.value : "";
      given = parseNumber(raw);
      if (given === null) {
        document.getElementById("numError").hidden = false;
        if (input) input.focus();
        return;
      }
    } else {
      given = state.drafts[id];
      if (given === undefined || given === null) return;
    }
    state.responses[id] = { given: given, raw: raw, correct: grade(q, given) };
    delete state.drafts[id];
    render();
    var next = document.getElementById("nextBtn");
    if (next) next.focus({ preventScroll: true });
  }

  function goNext() {
    if (state.idx < state.order.length - 1) {
      goTo(state.idx + 1);
    } else {
      state.view = "results";
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function goTo(i) {
    if (i < 0 || i >= state.order.length) return;
    state.idx = i;
    state.view = "quiz";
    render();
    var top = els.stage.getBoundingClientRect().top + window.scrollY - 16;
    if (window.scrollY > top) window.scrollTo({ top: top, behavior: "smooth" });
  }

  function renderResults() {
    var s = stats();
    var pct = s.total ? Math.round((s.correct / s.total) * 100) : 0;
    var byCh = {};
    state.order.forEach(function (id) {
      var q = byId[id];
      var key = "Chapter " + q.ch;
      if (!byCh[key]) byCh[key] = { c: 0, t: 0 };
      byCh[key].t++;
      var r = state.responses[id];
      if (r && r.correct) byCh[key].c++;
    });

    var missedIdx = [];
    var openIdx = [];
    state.order.forEach(function (id, i) {
      var r = state.responses[id];
      if (!r) openIdx.push(i); else if (!r.correct) missedIdx.push(i);
    });

    var html = '<div class="results">';
    html += "<h2>" + (state.retryRound ? "Retry round results" : "Your results") + "</h2>";
    html += '<p class="big-score">' + pct + "%</p>";
    html += '<p class="sub">' + s.correct + " of " + s.total + " correct" +
      (openIdx.length ? ", " + openIdx.length + " not answered yet" : "") + "</p>";

    html += '<dl class="breakdown">';
    Object.keys(byCh).forEach(function (k) {
      html += "<div><dt>" + k + "</dt><dd>" + byCh[k].c + " / " + byCh[k].t + "</dd></div>";
    });
    html += "</dl>";

    if (missedIdx.length) {
      html += "<h3>Review these topics</h3><ol class=\"missed-list\">";
      missedIdx.forEach(function (i) {
        var q = byId[state.order[i]];
        html += '<li><button type="button" class="link-btn" data-go="' + i + '">Question ' + (i + 1) +
          "</button>: Chapter " + q.ch + ", " + q.topic + "</li>";
      });
      html += "</ol>";
    } else if (!openIdx.length) {
      html += "<h3>No missed questions</h3><p class=\"sub\">Try shuffling the order and running it again to make sure it sticks.</p>";
    }

    html += '<div class="actions">';
    if (missedIdx.length) html += '<button type="button" class="btn btn-primary" id="retryBtn">Retry missed questions</button>';
    if (openIdx.length) html += '<button type="button" class="btn btn-quiet" id="resumeBtn">Answer remaining questions</button>';
    html += '<button type="button" class="btn btn-quiet" id="againBtn">Start a new attempt</button>';
    html += "</div></div>";

    els.stage.innerHTML = html;

    Array.prototype.forEach.call(els.stage.querySelectorAll("[data-go]"), function (b) {
      b.addEventListener("click", function () { goTo(Number(b.getAttribute("data-go"))); });
    });
    var retry = document.getElementById("retryBtn");
    if (retry) retry.addEventListener("click", function () {
      var ids = missedIdx.map(function (i) { return state.order[i]; });
      state = newState(state.filter, state.shuffle, state.shuffle ? shuffleArray(ids) : ids);
      render();
    });
    var resume = document.getElementById("resumeBtn");
    if (resume) resume.addEventListener("click", function () { goTo(openIdx[0]); });
    document.getElementById("againBtn").addEventListener("click", restart);
  }

  function restart() {
    state = newState(els.filter.value, els.shuffle.checked);
    render();
  }

  /* ---------- Global events ---------- */
  els.mapGrid.addEventListener("click", function (e) {
    var b = e.target.closest("[data-go]");
    if (b) goTo(Number(b.getAttribute("data-go")));
  });

  els.filter.addEventListener("change", function () {
    var s = stats();
    if (s.answered && !window.confirm("Changing the question set starts a new attempt. Continue?")) {
      els.filter.value = state.filter;
      return;
    }
    restart();
  });

  els.shuffle.addEventListener("change", function () {
    var s = stats();
    if (s.answered && !window.confirm("Changing the order starts a new attempt. Continue?")) {
      els.shuffle.checked = !!state.shuffle;
      return;
    }
    restart();
  });

  els.restart.addEventListener("click", function () {
    if (stats().answered && !window.confirm("Start over and clear your answers?")) return;
    restart();
  });

  els.finish.addEventListener("click", function () {
    state.view = "results";
    render();
  });

  document.addEventListener("keydown", function (e) {
    if (state.view !== "quiz" || e.altKey || e.ctrlKey || e.metaKey) return;
    var tag = (e.target.tagName || "").toLowerCase();
    var inField = tag === "input" || tag === "select" || tag === "textarea";
    var id = state.order[state.idx];
    var answered = !!state.responses[id];

    if (!inField && !answered && /^[1-6]$/.test(e.key)) {
      selectPos(Number(e.key) - 1);
      e.preventDefault();
      return;
    }
    if (!inField && !answered && /^[a-f]$/i.test(e.key)) {
      selectPos(LETTERS.indexOf(e.key.toUpperCase()));
      e.preventDefault();
      return;
    }
    if (e.key === "Enter") {
      if (tag === "button" && e.target.classList.contains("option")) {
        if (!e.target.classList.contains("is-selected")) return; // let the click select it
      } else if (tag === "button" && e.target.id !== "checkBtn" && e.target.id !== "nextBtn") {
        return;
      }
      if (tag === "select") return;
      e.preventDefault();
      if (answered) goNext(); else checkAnswer();
    }
  });

  render();
})();
