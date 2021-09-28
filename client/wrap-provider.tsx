import { WrapRootElementBrowserArgs } from "gatsby";
import React, { FC } from "react";
import Layout from "./src/components/Layout";

const wraper: FC<WrapRootElementBrowserArgs> = ({ element }) => {
  return <Layout>{element}</Layout>;
};

export default wraper;
