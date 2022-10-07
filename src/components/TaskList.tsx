import {ITask} from "../interfaces/Task"
import styles from "./TaskList.module.css";


type Props = {
  taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
  return (
   <>
    {taskList.length > 0 ? (taskList.map((task => (<div key={task.id}>{task.title} {task.difficulty} </div>))))
    :
    (<p>Não há tarefas</p>)}
   </>
  )
}

export default TaskList
