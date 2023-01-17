/*
 * @Author: Lwandle Babekizulu Dlamini
 * @Desc: A library of economics depreciation formulae
 * @Date: 2022/01/17
 */

class Depreciation {
    //straight-line depreciation formula
    sl(cost:number, salvageValue:number, lifespan:number) {
      const d = (cost - salvageValue) / lifespan;
      return d.toFixed(2);
    }
    //double-declining balance depreciation formula
    ddb(lifespan:number, startingBookValue:number, salvageValue:number) {
      //solve for ddb rate
      const ddbRate = 1 / (lifespan * 2);
      //solve for current year depreciation
      const cyd = startingBookValue * ddbRate;
      //solve for end book value
      const ebv = startingBookValue - cyd;
      //set end book value to start book value of new period
      const sbv = ebv;
      //solve for final year depreciation
      const fyd = sbv - salvageValue;
      //return ddbRate, cyd, ebv, sbv & fyd
      return [
        ddbRate,
        cyd,
        ebv,
        sbv,
        fyd,
      ];
    }
    //units of production depreciation formula
    up(
      costBasisOfAsset:number,
      salvageValue:number,
      estimatedTotalUnitsToBeProducedOverLifespan:number,
      actualUnitsProduced:number,
    ) {
      //solve for units of production rate
      const upRate =
        (costBasisOfAsset - salvageValue) /
        estimatedTotalUnitsToBeProducedOverLifespan;
      const d = upRate * actualUnitsProduced;
      return d.toFixed(2);
    }
    //sum of years digits depreciation formula
    syd(lifespan:number, cost:number, salvageValue:number) {
      //solve for some of years
      // - Add the number of each year of the lifespan
      // e.g 5 years = 5 + 4 + 3 + 2 + 1, which equals 15
      let sumOfYears = 0;
      for (let i = 0; i < lifespan; i++) {
        sumOfYears += i;
      }
      //solve for depreciable amount
      const depreciableAmount = cost - salvageValue;
      //solve for sum of years digits depreciation
      const syd = (lifespan / sumOfYears) * depreciableAmount;
      return syd.toFixed(2);
    }
  }
  //methods: sl, ddb, up, syd
  module.exports = Depreciation;