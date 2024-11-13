import "./App.css";

//lesson imports
import Lesson02 from "./lessons/Lesson02/Lesson02";
import Lesson03 from "./lessons/Lesson03/Lesson03";

//homework imports
import Homework02 from "./homeworks/Homework02/Homework02";

//consultation imports


function App() {
  return (
    <div className="App">
      {/* <Lesson02 /> */}
      {/* <Homework02 /> */}
      <Lesson03/>
    </div>
  );
}

export default App;