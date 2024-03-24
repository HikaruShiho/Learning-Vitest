import type { Todo } from "../types/todo";

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch("http://localhost:5173/todos")
    .catch((_) => {
      throw new Error("エラーが発生しました。");
    });

  return await res.json();
}
