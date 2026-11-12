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
    explanation: "Fiscal policy works through the federal budget: taxes, government purchases, and transfers. Money supply and interest rates belong to monetary policy, run by the Federal Reserve."
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
    explanation: "The three fiscal tools are government purchases, taxes, and income transfers. Changing the money supply is a monetary policy tool."
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
    explanation: "The 16th Amendment (1913) extended the government's taxing power to incomes, which opened the door to a much larger federal government."
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
    explanation: "Before 1913, customs duties on imports plus excise taxes on whiskey and tobacco funded most of the government. Today those sources count for very little."
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
    explanation: "Individual income taxes supply nearly half of federal tax revenue. Social Security taxes are second, and corporate income taxes are third."
  },
  {
    id: "c11-06", ch: 11, topic: "Government revenue", type: "tf",
    prompt: "Corporate income taxes are the second-largest source of federal tax revenue.",
    answer: false,
    explanation: "False. The ranking is individual income taxes first, Social Security taxes second, and corporate income taxes third."
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
    explanation: "Unemployment benefits are an income transfer: no good or service is exchanged. Transfers only add to AD when recipients spend them. Government purchases count in AD right away."
  },
  {
    id: "c11-08", ch: 11, topic: "Multiplier", type: "num",
    prompt: "If the marginal propensity to consume (MPC) is 0.75, what is the value of the multiplier?",
    instructions: "Enter your response as a whole number.",
    answer: 4, tolerance: 0.01,
    explanation: "<span class=\"formula\">Multiplier = 1 / (1 - MPC) = 1 / 0.25 = 4</span>Each $1 of new spending eventually raises total spending by $4."
  },
  {
    id: "c11-09", ch: 11, topic: "Recessionary GDP gap", type: "num",
    prompt: "Equilibrium GDP is $5,600 billion and full-employment GDP is $6,000 billion. What is the size of the recessionary GDP gap?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 400, tolerance: 0.01,
    explanation: "<span class=\"formula\">GDP gap = full-employment GDP - equilibrium GDP = 6,000 - 5,600 = $400 billion</span>A recessionary gap is how far equilibrium GDP falls short of full employment."
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
    explanation: "As AD shifts right, some of the shift goes into higher prices instead of more output. So the AD shortfall is larger than the GDP gap."
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
    explanation: "Only a horizontal AS curve lets output rise with no price-level increase. With an upward-sloping AS curve, part of the AD increase becomes inflation."
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
    explanation: "The AD shortfall is the additional AD needed to reach full employment after allowing for price-level changes. That is the fiscal target."
  },
  {
    id: "c11-13", ch: 11, topic: "Desired fiscal stimulus", type: "num",
    prompt: "The economy has an AD shortfall of $400 billion and the MPC is 0.80. How much should government spending increase to close the AD shortfall?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 80, tolerance: 0.01,
    explanation: "<span class=\"formula\">Multiplier = 1 / (1 - 0.80) = 5<br>Desired stimulus = AD shortfall / multiplier = 400 / 5 = $80 billion</span>Every dollar of new government spending goes straight into AD, so the spending increase equals the desired stimulus."
  },
  {
    id: "c11-14", ch: 11, topic: "Tax cuts", type: "num",
    prompt: "The economy has an AD shortfall of $400 billion and the MPC is 0.80. How large a tax cut is needed to close the AD shortfall?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 100, tolerance: 0.01,
    explanation: "<span class=\"formula\">Desired stimulus = 400 / 5 = $80 billion<br>Tax cut = desired stimulus / MPC = 80 / 0.80 = $100 billion</span>Consumers spend only 80% of a tax cut, so the tax cut must be bigger than the desired stimulus."
  },
  {
    id: "c11-15", ch: 11, topic: "Increased transfers", type: "num",
    prompt: "The economy has an AD shortfall of $400 billion and the MPC is 0.80. By how much should income transfers increase to close the AD shortfall?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 100, tolerance: 0.01,
    explanation: "<span class=\"formula\">Transfer increase = desired stimulus / MPC = 80 / 0.80 = $100 billion</span>Transfers work just like a tax cut: they raise disposable income, and only the MPC share is spent at first."
  },
  {
    id: "c11-16", ch: 11, topic: "Taxes and consumption", type: "num",
    prompt: "Congress cuts taxes by $60 billion. If the MPC is 0.90, how much will consumer spending initially increase?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 54, tolerance: 0.01,
    explanation: "<span class=\"formula\">Initial change in consumption = MPC x tax cut = 0.90 x 60 = $54 billion</span>The other $6 billion is saved, so it is not part of the first round of spending."
  },
  {
    id: "c11-17", ch: 11, topic: "Multiplier", type: "num",
    prompt: "Congress cuts taxes by $60 billion. If the MPC is 0.90, what is the cumulative (total) increase in aggregate demand?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 540, tolerance: 0.01,
    explanation: "<span class=\"formula\">Initial spending = 0.90 x 60 = $54 billion<br>Multiplier = 1 / (1 - 0.90) = 10<br>Total change in AD = 54 x 10 = $540 billion</span>Apply the multiplier to the initial spending, not to the full tax cut."
  },
  {
    id: "c11-18", ch: 11, topic: "Tax cuts", type: "tf",
    prompt: "A dollar of tax cuts provides more fiscal stimulus than a dollar of government purchases.",
    answer: false,
    explanation: "False. A dollar of government purchases enters AD in full, but part of a tax cut is saved. So a tax cut is less stimulative than an equal increase in government purchases."
  },
  {
    id: "c11-19", ch: 11, topic: "Disposable income", type: "num",
    prompt: "A household has personal income of $62,000 and pays $9,500 in personal taxes. What is its disposable income?",
    instructions: "Enter your response in dollars as a whole number.",
    prefix: "$",
    answer: 53500, tolerance: 0.01,
    explanation: "<span class=\"formula\">Disposable income = personal income - personal taxes = 62,000 - 9,500 = $53,500</span>Disposable income is after-tax income, the amount consumers can spend or save."
  },
  {
    id: "c11-20", ch: 11, topic: "Value of taxes collected", type: "num",
    prompt: "National income is $3,000 billion and the average tax rate is 20 percent. What is the value of taxes collected?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 600, tolerance: 0.01,
    explanation: "<span class=\"formula\">Taxes collected = tax rate x income = 0.20 x 3,000 = $600 billion</span>"
  },
  {
    id: "c11-21", ch: 11, topic: "Desired fiscal stimulus", type: "num",
    prompt: "The AD shortfall is $200 billion and the MPC is 0.60. How large a tax cut is needed to close the AD shortfall?",
    instructions: "Enter your response in billions of dollars rounded to two decimal places.",
    prefix: "$", suffix: "billion",
    answer: 133.33, tolerance: 0.01,
    explanation: "<span class=\"formula\">Multiplier = 1 / (1 - 0.60) = 2.5<br>Desired stimulus = 200 / 2.5 = $80 billion<br>Tax cut = 80 / 0.60 = $133.33 billion</span>"
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
    explanation: "Fiscal restraint means tax hikes or spending cuts intended to shift AD left. The other choices all increase AD, which is fiscal stimulus."
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
    explanation: "The AD excess allows for price-level changes, so it is larger than the inflationary GDP gap. The gap itself is the second choice, and the third choice describes a budget deficit."
  },
  {
    id: "c11-24", ch: 11, topic: "Desired fiscal restraint", type: "num",
    prompt: "The economy has an AD excess of $300 billion and the MPC is 0.75. How much should government spending be cut to eliminate the AD excess?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 75, tolerance: 0.01,
    explanation: "<span class=\"formula\">Multiplier = 1 / (1 - 0.75) = 4<br>Desired restraint = AD excess / multiplier = 300 / 4 = $75 billion</span>Budget cuts should equal the desired fiscal restraint."
  },
  {
    id: "c11-25", ch: 11, topic: "Tax hikes", type: "num",
    prompt: "The economy has an AD excess of $300 billion and the MPC is 0.75. How large a tax increase is needed to eliminate the AD excess?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 100, tolerance: 0.01,
    explanation: "<span class=\"formula\">Desired restraint = 300 / 4 = $75 billion<br>Tax hike = desired restraint / MPC = 75 / 0.75 = $100 billion</span>Consumers absorb part of a tax hike by saving less, so taxes must rise by more than $1 for each $1 of restraint."
  },
  {
    id: "c11-26", ch: 11, topic: "Budget cuts", type: "num",
    prompt: "The government cuts its purchases by $20 billion. If the MPC is 0.75, by how much will aggregate demand eventually decrease?",
    instructions: "Enter the decrease as a positive number, in billions of dollars.",
    prefix: "$", suffix: "billion",
    answer: 80, tolerance: 0.01,
    explanation: "<span class=\"formula\">Multiplier = 1 / (1 - 0.75) = 4<br>Change in AD = 20 x 4 = $80 billion decrease</span>Budget cuts also trigger rounds of reduced consumer spending."
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
    explanation: "A cut in transfers works like a tax hike, but it falls on vulnerable groups, which makes it politically unattractive."
  },
  {
    id: "c11-28", ch: 11, topic: "Balanced budget multiplier", type: "num",
    prompt: "Government purchases and taxes both increase by $50 billion. If the MPC is 0.80, by how much will aggregate demand eventually change?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 50, tolerance: 0.01,
    explanation: "<span class=\"formula\">Spending effect = 50 x 5 = +$250 billion<br>Tax effect = 0.80 x 50 x 5 = -$200 billion<br>Net change = +$50 billion</span>The balanced budget multiplier is 1: AD rises by exactly the amount of the balanced increase."
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
    explanation: "When G and T rise by the same amount, the spending multiplier and the smaller tax multiplier nearly cancel, leaving a net multiplier of 1."
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
    explanation: "When the government borrows more, less money is left for private borrowers, so private investment and spending fall. The second choice describes crowding in."
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
    explanation: "It takes time to recognize a problem and pass a law, and the economy may change in the meantime. Politics can also reshape what gets cut or funded and when."
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
    explanation: "Fiscal guidelines say how much to spend or tax, not on what or on whom. Robinson argued that ignoring the mix of output is a major failing."
  },

  /* ------------------------------ CHAPTER 12 ------------------------------ */
  {
    id: "c12-01", ch: 12, topic: "Budget deficit", type: "num",
    prompt: "Federal outlays are $4,400 billion and federal revenues are $3,600 billion. What is the budget deficit?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 800, tolerance: 0.01,
    explanation: "<span class=\"formula\">Budget deficit = government spending - government revenue = 4,400 - 3,600 = $800 billion</span>"
  },
  {
    id: "c12-02", ch: 12, topic: "Budget surplus", type: "tf",
    prompt: "A budget deficit occurs when government revenues exceed government expenditures.",
    answer: false,
    explanation: "False. That describes a budget surplus. A deficit occurs when spending exceeds revenue."
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
    explanation: "The federal fiscal year runs from October 1 to September 30. FY2027, for example, began October 1, 2026."
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
    explanation: "Keynesians see deficits and surpluses as a routine part of countercyclical policy. Stability of the economy comes first."
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
    explanation: "About 80% of the budget is set by past commitments, which leaves only about 20% for discretionary fiscal spending."
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
    explanation: "Unemployment benefits rise automatically in recessions and fall in expansions without new legislation. The other choices require a deliberate decision by Congress."
  },
  {
    id: "c12-07", ch: 12, topic: "Automatic stabilizers", type: "tf",
    prompt: "During a recession, automatic stabilizers tend to increase the federal budget deficit.",
    answer: true,
    explanation: "True. In a recession, tax receipts fall and transfer payments like unemployment benefits rise, so the deficit grows even with no change in policy."
  },
  {
    id: "c12-08", ch: 12, topic: "Automatic stabilizers", type: "num",
    prompt: "The average tax rate is 20 percent. If national income falls by $200 billion during a recession, by how much will federal tax revenue fall?",
    instructions: "Enter the decrease as a positive number, in billions of dollars.",
    prefix: "$", suffix: "billion",
    answer: 40, tolerance: 0.01,
    explanation: "<span class=\"formula\">Change in taxes = tax rate x change in income = 0.20 x 200 = $40 billion</span>This automatic drop in taxes cushions disposable income, which is why income taxes are an automatic stabilizer."
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
    explanation: "The cyclical deficit widens when GDP growth slows and shrinks when growth speeds up. The second choice is the structural deficit."
  },
  {
    id: "c12-10", ch: 12, topic: "Structural deficit", type: "num",
    prompt: "The total budget deficit is $500 billion, of which $150 billion is cyclical. What is the structural deficit?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 350, tolerance: 0.01,
    explanation: "<span class=\"formula\">Total deficit = cyclical deficit + structural deficit<br>Structural deficit = 500 - 150 = $350 billion</span>"
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
    explanation: "The structural deficit isolates deliberate policy. Stimulus raises it (or shrinks a structural surplus); restraint lowers it."
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
    explanation: "Near full employment, resources and loanable funds are already in use, so more government borrowing takes them away from the private sector."
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
    explanation: "Increased government borrowing pushes interest rates up (symptom), and higher rates discourage private borrowing and spending (cause)."
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
    explanation: "Crowding in is the mirror image of crowding out: less government borrowing frees up funds and lowers interest rates for the private sector."
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
    explanation: "Paying off debt gives bondholders money to spend and takes pressure off interest rates. The other three options use up the surplus by changing outlays or receipts."
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
    explanation: "Deficits add to the national debt each year; surpluses can pare it down. The second choice is the annual deficit, and the third is debt service."
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
    explanation: "By 1835 the U.S. had paid off all its debt. The Mexican-American War (1846-48) then quadrupled it."
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
    explanation: "World War II raised the debt from about 45% of GDP to over 125% of GDP by 1946."
  },
  {
    id: "c12-19", ch: 12, topic: "Liabilities = assets", type: "tf",
    prompt: "The national debt is a liability for the U.S. Treasury and an equal asset for the people and institutions that hold Treasury bonds.",
    answer: true,
    explanation: "True. Every dollar of debt the Treasury owes is a dollar of wealth held by bondholders."
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
    explanation: "About two-thirds of the debt is internal (held in the U.S.) and about one-third is external (held by foreigners)."
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
    explanation: "Federal agencies hold over 40% of Treasury bonds, and the Social Security Trust Fund is the largest owner."
  },
  {
    id: "c12-22", ch: 12, topic: "Debt service", type: "num",
    prompt: "The national debt is $20,000 billion and the average interest rate on it is 3 percent. What is the annual debt service?",
    instructions: "Enter your response in billions of dollars as a whole number.",
    prefix: "$", suffix: "billion",
    answer: 600, tolerance: 0.01,
    explanation: "<span class=\"formula\">Debt service = debt x interest rate = 20,000 x 0.03 = $600 billion</span>Debt service is the interest that must be paid each year on outstanding debt."
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
    explanation: "Paying interest uses very few real resources. It mostly moves income from taxpayers to bondholders, though it does limit what else the budget can fund."
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
    explanation: "The real cost is what was given up (often private output that was crowded out) when the debt-financed activity took place."
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
    explanation: "Foreign lending brings in resources from abroad, so there is no crowding out at first. Repayment requires exporting real goods and services."
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
    explanation: "A deficit ceiling limits each year's deficit. A limit on total outstanding debt is the debt ceiling."
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
    explanation: "It was the first explicit attempt to force a balanced budget, cutting the deficit from over $200 billion in FY1985 to zero by 1991. Offsetting new spending was the 1990 Budget Enforcement Act."
  },
  {
    id: "c12-28", ch: 12, topic: "Gramm-Rudman-Hollings Act", type: "tf",
    prompt: "The Supreme Court upheld the automatic spending-cut mechanism of the Gramm-Rudman-Hollings Act.",
    answer: false,
    explanation: "False. The Supreme Court declared the automatic mechanism unconstitutional, and Congress did not meet the deficit targets."
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
    explanation: "Debt ceilings replaced deficit limits and mostly serve as political mechanisms for forging compromises on budget deficits."
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
    explanation: "The BEA tried to reduce the structural deficit with spending limits and a pay-as-you-go rule for new spending."
  }
];
