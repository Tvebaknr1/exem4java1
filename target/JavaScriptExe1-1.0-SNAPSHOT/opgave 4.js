//opagve 4
console.log("opgave 4");
function student(id, name, isfemale, age) {
    this.id = id;
    this.name = name;
    this.isfemale = isfemale;
    this.age = age;
}
var student1 = new student(1, "Emil", false, 10);
var student2 = new student(2, "Peter", false, 20);
var student3 = new student(3, "Hallo", true, 30);
var student4 = new student(4, "name", true, 45);
var array = [student1, student2, student3,student4];
console.log(Youngeststudent(Array));
function Youngeststudent(arraylist) {
    var age = Number.MAX_VALUE;
    var tempstudent = arraylist[0];
    for (student in arraylist) {
        if (arraylist[student].age < tempstudent.age)
            tempstudent = arraylist[student];

    }
    return tempstudent;
}
console.log(isFemale(array));
function isFemale(arraylist) {
    var ArrayList = [];
    for (student in arraylist) {
        if (arraylist[student].isfemale)
        
        ArrayList.push(arraylist[student]);

    }
    return ArrayList;
}
//opgave 5
console.log("opgave 5");
function removelast(arraylist){
    arraylist.pop();
    return arraylist;
    
}
var Array1 = ["burger","chesse","chesseburger"];
console.log(removelast(Array1));

//opgave 6
console.log("opgave 6");
function above30(arraylist){
    for (student in arraylist){
        if(student.age>30)
            console.log(student);
    }
}
above30(array);
//opgave 7
console.log("opgave 7");
function max(arraylist){
    Math.max(arraylist);
}

//opgave 8
console.log("opgave 8");
var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
console.log(n);