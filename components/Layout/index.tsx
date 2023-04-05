import { useGetToken } from "services/hooks";

import Navbar from "components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useGetToken({
    onSuccess(data) {
      localStorage.setItem("token", data.access_token);
    },
    refetchInterval(data) {
      return data ? data.expires_in * 1000 : 0;
    },
  });

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
