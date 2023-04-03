/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: Functions to calculate economic indicators based on formulae
* @Date: 2022/10/15
* @TODO: 
    - Create a function that checks how many decimal places
      a solution has, if none, then return an integer instead of a float
*/

//Nominal Gross Domestic Product using the Expenditure Approach
class GDPExpApproachFormula {
    solve(consumption, investment, governmentExpenditure, netExports) {
        //@Desc: Store variables to use in formula
        //@variables: consumption, investment, government expenditure, net exports
        const c = parseFloat(consumption);
        const i = parseFloat(investment);
        const g = parseFloat(governmentExpenditure);
        const nx = parseFloat(netExports);
        //gdp expenditure approach formula
        const gdp = (c + i + g + nx).toFixed(2);
        return gdp;
    };
};


//Nominal Gross Domestic Product using the Income Approach
class GDPIncomeApproachFormula {
    solve(totalNationalIncome, salesTaxes, depreciation, netForeignFactorIncome) {
        //@Desc: Store variables to use in formula
        //@variables: total national income, sales taxes, depreciation, net foreign factor income
        const tni = parseFloat(totalNationalIncome);
        const t = parseFloat(salesTaxes)
        const d = parseFloat(depreciation)
        const f = parseFloat(netForeignFactorIncome)
        //gdp income approach formula
        const gdp = (tni + t + d + f).toFixed(2);
        return gdp;
    };
};

//Balance of Trade
class BalanceOfTradeFormula {
    solve(valueOfExports, valueOfImports) {
        //@Desc: Store variables to use in formula
        //@variables: value of exports, value of imports
        const ve = parseFloat(valueOfExports);
        const vi = parseFloat(valueOfImports);
        //solve using balance of trade formula
        const bot = (ve - vi).toFixed(2);
        return bot;
    };
};

//Current Account
class CurrentAccountFormula{
    solve(exportOfGoodsAndServices, importOfGoodsAndServices, netEarningsFromAbroad, netTransferPayments) {
        //@Desc: Store variables to use in formula
        //@variables: goods & services (exports), goods & services(imports), net earnings from abroad, net transfer payments
        const x = parseFloat(exportOfGoodsAndServices);
        const m = parseFloat(importOfGoodsAndServices);
        const ny = parseFloat(netEarningsFromAbroad);
        const nct = parseFloat(netTransferPayments);
        //solve using current account formula
        const currentAccount = ((x-m) + ny + nct).toFixed(2);
        return currentAccount;
    };
};

//Current Account to GDP Ratio
class CAGDPRatio {
    solve(currentAccount, grossDomesticProduct) {
        //@Desc: Store variables to use in formula
        //variables: current account, gross domestic product
        const ca = parseFloat(currentAccount);
        const gdp = parseFloat(grossDomesticProduct);
        //solve by getting ratio of current account to gdp
        const ratio =  (ca/gdp * 100).toFixed(2);
        return ratio
    };
};

//Government Debt to GDP Ratio
class GDGDPRatio{
    solve(governmentDebt, grossDomesticProduct) {
        //@Desc: Store variables to use in formula
        //@variables: government debt, gross domestic product
        const gd = parseFloat(governmentDebt);
        const gdp = parseFloat(grossDomesticProduct);
        //solve by getting ratio of government debt to gdp
        const ratio =  (gd/gdp * 100).toFixed(2);
        return ratio;
    };
};

//Real GDP Quaterly Growth Rate
class RealGDPQuaterlyGrowthRateFormula {
    solve(gdpQ1, gdpQ2) {
        //@Desc: Store variables to use in formula
        //@variables: prior quarter gdp, recent/current quarter gdp
        const q1 = parseFloat(gdpQ1);
        const q2 = parseFloat(gdpQ2);
        //solve using growth rate formula
        const growth = ((q2 - q1)/q1).toFixed(2);
        return growth;
    };
};

//Real GDP Annual Growth Rate
class RealGDPAnnualGrowthRateFormula {
    solve(gdpPreviousYear, gdpCurrentYear) {
        //@Desc: Store variables to use in formula
        //@variables: prior year gdp, recent/current year gdp
        const y1 = parseFloat(gdpPreviousYear);
        const y2 = parseFloat(gdpCurrentYear);
        //solve using the growth rate formula
        const growth = ((y2-y1)/y1).toFixed(2);
        return growth;
    };
};

//GDP Deflator
class GDPDeflatorFormula {
    solve(nominalGDP, realGDP) {
        //@Desc: Store variables to use in formula
        //@variables: nominal gdp, real gdp
        const n = parseFloat(nominalGDP);
        const r = parseFloat(realGDP);
        //solve using gdp deflator formula
        const deflator = ((n/r)*100).toFixed(2);
        return deflator;
    };
};

//Real GDP
class RealGDPFormula {
    solve(nominalGDP, gdpDeflator) {
        //@Desc: Store variables to use in formula
        //@variables: nominal gross domestic product, gross domestic product deflator
        const n = parseFloat(nominalGDP);
        const d = parseFloat(gdpDeflator);
        //solve using the real gdp formula
        const gdp = (n/d).toFixed(2);
        return gdp;
    };
};

//Inflation Rate
class InflationRateFormula {
    solve(pastConsumerPriceIndex, currentConsumerPriceIndex) {
        //@Desc: Store variables to use in formula
        //@variables: past consumer price index, current consumer price index
        const a = parseFloat(pastConsumerPriceIndex);
        const b = parseFloat(currentConsumerPriceIndex);
        //solve using inflation rate formula
        const inflationRate = (((b-a)/a)*100).toFixed(2);
        return inflationRate;
    };
};

