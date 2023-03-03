import './App.css';
import Template from './template';
import FinishedTasks from './finishedtasks';
import {TodoListHigh, TodoListLow} from './todo-list';

function App() {
  return (
<>
  <div className="wrapper">
    <main className="page">
      <div className="page__todo todo">
        <div className="todo__container">
          <div className="todo__block">
<TodoListHigh/>
<TodoListLow/>
          </div>
        </div>
      </div>
<FinishedTasks/>
    </main>
  </div>
<Template/>
</>
  );
}

export default App;