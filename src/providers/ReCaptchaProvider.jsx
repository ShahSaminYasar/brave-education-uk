"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ReCaptchaProvider = ({ children }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};
export default ReCaptchaProvider;
