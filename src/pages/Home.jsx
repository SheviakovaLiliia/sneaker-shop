import { Header } from "../components/Header";
import { News } from "../components/News/News";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";

export const Home = () => {
  return (
    <section>
      <Header />
      <News />
      <Main />
      <Footer />
    </section>
  );
};
