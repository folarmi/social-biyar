import { Routes, Route } from "react-router-dom";
import {
  EmailSent,
  ForgotPassword,
  Login,
  Register,
  ResetPassword,
  VerifyEmail,
} from "../pages";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/email-sent" element={<EmailSent />} />
    </Routes>
  );
};

export { RoutePage };
