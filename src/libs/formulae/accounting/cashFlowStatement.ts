/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of cash flow statement formulae
@Date: 2023/01/23
*/
class CashFlowStatement {
    //financing cash flow
    /*
      @param: ip - interest payments
      @param: deltaDP - change in debt principal
      @param: divsPaid - dividends paid
      @param: deltaS - change in stock
      */
    financing(
        interestPayments: number, 
        changeInDebtPrincipal: number,
         dividendsPaid: number, 
         changeInStock: number
         ) {
        const cf = interestPayments + changeInDebtPrincipal + dividendsPaid + changeInStock;
        return cf.toFixed(2);
    }
    //firm cash flow equations
    /*
    @method: cashFlows - cash flows equation
    @method: ebitda - earnings before interest, taxes, depreciation & amortization equation
    @method: atcfo - after-tax cash flows from operations equation
    @method: cashTaxes - cash taxes equation
    @method: deltaNOWC - change in net operating working capital equation
    @method: deltaLTA - change in long-term assets equation
    */
    firmCashFlow() {
        return {
            //cash flows equation
            /*
            @param: atcf - after tax cash flows
            @param: inowc - investment in net operating working capital
            @param: ifoa - investment in fixed assets & other assets
            */
            cashFlows : (
                afterTaxCashFlows:number, 
                investmentInNetOperatingWorkingCapital:number, 
                investmentInFixedAssetsAndOtherAssets:number) => {
                const cf = afterTaxCashFlows - investmentInNetOperatingWorkingCapital - investmentInFixedAssetsAndOtherAssets;
                return cf.toFixed(2);
            },
            //earnings before income, taxes, depreciation & amortization
            /*
            @param: oi - operating income
            @param: d - depreciation
            */
            ebitda : (operatingIncome:number, depreciation:number) => {
                const ebitda = operatingIncome + depreciation;
                return ebitda.toFixed(2);
            },
            //after-tax cash flows from operations
            /*
            @param: ebitda - earnings before income, taxes, depreciation & amortization
            @param: ctp - cash tax payments
            */
            atcfo: (
                earningsBeforeIncomeTaxesDepreciationAndAmortization:number, 
                cashTaxPayments:number
                ) => {
            const atcfo = earningsBeforeIncomeTaxesDepreciationAndAmortization - cashTaxPayments;
            return atcfo.toFixed(2);
            },
            //cash taxes
            /*
            @param: it - income taxes
            @param: deltaADT - changes in accrued or deferred taxes
            */
            cashTaxes: (incomeTaxes:number, changesInAccruedOrDeferredTaxes:number) => {
                const ct = incomeTaxes - changesInAccruedOrDeferredTaxes;
                return ct.toFixed(2);
            },
            //change in net operating working capital
            /*
            @param: deltaCA - change in current assets
            @param: deltaNIBCOL - change in net income before current operating liabilities
            */
            deltaNOWC: (
                changeInCurrentAssets:number, 
                changeInNetIncomeBeforeCurrentOperatingLiabilities:number
                ) => {
                const deltaNOWC = changeInCurrentAssets - changeInNetIncomeBeforeCurrentOperatingLiabilities;
                return deltaNOWC.toFixed(2);
            },
            //change in long-term assets
            /*
            @param: gpfa - gross purchase price of fixed assets
            @param: nci - net cash used for investments
            */
            deltaLTA: (
                grossPurchasePriceOfFixedAssets:number, 
                netCashUsedForInvestments:number
                ) => {
                const deltaLTA = grossPurchasePriceOfFixedAssets + netCashUsedForInvestments;
                return deltaLTA.toFixed(2);
            }
        }
    }
}

module.exports = CashFlowStatement;