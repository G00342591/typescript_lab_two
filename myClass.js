"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myClass = /** @class */ (function () {
    function myClass() {
        this.myArray = [];
    }
    myClass.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log("Item Added: " + task);
        return this.myArray.length;
    };
    myClass.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.myArray; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    myClass.prototype.deleteTask = function (task) {
        console.log("\n");
        var index = this.myArray.indexOf(task);
        if (index > -1) {
            this.myArray.splice(index, 1);
        }
        return this.myArray.length;
    };
    return myClass;
}());
var newClass = new myClass();
newClass.addTask("hello");
newClass.addTask("world");
newClass.listAllTasks();
newClass.deleteTask("hello");
newClass.listAllTasks();
