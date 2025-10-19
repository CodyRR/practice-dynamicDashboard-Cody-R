import React from "react";

const DynamicDashboard = () => {

    const newDate = new Date();
    const formattedDate = newDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const userName = "Cody";
    const premium = false;
    const tasks = [
        {
            "taskName": "Get groceries",
            "completed": true
        },
        {
            "taskName": "Do homework",
            "completed": false
        },
        {
            "taskName": "Video games",
            "completed": false
        },
        {
            "taskName": "Work",
            "completed": true
        },
        {
            "taskName": "Dinner",
            "completed": false
        }
    ]

    let numDone = 0;
    let numNotDone = 0;

    for(const task of tasks){
        if(task.completed){numDone++}
         else{ numNotDone++};
    }

    return (
        <div>
            <h2 className="date">{formattedDate}</h2>
            <h1>Welcome, {userName}</h1>
            <h2>{premium ?  "Thank you for being a premium member!" : "Upgrade to premium to enjoy exclusive features!"}</h2>
            <h3>
                <ul>
                    {tasks.map((task) => (
                        <li className={task.completed ? "completeTask" : "incompleteTask"}>{task.taskName} - {task.completed ? "✅" : "❌"}</li>
                    ))}
                </ul>
            </h3>
            <h3>{numDone} completed: {numNotDone} incomplete</h3>
        </div>
    )
};

export default DynamicDashboard;