import Signind from "@/components/Auth/Signind";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - Solid SaaS Boilerplate",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const SigninPageD = () => {
  return (
    <>
      <Signind />
    </>
  );
};

export default SigninPageD;
