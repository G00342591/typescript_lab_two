"use strict";
var myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log("Item Added: " + task);
    return myArray.length;
}
function listAllTasks() {
    for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
        var item = myArray_1[_i];
        console.log(item);
    }
}
function deleteTask(task) {
    console.log("\n");
    var index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
    }
    return myArray.length;
}
addTask("Run");
addTask("Walk");
addTask("Hop");
addTask("Jump");
addTask("Crawl");
listAllTasks();
deleteTask("Hop");
listAllTasks();
