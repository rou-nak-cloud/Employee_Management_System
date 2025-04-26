import React, { useState } from 'react'
import { getLocalStorage } from '../../Utills/localStorage'

const AcceptTask = ({data, refreshData }) => {

  const [taskData, setTaskData] = useState(data); // -- local task state

  console.log(data)

  const handleComplete = () => {
    const {employees} = getLocalStorage()
    console.log('Employees:', employees);
    
    // Find the employee who owns this task
    const updatedEmployees= employees.map(employee => {
     if (!employee?.tasks) return employee; //  skip if tasks missing

        // Search the employee's tasks for this task
    const taskIndex = employee.tasks.findIndex((tasks) => 
      tasks.taskTitle == data.taskTitle && tasks.taskDescription == data.taskDescription
    )

    if(taskIndex !== -1){
        // true, Found the task, update it
        const updatedTasks = [...employee.tasks]
        updatedTasks[taskIndex] = {
          ...updatedTasks[taskIndex],
          completed: true,
          active: true,
          newTask: true
        }

        // Also update taskCounts
        const updatedTaskCounts = {
          ...employee.taskCounts,
          completed: employee.taskCounts.completed+1,
          active: employee.taskCounts.active-1
        }
        return {
          ...employee,
          task: updatedTasks,
          taskCounts: updatedTaskCounts
        }
    }
    return employee
    })

     // Save the updated data back to localStorage
     localStorage.setItem('employees', JSON.stringify(updatedEmployees))

       //  Update local taskData state too
        setTaskData(prev => ({
          ...prev,
          completed: true,
          active: false,
          newTask: false
        }));

     alert('Task marked as completed!')
  }


  const handleFailed = () => {
    const { employees } = getLocalStorage() || {};
  
    if (!employees) {
      console.error('No employees found!');
      return;
    }
  
    const updatedEmployees = employees.map((employee) => {
      if (!employee?.tasks) return employee;
  
      const taskIndex = employee.tasks.findIndex(
        (task) =>
          task.taskTitle === taskData.taskTitle &&
          task.taskDescription === taskData.taskDescription
      );
  
      if (taskIndex !== -1) {
        const updatedTasks = [...employee.tasks];
        updatedTasks[taskIndex] = {
          ...updatedTasks[taskIndex],
          failed: true,
          active: false,
          newTask: false,
        };
  
        const updatedTaskCounts = {
          ...employee.taskCounts,
          failed: employee.taskCounts.failed + 1,
          active: employee.taskCounts.active - 1,
        };
  
        return {
          ...employee,
          tasks: updatedTasks,
          taskCounts: updatedTaskCounts,
        };
      }
  
      return employee;
    });
  
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  
    // ✅ Update local taskData state too
    setTaskData(prev => ({
      ...prev,
      failed: true,
      active: false,
      newTask: false
    }));
  
    alert('Task marked as failed!');
  };
  
  
  return (
    <div>
      <div className='flex-shrink-0 p-5 h-full w-[400px] bg-green-900 rounded-xl'>
        <div className='flex items-center justify-between'>
            <h3 className='text-sm bg-red-800 px-4 py-2 rounded-xl'>{data.category}</h3>
            <h4 className=''>{data.taskDate}</h4>
        </div>
        <h2 className='mt-6 text-2xl font-semibold text-red-400'>{data.taskTitle}</h2>
        <p className='text-xl p-2'>{data.taskDescription}</p>

        <div className='flex justify-between mt-3'>
        <button 
          onClick={handleComplete}
          disabled={taskData.completed || taskData.failed} // disable if already completed or failed
          className={`py-2 px-4 text-medium rounded-2xl text-center ${
            taskData.completed 
              ? "bg-green-700 cursor-not-allowed opacity-60" 
              : taskData.failed 
              ? "bg-gray-500 cursor-not-allowed opacity-60"
              : "bg-emerald-700"
          }`}
        >
          {taskData.completed ? "Completed" : taskData.failed ? "Marked as Failed" : "Mark as complete"}
        </button>

        {/* Failed button - hide it if already completed */}
        {!taskData.completed && (
          <button 
            onClick={handleFailed}
            disabled={taskData.failed} // disable only if already failed
            className={`py-2 px-4 text-medium rounded-2xl text-center ${
              taskData.failed 
                ? "bg-gray-500 cursor-not-allowed opacity-60"
                : "bg-red-700"
            }`}
          >
            {taskData.failed ? "Failed" : "Mark as failed"}
          </button>
        )}
      </div>

      </div>
    </div>
  )
}

export default AcceptTask
