import React, { FC, PropsWithChildren, ReactElement } from "react";
import { Header } from "./styles/Layout.module.css";

interface Props {}

const Layout: FC<Props> = ({
  children,
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <div className="items-center">
      <header className={Header}>
        <p className="font-bold text-sm">
          AMIRMUHA.<span className="text-tiny font-normal">portfolio</span>
        </p>
        <button>Resume</button>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
