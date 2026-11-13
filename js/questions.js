/*
  Question bank: Chapter 11 (Fiscal Policy) and Chapter 12 (Deficits and Debt)
  Types:
    mc  = multiple choice (options shuffled at test start)
    tf  = true / false
    num = numeric entry (graded with a small tolerance)
  Prompts and explanations may contain simple HTML.
*/
window.QUESTIONS = [
  /* ------------------------------ CHAPTER 11 ------------------------------ */
  {
    id: "c11-01", ch: 11, topic: "Fiscal policy", type: "mc",
    prompt: "Fiscal policy is the use of",
    options: [
      "government taxes and spending to alter macroeconomic outcomes.",
      "changes in the money supply and interest rates to alter macroeconomic outcomes.",
      "tariffs and import quotas to protect domestic industries.",
      "price controls to limit inflation."
    ],
    answer: 0,
    explanation: "Fiscal policy works through the federal budget: taxes, government purchases, and transfers. Money supply and interest rates belong to monetary policy, run by the Federal Reserve.",
    breakdown: "<p>Ask one question: <b>who is pulling the lever?</b></p><ul><li><b>Congress and the President</b> control the budget, meaning taxes and spending. That is <b>fiscal</b> policy (\"fisc\" is Latin for treasury).</li><li><b>The Federal Reserve</b> controls the money supply and interest rates. That is <b>monetary</b> policy.</li></ul><p>Tariffs and price controls are government actions too, but they are trade and regulatory policy, not tools for managing aggregate demand through the budget.</p>"
  },
  {
    id: "c11-02", ch: 11, topic: "Tools of fiscal policy", type: "mc",
    prompt: "Which of the following is <em>not</em> a tool of fiscal policy?",
    options: [
      "Changing the money supply",
      "Changing the level of government purchases",
      "Raising or lowering taxes",
      "Changing the level of income transfers"
    ],
    answer: 0,
    explanation: "The three fiscal tools are government purchases, taxes, and income transfers. Changing the money supply is a monetary policy tool.",
    breakdown: "<p>Fiscal policy has exactly three tools. Picture the federal budget:</p><ol><li><b>Government purchases (G):</b> buying goods and services, like highways or military equipment.</li><li><b>Taxes (T):</b> money taken out of household and business income.</li><li><b>Income transfers:</b> money handed out with nothing bought in return, like Social Security or unemployment benefits.</li></ol><p>Anything on the budget is fiscal. The money supply is not on the budget; the Fed manages it, so it is monetary policy.</p>"
  },
  {
    id: "c11-03", ch: 11, topic: "History of U.S. income tax", type: "mc",
    prompt: "The federal government's power to tax incomes was established by",
    options: [
      "the 16th Amendment to the U.S. Constitution in 1913.",
      "the Social Security Act of 1935.",
      "the Revenue Act of 1789.",
      "the Gramm-Rudman-Hollings Act of 1985."
    ],
    answer: 0,
    explanation: "The 16th Amendment (1913) extended the government's taxing power to incomes, which opened the door to a much larger federal government.",
    breakdown: "<p>The Constitution originally limited the federal government's ability to tax incomes directly. To change that, the country needed a <b>constitutional amendment</b>, not just a law.</p><ul><li>The <b>16th Amendment (1913)</b> gave Congress the power to tax incomes.</li><li>The Social Security Act (1935) created payroll taxes, but only after the income tax already existed.</li><li>Gramm-Rudman-Hollings (1985) was about deficits, a Chapter 12 topic.</li></ul><p>Memory hook: <b>16</b>th Amendment, 19<b>13</b>, opened the door to a big federal government.</p>"
  },
  {
    id: "c11-04", ch: 11, topic: "History of U.S. income tax", type: "mc",
    prompt: "Before the federal income tax was established, most federal revenue came from",
    options: [
      "taxes on imports, whiskey, and tobacco.",
      "Social Security payroll taxes.",
      "corporate income taxes.",
      "state government contributions."
    ],
    answer: 0,
    explanation: "Before 1913, customs duties on imports plus excise taxes on whiskey and tobacco funded most of the government. Today those sources count for very little.",
    breakdown: "<p>Before 1913 there was no income tax, so the government had to tax <b>things</b>, not income:</p><ul><li><b>Customs duties:</b> taxes on imported goods.</li><li><b>Excise taxes:</b> taxes on specific products like whiskey and tobacco.</li></ul><p>The wrong choices all came later: Social Security taxes began in 1935, and corporate income taxes depend on the income tax power. States have never funded the federal government.</p>"
  },
  {
    id: "c11-05", ch: 11, topic: "Government revenue", type: "mc",
    prompt: "Today, the largest source of federal tax revenue is",
    options: [
      "individual income taxes.",
      "Social Security taxes.",
      "corporate income taxes.",
      "customs duties on imports."
    ],
    answer: 0,
    explanation: "Individual income taxes supply nearly half of federal tax revenue. Social Security taxes are second, and corporate income taxes are third.",
    breakdown: "<p>Know the ranking of federal tax revenue from the top down:</p><ol><li><b>Individual income taxes:</b> nearly half of all federal tax revenue.</li><li><b>Social Security (payroll) taxes:</b> second.</li><li><b>Corporate income taxes:</b> a distant third.</li></ol><p>Customs duties were the main source in the 1800s but are a tiny share today. Think of your own paycheck: income tax and Social Security are the two big deductions, and the federal budget looks the same.</p>"
  },
  {
    id: "c11-06", ch: 11, topic: "Government revenue", type: "tf",
    prompt: "Corporate income taxes are the second-largest source of federal tax revenue.",
    answer: false,
    explanation: "False. The ranking is individual income taxes first, Social Security taxes second, and corporate income taxes third.",
    breakdown: "<p>The statement swaps the order of second and third place.</p><ol><li>Individual income taxes</li><li><b>Social Security taxes</b> (this is the true second place)</li><li>Corporate income taxes</li></ol><p>It's an easy trap because corporations are big and well known. But every worker pays payroll tax on every paycheck, and that adds up to far more than corporate taxes.</p>"
  },
  {
    id: "c11-07", ch: 11, topic: "Purchases vs. transfers", type: "mc",
    prompt: "Which of the following federal outlays does <em>not</em> directly become part of aggregate demand?",
    options: [
      "Unemployment benefits",
      "Purchases of military equipment",
      "Highway construction",
      "Purchases of medical supplies for veterans' hospitals"
    ],
    answer: 0,
    explanation: "Unemployment benefits are an income transfer: no good or service is exchanged. Transfers only add to AD when recipients spend them. Government purchases count in AD right away.",
    breakdown: "<p>Aggregate demand is spending on <b>goods and services</b>. So ask: <b>did the government get a product or service in exchange?</b></p><ul><li>Military equipment, highway construction, medical supplies: yes. These are <b>purchases</b> (G) and count in AD right away.</li><li>Unemployment benefits: no. This is a <b>transfer</b>. Money moves from taxpayers to recipients, but nothing is produced.</li></ul><p>Transfers only reach AD <i>indirectly</i>, when recipients spend part of them (the MPC share). That's why they don't <i>directly</i> become part of AD.</p>"
  },
  {
    id: "c11-08", ch: 11, topic: "Multiplier", type: "num",
    prompt: "If the marginal propensity to consume (MPC) is 0.75, what is the value of the multiplier?",
    instructions: "Enter your response as a whole number.",
    answer: 4, tolerance: 0.01,
    explanation: "<span class=\"formula\">Multiplier = 1 / (1 - MPC) = 1 / 0.25 = 4</span>Each $1 of new spending eventually raises total spending by $4.",
    breakdown: "<p>The multiplier comes from the share of each dollar that is <b>not</b> spent.</p><ol><li>MPC = 0.75, so people spend 75 cents of each new dollar.</li><li>They save the rest: MPS = 1 - 0.75 = 0.25.</li><li>Multiplier = 1 / MPS = 1 / 0.25 = <b>4</b>.</li></ol><p>Why it works: $1 of spending becomes someone's income, they spend $0.75, which becomes income for someone else, who spends $0.56, and so on. All those rounds add up to $4.</p><p>Check: a bigger MPC means more re-spending, so a bigger multiplier. MPC 0.8 gives 5, and MPC 0.9 gives 10.</p>"
  },
  {
    id: "c11-09", ch: 11, topic: "Recessionary GDP gap", type: "num",
    prompt: "Equilibrium GDP is $5,600 billion and full-employment GDP is $6,000 billion. What is the size of the recessionary GDP gap?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 400, tolerance: 0.01,
    explanation: "<span class=\"formula\">GDP gap = full-employment GDP - equilibrium GDP = 6,000 - 5,600 = $400 billion</span>A recessionary gap is how far equilibrium GDP falls short of full employment.",
    breakdown: "<p>The GDP gap is just the distance between <b>where the economy should be</b> and <b>where it is</b>.</p><ol><li>Where it should be (full-employment GDP): $6,000 billion.</li><li>Where it is (equilibrium GDP): $5,600 billion.</li><li>Gap = 6,000 - 5,600 = <b>$400 billion</b>.</li></ol><p>Because equilibrium is <i>below</i> full employment, output is falling short and workers are idle. That makes it a <b>recessionary</b> gap. If equilibrium were above full employment, it would be an inflationary gap.</p>"
  },
  {
    id: "c11-10", ch: 11, topic: "AD shortfall", type: "mc",
    prompt: "When the aggregate supply curve slopes upward, closing a recessionary GDP gap requires aggregate demand to increase by",
    options: [
      "more than the size of the GDP gap.",
      "exactly the size of the GDP gap.",
      "less than the size of the GDP gap.",
      "the size of the GDP gap divided by the multiplier."
    ],
    answer: 0,
    explanation: "As AD shifts right, some of the shift goes into higher prices instead of more output. So the AD shortfall is larger than the GDP gap.",
    breakdown: "<p>Picture shifting the AD curve right along an <b>upward-sloping</b> AS curve.</p><ol><li>As AD rises, the economy moves up the AS curve.</li><li>Moving up the curve means <b>output rises, but prices rise too</b>.</li><li>Some of the extra spending gets used up by higher prices instead of buying more output.</li><li>So to get the full gap's worth of extra output, AD has to shift by <b>more than</b> the gap.</li></ol><p>The amount AD must shift is called the <b>AD shortfall</b>, and it is always bigger than the GDP gap when AS slopes up.</p>"
  },
  {
    id: "c11-11", ch: 11, topic: "AD shortfall", type: "mc",
    prompt: "The naive Keynesian model, in which increasing AD by the amount of the GDP gap achieves full employment, would work only if the aggregate supply curve were",
    options: [
      "horizontal.",
      "vertical.",
      "upward sloping.",
      "downward sloping."
    ],
    answer: 0,
    explanation: "Only a horizontal AS curve lets output rise with no price-level increase. With an upward-sloping AS curve, part of the AD increase becomes inflation.",
    breakdown: "<p>The \"naive\" model assumes every extra dollar of AD becomes a dollar of extra output. When is that true?</p><ul><li>Only when prices <b>do not rise at all</b> as AD increases.</li><li>Prices stay flat only if the AS curve is <b>horizontal</b>. Firms will sell any amount at the current price level.</li></ul><p>Contrast: with a <b>vertical</b> AS curve, extra AD only raises prices and output doesn't change at all. With an upward-sloping AS curve (the realistic case), you get some of each, which is why the AD shortfall is larger than the GDP gap.</p>"
  },
  {
    id: "c11-12", ch: 11, topic: "AD shortfall", type: "mc",
    prompt: "During a recession, the fiscal policy target (the amount by which the AD curve should shift) is the",
    options: [
      "AD shortfall.",
      "recessionary GDP gap.",
      "budget deficit.",
      "marginal propensity to consume."
    ],
    answer: 0,
    explanation: "The AD shortfall is the additional AD needed to reach full employment after allowing for price-level changes. That is the fiscal target.",
    breakdown: "<p>Two numbers are easy to mix up:</p><ul><li><b>Recessionary GDP gap:</b> how much <i>output</i> is missing.</li><li><b>AD shortfall:</b> how far the <i>AD curve</i> must shift to fill that gap, after allowing for prices to rise.</li></ul><p>Fiscal policy acts on AD, so its target is the <b>AD shortfall</b>. Aim only at the GDP gap and you'll undershoot, because some of the push goes into higher prices.</p><p>The policy recipe then divides the AD shortfall by the multiplier to get the desired stimulus.</p>"
  },
  {
    id: "c11-13", ch: 11, topic: "Desired fiscal stimulus", type: "num",
    prompt: "The economy has an AD shortfall of $400 billion and the MPC is 0.80. How much should government spending increase to close the AD shortfall?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 80, tolerance: 0.01,
    explanation: "<span class=\"formula\">Multiplier = 1 / (1 - 0.80) = 5<br>Desired stimulus = AD shortfall / multiplier = 400 / 5 = $80 billion</span>Every dollar of new government spending goes straight into AD, so the spending increase equals the desired stimulus.",
    breakdown: "<p>Work backward from the target. The multiplier will do most of the work.</p><ol><li><b>Find the multiplier:</b> 1 / (1 - 0.80) = 1 / 0.20 = 5.</li><li><b>Find the desired stimulus:</b> AD shortfall / multiplier = 400 / 5 = $80 billion.</li><li><b>Choose the tool:</b> government purchases go 100% into AD, so G must rise by exactly <b>$80 billion</b>.</li></ol><p>Check it forward: $80 billion x 5 = $400 billion of new AD, which closes the shortfall.</p><p>Common mistake: answering $400 billion. That forgets the multiplier.</p>"
  },
  {
    id: "c11-14", ch: 11, topic: "Tax cuts", type: "num",
    prompt: "The economy has an AD shortfall of $400 billion and the MPC is 0.80. How large a tax cut is needed to close the AD shortfall?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 100, tolerance: 0.01,
    explanation: "<span class=\"formula\">Desired stimulus = 400 / 5 = $80 billion<br>Tax cut = desired stimulus / MPC = 80 / 0.80 = $100 billion</span>Consumers spend only 80% of a tax cut, so the tax cut must be bigger than the desired stimulus.",
    breakdown: "<p>Same target as the spending question, but with one extra step, because people save part of a tax cut.</p><ol><li><b>Multiplier:</b> 1 / (1 - 0.80) = 5.</li><li><b>Desired stimulus:</b> 400 / 5 = $80 billion of new spending needed in round one.</li><li><b>A tax cut only gets the MPC share spent.</b> We need 0.80 x (tax cut) = $80 billion.</li><li>Tax cut = 80 / 0.80 = <b>$100 billion</b>.</li></ol><p>Check: cut taxes $100B, consumers spend $80B and save $20B, and $80B x 5 = $400B. The tax cut is bigger than the spending increase would be ($80B) because of that $20B leak into savings.</p>"
  },
  {
    id: "c11-15", ch: 11, topic: "Increased transfers", type: "num",
    prompt: "The economy has an AD shortfall of $400 billion and the MPC is 0.80. By how much should income transfers increase to close the AD shortfall?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 100, tolerance: 0.01,
    explanation: "<span class=\"formula\">Transfer increase = desired stimulus / MPC = 80 / 0.80 = $100 billion</span>Transfers work just like a tax cut: they raise disposable income, and only the MPC share is spent at first.",
    breakdown: "<p>To a household, a transfer check and a tax cut feel the same: either way, <b>disposable income goes up</b>. So the math is identical to the tax-cut problem.</p><ol><li>Multiplier = 1 / 0.20 = 5.</li><li>Desired stimulus = 400 / 5 = $80 billion.</li><li>Recipients spend only 80% of a transfer: transfer x 0.80 = 80.</li><li>Transfer increase = 80 / 0.80 = <b>$100 billion</b>.</li></ol><p>Rule of thumb: <b>G</b> = desired stimulus. <b>Tax cuts and transfers</b> = desired stimulus / MPC.</p>"
  },
  {
    id: "c11-16", ch: 11, topic: "Taxes and consumption", type: "num",
    prompt: "Congress cuts taxes by $60 billion. If the MPC is 0.90, how much will consumer spending initially increase?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 54, tolerance: 0.01,
    explanation: "<span class=\"formula\">Initial change in consumption = MPC x tax cut = 0.90 x 60 = $54 billion</span>The other $6 billion is saved, so it is not part of the first round of spending.",
    breakdown: "<p>\"Initially\" means <b>first round only</b>, so don't use the multiplier yet.</p><ol><li>Households get $60 billion more disposable income.</li><li>They spend the MPC share: 0.90 x 60 = <b>$54 billion</b>.</li><li>They save the rest: 0.10 x 60 = $6 billion.</li></ol><p>Watch the wording: \"initial increase in consumption\" uses MPC x the tax cut. \"Cumulative\" or \"total increase in AD\" also multiplies by the multiplier (see the next question).</p>"
  },
  {
    id: "c11-17", ch: 11, topic: "Multiplier", type: "num",
    prompt: "Congress cuts taxes by $60 billion. If the MPC is 0.90, what is the cumulative (total) increase in aggregate demand?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 540, tolerance: 0.01,
    explanation: "<span class=\"formula\">Initial spending = 0.90 x 60 = $54 billion<br>Multiplier = 1 / (1 - 0.90) = 10<br>Total change in AD = 54 x 10 = $540 billion</span>Apply the multiplier to the initial spending, not to the full tax cut.",
    breakdown: "<p>This is the full chain reaction. Do it in two stages.</p><ol><li><b>First round:</b> the tax cut becomes spending of 0.90 x 60 = $54 billion.</li><li><b>Multiplier:</b> 1 / (1 - 0.90) = 10.</li><li><b>All rounds:</b> 54 x 10 = <b>$540 billion</b>.</li></ol><p>The classic mistake is 60 x 10 = $600 billion. That treats the whole tax cut as if it were spent, but $6 billion was saved and never started the chain.</p>"
  },
  {
    id: "c11-18", ch: 11, topic: "Tax cuts", type: "tf",
    prompt: "A dollar of tax cuts provides more fiscal stimulus than a dollar of government purchases.",
    answer: false,
    explanation: "False. A dollar of government purchases enters AD in full, but part of a tax cut is saved. So a tax cut is less stimulative than an equal increase in government purchases.",
    breakdown: "<p>Compare $1 of each:</p><ul><li><b>$1 of government purchases:</b> the full $1 is spent on output right away. Total impact = $1 x multiplier.</li><li><b>$1 of tax cut:</b> households spend only the MPC share (say 80 cents) and save the rest. Total impact = $0.80 x multiplier.</li></ul><p>With MPC = 0.8: purchases give $5 of AD per dollar, and the tax cut gives $4. The tax cut always provides <b>less</b> stimulus, because part of it leaks into savings before the chain reaction even starts.</p>"
  },
  {
    id: "c11-19", ch: 11, topic: "Disposable income", type: "num",
    prompt: "A household has personal income of $62,000 and pays $9,500 in personal taxes. What is its disposable income?",
    instructions: "Enter your response in dollars as a whole number.",
    prefix: "$",
    answer: 53500, tolerance: 0.01,
    explanation: "<span class=\"formula\">Disposable income = personal income - personal taxes = 62,000 - 9,500 = $53,500</span>Disposable income is after-tax income, the amount consumers can spend or save.",
    breakdown: "<p>Disposable income = what's left to <b>spend or save</b> after the government takes its share.</p><ol><li>Start with personal income: $62,000.</li><li>Subtract personal taxes: $9,500.</li><li>62,000 - 9,500 = <b>$53,500</b>.</li></ol><p>This matters for fiscal policy: tax cuts and transfers work by changing disposable income, and consumers spend based on disposable income, not their pre-tax income.</p>"
  },
  {
    id: "c11-20", ch: 11, topic: "Value of taxes collected", type: "num",
    prompt: "National income is $3,000 billion and the average tax rate is 20 percent. What is the value of taxes collected?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 600, tolerance: 0.01,
    explanation: "<span class=\"formula\">Taxes collected = tax rate x income = 0.20 x 3,000 = $600 billion</span>",
    breakdown: "<p>The average tax rate is the share of income that goes to taxes.</p><ol><li>Convert the percent to a decimal: 20% = 0.20.</li><li>Multiply by income: 0.20 x 3,000 = <b>$600 billion</b>.</li></ol><p>You can also flip it: average tax rate = taxes / income, and 600 / 3,000 = 20%. This same formula drives the automatic stabilizers in Chapter 12: when income falls, tax revenue falls automatically.</p>"
  },
  {
    id: "c11-21", ch: 11, topic: "Desired fiscal stimulus", type: "num",
    prompt: "The AD shortfall is $200 billion and the MPC is 0.60. How large a tax cut is needed to close the AD shortfall?",
    instructions: "Enter your response in billions of dollars rounded to two decimal places.",
    prefix: "$", suffix: "billion",
    answer: 133.33, tolerance: 0.01,
    explanation: "<span class=\"formula\">Multiplier = 1 / (1 - 0.60) = 2.5<br>Desired stimulus = 200 / 2.5 = $80 billion<br>Tax cut = 80 / 0.60 = $133.33 billion</span>",
    breakdown: "<p>Same three-step recipe as before. The numbers just don't divide evenly.</p><ol><li><b>Multiplier:</b> 1 / (1 - 0.60) = 1 / 0.40 = 2.5.</li><li><b>Desired stimulus:</b> 200 / 2.5 = $80 billion.</li><li><b>Tax cut:</b> 80 / 0.60 = 133.333..., which rounds to <b>$133.33 billion</b>.</li></ol><p>Check: 0.60 x 133.33 is about 80 of first-round spending, and 80 x 2.5 = 200.</p><p>Notice that a low MPC hurts twice: the multiplier is smaller, <i>and</i> more of the tax cut is saved.</p>"
  },
  {
    id: "c11-22", ch: 11, topic: "Fiscal restraint", type: "mc",
    prompt: "Which of the following is an example of fiscal restraint?",
    options: [
      "Raising income tax rates",
      "Increasing unemployment benefits",
      "Increasing defense spending",
      "Sending tax rebate checks to households"
    ],
    answer: 0,
    explanation: "Fiscal restraint means tax hikes or spending cuts intended to shift AD left. The other choices all increase AD, which is fiscal stimulus.",
    breakdown: "<p>Ask: <b>does this push AD down or up?</b></p><ul><li><b>Raising income tax rates:</b> households have less to spend, so AD falls. That's <b>restraint</b>.</li><li>Increasing unemployment benefits: more income to spend, so AD rises (stimulus).</li><li>Increasing defense spending: more G, so AD rises (stimulus).</li><li>Tax rebate checks: more disposable income, so AD rises (stimulus).</li></ul><p>Restraint is the toolkit for an <b>inflationary</b> gap: raise taxes, cut G, or cut transfers.</p>"
  },
  {
    id: "c11-23", ch: 11, topic: "AD excess", type: "mc",
    prompt: "The AD excess is",
    options: [
      "the amount by which aggregate demand must be reduced to achieve full-employment equilibrium after allowing for price-level changes.",
      "the amount by which equilibrium GDP exceeds full-employment GDP.",
      "the amount by which government spending exceeds tax revenue.",
      "always smaller than the inflationary GDP gap."
    ],
    answer: 0,
    explanation: "The AD excess allows for price-level changes, so it is larger than the inflationary GDP gap. The gap itself is the second choice, and the third choice describes a budget deficit.",
    breakdown: "<p>The AD excess is the mirror image of the AD shortfall.</p><ul><li><b>Inflationary GDP gap:</b> how far output is <i>above</i> full employment.</li><li><b>AD excess:</b> how far the AD curve must shift <i>left</i> to get back there, after allowing for price changes.</li></ul><p>Since AS slopes up, a leftward shift lowers both prices and output, so AD has to shift by <b>more</b> than the gap. That's why \"always smaller than the gap\" is backwards.</p><p>The other choices: \"equilibrium GDP exceeds full-employment GDP\" is the gap itself, and \"spending exceeds revenue\" is a budget deficit.</p>"
  },
  {
    id: "c11-24", ch: 11, topic: "Desired fiscal restraint", type: "num",
    prompt: "The economy has an AD excess of $300 billion and the MPC is 0.75. How much should government spending be cut to eliminate the AD excess?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 75, tolerance: 0.01,
    explanation: "<span class=\"formula\">Multiplier = 1 / (1 - 0.75) = 4<br>Desired restraint = AD excess / multiplier = 300 / 4 = $75 billion</span>Budget cuts should equal the desired fiscal restraint.",
    breakdown: "<p>Restraint uses the same recipe as stimulus, just in the other direction.</p><ol><li><b>Multiplier:</b> 1 / (1 - 0.75) = 1 / 0.25 = 4.</li><li><b>Desired restraint:</b> AD excess / multiplier = 300 / 4 = $75 billion.</li><li>A cut in G removes spending dollar for dollar, so cut G by <b>$75 billion</b>.</li></ol><p>Check: $75B less in purchases means less income for workers and firms, who then spend less, and so on. 75 x 4 = $300B less AD.</p>"
  },
  {
    id: "c11-25", ch: 11, topic: "Tax hikes", type: "num",
    prompt: "The economy has an AD excess of $300 billion and the MPC is 0.75. How large a tax increase is needed to eliminate the AD excess?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 100, tolerance: 0.01,
    explanation: "<span class=\"formula\">Desired restraint = 300 / 4 = $75 billion<br>Tax hike = desired restraint / MPC = 75 / 0.75 = $100 billion</span>Consumers absorb part of a tax hike by saving less, so taxes must rise by more than $1 for each $1 of restraint.",
    breakdown: "<p>A tax hike only reduces spending by the MPC share, because households absorb part of it by <b>saving less</b>.</p><ol><li>Multiplier = 1 / 0.25 = 4.</li><li>Desired restraint = 300 / 4 = $75 billion of first-round spending cut.</li><li>Households cut spending by 0.75 x (tax hike) = 75.</li><li>Tax hike = 75 / 0.75 = <b>$100 billion</b>.</li></ol><p>Check: raise taxes $100B, consumers spend $75B less and save $25B less, and $75B x 4 = $300B.</p>"
  },
  {
    id: "c11-26", ch: 11, topic: "Budget cuts", type: "num",
    prompt: "The government cuts its purchases by $20 billion. If the MPC is 0.75, by how much will aggregate demand eventually decrease?",
    instructions: "Enter the decrease as a positive number, in billions of dollars.",
    prefix: "$", suffix: "billion",
    answer: 80, tolerance: 0.01,
    explanation: "<span class=\"formula\">Multiplier = 1 / (1 - 0.75) = 4<br>Change in AD = 20 x 4 = $80 billion decrease</span>Budget cuts also trigger rounds of reduced consumer spending.",
    breakdown: "<p>Budget cuts start a chain reaction too, just downward.</p><ol><li>Government buys $20 billion less, so firms and workers earn $20 billion less.</li><li>They cut their own spending, which cuts someone else's income, and so on.</li><li>Multiplier = 1 / (1 - 0.75) = 4.</li><li>Total drop = 20 x 4 = <b>$80 billion</b>.</li></ol><p>Since it's a change in G (not taxes), there's no MPC step first. The whole $20 billion is the first round.</p>"
  },
  {
    id: "c11-27", ch: 11, topic: "Reduced transfers", type: "mc",
    prompt: "Reducing transfer payments is seldom used as a tool of fiscal restraint because",
    options: [
      "transfer recipients include the aged, poor, unemployed, and disabled.",
      "transfer payments have no effect on disposable income.",
      "a cut in transfers increases aggregate demand.",
      "transfer payments are controlled by the Federal Reserve."
    ],
    answer: 0,
    explanation: "A cut in transfers works like a tax hike, but it falls on vulnerable groups, which makes it politically unattractive.",
    breakdown: "<p>Economically, a cut in transfers works just like a tax hike: disposable income falls, so spending falls. So why is it rarely used?</p><ul><li>Transfers go to the <b>aged, poor, unemployed, and disabled</b>.</li><li>Cutting their benefits to cool the economy is politically very unpopular, and it hits the people least able to absorb it.</li></ul><p>The wrong choices are economic mistakes: transfers <i>do</i> affect disposable income, cutting them <i>decreases</i> AD, and Congress (not the Fed) controls them.</p>"
  },
  {
    id: "c11-28", ch: 11, topic: "Balanced budget multiplier", type: "num",
    prompt: "Government purchases and taxes both increase by $50 billion. If the MPC is 0.80, by how much will aggregate demand eventually change?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 50, tolerance: 0.01,
    explanation: "<span class=\"formula\">Spending effect = 50 x 5 = +$250 billion<br>Tax effect = 0.80 x 50 x 5 = -$200 billion<br>Net change = +$50 billion</span>The balanced budget multiplier is 1: AD rises by exactly the amount of the balanced increase.",
    breakdown: "<p>Treat the spending and the tax as two separate effects, then add them.</p><ol><li>Multiplier = 1 / (1 - 0.80) = 5.</li><li><b>Spending effect:</b> G rises $50B, which goes fully into AD: 50 x 5 = +$250B.</li><li><b>Tax effect:</b> taxes rise $50B, so consumers cut spending by 0.80 x 50 = $40B in round one: 40 x 5 = -$200B.</li><li><b>Net:</b> 250 - 200 = <b>+$50B</b>.</li></ol><p>Shortcut: the balanced budget multiplier is 1, so AD changes by exactly the size of the balanced change.</p>"
  },
  {
    id: "c11-29", ch: 11, topic: "Balanced budget multiplier", type: "mc",
    prompt: "The balanced budget multiplier is equal to",
    options: [
      "1",
      "0",
      "1 / (1 - MPC)",
      "MPC / (1 - MPC)"
    ],
    answer: 0,
    explanation: "When G and T rise by the same amount, the spending multiplier and the smaller tax multiplier nearly cancel, leaving a net multiplier of 1.",
    breakdown: "<p>Why does it come out to exactly 1? Use any MPC, for example 0.80:</p><ul><li>Spending multiplier = 1 / (1 - MPC) = 5.</li><li>Tax multiplier = MPC / (1 - MPC) = 4 (smaller, because part of the tax change comes out of saving).</li><li>Raise G and T by the same amount: 5 - 4 = <b>1</b>.</li></ul><p>Try MPC = 0.75: 4 - 3 = 1. Always 1. So a balanced budget increase is <b>not</b> neutral: it still raises AD, by exactly the amount of the increase.</p><p>The choice 1 / (1 - MPC) is the regular spending multiplier, and MPC / (1 - MPC) is the tax multiplier.</p>"
  },
  {
    id: "c11-30", ch: 11, topic: "Crowding out", type: "mc",
    prompt: "Crowding out refers to",
    options: [
      "a reduction in private-sector borrowing and spending caused by increased government borrowing.",
      "an increase in private-sector borrowing caused by decreased government borrowing.",
      "the tendency of tax cuts to be saved instead of spent.",
      "the delay between recognizing a problem and enacting policy."
    ],
    answer: 0,
    explanation: "When the government borrows more, less money is left for private borrowers, so private investment and spending fall. The second choice describes crowding in.",
    breakdown: "<p>Think of loanable funds as a fixed pie.</p><ol><li>The government runs a deficit and borrows to cover it.</li><li>It takes a bigger slice of the available savings.</li><li>Less is left for businesses and households, and interest rates rise.</li><li>Private investment and consumer borrowing fall: they are <b>crowded out</b>.</li></ol><p>The result: some of the fiscal stimulus is offset by lost private spending. The opposite (less government borrowing freeing up funds) is <b>crowding in</b>.</p>"
  },
  {
    id: "c11-31", ch: 11, topic: "Fiscal policy obstacles", type: "mc",
    prompt: "Which of the following can cause fiscal policy to be less effective than the simple guidelines suggest?",
    options: [
      "Time lags and pork-barrel politics that change the timing and content of policy",
      "An upward-sloping aggregate demand curve",
      "A multiplier that is always equal to zero",
      "The Federal Reserve's control over tax rates"
    ],
    answer: 0,
    explanation: "It takes time to recognize a problem and pass a law, and the economy may change in the meantime. Politics can also reshape what gets cut or funded and when.",
    breakdown: "<p>The textbook formulas assume policy happens instantly and exactly as designed. Real life adds friction:</p><ul><li><b>Time lags:</b> it takes time to notice a problem, pass a bill, and get money spent. By then, the economy may have changed.</li><li><b>Pork-barrel politics:</b> lawmakers steer spending toward their own districts, which changes what gets funded and when.</li></ul><p>The wrong choices contain errors: AD slopes <i>downward</i>, the multiplier is greater than 1, and Congress, not the Fed, sets tax rates.</p>"
  },
  {
    id: "c11-32", ch: 11, topic: "The concern for content", type: "mc",
    prompt: "Joan Robinson's \"second crisis of economic theory\" refers to",
    options: [
      "focusing on stabilization goals while neglecting the content (mix) of GDP.",
      "the inability of fiscal policy to fight inflation.",
      "the failure of the 16th Amendment to raise enough revenue.",
      "the growth of the national debt after World War II."
    ],
    answer: 0,
    explanation: "Fiscal guidelines say how much to spend or tax, not on what or on whom. Robinson argued that ignoring the mix of output is a major failing.",
    breakdown: "<p>The first \"crisis\" was the Great Depression: economists didn't know how to fix unemployment. Keynes answered it with tools that change <b>how much</b> total spending happens.</p><p>Joan Robinson's <b>second crisis</b>: those tools say nothing about <b>what</b> we produce or <b>who</b> benefits. $100 billion on weapons and $100 billion on schools close the same gap but build very different economies.</p><p>So the critique is about the <b>content (mix) of GDP</b>, not its size.</p>"
  },

  /* ------------------------------ CHAPTER 12 ------------------------------ */
  {
    id: "c12-01", ch: 12, topic: "Budget deficit", type: "num",
    prompt: "Federal outlays are $4,400 billion and federal revenues are $3,600 billion. What is the budget deficit?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 800, tolerance: 0.01,
    explanation: "<span class=\"formula\">Budget deficit = government spending - government revenue = 4,400 - 3,600 = $800 billion</span>",
    breakdown: "<p>A deficit is a <b>one-year</b> shortfall.</p><ol><li>Outlays (what the government spends): $4,400 billion.</li><li>Revenues (what it collects): $3,600 billion.</li><li>Deficit = 4,400 - 3,600 = <b>$800 billion</b>.</li></ol><p>The Treasury borrows that $800 billion by selling bonds, which adds $800 billion to the national debt. Deficit = a <i>flow</i> each year; debt = the <i>stock</i> built up over time.</p>"
  },
  {
    id: "c12-02", ch: 12, topic: "Budget surplus", type: "tf",
    prompt: "A budget deficit occurs when government revenues exceed government expenditures.",
    answer: false,
    explanation: "False. That describes a budget surplus. A deficit occurs when spending exceeds revenue.",
    breakdown: "<p>Just remember which side is bigger:</p><ul><li><b>Spending &gt; revenue</b> = deficit (the government must borrow).</li><li><b>Revenue &gt; spending</b> = surplus (extra money left over).</li><li>Equal = balanced budget.</li></ul><p>The statement describes revenue exceeding spending, which is a <b>surplus</b>, so it's false.</p>"
  },
  {
    id: "c12-03", ch: 12, topic: "Federal fiscal year", type: "mc",
    prompt: "The federal government's fiscal year begins on",
    options: [
      "October 1.",
      "January 1.",
      "April 15.",
      "July 1."
    ],
    answer: 0,
    explanation: "The federal fiscal year runs from October 1 to September 30. FY2027, for example, began October 1, 2026.",
    breakdown: "<p>The federal fiscal year doesn't match the calendar year.</p><ul><li>It runs <b>October 1 to September 30</b>.</li><li>It is named for the calendar year in which it <b>ends</b>. FY2027 runs Oct 1, 2026 to Sep 30, 2027.</li></ul><p>April 15 is the tax filing deadline, and July 1 is the fiscal year start for many states, which is why those choices are tempting.</p>"
  },
  {
    id: "c12-04", ch: 12, topic: "Keynesian view", type: "mc",
    prompt: "From a Keynesian perspective, the goal of macro policy is to",
    options: [
      "balance the economy, not the budget.",
      "balance the budget every year.",
      "eliminate the national debt.",
      "keep tax rates constant."
    ],
    answer: 0,
    explanation: "Keynesians see deficits and surpluses as a routine part of countercyclical policy. Stability of the economy comes first.",
    breakdown: "<p>Keynesians treat the budget as a <b>tool</b>, not a goal.</p><ul><li><b>Recession:</b> cut taxes and raise spending, even if that means a deficit.</li><li><b>Inflation:</b> raise taxes and cut spending, which may create a surplus.</li></ul><p>Forcing the budget to balance every year would mean cutting spending in a recession, which makes it worse. So the slogan is: <b>balance the economy, not the budget</b>.</p>"
  },
  {
    id: "c12-05", ch: 12, topic: "Discretionary vs. automatic spending", type: "mc",
    prompt: "Approximately what share of the federal budget is considered \"uncontrollable\" because it results from decisions made in prior years?",
    options: [
      "80 percent",
      "20 percent",
      "50 percent",
      "100 percent"
    ],
    answer: 0,
    explanation: "About 80% of the budget is set by past commitments, which leaves only about 20% for discretionary fiscal spending.",
    breakdown: "<p>Most of the budget is already spoken for before Congress votes on anything new.</p><ul><li><b>About 80% is \"uncontrollable\":</b> entitlements like Social Security and Medicare, interest on the debt, and contracts signed in earlier years.</li><li><b>About 20% is discretionary:</b> what Congress can actually change in a given year.</li></ul><p>This is why fiscal policy is harder than it looks: lawmakers have only a small slice to work with.</p>"
  },
  {
    id: "c12-06", ch: 12, topic: "Automatic stabilizers", type: "mc",
    prompt: "Which of the following is an automatic stabilizer?",
    options: [
      "Unemployment compensation",
      "A new highway bill passed by Congress",
      "An increase in defense spending",
      "A one-time tax rebate approved by Congress"
    ],
    answer: 0,
    explanation: "Unemployment benefits rise automatically in recessions and fall in expansions without new legislation. The other choices require a deliberate decision by Congress.",
    breakdown: "<p>The test: <b>does it kick in without anyone voting?</b></p><ul><li><b>Unemployment compensation:</b> when layoffs rise, more people automatically qualify, and spending rises with no new law. That's automatic.</li><li>A highway bill, a defense increase, or a tax rebate: each needs Congress to act. That's <b>discretionary</b> policy.</li></ul><p>The other big automatic stabilizer is the <b>income tax</b>: when incomes fall, tax payments fall on their own.</p>"
  },
  {
    id: "c12-07", ch: 12, topic: "Automatic stabilizers", type: "tf",
    prompt: "During a recession, automatic stabilizers tend to increase the federal budget deficit.",
    answer: true,
    explanation: "True. In a recession, tax receipts fall and transfer payments like unemployment benefits rise, so the deficit grows even with no change in policy.",
    breakdown: "<p>In a recession, two things happen with no change in policy:</p><ol><li><b>Revenue falls:</b> incomes and profits drop, so income tax collections drop.</li><li><b>Spending rises:</b> more people collect unemployment and other benefits.</li></ol><p>Less coming in plus more going out means a <b>bigger deficit</b>. That's by design: the stabilizers prop up disposable income and soften the downturn. This automatic part is the <b>cyclical</b> deficit.</p>"
  },
  {
    id: "c12-08", ch: 12, topic: "Automatic stabilizers", type: "num",
    prompt: "The average tax rate is 20 percent. If national income falls by $200 billion during a recession, by how much will federal tax revenue fall?",
    instructions: "Enter the decrease as a positive number, in billions of dollars.",
    prefix: "$", suffix: "billion",
    answer: 40, tolerance: 0.01,
    explanation: "<span class=\"formula\">Change in taxes = tax rate x change in income = 0.20 x 200 = $40 billion</span>This automatic drop in taxes cushions disposable income, which is why income taxes are an automatic stabilizer.",
    breakdown: "<p>Taxes move in proportion to income.</p><ol><li>Tax rate = 20% = 0.20.</li><li>Change in income = -$200 billion.</li><li>Change in taxes = 0.20 x 200 = <b>$40 billion</b> less revenue.</li></ol><p>Why it matters: households lose $200B of income but $40B less in taxes, so their disposable income only falls by $160B. That cushion is what makes the income tax an <b>automatic stabilizer</b>.</p>"
  },
  {
    id: "c12-09", ch: 12, topic: "Cyclical deficit", type: "mc",
    prompt: "The cyclical deficit is",
    options: [
      "the portion of the budget balance caused by short-run changes in economic conditions.",
      "federal revenue at full employment minus expenditure at full employment.",
      "the total accumulated debt of the federal government.",
      "the portion of the deficit caused by new discretionary policy."
    ],
    answer: 0,
    explanation: "The cyclical deficit widens when GDP growth slows and shrinks when growth speeds up. The second choice is the structural deficit.",
    breakdown: "<p>Split the deficit into two parts:</p><ul><li><b>Cyclical deficit:</b> caused by the economy's ups and downs. In a slowdown, taxes fall and benefits rise automatically. It shrinks when the economy recovers.</li><li><b>Structural deficit:</b> the deficit that would exist <i>even at full employment</i>. It reflects deliberate policy choices.</li></ul><p>The second choice (revenue minus spending at full employment) defines the <b>structural</b> balance. The third is the national debt.</p>"
  },
  {
    id: "c12-10", ch: 12, topic: "Structural deficit", type: "num",
    prompt: "The total budget deficit is $500 billion, of which $150 billion is cyclical. What is the structural deficit?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 350, tolerance: 0.01,
    explanation: "<span class=\"formula\">Total deficit = cyclical deficit + structural deficit<br>Structural deficit = 500 - 150 = $350 billion</span>",
    breakdown: "<p>The two pieces add up to the whole:</p><p><span class=\"formula\">Total deficit = cyclical + structural</span></p><ol><li>Total = $500 billion.</li><li>Cyclical (caused by the business cycle) = $150 billion.</li><li>Structural = 500 - 150 = <b>$350 billion</b>.</li></ol><p>Meaning: even if the economy were at full employment, the government would still run a $350B deficit because of its policy choices.</p>"
  },
  {
    id: "c12-11", ch: 12, topic: "Structural deficit", type: "mc",
    prompt: "Fiscal stimulus is measured by",
    options: [
      "an increase in the structural deficit.",
      "an increase in the cyclical deficit.",
      "a decrease in the structural deficit.",
      "an increase in the national debt ceiling."
    ],
    answer: 0,
    explanation: "The structural deficit isolates deliberate policy. Stimulus raises it (or shrinks a structural surplus); restraint lowers it.",
    breakdown: "<p>To tell whether lawmakers are actually stimulating the economy, you have to filter out the business cycle.</p><ul><li>The <b>cyclical</b> deficit grows in any recession, even if no one does anything. It's not a policy choice.</li><li>The <b>structural</b> deficit only changes when policy changes, like a tax cut or a new spending program.</li></ul><p>So <b>fiscal stimulus = a bigger structural deficit</b>, and <b>fiscal restraint = a smaller one</b>.</p>"
  },
  {
    id: "c12-12", ch: 12, topic: "Crowding out", type: "mc",
    prompt: "The risk of crowding out is greatest when the economy is",
    options: [
      "close to full employment.",
      "in a deep recession.",
      "running a budget surplus.",
      "financing deficits with external debt."
    ],
    answer: 0,
    explanation: "Near full employment, resources and loanable funds are already in use, so more government borrowing takes them away from the private sector.",
    breakdown: "<p>Crowding out happens when government borrowing <b>takes</b> resources the private sector would have used.</p><ul><li><b>Near full employment:</b> savings and workers are already in use. More government borrowing pushes up interest rates and squeezes out private investment. High risk.</li><li><b>Deep recession:</b> lots of idle savings and workers. The government can borrow without much competition. Low risk.</li></ul><p>A surplus means the government isn't borrowing at all, so there's nothing to crowd out.</p>"
  },
  {
    id: "c12-13", ch: 12, topic: "Crowding out", type: "mc",
    prompt: "In the process of crowding out, rising interest rates are",
    options: [
      "both a symptom and a cause of crowding out.",
      "a symptom of crowding out only.",
      "a cause of crowding out only.",
      "unrelated to crowding out."
    ],
    answer: 0,
    explanation: "Increased government borrowing pushes interest rates up (symptom), and higher rates discourage private borrowing and spending (cause).",
    breakdown: "<p>Interest rates play two roles in the same chain:</p><ol><li>The government borrows more, so demand for loanable funds rises.</li><li>Interest rates go up. This is a <b>symptom</b> you can observe, a sign that crowding out is happening.</li><li>Higher rates make borrowing more expensive, so businesses invest less and households borrow less. Here the rates are a <b>cause</b>, the mechanism that pushes private spending out.</li></ol><p>So the answer is both.</p>"
  },
  {
    id: "c12-14", ch: 12, topic: "Crowding in", type: "mc",
    prompt: "Crowding in is",
    options: [
      "an increase in private-sector borrowing and spending caused by decreased government borrowing.",
      "a reduction in private-sector borrowing caused by increased government borrowing.",
      "an increase in government spending financed by new taxes.",
      "the purchase of Treasury bonds by foreign investors."
    ],
    answer: 0,
    explanation: "Crowding in is the mirror image of crowding out: less government borrowing frees up funds and lowers interest rates for the private sector.",
    breakdown: "<p>Run crowding out in reverse:</p><ol><li>The government borrows <b>less</b> (or pays debt down).</li><li>More savings are left for the private sector, and interest rates fall.</li><li>Businesses and households borrow and spend <b>more</b>.</li></ol><p>That boost to private spending is <b>crowding in</b>. The second choice is crowding <i>out</i>.</p>"
  },
  {
    id: "c12-15", ch: 12, topic: "Crowding in", type: "mc",
    prompt: "Which use of a federal budget surplus is most likely to cause crowding in?",
    options: [
      "Paying off old debt",
      "Spending it on goods and services",
      "Increasing income transfers",
      "Cutting taxes"
    ],
    answer: 0,
    explanation: "Paying off debt gives bondholders money to spend and takes pressure off interest rates. The other three options use up the surplus by changing outlays or receipts.",
    breakdown: "<p>Crowding in needs <b>less government borrowing</b> and <b>more funds for the private sector</b>. Check each use of the surplus:</p><ul><li><b>Paying off old debt:</b> bondholders get cash back to lend or invest, and the government stops competing for funds. That's crowding in.</li><li>Spending it on goods and services: the government uses the resources itself.</li><li>Increasing transfers or cutting taxes: this just uses up the surplus as fiscal stimulus. It doesn't free up loanable funds the same way.</li></ul>"
  },
  {
    id: "c12-16", ch: 12, topic: "National debt", type: "mc",
    prompt: "The national debt is",
    options: [
      "the accumulated debt of the federal government, equal to all outstanding Treasury bonds.",
      "the amount by which spending exceeds revenue in a single year.",
      "the interest paid each year on federal borrowing.",
      "the total debt of all U.S. households and businesses."
    ],
    answer: 0,
    explanation: "Deficits add to the national debt each year; surpluses can pare it down. The second choice is the annual deficit, and the third is debt service.",
    breakdown: "<p>Separate the stock from the flow:</p><ul><li><b>Deficit (flow):</b> the shortfall in <i>one</i> year.</li><li><b>National debt (stock):</b> all past deficits minus past surpluses. It equals all Treasury bonds still outstanding.</li><li><b>Debt service:</b> the yearly interest paid on that debt.</li></ul><p>Analogy: your deficit is how much more you spent than you earned this month; your debt is your total credit card balance.</p><p>Private household and business debt is not part of the national debt.</p>"
  },
  {
    id: "c12-17", ch: 12, topic: "History of the debt", type: "mc",
    prompt: "The United States was completely free of national debt in",
    options: [
      "1835.",
      "1783.",
      "1865.",
      "1946."
    ],
    answer: 0,
    explanation: "By 1835 the U.S. had paid off all its debt. The Mexican-American War (1846-48) then quadrupled it.",
    breakdown: "<p>A short history:</p><ul><li><b>1783:</b> the U.S. comes out of the Revolutionary War <i>with</i> debt.</li><li><b>1835:</b> under President Jackson, the debt is fully paid off, the only time in U.S. history.</li><li><b>1846-48:</b> the Mexican-American War brings debt back.</li><li>1865 and 1946 are the ends of the Civil War and World War II, both times of <i>huge</i> debt.</li></ul><p>Pattern to remember: wars and recessions drive the debt up.</p>"
  },
  {
    id: "c12-18", ch: 12, topic: "History of the debt", type: "mc",
    prompt: "The largest increase in the U.S. national debt relative to GDP occurred during",
    options: [
      "World War II.",
      "World War I.",
      "the Civil War.",
      "the 1980s."
    ],
    answer: 0,
    explanation: "World War II raised the debt from about 45% of GDP to over 125% of GDP by 1946.",
    breakdown: "<p>The question asks about debt <b>relative to GDP</b>, not dollars.</p><ul><li>World War II: debt went from about <b>45% of GDP to over 125%</b> by 1946, the biggest jump in U.S. history.</li><li>World War I and the Civil War raised the debt sharply, but much less relative to the economy.</li><li>The 1980s added a lot of debt in dollars, but nowhere near WWII as a share of GDP.</li></ul><p>Using debt-to-GDP compares the debt to the economy's ability to carry it.</p>"
  },
  {
    id: "c12-19", ch: 12, topic: "Liabilities = assets", type: "tf",
    prompt: "The national debt is a liability for the U.S. Treasury and an equal asset for the people and institutions that hold Treasury bonds.",
    answer: true,
    explanation: "True. Every dollar of debt the Treasury owes is a dollar of wealth held by bondholders.",
    breakdown: "<p>A Treasury bond is a loan, so it has two sides:</p><ul><li><b>Treasury (borrower):</b> it owes the money, so the bond is a <b>liability</b>.</li><li><b>Bondholder (lender):</b> it is owed the money, so the bond is an <b>asset</b>.</li></ul><p>Same dollars, two sides of the ledger. This is why the text says the debt isn't simply a burden: for internal debt, much of what \"we\" owe, \"we\" also own.</p>"
  },
  {
    id: "c12-20", ch: 12, topic: "Internal vs. external debt", type: "mc",
    prompt: "Internal debt refers to U.S. Treasury bonds held by",
    options: [
      "U.S. households, institutions, and governments, about two-thirds of the total.",
      "foreign households and institutions, about two-thirds of the total.",
      "U.S. households and institutions, about one-third of the total.",
      "foreign governments only."
    ],
    answer: 0,
    explanation: "About two-thirds of the debt is internal (held in the U.S.) and about one-third is external (held by foreigners).",
    breakdown: "<p>Split by <b>who holds</b> the bonds:</p><ul><li><b>Internal debt:</b> held by people, institutions, and governments <b>inside the U.S.</b>, about <b>two-thirds</b>.</li><li><b>External debt:</b> held by <b>foreigners</b>, about <b>one-third</b>.</li></ul><p>The wrong choices either flip the ownership or flip the fractions. \"Internal\" means inside the country, and inside is the bigger share.</p>"
  },
  {
    id: "c12-21", ch: 12, topic: "Ownership of the debt", type: "mc",
    prompt: "The largest single owner of U.S. national debt is",
    options: [
      "the Social Security Trust Fund.",
      "China.",
      "state and local governments.",
      "U.S. commercial banks."
    ],
    answer: 0,
    explanation: "Federal agencies hold over 40% of Treasury bonds, and the Social Security Trust Fund is the largest owner.",
    breakdown: "<p>Many people guess China, but most of the debt is held <b>inside the U.S.</b>, and much of it by the federal government's own agencies.</p><ul><li>Federal agencies hold over 40% of Treasury bonds.</li><li>The <b>Social Security Trust Fund</b> is the single biggest holder. Surplus payroll taxes are invested in Treasury bonds.</li><li>China is a large foreign holder, but much smaller than Social Security.</li></ul>"
  },
  {
    id: "c12-22", ch: 12, topic: "Debt service", type: "num",
    prompt: "The national debt is $20,000 billion and the average interest rate on it is 3 percent. What is the annual debt service?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 600, tolerance: 0.01,
    explanation: "<span class=\"formula\">Debt service = debt x interest rate = 20,000 x 0.03 = $600 billion</span>Debt service is the interest that must be paid each year on outstanding debt.",
    breakdown: "<p>Debt service is just interest: debt times the interest rate.</p><ol><li>Debt = $20,000 billion.</li><li>Interest rate = 3% = 0.03.</li><li>20,000 x 0.03 = <b>$600 billion per year</b>.</li></ol><p>Debt service is a fixed bill that crowds out other parts of the budget. And because it's interest only, paying it doesn't shrink the debt itself.</p>"
  },
  {
    id: "c12-23", ch: 12, topic: "Debt service", type: "mc",
    prompt: "Most debt service payments are best described as",
    options: [
      "a redistribution of income from taxpayers to bondholders with little opportunity cost.",
      "a major use of the economy's real resources.",
      "a transfer of wealth to future generations only.",
      "a form of fiscal restraint."
    ],
    answer: 0,
    explanation: "Paying interest uses very few real resources. It mostly moves income from taxpayers to bondholders, though it does limit what else the budget can fund.",
    breakdown: "<p>Ask: <b>does paying interest use up real resources</b> (workers, materials, factories)?</p><ul><li>No. A check moves money from taxpayers to bondholders. Nothing is built or consumed.</li><li>So for the economy as a whole it is mostly a <b>redistribution of income</b>, with little opportunity cost.</li></ul><p>The catch: every dollar of interest is a dollar that can't fund other programs, so it does squeeze the budget. But that is different from using up the economy's real resources.</p>"
  },
  {
    id: "c12-24", ch: 12, topic: "Burden of the debt", type: "mc",
    prompt: "According to the text, the true burden of the national debt is",
    options: [
      "the opportunity cost of the activities financed by the debt.",
      "the interest payments made each year.",
      "the dollar value of outstanding Treasury bonds.",
      "the need to repay all of the debt eventually."
    ],
    answer: 0,
    explanation: "The real cost is what was given up (often private output that was crowded out) when the debt-financed activity took place.",
    breakdown: "<p>Economists think about cost as <b>what you give up</b>.</p><ul><li>When the government builds something with borrowed money, resources go to that project instead of something else, often private investment that was crowded out.</li><li>That forgone output is the real burden, and it happens <b>when the money is spent</b>, not when the bonds are repaid.</li></ul><p>Interest payments and the dollar value of bonds are mostly transfers between people, and the debt is usually rolled over rather than fully repaid.</p>"
  },
  {
    id: "c12-25", ch: 12, topic: "Internal vs. external debt", type: "mc",
    prompt: "Which statement about external debt is correct?",
    options: [
      "It allows more public-sector goods without crowding out private output, but it must eventually be repaid with exports.",
      "It causes more crowding out than internal debt.",
      "It never needs to be repaid.",
      "It is held by U.S. households and institutions."
    ],
    answer: 0,
    explanation: "Foreign lending brings in resources from abroad, so there is no crowding out at first. Repayment requires exporting real goods and services.",
    breakdown: "<p>Borrowing from abroad has a now-versus-later tradeoff.</p><ul><li><b>Now:</b> foreigners send resources in. The government gets more public goods without taking savings away from U.S. businesses, so there is <b>no crowding out</b> at first.</li><li><b>Later:</b> to repay, the U.S. must send real goods and services abroad (<b>exports</b>). Americans give up that output.</li></ul><p>So external debt shifts the burden to the future. The wrong choices reverse this: it causes <i>less</i> crowding out, it must be repaid, and U.S. holders make it internal debt.</p>"
  },
  {
    id: "c12-26", ch: 12, topic: "Deficit ceiling", type: "mc",
    prompt: "A deficit ceiling is",
    options: [
      "an explicit, legislated limit on the size of the annual budget deficit.",
      "an explicit, legislated limit on the amount of outstanding national debt.",
      "the maximum interest rate the Treasury may pay on bonds.",
      "the deficit that would occur at full employment."
    ],
    answer: 0,
    explanation: "A deficit ceiling limits each year's deficit. A limit on total outstanding debt is the debt ceiling.",
    breakdown: "<p>Match the limit to the kind of number:</p><ul><li><b>Deficit ceiling:</b> caps the <b>annual deficit</b> (a flow). Example: Gramm-Rudman-Hollings.</li><li><b>Debt ceiling:</b> caps the <b>total outstanding debt</b> (a stock).</li></ul><p>\"The deficit that would occur at full employment\" is the structural deficit, a measurement, not a limit.</p>"
  },
  {
    id: "c12-27", ch: 12, topic: "Gramm-Rudman-Hollings Act", type: "mc",
    prompt: "The Gramm-Rudman-Hollings Act of 1985 attempted to",
    options: [
      "balance the budget by 1991 through declining deficit ceilings and automatic spending cuts.",
      "eliminate the national debt by 1995.",
      "establish the federal income tax.",
      "require new spending to be offset by tax increases."
    ],
    answer: 0,
    explanation: "It was the first explicit attempt to force a balanced budget, cutting the deficit from over $200 billion in FY1985 to zero by 1991. Offsetting new spending was the 1990 Budget Enforcement Act.",
    breakdown: "<p>Gramm-Rudman-Hollings (1985) was the first law to <b>force</b> a balanced budget:</p><ol><li>It set a deficit ceiling that dropped each year, from over $200B in FY1985 to <b>zero by 1991</b>.</li><li>If Congress missed a target, automatic across-the-board spending cuts (sequestration) would kick in.</li></ol><p>It didn't work: the Supreme Court struck down the automatic mechanism and the targets were missed. The \"offset new spending\" rule came later, in the 1990 Budget Enforcement Act.</p>"
  },
  {
    id: "c12-28", ch: 12, topic: "Gramm-Rudman-Hollings Act", type: "tf",
    prompt: "The Supreme Court upheld the automatic spending-cut mechanism of the Gramm-Rudman-Hollings Act.",
    answer: false,
    explanation: "False. The Supreme Court declared the automatic mechanism unconstitutional, and Congress did not meet the deficit targets.",
    breakdown: "<p>The automatic cuts were supposed to be triggered by the Comptroller General, an official who answers to Congress. The Supreme Court ruled that letting an arm of Congress carry out spending cuts violated the <b>separation of powers</b>, so the mechanism was <b>unconstitutional</b>.</p><p>Without its enforcement tool, Congress missed the deficit targets, and the approach was eventually replaced by the Budget Enforcement Act of 1990.</p>"
  },
  {
    id: "c12-29", ch: 12, topic: "Debt ceiling", type: "mc",
    prompt: "A debt ceiling is",
    options: [
      "an explicit, legislated limit on the amount of outstanding national debt.",
      "an explicit, legislated limit on the size of the annual deficit.",
      "the maximum share of debt that foreigners may hold.",
      "a rule that the budget must balance every year."
    ],
    answer: 0,
    explanation: "Debt ceilings replaced deficit limits and mostly serve as political mechanisms for forging compromises on budget deficits.",
    breakdown: "<p>Debt ceiling = a cap on the <b>total stock</b> of outstanding debt.</p><ul><li>When the debt nears the ceiling, Congress must vote to raise it or the Treasury can't borrow more.</li><li>In practice it has been raised many times. It works mostly as a <b>political pressure point</b> for forcing budget negotiations.</li></ul><p>Don't confuse it with the deficit ceiling (the annual flow), a balanced-budget rule (a different idea), or limits on foreign ownership (none exist).</p>"
  },
  {
    id: "c12-30", ch: 12, topic: "Deficit limits", type: "mc",
    prompt: "The Budget Enforcement Act of 1990",
    options: [
      "required new spending to be offset by tax increases or cuts in other programs.",
      "declared the Gramm-Rudman-Hollings Act unconstitutional.",
      "set the federal fiscal year to begin October 1.",
      "required the budget to be balanced every year."
    ],
    answer: 0,
    explanation: "The BEA tried to reduce the structural deficit with spending limits and a pay-as-you-go rule for new spending.",
    breakdown: "<p>After Gramm-Rudman-Hollings failed, the Budget Enforcement Act (1990) tried a different approach:</p><ul><li><b>Pay-as-you-go (PAYGO):</b> any new spending or tax cut must be offset by a tax increase or a cut somewhere else.</li><li><b>Spending caps</b> on discretionary programs.</li></ul><p>The goal was to stop the <b>structural</b> deficit from growing. It didn't force a balanced budget every year, and it had nothing to do with the Supreme Court ruling or the fiscal year calendar.</p>"
  }
];
