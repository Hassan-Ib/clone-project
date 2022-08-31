import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/auth/index.js";
import { ProtectedRoutes } from "./components";
import { SignIn, ForgetPassword, SignUp } from "./pages/unAuth";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route path="auth-login" element={<SignIn />} />
          <Route path="auth-forget-password" element={<ForgetPassword />} />
          <Route path="auth-sign-up" element={<SignUp />} />
          {/* PROTECTED ROUTES */}
          <Route element={<ProtectedRoutes />}>
            <Route index element={<Home />} />
          </Route>
          {/* PROTECTED ROUTES */}
        </Route>
      </Routes>
    </main>
  );
}

export default App;
