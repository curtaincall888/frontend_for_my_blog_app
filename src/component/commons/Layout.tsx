import { HeaderResponsive } from "./Header";
import { NavbarSimple } from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <HeaderResponsive links={[]} />
      <div className="app-body">
        <NavbarSimple />
        <main className="main">{children}</main>
      </div>
    </>
  );
};

export default Layout;
