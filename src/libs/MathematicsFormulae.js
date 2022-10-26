/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: A library of mathematics formulae
* @Date: 2022/10/26
* Conventions:
* - Parse parameters to floats
*/

//ALGEBRAIC FORMULAE
class AlgebraicFormulae {
    quadraticFormula(valueA, valueB, valueC) {
        const a = parseFloat(valueA);
        const b = parseFloat(valueB);
        const c = parseFloat(valueC);
        //solve for x
        const xPlus = ((-b + Math.sqrt(((b**2) - 4(a)(c))))/2(a));
        const xMinus = ((-b - Math.sqrt(((b**2) - 4(a)(c))))/2(a));
        if (xPlus && xMinus) {
            return [xPlus, xMinus];
        };
        if (xPlus && !xMinus) {
            return xPlus;
        };
        if (!xPlus && xMinus) {
            return xMinus;
        };
        if (!xPlus && !xMinus) {
            return 'No Real Solution';
        };
    };

    pythagoreanFormula(horizontalSideValue, verticalSideValue) {
        const a = parseFloat(horizontalSideValue);
        const b = parseFloat(verticalSideValue);
        //solve for hypotenuse
        const hyp = Math.sqrt(a**2 + b**2);
        return hyp;
    };

    distanceFormula(xCoord1, xCoord2, yCoord1, yCoord2) {
        const x1 = parseFloat(xCoord1);
        const x2 = parseFloat(xCoord2);
        const y1 = parseFloat(yCoord1);
        const y2 = parseFloat(yCoord2);
        //solve for distance
        const d = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
        return d;
    };

    midPointFormula(endpointX1, endpointX2, endpointY1, endpointY2) {
        const x1 = parseFloat(endpointX1);
        const x2 = parseFloat(endpointX2);
        const y1 = parseFloat(endpointY1);
        const y2 = parseFloat(endpointY2);
        //solve for midpoint coordinates
        const midpointX = (x1 + x2)/2;
        const midpointY = (y1 + y2)/2;
        return [midpointX, midpointY];
    };
};

module.exports = {
    AlgebraicFormulae
}