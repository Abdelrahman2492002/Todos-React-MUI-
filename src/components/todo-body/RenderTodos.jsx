import React from "react";
import Todo from "./todo/Todo";

const RenderTodos = ({ todosBeRendered }) => {
  return (
    <div>
      {todosBeRendered.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default RenderTodos;
