const cloneDeep = x => {
  return JSON.parse(JSON.stringify(x))
}

const freeze = x => Object.freeze(cloneDeep(x));

const INITIAL_STATE = {
  todos: [],
  currentFilter: 'ALL'
}

export default (initialState = INITIAL_STATE) => {
  const state = cloneDeep(initialState);

  let listeners = [];

  const addChangeListener = listener => {
    listeners.push(listener);

    listener(freeze(state));

    return () => {
      listeners = listeners.filter( l => l !== listener);
    }
  }

  const invokeListeners = () => {
    const data = freeze(state);
    listeners.forEach(l => l(data));
  }

  const getState = () => {
    return Object.freeze(cloneDeep(state))
  }

  const addItem = (text) => {
    if (!text) return
    state.todos.push({
      text, completed: false
    })

    invokeListeners();
  }
  const updateItem = (index, text) => {
    if (!text || index < 0 ) return;

    if(!state.todos[index]) return;

    state.todos[index].text = text;

    invokeListeners();
  }
  const deleteItem = (index) => {
    if(index < 0) return;

    if(!state.todos[index]) return;

    state.todos.splice(index, 1);

    invokeListeners();
  }
  const toggleITemCompleted = (index) => {
    if(index < 0) return;

    if(!state.todos[index]) return;

    state.todos[index].completed = !state.todos[index].completed;

    invokeListeners();
  }
  const completeAll = () => {
    state.todos.forEach(t =>{
      t.completed = true;
    })
    invokeListeners();

  }
  const clearCompleted = () => {
    state.todos = state.todos.filter(t => !t.completed);
    invokeListeners();

  }
  const changeFilter = (filter) => {
    state.currentFilter = filter;
    invokeListeners();

  }

  return {
    addItem,
    updateItem,
    deleteItem,
    toggleITemCompleted,
    completeAll,
    clearCompleted,
    changeFilter,
    addChangeListener
  }
}
