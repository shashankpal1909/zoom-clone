import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main>
    <h6>Header</h6>
    {children}
    <h6>Footer</h6>
    </main>;
};

export default RootLayout;