//Simple Interest Rate
class SimpleInterestRateFormula {
    solve(interestRate, principalAmount, timePeriod) {
        //@Desc: Store variables to use in formula
        //@variables: simple interest, principal amount, time period
        const r = parseFloat(interestRate);
        const p = parseFloat(principalAmount);
        const t = parseFloat(timePeriod);
        //solve using interest rate formula
        const ir = ((p*r*t)/100).toFixed(2);
        return ir;
    };
};

//Compound Interest Rate
class CompoundInterestRateFormula {
    solve(principalAmount, rateOfInterest, nTimesCompounded, timePeriod) {
        //@Desc: Store variables to use in formula
        //@variables: principal amount, rate of interest, number of times compounded, time period
        const p = parseFloat(principalAmount);
        const r = parseFloat(rateOfInterest);
        const n = parseFloat(nTimesCompounded);
        const t = parseFloat(timePeriod);
        //solve using compound interest rate formula
        const ci = (p*(1+(r/100)/n)**(n*t)).toFixed(2);
        return ci;
    };
};

//Unemployment Rate
class UnemploymentRateFormula {
    solve(numberOfUnemployedPeople, labourForce) {
        //@Desc: Store variables to use in formula
        //@variables: number of unemployed people, number of labourers in labour force
        const up = parseFloat(numberOfUnemployedPeople);
        const l = parseFloat(labourForce);
        //solve using unemployment rate formula
        const unemploymentRate = ((up/l) * 100).toFixed(2);
        return unemploymentRate;
    };
};

//Net Exports
class NetExportsFormula {
    solve(valueOfExports, valueOfImports) {
        //@Desc: Store variables to use in formula
        //@variables: value of exports, value of imports
        const e = parseFloat(valueOfExports);
        const i = parseFloat(valueOfImports);
        //solve using net exports formula
        const nx = (e-i).toFixed(2);
        return nx;
    };
};

//Depreciation
// 1. Straight-Line Depreciation Formula
//2. Double Declining Balance Depreciation Formula
//3. Units of Production Depreciation Formula
//4. Sum of Years Digits Depreciation Formula

class StraightLineDepreciationFormula {
  solve(cost, salvageValue, assetLifespan) {
        //@Desc: Store variables to use in formula
        //@variables: cost, salvage value, asset lifespan
        const c = parseFloat(cost);
        const sv = parseFloat(salvageValue);
        const ls = parseFloat(assetLifespan);
        //solve using straight-line depreciation formula
        const depreciation = ((c-sv)/ls).toFixed(2);
        return depreciation;
    };
};

class DoubleDecliningBalanceDepreciationFormula {
    solve(startingBookValue, assetLifespan) {
        //@Desc: Store variables to use in formula
        //@variables: starting book value, asset lifespan, rate of depreciation
        const sbv = parseFloat(startingBookValue);
        const ls = parseFloat(assetLifespan);
        //calculate rate of depreciation using lifespan 
        // and rate of depreciation formula
        //We'll name it 'rd'
        const rd = ((1/1)/ls)*2;
        //solve using double declining balance depreciation formula
        const periodicDepreciation = (sbv * rd).toFixed(2);
       return periodicDepreciation;
    };
};

class UnitsOfProductionDepreciationFormula {
    solve(numOfUnitsProduced, lifespanUnits, cost, salvageValue) {
        //@Desc: Store variables to use in formula
        //@variables: number of units produced, lifespan in units, cost, salvage value
        const p = parseFloat(numOfUnitsProduced);
        const l = parseFloat(lifespanUnits);
        const c = parseFloat(cost);
        const sv = parseFloat(salvageValue);
        //solve using units of production depreciation formula
        const depreciation = ((p/l)*(c-sv)).toFixed(2);
        return depreciation;
    };
};

class SumOfYearsDigitsDepreciation {
    solve(remainingLife, sumOfYearsDigits, cost, salvageValue) {
        //@Desc: Store variables to use in formula
        //@variables: remaining life of asset, sum of the years, cost, salvage value
        const rl = parseFloat(remainingLife);
        const syd = parseFloat(sumOfYearsDigits);
        const c = parseFloat(cost);
        const sv = parseFloat(salvageValue);
        //solve using sum of years digits depreciation formula
        const depreciation = ((rl/syd)*(c-sv)).toFixed(2);
        return depreciation;
    };
};

//Net Foreign Factor Income

class NetForeignFactorIncomeFormula {
    solve(grossNationalProduct, grossDomesticProduct) {
        //@Desc: Store variables to use in formula
        //@variables: gross domestic product, gross national product
        const GNP = parseFloat(grossNationalProduct);
        const GDP = parseFloat(grossDomesticProduct);
        //solve using net foreign factor income formula
        const nffi = (GNP-GDP).toFixed(2);
        return nffi;
    };
};

export {
    GDPExpApproachFormula, 
    GDPIncomeApproachFormula, 
    BalanceOfTradeFormula, 
    CurrentAccountFormula, 
    CAGDPRatio, 
    GDGDPRatio, 
    RealGDPQuaterlyGrowthRateFormula, 
    RealGDPAnnualGrowthRateFormula, 
    GDPDeflatorFormula, 
    RealGDPFormula, 
    InflationRateFormula, 
    SimpleInterestRateFormula, 
    CompoundInterestRateFormula,
    UnemploymentRateFormula,
    NetExportsFormula,
    StraightLineDepreciationFormula,
    DoubleDecliningBalanceDepreciationFormula,
    UnitsOfProductionDepreciationFormula,
    SumOfYearsDigitsDepreciation,
    NetForeignFactorIncomeFormula
}