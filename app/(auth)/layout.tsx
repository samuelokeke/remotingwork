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
          <div className="col-span-6 h-full bg-gradient-to-tr from-indigo-600 via-slate-800 to-blue-500 p-8 grid place-content-center">
            <AuthHeader />

            <div className="mb-12">
              <h1 className="text-7xl font-bold mb-1">Sign up today with Key Halo!</h1>
              <div className="w-2/4 h-1 bg-white"></div>
            </div>

            <h3 className="text-5xl font-medium text-gray-300 mb-6">
              Get your dream job with KeyHalo, where possibilities are endless.
            </h3>

            <p className="text-3xl font-light ">We want to join you in your job seeking journey.</p>
          </div>

          <div className="col-span-6">{children}</div>
        </div>
      </div>
    </section>
  );
}
