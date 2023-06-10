/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of cash flow statement formulae
@Date: 2023/01/23
*/
class cashFlowStatement {
  //financing cash flow
  /*
      @param: ip - interest payments
      @param: deltaDP - change in debt principal
      @param: divsPaid - dividends paid
      @param: deltaS - change in stock
      */
  financing(
    interestPayments,
    changeInDebtPrincipal,
    dividendsPaid,
    changeInStock,
  ) {
    const ip = parseFloat(interestPayments);
    const cdp = parseFloat(changeInDebtPrincipal);
    const dp = parseFloat(dividendsPaid);
    const cis = parseFloat(changeInStock);
    const cf = ip + cdp + dp + cis;
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
      cashFlows: (
        afterTaxCashFlows,
        investmentInNetOperatingWorkingCapital,
        investmentInFixedAssetsAndOtherAssets,
      ) => {
        const atcf = parseFloat(afterTaxCashFlows);
        const inowc = parseFloat(investmentInNetOperatingWorkingCapital);
        const ifoa = parseFloat(investmentInFixedAssetsAndOtherAssets);
        const cf = atcf - inowc - ifoa;
        return cf.toFixed(2);
      },
      //earnings before income, taxes, depreciation & amortization
      /*
            @param: oi - operating income
            @param: d - depreciation
            */
      ebitda: (operatingIncome, depreciation) => {
        const oi = parseFloat(operatingIncome);
        const d = parseFloat(depreciation);
        const ebitda = parseFloat(oi + d);
        return ebitda.toFixed(2);
      },
      //after-tax cash flows from operations
      /*
            @param: ebitda - earnings before income, taxes, depreciation & amortization
            @param: ctp - cash tax payments
            */
      atcfo: (
        earningsBeforeIncomeTaxesDepreciationAndAmortization,
        cashTaxPayments,
      ) => {
        const ebitda = parseFloat(
          earningsBeforeIncomeTaxesDepreciationAndAmortization,
        );
        const ctp = parseFloat(cashTaxPayments);
        const atcfo = ebitda - ctp;
        return atcfo.toFixed(2);
      },
      //cash taxes
      /*
            @param: it - income taxes
            @param: deltaADT - changes in accrued or deferred taxes
            */
      cashTaxes: (incomeTaxes, changesInAccruedOrDeferredTaxes) => {
        const it = parseFloat(incomeTaxes);
        const dadt = parseFloat(changesInAccruedOrDeferredTaxes);
        const ct = it - dadt;
        return ct.toFixed(2);
      },
      //change in net operating working capital
      /*
            @param: deltaCA - change in current assets
            @param: deltaNIBCOL - change in net income before current operating liabilities
            */
      deltaNOWC: (
        changeInCurrentAssets,
        changeInNetIncomeBeforeCurrentOperatingLiabilities,
      ) => {
        const dca = parseFloat(changeInCurrentAssets);
        const dnibcol = parseFloat(
          changeInNetIncomeBeforeCurrentOperatingLiabilities,
        );
        const deltaNOWC = dca - dnibcol;
        return deltaNOWC.toFixed(2);
      },
      //change in long-term assets
      /*
            @param: gpfa - gross purchase price of fixed assets
            @param: nci - net cash used for investments
            */
      deltaLTA: (
        grossPurchasePriceOfFixedAssets,
        netCashUsedForInvestments,
      ) => {
        const gpfa = parseFloat(grossPurchasePriceOfFixedAssets);
        const nci = parseFloat(netCashUsedForInvestments);
        const deltaLTA = gpfa + nci;
        return deltaLTA.toFixed(2);
      },
    };
  }
}

export default cashFlowStatement;
