import type { FC, ReactNode } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <div className="w-64 fixed h-screen">
        <Sidebar />
      </div>

      {/* Main content + Navbar +*/}
      <div className="flex-1 ml-64 flex flex-col overflow-auto">
        <main className="">
          {children}
        </main>

    
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
