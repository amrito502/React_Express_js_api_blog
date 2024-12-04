import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader"

function Layout(props) {
  return (
    <>
    
      <Navbar />
          {props.children}
      <Footer />
    </>
  );
}

export default Layout;
