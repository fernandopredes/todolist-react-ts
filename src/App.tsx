import styles from "./App.module.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ITask } from "./interfaces/Task"

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h1>O que você vai fazer?</h1>
          <TaskForm btnText="Criar Tarefa"/>
        </div>
        <div>
          <h2>Suas tarefas :</h2>
          <TaskList/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
