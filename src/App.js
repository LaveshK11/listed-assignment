import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/login/Login";
import Dashboard from "./component/dashboard/Dashboard";
import DetailsProvider from "./component/login/DetailsProvider";
import RequireAuth from "./component/login/RequireAuth";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DetailsProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Login></Login>
                </>
              }
            />
            <Route
              path="/dashboard"
              element={
                <>
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                </>
              }
            />
          </Routes>
        </DetailsProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
