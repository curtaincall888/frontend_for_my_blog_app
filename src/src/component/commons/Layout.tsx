import { FooterSimple } from "./Footer";
import { DoubleHeader } from "./Header";
import { NavbarSimple } from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <DoubleHeader
        mainLinks={[
          { label: "hoge", link: "#" },
          { label: "fuga", link: "#" },
          { label: "fizz", link: "#" },
          { label: "buzz", link: "#" },
        ]}
        userLinks={[]}
      />

      <div className="app-body">
        <main className="main">{children}</main>
      </div>
      <FooterSimple links={[{ link: "#", label: "hoge" }]}></FooterSimple>
    </>
  );
};

export default Layout;
