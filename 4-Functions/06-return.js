let name = fName => {  // return has to be used since its a block body function //
    return "Will";
}

let MyNameIs = name();
console.log(MyNameIs);

let CalculateBill = (bill, tip) => {
    return "";
}

let x = (bill = bill * tip + 1);

// function //

function tipCalc(bill) {
    let tip = bill * 0.2;
    return tip.toFixed(2);
}
let totalTip = tipCalc(25.24);
console.log(totalTip);

