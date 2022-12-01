import {types} from 'mobx-state-tree';
import {TodosAction} from './Todo/action';

const Todo = types.model({
  count: types.number,
});

const User = types.model({
  name: types.optional(types.string, ''),
});

const RootStore = types
  .model({
    users: types.map(User),
    todos: types.array(Todo),
  })
  .actions(TodosAction);

const store = RootStore.create({
  users: {}, // users is not required really since arrays and maps are optional by default since MST3
});
export default store;
