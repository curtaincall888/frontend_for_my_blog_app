import { DoubleHeader } from "./Header";
import { NavbarSimple } from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <DoubleHeader mainLinks={[]} userLinks={[]} />
      <div className="app-body">
        <NavbarSimple />
        <main className="main">{children}</main>
      </div>
    </>
  );
};

export default Layout;
