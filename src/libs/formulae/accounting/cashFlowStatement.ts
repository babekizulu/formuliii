/*
@Author: Lwandle Babekizulu Dlamini (https://github.com/babekizulu)
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
    financing(ip: number, deltaDP: number, divsPaid: number, deltaS: number) {
        const cf = ip + deltaDP + divsPaid + deltaS;
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
            cashFlows : (atcf:number, inowc:number, ifoa:number) => {
                const cf = atcf - inowc - ifoa;
                return cf.toFixed(2);
            },
            //earnings before income, taxes, depreciation & amortization
            /*
            @param: oi - operating income
            @param: d - depreciation
            */
            ebitda : (oi:number, d:number) => {
                const ebitda = oi + d;
                return ebitda.toFixed(2);
            },
            //after-tax cash flows from operations
            /*
            @param: ebitda - earnings before income, taxes, depreciation & amortization
            @param: ctp - cash tax payments
            */
            atcfo: (ebitda:number, ctp:number) => {
            const atcfo = ebitda - ctp;
            return atcfo.toFixed(2);
            },
            //cash taxes
            /*
            @param: it - income taxes
            @param: deltaADT - changes in accrued or deferred taxes
            */
            cashTaxes: (it:number, deltaADT:number) => {
                const ct = it - deltaADT;
                return ct.toFixed(2);
            },
            //change in net operating working capital
            /*
            @param: deltaCA - change in current assets
            @param: deltaNIBCOL - change in net income before current operating liabilities
            */
            deltaNOWC: (deltaCA:number, deltaNIBCOL:number) => {
                const deltaNOWC = deltaCA - deltaNIBCOL;
                return deltaNOWC.toFixed(2);
            },
            //change in long-term assets
            /*
            @param: gpfa - gross purchase price of fixed assets
            @param: nci - net cash used for investments
            */
            deltaLTA: (gpfa:number, nci:number) => {
                const deltaLTA = gpfa + nci;
                return deltaLTA.toFixed(2);
            }
        }
    }
}

module.exports = CashFlowStatement;