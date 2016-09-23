//opgave 1
console.log("opgave 1");
var temp;
temp = true;
temp = ["Str1", "Str2", "Str3"];
temp = {studentid: 1, studentname: "Hallo World", age: 25};
var istudent = true;
var noOfstudent = 10;
var str = "sfdøksfd";
console.log(temp, istudent, noOfstudent, str);

//opgave 2
console.log("opgave 2");
var bool = [true, 10, "hallo", {studentname: "hallo"}];
for (i = 0; i < bool.length; i++) { 
    console.log(typeof bool[i]);
}

//opgave 3
console.log("opgave 3");
function student(id, name) {
    this.id = id;
    this.name = name;
    this.ToString = function () {return id + name;};
}
var student1 = new student(1, "Emil");
var student2 = new student(2, "Peter");
var student3 = new student(3, "Hallo");
var array = [student1, student2, student3];

for (student in array) {
    console.log(array[student].ToString());
}

//


function init() {

}
function NestedFunction() {
    function IndsideFuction() {

    }
    IndsideFuction();
}