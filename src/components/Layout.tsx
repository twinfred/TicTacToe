import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="bg-slate-600">Tic Tac Toe</div>
      {children}
    </div>
  );
};
