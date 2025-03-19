import { createStore } from "redux";

let nextTodoId = 0;

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: ++nextTodoId,
          title: action.title,
          completed: false,
        },
      ];
    case "TOGGLE_TODO": {
      return state.map((todo) => {
        todo.id === action.todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo;
      });
    }
    default: {
      return state;
    }
  }
};

// persist
const defaultValues = [
  {
    id: 0,
    title: "hello",
    completed: false,
  },
  {
    id: 1,
    title: "hello world",
    completed: false,
  },
];

// const initialValue = {
//   todos: defaultValues,
//   user: {},
// };

const store = createStore(todos, defaultValues);

// action creators
const addTodo = (title) => ({
  type: "ADD_TODO",
  title,
});

const toggleTodo = (todoId) => ({
  type: "TOGGLE_TODO",
  todoId,
});

console.log(store.getState());

// store.dispatch(addTodo("Learn React"));
// console.log(store.getState());
// store.dispatch(addTodo("Learn Redux"));
// console.log(store.getState());

// store.dispatch(toggleTodo(1));
// console.log(store.getState());
