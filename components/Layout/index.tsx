import Navbar from "components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="px-10">{children}</main>
    </>
  );
};

export default Layout;
