var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
var mark = 0;

for (let i = 0; i < students.length; i++) {
    mark += students[i][1];
    var average = (mark/students.length);
}

console.log("average is " + (average));

if (average < 60){
    console.log("grade is a F :(");
} else if (average < 70) {
    console.log("grade is a D :(");
} else if (average < 80) {
    console.log("grade is a C :)");
} else if (average < 90) {
    console.log("grade is a B :)");
} else if (average < 100) {
    console.log("grade is an A :)");
}