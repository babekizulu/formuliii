# FORMULiii

## by Lwandle Babekizulu Dlamini

### A Calculator App for Economics, Mathematics, Physics & Accounting

## **LIBRARIES**

## EconomicsFormulae.js

### A library of classes containing methods which perform math operations based on existing economic formulae

## Using GDPExpApproachFormula() Class

### **class GDPExpApproachFormula**

### Description:

- Expenditure Approach of calculating Nominal Gross Domestic Product
- Returns a solution fixed to two decimal places

### Methods:

`new GDPExpApproachFormula().solve()`

### Arguments:

- Consumption
- Investment
- Government Expenditure
- Net Exports

### Example: (I used arbritary numbers just for demonstrative purposes)

```
const solution = new GDPExpApproachFormula().solve(
1000,
2000,
500,
5000
)
```

### Refer to economics.test.js file for correct solution

## Using GDPIncomeApproachFormula() Class

### **class GDPIncomeApproachFormula**

### Description:

- Income Approach of calculating Nominal Gross Domestic Product
- Returns a solution fixed to two decimal places

### Methods:

`new GDPIncomeApproachFormula().solve()`

### Arguments:

- Total National Income
- Sales Taxes
- Depreciation
- Net Foreign Factor Income

### Example: (I used arbritary numbers just for demonstrative purposes)

```
const solution = new GDPIncomeApproachFormula().solve(
10000,
500,
150,
20000
)
```

### Refer to economics.test.js file for correct solution

## Using BalanceOfTradeFormula Class

### **class BalanceOfTradeFormula**

### Description:

- Calculates Balance of Trade
- Returns a solution fixed to two decimal places

### Methods:

`new BalanceOfTradeFormula().solve()`

### Arguments:

- Value of Exports
- Value of Imports

### Example: I used arbritary numbers just for demonstrative purposes

```
const solution = new BalanceOfTradeFormula().solve(
20000,
30000
)
```

### Refer to economics.test.js file for correct solution

## Using CurrentAccountFormula() Class

### **class CurrentAccountFormula**

### Description:

- Calculates Current Account value
- Returns a solution fixed to two decimal places

### Methods:

`new CurrentAccountFormula().solve()`

### Arguments:

- Export of Goods & Services
- Import of Goods & Services
- Net Earnings from Abroad
- Net Transfer Payments

### Example: I used arbritary numbers just for demonstrative purposes

```
const solution = new CurrentAccountFormula().solve(
40000,
10000,
20000,
15000
)
```

### Refer to economics.test.js file for correct solution

## Refer to EconomicsFormulae.js to view all of the available economics classes and methods

## MathematicsFormulae.js

### A library of classes containing methods which perform math operations based on mathematical formulae

## Using AlgebraicFormulae Class

### **class AlgebraicFormulae**

### Description:

- Contains methods which perform math operations based on these Algebraic Formulae:
  - The Pythagorean Equation
  - The Distance Equation
  - The Midpoint Equation
- Returns a solution fixed to three decimal places

### Methods:

### **pythagoreanFormula()**

`new AlgebraicFormulae().pythagoreanFormula()`

### Arguments:

- Horizontal Side Length Value
- Vertical Side Length Value

### Example: (I used arbritary numbers just for demonstrative purposes)

### Return the length of the hypotenuse of the right angle triangle

### with a horizontal length of 4 and a vertical length of 3

```
const solution = new AlgebraicFormulae().pythagoreanFormula(
4,
3
)
```

### **distanceFormula()**

`new AlgebraicFormulae().distanceFormula()`

### Arguments:

- X Coordinate 1
- X Coordinate 2
- Y Coordinate 1
- Y Coordinate 2

### Example: (I used arbritary numbers just for demonstrative purposes)

### Return the distance between the coordinates (3, 2) and (7, 5)

```
const solution = new AlgebraicFormulae().distanceFormula(
3,
7,
2,
5
)
```

### **midPointFormula()**

`new AlgebraicFormulae().midPointFormula()`

### Arguments:

- Endpoint Coordinate X1
- Endpoint Coordinate X2
- Endpoint Coordinate Y1
- Endpoint Coordinate Y2

### Example: (I used arbritary numbers just for demonstrative purposes)

### Return the midpoint of the segment with endpoints (3, 2) and (7, 5)

```
const solution = new AlgebraicFormulae().midPointFormula(
3,
7,
2,
5
)
```

### Refer to mathematics.test.js file in the 'tests' folder for correct solutions to these examples

## Refer to MathematicsFormulae.js to view all of the available mathematics classes and methods

## PhysicsFormulae.js

### A library of classes containing methods which perform math operations based on physics formulae

## Using KinematicsEquations() Class

### **class KinematicsEquations**

### Description:

- Contains methods which perform math operations based on these Kinematic Equations:
  - **The Definition of Acceleration Equations**
    - Average Velocity
    - Initial Velocity
    - Acceleration
    - Time
  - **The Displacement Curve Equations**
    - Displacement
    - Final Position
    - Initial Position
    - Initial Velocity
    - Acceleration
- Returns a solution fixed to three decimal places

### Methods:

