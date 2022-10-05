import React from 'react'

type Props = {
  btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form>
      <div>
        <label htmlFor="title"></label>
        <input type="text" name='title' placeholder='Título da tarefa' />
      </div>
      <div>
        <label htmlFor="level"></label>
        <input type="text" name='level' placeholder='Dificuldade da tarefa' />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm
