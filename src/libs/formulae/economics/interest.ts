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
    compound(p:number, r:number, n:number, t:number) {
        const i = p*(1+(r/100)/n)**(n*t);
        return i.toFixed(2);
    }
    //simple interest
    /*
    @param: r - rate of interest
    @param: p - principal amount
    @param: t - time period
    */
   simple(r:number, p:number, t:number) {
    const i = (p*r*t)/100;
    return i.toFixed(2);
   }
}

module.exports = Interest;

