import React, { FC, PropsWithChildren, ReactElement } from "react";
import { Header } from "./styles/Layout.module.css";

interface Props {
  title: string;
}

const Layout: FC<Props> = ({
  title,
  children,
}: PropsWithChildren<Props>): ReactElement => {
  return (
    <div className="items-center">
      <title className="capitalize">{title}</title>
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
