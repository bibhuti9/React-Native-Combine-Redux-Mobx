export function TodosAction({todos}) {
  function getTodos() {
    todos.set(1, {count: 1});
  }
  function getTodosById() {
    return todos;
  }
  function putValue(value) {
    todos.push({count: value});
  }
  return {
    getTodos,
    getTodosById,
    putValue,
  };
}
