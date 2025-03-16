import React from "react";
import LoginForm from "./LoginForm";
import { GalleryVerticalEnd } from "lucide-react";

const Container = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a
            href="#"
            className="flex items-center gap-2 font-medium keychainify-checked"
          >
            <div className="flex h-8 w-[80px] items-center justify-center rounded-md">
              <img src="/images/cfyy.png" alt="cfyy-logo" />
            </div>
            Caring From You To Yours.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        {/* Overlay div (Ensure it's above the image) */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Background Image */}
        <img
          src="/images/login-page-image2.jpg"
          alt="login-page-image"
          className="absolute inset-0 h-full w-full object-cover z-0 dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Container;
