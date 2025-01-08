import "./App.css";
import Content from "./components/Content/Content";
import MainHeader from "./components/Header/MainHeader/MainHeader";
import MainCtxProvider from "./context/MainCtx";

function App() {
  return (
    <MainCtxProvider>
      <div className="app">
        <MainHeader />
        <Content />
      </div>
    </MainCtxProvider>
  );
}

export default App;
