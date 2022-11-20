var math = prompt("please enter Maths Marks", "0");
console.log("Maths marks:".concat(math));
var num1 = persentInt(math);
var physics = prompt("please enter physics Marks", "0");
console.log("physics marks:".concat(physics));
var num2 = persentInt(physics);
var chem = prompt("please enter chemistry");
console.log("chemistry marks:".concat(chem));
var num3 = persentInet(chemistry);
function grade(math, physics, chem) {
    var sum = math + physics + chem;
    var sub_avg = sum / 3;
    if (sub_avg < 70) {
        return "Total marks are:".concat(sum, "Average is:").concat(sub_avg, "Grade: C");
    }
    else if (sub_avg > 70 && sub_avg < 90) {
        return "Total marks are:".concat(sum, "Average is:").concat(sub_avg, "Grade: B");
    }
    else if (sub_avg > 90) {
        return "Total marks are:".concat(sum, "Averae is:").concat(sub_avg, "Grade: A");
    }
    else {
        return "Enter valid number";
    }
}
var G = grade(num1, num2, num3);
console.log(G);
