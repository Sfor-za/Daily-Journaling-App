import "./app.css";
import Clock from "./clock";
import Beditor from "./editor";
import Journalpage from "./journalpage";

function App() {
  return (
    <div className="app mt-3">
      <div className="header">
        <div className="clock d-flex justify-content-center align-items-center">
          <Clock />
        </div>
        <h1 className="heading text-center ">Daily Journaling App</h1>
      </div>
      <div className="main">
        <div className="entry-box">
          <div className="row entry-list">
            <h2>Your Entries</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              sequi pariatur ipsa qui est! Laboriosam accusantium, iusto natus
              ullam explicabo culpa odit maxime ipsa pariatur distinctio
              possimus incidunt consequuntur facere?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              sequi pariatur ipsa qui est! Laboriosam accusantium, iusto natus
              ullam explicabo culpa odit maxime ipsa pariatur distinctio
              possimus incidunt consequuntur facere?
            </p><p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              sequi pariatur ipsa qui est! Laboriosam accusantium, iusto natus
              ullam explicabo culpa odit maxime ipsa pariatur distinctio
              possimus incidunt consequuntur facere?
            </p>
          </div>
        </div>
        <div className="text-box">
          {/* <Journalpage/> */}
          <Beditor />
        </div>
      </div>
    </div>
  );
}

export default App;
