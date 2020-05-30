import React, { useEffect } from "react";
import MainRouter from "./routes/MainRouter";
import { BrowserRouter } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/action/auth.actions";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
