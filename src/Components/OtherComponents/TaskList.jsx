import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from '../TaskList/FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-15 '>
      
      {/* <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask /> */}

      {data.tasks.map((elem,idx) => {
        if(elem.active){
          return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem} />
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
        }
      })}


      {/* <div className='flex-shrink-0 h-full w-[400px] bg-green-800 rounded-xl'></div> */}
      {/* <div className='flex-shrink-0 h-full w-[400px] bg-green-700 rounded-xl'></div> */}
      {/* <div className='flex-shrink-0 h-full w-[400px] bg-green-600 rounded-xl'></div> */}

    </div>
  )
}

export default TaskList
