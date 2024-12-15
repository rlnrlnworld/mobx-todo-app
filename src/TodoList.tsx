import { observer } from "mobx-react";
import TodoStore from "./TodoStore";
import { useState } from "react";

interface TodoListProps {
  todoStore: TodoStore
}

export const TodoList: React.FC<TodoListProps> = observer(({ todoStore }) => {
  const [value, setValue] = useState<string>('')

  return (
    <div>
      <input 
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
        type="text"
      />
      <button
        onClick={() => {
          if (value) {
            todoStore.addTodo(value)
          }
          setValue('')
        }}
      >
        ADD
      </button>
      <br /><br />
      <div>Completed: {todoStore.status.completed} </div>
      <div>Remaining: {todoStore.status.remaining} </div>
      <br />
      <ul>
        {todoStore.todos.map((todo) => {
          return (
            <li 
              key={todo.id}
              onClick={() => {
                todoStore.toggleTodo(todo.id)
              }}
            >
              [{todo.completed ? 'OK' : ' '}]     {todo.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
})