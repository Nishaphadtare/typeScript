var math = prompt("Please enter Maths marks", "0");
console.log("Maths Marks:".concat(math));
var num1 = parseInt(math);

var physics = prompt("Please enter Physics marks", "0");
console.log("Physics Marks:".concat(physics));
var num2 = parseInt(physics);

var chem = prompt("Please enter Chemistry  marks", "0");
console.log("Chemistry Marks:".concat(chem));
var num3 = parseInt(chem);

function grade(math, physics, chem) {
    var sum = math + physics + chem;
    var sub_avg = sum / 3;
    if (sub_avg < 70) {
        return " Total marks are:".concat(sum, " Agerage is:").concat(sub_avg, " Garde: C");
    }
    else if (sub_avg > 70 && sub_avg < 90) {
        return "Total marks are: ".concat(sum, " Agerage is: ").concat(sub_avg, "  Garde: B");
    }
    else if (sub_avg >= 90) {
        return "Total marks are:".concat(sum, " Agerage is:").concat(sub_avg, " Garde: A");
    }
    else {
        return "Enter valid Number";
    }
}
var G = grade(num1, num2, num3);
console.log(G);