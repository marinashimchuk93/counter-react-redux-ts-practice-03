import {Counter} from "../components/Counter/Counter.tsx";
import {Setting} from "../components/Setting/Setting.tsx";
import "./App.css"


export const App = () => {
  return (
    <div className={"app"}>
      <Setting />
      <Counter />
    </div>
  );
};