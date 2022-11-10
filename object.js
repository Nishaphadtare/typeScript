var emp = {
    name: "Dnyanesh",
    score: 250
};
console.log("-------------------------------------------------------------------");
for (var e in emp) {
    console.log(e);
    console.log(emp[e]);
}
console.log("-------------------------------------------------------------------");
var courses = ["ANgular", "ReactJs", ".Net"];
courses.push("java");
courses.push(10);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
