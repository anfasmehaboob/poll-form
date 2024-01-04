import { useEffect } from "react";
import "./App.css";
import Form from "./Components/Forms/Form";
import { questions } from "./Questions/Questions";
import { setQuestions } from "./Store/formSlice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuestions(questions));
  }, []);

  return (
    <div className="App">
      <Form questions={questions} />
    </div>
  );
}

export default App;
