import React, { useState } from "react";
import "./PageShell.css";
import { PageContextProvider } from "./usePageContext";
import { Navbar, Footer, Sidebar } from "../src/components/UI";
import { Context } from "../src/context";

export { PageShell };

function PageShell({ pageContext, children }) {
  const [sidebarIsOpened, setSidebarIsOpened] = useState(false);

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Context.Provider value={{ sidebarIsOpened, setSidebarIsOpened }}>
          <Navbar />
          <Sidebar />
        </Context.Provider>
        <Content>{children}</Content>
        <Footer />
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Content({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
