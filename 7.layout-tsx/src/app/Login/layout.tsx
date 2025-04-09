import Link from "next/link";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Link href={`./Login/Loginone`}>Loginone</Link>
      <Link href={`./Login/Loginadmin`}>Loginadmine</Link>
      <h1>This is Layout page</h1>
      {children}
    </div>
  );
};

export default Layout;