### **solveForAverageVelocityDAE()**

`new KinematicsEquations().solveForAverageVelocityDAE()`

### Arguments:

- Initial Velocity
- Acceleration
- Time

### Example: (I used arbritary numbers just for demonstrative purposes)

### Given and Initial Velocity of 2 m/s ,

### an Acceleration of 3 m/s² and

### a Time value of 4 seconds, return Average Velocity

```
const solution = new KinematicsEquations().solveForAverageVelocityDAE(
2,
3,
4
)
```

### Refer to physics.test.js file in the 'tests' folder for the correct solution to this example

## Refer to PhysicsFormulae.js to view all of the available physics classes and methods

## AccountingFormulae.js

### A library of classes containing methods which perform math operations based on physics formulae

### **class IncomeStatementFormulae**

### Description:

- Contains methods which perform math operations based on these Income Statement Formulae:
  - Basic Income
  - Earnings before Income & Taxes
  - Gross Profit
  - Operating Expenses
  - Earnings before Taxes
  - Net Income
- Returns a solution fixed to two decimal places

## Using IncomeStatementFormulae() Class

### Method:

### **basicIncomeFormula**

`new IncomeStatementFormulae().basicIncomeFormula()`

### Arguments:

- Sales
- Expenses

### Example: (I used arbritary numbers just for demonstrative purposes)

### Given sales of value 100 and expenses of value 20

```
const solution = new IncomeStatementFormulae().basicIncomeFormula(
100,
20
)
```

### **class BalanceSheetFormulae**

### Description:

- Contains methods which perform math operations based on these Balance Sheet Formulae:
  - Basic Balance Sheet
  - Total Assets Value
  - Current Assets Value
  - Fixed Assets Value
  - Other Assets Value
  - Total Debt & Equity
  - Debt Capital
  - Current Debt
  - Long-Term Debt
  - Owners Equity Capital
- Returns a solution fixed to two decimal places

## Using BalanceSheetFormulae() Class

### Method:

### **totalAssetsFormula**

`new BalanceSheetFormulae().totalAssetsFormula()`

### Arguments:

- Current Assets
- Fixed Assets
- Other Assets

### Example: (I used arbritary numbers just for demonstrative purposes)

### Given a Current Assets value of 200,

### a Fixed Assets value of 1000 and

### an Other Assets value of 400, return the Total Assets value

```
const solution = new BalanceSheetFormulae().totalAssetsFormula(
200,
1000,
400
)
```

### **class FirmCashFlowStatementFormulae**

### Description:

- Contains methods which perform math operations based on these Firm Cash Flows Statement Formulae:
  - Cash Flows
  - Earnings before Interest, Taxes, Depreciation & Amortization
  - After-Tax Cash Flows from Operations
  - Cash Taxes
  - Change in Net Operating Working Capital
  - Change in Long-Term Assets
- Returns a solution fixed to two decimal places

## Using FirmCashFlowStatementFormulae() Class

### Method:

### **cashFlowsFormula**

`new FirmCashFlowStatementFormulae().cashFlowsFormula()`

### Arguments:

- After-Tax Cash Flows
- Investment in Net Operating Working Capital
- Investment in Fixed Assets & Other Assets

### Example: (I used arbritary numbers just for demonstrative purposes)

### Given a After-Tax Cash Flows value of 100,

### an Investment in Net Operating Working Capital value of 20 and

### an Investment in Fixed Assets & Other Assets value of 70,

### return the value of Cash Flows

```
const solution = new FirmCashFlowStatementFormulae().cashFlowsFormula(
100,
20,
70
)
```

### Refer to accounting.test.js file in the 'tests' folder for the correct solutions to these examples

## Refer to AccountingFormulae.js to view all of the available accounting classes and methods

# Resources that helped me build FORMULiii

- Crash Course in Physics course by Dr. Shini Somara (https://youtu.be/OoO5d5P0Jn4)
- Investopedia (https://www.investopedia.com/)
- Corporate Finance Institute (https://corporatefinanceinstitute.com/)
- Small Business Management: An Entrepreneurial Emphasis 11th Edition (2000, Longenecker, Moore, Petty)
- FreeCodeCamp: College Algebra Course by Dr. Linda Green

# Foreword (even though it's at the end...)

I'd love to give a big thanks to my parents, who inspire me to work hard and to persevere through adversity. Your lessons have shaped me and continue to shape me into a person who enjoys learning and finding new ways to solve problems and help people. I love you! I'd like to thank my sister. Every time my computer is frozen or I'm waiting for npx create-react-app to finish running, I can always count on you for a good conversation, and even some insight into how bright your generation is. Even though I'm the older sibling, I look up to you, and your big heart and your bright mind. Always keep your curiosity alive. Can't wait to see where your journey takes you. I love you!

I'd also like to thank my friends, you know who you are. My friends who I know in person, and my friends whom I've met on the internet. We all share in common a unique view of the world as a place of wonder, and opportunity and infity of secrets for us to uncover together. Whether through philosophical debate or through scientific research, let's continue our endevour into discovering this lover letter which our creator wrote to us called the Universe. I love you all!
Your friend & brother and son,
Babekizulu!
