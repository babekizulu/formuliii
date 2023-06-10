/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of interest formulae
@Date: 2023/01/22
*/
class interest {
  //compound interest
  /*
    @param: p - principal amount
    @param: r - rate of interest
    @param: n - n times compounded
    @param: t - time period
    */
  compound(
    principalAmount,
    rateOfInterest,
    numberOfTimesCompounded,
    timePeriod,
  ) {
    const p = parseFloat(principalAmount);
    const r = parseFloat(rateOfInterest);
    const n = parseFloat(numberOfTimesCompounded);
    const t = parseFloat(timePeriod);
    const i = p * (1 + r / 100 / n) ** (n * t);
    return i.toFixed(2);
  }
  //simple interest
  /*
    @param: r - rate of interest
    @param: p - principal amount
    @param: t - time period
    */
  simple(rateOfInterest, principalAmount, timePeriod) {
    const r = parseFloat(rateOfInterest);
    const p = parseFloat(principalAmount);
    const t = parseFloat(timePeriod);
    const i = parseFloat((p * r * t) / 100);
    return i.toFixed(2);
  }
}

export default interest;
