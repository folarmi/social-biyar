import { Routes, Route } from "react-router-dom";
import {
  Content,
  Dashboard,
  EmailSent,
  ForgotPassword,
  Login,
  Register,
  ResetPassword,
  Settings,
  VerifyEmail,
} from "../pages";
import {
  content,
  dashboard,
  emailSent,
  forgotPassword,
  landingPage,
  login,
  resetPassword,
  settings,
  verifyEmail,
} from "./routerPaths";

const RoutePage = () => {
  return (
    <Routes>
      <Route path={landingPage} element={<Register />} />
      <Route path={login} element={<Login />} />
      <Route path={forgotPassword} element={<ForgotPassword />} />
      <Route path={resetPassword} element={<ResetPassword />} />
      <Route path={verifyEmail} element={<VerifyEmail />} />
      <Route path={emailSent} element={<EmailSent />} />
      <Route path={dashboard} element={<Dashboard />} />
      <Route path={content} element={<Content />} />
      <Route path={settings} element={<Settings />} />
    </Routes>
  );
};

export { RoutePage };
