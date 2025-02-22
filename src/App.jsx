import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "../src/redux/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyle";
import Theme from "../Theme";
import Loading from "./components/loading/index";
// import AutoLogin from "./components/authenticated/AutoLogin/AutoLogin";
import Dashboard from "./components/dashboard/index";
import routes from "../router";

const App = () => {
  return (
    <Theme>
      <Provider className="App" store={store}>
        <>
          <GlobalStyles />
          <Suspense fallback={<Loading />}>
            <BrowserRouter>
              <Routes>
                {/* <Route
                  path="/dashboard"
                  element={<Dashboard />}
                /> */}
                <Route path="dashboard" element={<Dashboard />} />
                {routes.map((route) => {
                  const { path } = route;
                  return <Route {...route} key={path} />;
                })}
              </Routes>
            </BrowserRouter>
          </Suspense>
        </>
      </Provider>
    </Theme>
  );
};

export default App;
