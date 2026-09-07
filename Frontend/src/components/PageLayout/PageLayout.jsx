import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "../Hero/Hero.scss";
function PageLayout({
  children,
  withCta = true
}) {
  return <>
      <Navbar />
      <main>
        {children}
        {withCta && <Contact />}
      </main>
      <Footer />
    </>;
}
export {
  PageLayout as default
};
