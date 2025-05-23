import type { Metadata } from "next";
import AuthHeader from "./AuthHeader";

export const metadata: Metadata = {
  title: "Remoting.work | Authentication",
  description: "Work your dream job from home",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="w-full lg:max-w-7xl mx-auto lg:px-0 px-4">
        <div className="w-full min-h-screen grid grid-cols-12 gap-6 items-center border-red-500">
          <div className="lg:col-span-6 col-span-12 h-full bg-gradient-to-tr from-indigo-600 via-slate-800 to-blue-500 p-8 grid place-content-center">
            <AuthHeader />

            <div className="mb-8">
              <h1 className="lg:text-6xl text-white text-4xl font-bold mb-1">Sign up today with Key Halo!</h1>
              <div className="w-2/4 h-1 bg-white"></div>
            </div>

            <h3 className="lg:text-4xl text-2xl font-light text-white mb-10">
              Get your dream job with KeyHalo, where possibilities are endless.
            </h3>

            <p className="text-xl text-white font-light">We want to join you in your job seeking journey.</p>
          </div>

          <div className="lg:col-span-6 col-span-12">{children}</div>
        </div>
      </div>
    </section>
  );
}
