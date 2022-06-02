import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HackerNews from "./components/HackerNews";
import { getNews } from "./sagas/news/newsSlice";
// redux saga architecture
function App() {
  // const hits = useSelector((state) => state.news.hits);
  // console.log("App ~ hits", hits);
  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
