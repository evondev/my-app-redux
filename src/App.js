import { useSelector } from "react-redux";
import Card from "./components/Card";
import Counter from "./components/Counter";

function App() {
  const globalOptions = useSelector((state) => state.global);
  console.log("App ~ globalOptions", globalOptions);
  // const handleToggleDarkmode = () => {
  //   dispatch(toggleDarkMode(true));
  // };

  return (
    <div>
      <Card></Card>
      <Counter></Counter>
    </div>
  );
}

export default App;
