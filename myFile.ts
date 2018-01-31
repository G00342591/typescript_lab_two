function addition(value: string)
{
    console.log("Value is: " + value);
    console.log("Color is: " + color);
    console.log("Number is: " + decimal);
}
let firstVal: number = 42;
let secondVal: number = 1;
let color: string = "blue";
color = 'red';
let decimal: number = 6;
let sumOfVals: string = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);