# FORMULiii

## @Author: Lwandle Babekizulu Dlamini

### A Calculator App for Economics, Mathematics, Physics & Accounting

##**LIBRARIES**

## EconomicsFormulae.js

### A library of classes containing methods which perform math operations based on existing economic formulae

###**class GDPExpApproachFormula**

### Description:

- Expenditure Approach of calculating Nominal Gross Domestic Product
- Returns a solution fixed to two decimal places

### Methods:

`new GDPExpApproachFormula.solve()`

### Arguments:

- Consumption
- Investment
- Government Expenditure
- Net Exports

### Example: (I used arbritary numbers just for demonstrative purposes)

```
const solution = new GDPExpApproachFormula.solve(
1000,
2000,
500,
5000
)
```

### Refer to economics.test.js file for correct solution

###**class GDPIncomeApproachFormula**

### Description:

- Income Approach of calculating Nominal Gross Domestic Product
- Returns a solution fixed to two decimal places

### Methods:

`new GDPIncomeApproachFormula.solve()`

### Arguments:

- Total National Income
- Sales Taxes
- Depreciation
- Net Foreign Factor Income

### Example: (I used arbritary numbers just for demonstrative purposes)

```
const solution = new GDPIncomeApproachFormula.solve(
10000,
500,
150,
20000
)
```

### Refer to economics.test.js file for correct solution

###**class BalanceOfTradeFormula**

### Description:

- Calculates Balance of Trade
- Returns a solution fixed to two decimal places

### Methods:

`new BalanceOfTradeFormula.solve()`

### Arguments:

- Value of Exports
- Value of Imports

### Example: I used arbritary numbers just for demonstrative purposes

```
const solution = new BalanceOfTradeFormula.solve(
20000,
30000
)
```

### Refer to economics.test.js file for correct solution

###**class CurrentAccountFormula**

### Description:

- Calculates Current Account value
- Returns a solution fixed to two decimal places

### Methods:

`new CurrentAccountFormula.solve()`

### Arguments:

- Export of Goods & Services
- Import of Goods & Services
- Net Earnings from Abroad
- Net Transfer Payments

### Example: I used arbritary numbers just for demonstrative purposes

```
const solution = new CurrentAccountFormula.solve(
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

###**class AlgebraicFormulae**

### Description:

- Contains methods which perform math operations based on these Algebraic Formulae:
  - The Pythagorean Equation
  - The Distance Equation
  - The Midpoint Equation
- Returns a solution fixed to three decimal places

### Methods:

###**pythagoreanFormula()**
`new AlgebraicFormulae.pythagoreanFormula()`

### Arguments:

- Horizontal Side Length Value
- Vertical Side Length Value

### Example: (I used arbritary numbers just for demonstrative purposes)

### Return the length of the hypotenuse of the right angle triangle

### with a horizontal length of 4 and a vertical length of 3

```
const solution = new AlgebraicFormulae.pythagoreanFormula(
4,
3
)
```

###**distanceFormula()**
`new AlgebraicFormulae.distanceFormula()`

### Arguments:

- X Coordinate 1
- X Coordinate 2
- Y Coordinate 1
- Y Coordinate 2

### Example: (I used arbritary numbers just for demonstrative purposes)

### Return the distance between the coordinates (3, 2) and (7, 5)

```
const solution = new AlgebraicFormulae.distanceFormula(
3,
7,
2,
5
)
```

###**midPointFormula()**
`new AlgebraicFormulae.midPointFormula()`

### Arguments:

- Endpoint Coordinate X1
- Endpoint Coordinate X2
- Endpoint Coordinate Y1
- Endpoint Coordinate Y2

### Example: (I used arbritary numbers just for demonstrative purposes)

### Return the midpoint of the segment with endpoints (3, 2) and (7, 5)

```
const solution = new AlgebraicFormulae.midPointFormula(
3,
7,
2,
5
)
```

### Refer to mathematics.test.js file in the 'tests' folder for correct solutions to these examples

## Refer to MathematicsFormulae.js to view all of the available mathematics classes and methods
