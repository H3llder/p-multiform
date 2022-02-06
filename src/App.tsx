import './App.css';
import { Router } from "./router";
import { FormProvider } from "./contexts/FormContext";

const App = () => {
  return (
    <>
      <FormProvider>
        <Router /> {/** Rotas reactjs */}
      </FormProvider>
    </>
  );
}

export default App;