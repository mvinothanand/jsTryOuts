var summa = "hello";
console.log(summa);
alert(summa);

const square = (input) => {
    return multiply(input, input);
}

//alert(square(5));
const sumandsquare = (i1, i2) => {
    return square(i1) + square(i2) + 2 * multiply(i1, i2);
}

function multiply(i1, i2) {
    return i1 * i2;
}

sumandsquare(2,4);
