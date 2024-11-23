import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Question1 from "./components/Question1";
import CodeIDE from "./components/CodeIDE";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="flex">
          <SideBar />
          <Question1/>
          <div></div>
          <CodeIDE/>
        </div>
      </div>
    </>
  );
}

export default App;
