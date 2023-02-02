/*
@Author: Lwandle Babekizulu Dlamini (https://github.com/babekizulu)
@Desc: A library of cash flow statement formulae
@Date: 2023/01/23
*/
var CashFlowStatement = /** @class */ (function () {
    function CashFlowStatement() {
    }
    //financing cash flow
    /*
      @param: ip - interest payments
      @param: deltaDP - change in debt principal
      @param: divsPaid - dividends paid
      @param: deltaS - change in stock
      */
    CashFlowStatement.prototype.financing = function (ip, deltaDP, divsPaid, deltaS) {
        var cf = ip + deltaDP + divsPaid + deltaS;
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
    CashFlowStatement.prototype.firmCashFlow = function () {
        return {
            //cash flows equation
            /*
            @param: atcf - after tax cash flows
            @param: inowc - investment in net operating working capital
            @param: ifoa - investment in fixed assets & other assets
            */
            cashFlows: function (atcf, inowc, ifoa) {
                var cf = atcf - inowc - ifoa;
                return cf.toFixed(2);
            },
            //earnings before income, taxes, depreciation & amortization
            /*
            @param: oi - operating income
            @param: d - depreciation
            */
            ebitda: function (oi, d) {
                var ebitda = oi + d;
                return ebitda.toFixed(2);
            },
            //after-tax cash flows from operations
            /*
            @param: ebitda - earnings before income, taxes, depreciation & amortization
            @param: ctp - cash tax payments
            */
            atcfo: function (ebitda, ctp) {
                var atcfo = ebitda - ctp;
                return atcfo.toFixed(2);
            },
            //cash taxes
            /*
            @param: it - income taxes
            @param: deltaADT - changes in accrued or deferred taxes
            */
            cashTaxes: function (it, deltaADT) {
                var ct = it - deltaADT;
                return ct.toFixed(2);
            },
            //change in net operating working capital
            /*
            @param: deltaCA - change in current assets
            @param: deltaNIBCOL - change in net income before current operating liabilities
            */
            deltaNOWC: function (deltaCA, deltaNIBCOL) {
                var deltaNOWC = deltaCA - deltaNIBCOL;
                return deltaNOWC.toFixed(2);
            },
            //change in long-term assets
            /*
            @param: gpfa - gross purchase price of fixed assets
            @param: nci - net cash used for investments
            */
            deltaLTA: function (gpfa, nci) {
                var deltaLTA = gpfa + nci;
                return deltaLTA.toFixed(2);
            }
        };
    };
    return CashFlowStatement;
}());
module.exports = CashFlowStatement;
