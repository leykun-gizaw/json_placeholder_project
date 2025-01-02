import { Todo } from "../../definitions.ts";
import React, { useContext } from "react";
import { RoutesContext } from "../../contexts/RoutesContext.ts";
import useFetchData from "../../hooks/useFetchData.ts";

const TodosComponent: React.FC = () => {
  const todosRoute = useContext(RoutesContext).find(
    (route) => route.name === "todos",
  );
  const todos = useFetchData<Todo[]>(todosRoute?.href as string);
  console.log(todos);
  return <></>;
};

export default TodosComponent;
