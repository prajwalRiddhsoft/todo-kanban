import React, { useEffect, useState } from 'react';
import {TodoList, AddTodo, ShowOptions} from './components/TodoList';
import { useDispatch } from 'react-redux/es/exports';

enum showStates {
  ALL = 'all',
  COMPLETED = 'completed',
  REMANING = 'remaning'
}

function App() {
  const [show, setShow] = useState(showStates.ALL);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: `show/${show}`});
  }, [show, dispatch]);
  return (
    <div className="App">
      <ShowOptions show={show} setShow={setShow} />
      <AddTodo />
      <TodoList/>
    </div>
  );
}
export default App;
