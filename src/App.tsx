import { useState } from "react";
import styles from "./App.module.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ITask } from "./interfaces/Task"

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h1>O que você vai fazer?</h1>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas :</h2>
          <TaskList taskList={taskList}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
