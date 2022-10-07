import { useState } from "react";
import styles from "./App.module.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ITask } from "./interfaces/Task"

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) =>{
    setTaskList(taskList.filter((task)=>{
      return task.id !== id
    }))
  }

  return (
    <div>
      <Modal children={<TaskForm btnText={"Editar Tarefa"} taskList={taskList}/>} />
      <Header />
      <main className={styles.main}>
        <div>
          <h1>O que você vai fazer?</h1>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas :</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
