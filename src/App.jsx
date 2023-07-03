import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
