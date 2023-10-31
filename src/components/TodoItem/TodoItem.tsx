import React, { FC } from 'react';
import './styles.css'
export interface ITodoItem{
  userId: number,
  id: number,
  title: string,
  completed: boolean
  }
const TodoItem:FC<{todo:ITodoItem}> = ({ todo }) => {
  return (
    <div className={`todo ${todo.completed ? 'completed' : 'uncompleted'}`}>
      <p>{todo.title}</p>
    </div>
  );
};

export default TodoItem;