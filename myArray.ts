let myArray:Array<String>= [];

function addTask(task:string):number
{
    myArray.push(task);
    console.log("Item Added: "+task)

    return myArray.length;
}

function listAllTasks()
{
    for(let item of myArray)
    {
        console.log(item)
    }

}

function deleteTask(task:String):number
{
    console.log("\n")
    let index : number = myArray.indexOf(task);
    if(index > -1)
    {
        myArray.splice(index,1);
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
