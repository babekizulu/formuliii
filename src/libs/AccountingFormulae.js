/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: A library of accounting formulae
* @Date: 2022/10/22
* Conventions:
* - Parse parameters to floats
* - Make sure the values we return are fixed to two decimal places,
*   which can be done using the .toFixed() method: e.g answer.toFixed(2)
*/
//Income Statement Formulae
class IncomeStatementFormulae {
    //Basic Income
    basicIncomeFormula(sales, expenses) {
        const s = parseFloat(sales);
        const x = parseFloat(expenses);
        //solve for profit
        const p = s -x;
        return p.toFixed(2);
    };

    //Earnings Before Income & Taxes
    earningsBITFormula(grossProfit, operatingExpenses) {
        const g = parseFloat(grossProfit);
        const ox = parseFloat(operatingExpenses);
        //solve for earnings
        const e = g -ox;
        return e.toFixed(2);
    };

    //Gross Profit
    grossProfitFormula(salesRevenue, CostOfProduction) {
        const s = parseFloat(salesRevenue);
        const c = parseFloat(CostOfProduction);
        //solve for gross profit
        const g = s - c;
        return g.toFixed(2);
    };

    //Operating Expenses
    operatingExpensesFormula(marketingExpense, distributionExpense, administrativeExpense) {
        const m = parseFloat(marketingExpense);
        const d = parseFloat(distributionExpense);
        const a = parseFloat(administrativeExpense);
        //solve for operating expenses
        const ox = m + d + a;
        return ox.toFixed(2);
    };

    //Earnings Before Taxes
    earningsBTFormula(operatingIncome, interestExpense) {
        const i = parseFloat(operatingIncome);
        const ix = parseFloat(interestExpense);
        //solve for earnings
        const e = i - ix;
        return e.toFixed(2);
    };

    //Net Income
    netIncomeFormula(earningsBeforeTaxes, corporateTaxes) {
        const e = parseFloat(earningsBeforeTaxes);
        const t = parseFloat(corporateTaxes);
        //solve for net income
        const ni = e - t;
        return ni.toFixed(2);
    };
};

//Balance Sheet Formulae
class BalanceSheetFormulae {
    //Basic Balance Sheet
    basicBalanceSheetFormula(outstandingDebt, ownersEquity) {
        const od = parseFloat(outstandingDebt);
        const oe = parseFloat(ownersEquity);
        //solve for total assets
        const ta = od + oe;
        return ta.toFixed(2);
    }

    //Total Assets Value
    totalAssetsFormula(currentAssets, fixedAssets, otherAssets) {
        const c = parseFloat(currentAssets);
        const f = parseFloat(fixedAssets);
        const o = parseFloat(otherAssets);
        //solve for total assets
        const t = c + f + o;
        return t.toFixed(2);
    }

    //Current Assets Value
    currentAssetsFormula(cash, accountsReceivable, inventories, prepaidExpenses) {
        const c = parseFloat(cash);
        const a = parseFloat(accountsReceivable);
        const i = parseFloat(inventories);
        const p = parseFloat(prepaidExpenses);
        //solve for current assets
        const ca = c + a + i + p;
        return ca.toFixed(2);
    }

    //Fixed Assets Value
    fixedAssetsValueFormula(machineryAndEquipmentValue, buildingsValue, landValue) {
        const m = parseFloat(machineryAndEquipmentValue);
        const b = parseFloat(buildingsValue);
        const l = parseFloat(landValue);
        //solve for fixed assets value
        const fa = m + b + l;
        return fa.toFixed(2);
    };

    //Other Assets Value
    otherAssetsFormula(investments, patentsValue) {
        const i = parseFloat(investments);
        const p = parseFloat(patentsValue);
        //solve for other assets value
        const oa = i + p;
        return oa.toFixed(2);
    };

    //Total Debt & Equity
    totalDebtAndEquityFormula(debtCapital, ownersEquityCapital) {
        const d = parseFloat(debtCapital);
        const o = parseFloat(ownersEquityCapital);
        //solve for total debt & equity
        const t = d + o;
        return t.toFixed(2);
    }

    //Debt Capital
    debtCapitalFormula(currentDebt, longTermDebt) {
        const c = parseFloat(currentDebt);
        const l = parseFloat(longTermDebt);
        //solve for debt capital
        const dc = c + l;
        return dc.toFixed(2);
    }

    //Current Debt
    currentDebtFormula(accountsPayable, otherPayables, accruedExpenses, shortTermNotes) {
        const a = parseFloat(accountsPayable);
        const o = parseFloat(otherPayables);
        const e = parseFloat(accruedExpenses);
        const st = parseFloat(shortTermNotes);
        //solve for current debt
        const cd = a + o + e + st;
        return cd.toFixed(2);
    }

    //Long-Term Debt
    longTermDebtFormula(longTermNotes, mortgages) {
        const lt = parseFloat(longTermNotes);
        const m = parseFloat(mortgages);
        //solve for long term debt
        const d = lt + m;
        return d.toFixed(2);
    }

    //Owners Equity Capital
    ownersEquityCapitalFormula(ownersNetWorth, partnershipEquity, commonStockEquity) {
        const o = parseFloat(ownersNetWorth);
        const p = parseFloat(partnershipEquity);
        const c = parseFloat(commonStockEquity);
        const arr = [o, p, c];
        //solve for owners equity capital
        // - only one of these variables will contain a value,
        // so loop through an array of the variables and return the
        // variable which has value that's not zero.
        // - since zero is falsey, we can simply check if variable is true
        arr.forEach(v => {
            if (v) return v.toFixed(2);
        });
    };
};

module.exports = {
    IncomeStatementFormulae,
    BalanceSheetFormulae
};
