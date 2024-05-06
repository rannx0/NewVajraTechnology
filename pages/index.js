import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Services from "../components/services";

import { benefitOne } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Vajra Technology</title>
        <meta
          name="description"
          content="Jasa Pengembangan Web Terbaik di Indonesia"
        />
        <link rel="icon" href="/img/LogoVA.png" />
      </Head>

      <Navbar id="home"/>
      <Hero />
      <Services />
      <SectionTitle
        pretitle="Vajra Benefits"
        title=" Keunggulan Website Di Vajra Technology">
      </SectionTitle>
      <Benefits data={benefitOne} />
      <SectionTitle
        pretitle="Paket Layanan"
        title="Harga Layanan">
        Miliki website hanya dengan Rp. 499.000 per bulan.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;