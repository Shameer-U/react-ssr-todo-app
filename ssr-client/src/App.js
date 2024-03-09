import './App.css';

import { Suspense, lazy } from "react";

const ToDoComponent = lazy(() =>
  import("./toDo.js")
);

const LoadingScreen = () => {
  return <div>Loading...</div>
}

function App() {
  return (
    <div className="App">
      <div className="header">React 18 SSR To Do</div>
      <Suspense fallback={<LoadingScreen/>}>
        <ToDoComponent />
      </Suspense>
    </div>
  );
}

export default App;
