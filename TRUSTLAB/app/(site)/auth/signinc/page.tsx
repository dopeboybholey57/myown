import Signinc from "@/components/Auth/Signinc";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - Solid SaaS Boilerplate",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const SigninPageC = () => {
  return (
    <>
      <Signinc />
    </>
  );
};

export default SigninPageC;
