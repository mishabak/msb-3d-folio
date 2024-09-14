import { node } from "prop-types";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}

Layout.propTypes = {
  children: node,
};
export default Layout;
