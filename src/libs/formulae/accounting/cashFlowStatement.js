/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of cash flow statement formulae
@Date: 2023/01/23
*/
var cashFlowStatement = /** @class */ (function () {
    function cashFlowStatement() {
    }
    //financing cash flow
    /*
      @param: ip - interest payments
      @param: deltaDP - change in debt principal
      @param: divsPaid - dividends paid
      @param: deltaS - change in stock
      */
    cashFlowStatement.prototype.financing = function (interestPayments, changeInDebtPrincipal, dividendsPaid, changeInStock) {
        var cf = interestPayments + changeInDebtPrincipal + dividendsPaid + changeInStock;
        return cf.toFixed(2);
    };
    //firm cash flow equations
    /*
    @method: cashFlows - cash flows equation
    @method: ebitda - earnings before interest, taxes, depreciation & amortization equation
    @method: atcfo - after-tax cash flows from operations equation
    @method: cashTaxes - cash taxes equation
    @method: deltaNOWC - change in net operating working capital equation
    @method: deltaLTA - change in long-term assets equation
    */
    cashFlowStatement.prototype.firmCashFlow = function () {
        return {
            //cash flows equation
            /*
            @param: atcf - after tax cash flows
            @param: inowc - investment in net operating working capital
            @param: ifoa - investment in fixed assets & other assets
            */
            cashFlows: function (afterTaxCashFlows, investmentInNetOperatingWorkingCapital, investmentInFixedAssetsAndOtherAssets) {
                var cf = afterTaxCashFlows - investmentInNetOperatingWorkingCapital - investmentInFixedAssetsAndOtherAssets;
                return cf.toFixed(2);
            },
            //earnings before income, taxes, depreciation & amortization
            /*
            @param: oi - operating income
            @param: d - depreciation
            */
            ebitda: function (operatingIncome, depreciation) {
                var ebitda = operatingIncome + depreciation;
                return ebitda.toFixed(2);
            },
            //after-tax cash flows from operations
            /*
            @param: ebitda - earnings before income, taxes, depreciation & amortization
            @param: ctp - cash tax payments
            */
            atcfo: function (earningsBeforeIncomeTaxesDepreciationAndAmortization, cashTaxPayments) {
                var atcfo = earningsBeforeIncomeTaxesDepreciationAndAmortization - cashTaxPayments;
                return atcfo.toFixed(2);
            },
            //cash taxes
            /*
            @param: it - income taxes
            @param: deltaADT - changes in accrued or deferred taxes
            */
            cashTaxes: function (incomeTaxes, changesInAccruedOrDeferredTaxes) {
                var ct = incomeTaxes - changesInAccruedOrDeferredTaxes;
                return ct.toFixed(2);
            },
            //change in net operating working capital
            /*
            @param: deltaCA - change in current assets
            @param: deltaNIBCOL - change in net income before current operating liabilities
            */
            deltaNOWC: function (changeInCurrentAssets, changeInNetIncomeBeforeCurrentOperatingLiabilities) {
                var deltaNOWC = changeInCurrentAssets - changeInNetIncomeBeforeCurrentOperatingLiabilities;
                return deltaNOWC.toFixed(2);
            },
            //change in long-term assets
            /*
            @param: gpfa - gross purchase price of fixed assets
            @param: nci - net cash used for investments
            */
            deltaLTA: function (grossPurchasePriceOfFixedAssets, netCashUsedForInvestments) {
                var deltaLTA = grossPurchasePriceOfFixedAssets + netCashUsedForInvestments;
                return deltaLTA.toFixed(2);
            }
        };
    };
    return cashFlowStatement;
}());
module.exports = cashFlowStatement;
