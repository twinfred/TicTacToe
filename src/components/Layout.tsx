import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="bg-slate-600 text-white font-bold text-xl text-center p-8 mb-4">
        Tic Tac Toe
      </div>
      <main>{children}</main>
    </>
  );
};
