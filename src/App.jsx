import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import NewPassword from "./pages/NewPassword.jsx";
import ConfirmAccount from "./pages/ConfirmAccount.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="forgot-password/:token" element={<NewPassword />} />
          <Route path="confirm-account/:id" element={<ConfirmAccount />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
