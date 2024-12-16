import { Todo } from "../../definitions.ts";
import React from "react";

interface TodosComponentProps {
  todos: Todo[];
}
const TodosComponent: React.FC<TodosComponentProps> = (props) => {
  console.log(props.todos);
  return <></>;
};

export default TodosComponent;
