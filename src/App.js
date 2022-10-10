import "./styles.css";
import User from "./User.js";
import Member from "./Member.js";
export default function App() {
  function child() {
    alert("I am called from App Component");
  }
  return (
    <div className="App">
      <User data={child} />
      <Member data={child} />
    </div>
  );
}
