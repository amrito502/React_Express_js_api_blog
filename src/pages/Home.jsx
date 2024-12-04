import Layout from "../layout/Layout";
import Slider from "../components/Slider";
import Card from "../components/Card";
import Blog from "../components/Blog";
function Home() {
  return (
    <Layout>
      <Slider/>
      <Card/>
      <Blog/>
    </Layout>
  );
}

export default Home;
