import {myQueue} from "./interface";

class myClass implements myQueue 
{
    myArray:Array<string>= [];

    addTask(task:string):number
    {
        this.myArray.push(task);
        console.log("Item Added: "+task)

        return this.myArray.length;
    }

    listAllTasks()
    {
        for(let item of this.myArray)
        {
            console.log(item)
        }

    }

    deleteTask(task:string):number
    {
        console.log("\n")
        let index : number = this.myArray.indexOf(task);
        if(index > -1)
        {
            this.myArray.splice(index,1);
        }
        return this.myArray.length;
    }
}

let newClass = new myClass();
newClass.addTask("hello");
newClass.addTask("world");
newClass.listAllTasks();
newClass.deleteTask("hello");
newClass.listAllTasks();
