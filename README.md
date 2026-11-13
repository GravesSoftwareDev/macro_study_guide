# Chapters 11 and 12 Practice Test: Fiscal Policy, Deficits and Debt

A 62-question practice test for Macroeconomics chapters 11 (Fiscal Policy) and 12 (Deficits and Debt), written in the style of McGraw Hill Connect: multiple choice, true/false, and numeric-response calculation questions. Each question is graded as soon as you check it and shows a short explanation, with the formula worked out for calculation questions.

## Features

- Instant grading with a short explanation for every question
- A "Break it down" button after each answer that walks through the correct answer step by step
- Calculation practice for the multiplier, desired stimulus, tax cuts, transfers, fiscal restraint, the balanced budget multiplier, deficits, structural deficits, and debt service
- Question map showing correct, missed, and unanswered questions
- Filter by chapter, optional shuffled order, and answer choices shuffled each attempt
- Results page with a chapter breakdown and a "Retry missed questions" round
- Progress saved in the browser, so a refresh doesn't lose your place
- Keyboard support: number or letter keys pick an answer, Enter checks or moves on
- Light and dark mode

## Project structure

```
ch11-12-fiscal-policy-practice-test/
  index.html
  css/style.css
  js/questions.js   question bank (edit or add questions here)
  js/app.js         grading, navigation, results
```

## Hosting on GitHub Pages

1. Push this folder to a GitHub repository (or put it inside your Study Guides repo).
2. In the repository, go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick your branch, and select the folder that contains `index.html` (`/root` or `/docs`).
4. If the test lives in a subfolder of a larger repo, the page will be at `https://<username>.github.io/<repo>/ch11-12-fiscal-policy-practice-test/`.

No build step is needed. It is plain HTML, CSS, and JavaScript.

## Adding questions

Each entry in `js/questions.js` looks like this:

```js
{
  id: "c11-99", ch: 11, topic: "Multiplier", type: "num",   // "mc", "tf", or "num"
  prompt: "If the MPC is 0.9, what is the multiplier?",
  instructions: "Enter your response as a whole number.",   // num only
  prefix: "$", suffix: "billion",                           // num only, optional
  answer: 10, tolerance: 0.01,                              // mc: index of correct option, tf: true/false
  explanation: "Multiplier = 1 / (1 - 0.9) = 10"
}
```

For multiple choice, list the correct option anywhere in `options` and set `answer` to its index. The app shuffles the choices.
