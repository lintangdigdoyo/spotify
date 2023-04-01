import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const Styles = () => (
  <style jsx global>{`
    :root {
      --font-montserrat: ${montserrat.style.fontFamily};
    }
  `}</style>
);

export default Styles;
