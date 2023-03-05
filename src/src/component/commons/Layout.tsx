import { FooterSimple } from "./Footer";
import { DoubleHeader } from "./Header";
import { NavbarSimple } from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <DoubleHeader
        mainLinks={[
          { label: "home", link: "/" },
          { label: "blog", link: "/blog" },
          { label: "profile", link: "#" },
          { label: "my page", link: "#" },
        ]}
        userLinks={[
          { label: "home", link: "#" },
          { label: "blog", link: "#" },
          { label: "fuga", link: "#" },
          { label: "my page", link: "#" },
        ]}
      />

      <div className="app-body">
        <main className="main">{children}</main>
      </div>
      <FooterSimple
        links={[
          { label: "policy", link: "#" },
          { label: "blog", link: "#" },
          { label: "profile", link: "#" },
          { label: "my page", link: "#" },
        ]}
      ></FooterSimple>
    </>
  );
};

export default Layout;
