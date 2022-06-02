import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "./sagas/news/newsSlice";
// redux saga architecture
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  const hits = useSelector((state) => state.news.hits);
  console.log("App ~ hits", hits);
  return <div></div>;
}

export default App;
