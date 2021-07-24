import Header from "@components/Header";
import Hero from "@components/Hero";
import Featured from "@components/Featured";
import Ivdm from "@components/Ivdm";
import Partners from "@components/Partners";
import Footer from "@components/Footer";

export default function Home() {
  const partners = [
    {
      image: "/images/partners/marketing-logo.svg",
      name: "market[ING]",
      url: "https://inglesparamarketing.com",
    },
    {
      image: "/images/partners/casa-fontes.svg",
      name: "Casa Fontes - Turismo Rural",
      url: "https://www.casafontes.com",
    },
    {
      image: "/images/partners/ubirider.svg",
      name: "Ubirider",
      url: "https://ubirider.com",
    },
    {
      image: "/images/partners/isca-logo.svg",
      name: "ISCA BIKES",
      url: "http://www.isca.bike",
    },
    {
      image: "/images/partners/square-panda.svg",
      name: "squarepanda",
      url: "https://squarepanda.pt/",
    },
    {
      image: "/images/partners/n2-podcast.svg",
      name: "Nacional 2 Podcast",
      url: "https://nacional2podcast.pt",
    },
    {
      image: "/images/partners/istuff.svg",
      name: "iStuff",
      url: "https://istuff.pt",
    },
    {
      image: "/images/partners/doccmedia.svg",
      name: "Docc Media",
      url: "https://facebook.com/doccmedia",
    },
    {
      image: "/images/partners/esec.svg",
      name: "ESEC",
      url: "https://esec.pt",
    },
  ];

  return (
    <main>
      <Header title="Isto Vai" />
      <Hero />
      <Featured />
      <Ivdm />
      <Partners partners={partners} />
      <Footer />
    </main>
  );
}
