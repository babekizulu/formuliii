/*
@Author: Lwandle Babekizulu Dlamini
@Desc: A library of interest formulae
@Date: 2023/01/22
*/
class Interest {
    //compound interest
    /*
    @param: p - principal amount
    @param: r - rate of interest
    @param: n - n times compounded
    @param: t - time period
    */
    compound(
        principalAmount:number, 
        rateOfInterest:number, 
        numberOfTimesCompounded:number, 
        timePeriod:number
        ) {
        const i = principalAmount*(1+(rateOfInterest/100)/numberOfTimesCompounded)**(numberOfTimesCompounded*timePeriod);
        return i.toFixed(2);
    }
    //simple interest
    /*
    @param: r - rate of interest
    @param: p - principal amount
    @param: t - time period
    */
   simple(rateOfInterest:number, principalAmount:number, timePeriod:number) {
    const i = (principalAmount*rateOfInterest*timePeriod)/100;
    return i.toFixed(2);
   }
}

module.exports = Interest;

