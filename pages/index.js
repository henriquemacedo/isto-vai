import Header from "@components/Header";
import Intro from "@components/Intro";
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
      name: "ISCA BIKES",
      url: "https://www.casafontes.com",
    },
    {
      image: "/images/partners/ubirider.svg",
      name: "Ubirider",
      url: "https://ubirider.com",
    },
    {
      image: "/images/partners/isca-logo.svg",
      name: "Casa Fontes - Turismo Rural",
      url: "http://www.isca.bike",
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

  const social = [
    {
      channel: "youtube",
      url: "#0",
      name: "YouTube",
    },
    {
      channel: "twitter",
      url: "#0",
      name: "Twitter",
    },
    {
      channel: "facebook",
      url: "#0",
      name: "Facebook",
    },
    {
      channel: "spotify",
      url: "#0",
      name: "Spotify",
    },
    {
      channel: "apple",
      url: "#0",
      name: "Apple Podcasts",
    },
    {
      channel: "google",
      url: "#0",
      name: "Google Podcasts",
    },
    {
      channel: "rss",
      url: "#0",
      name: "RSS",
    },
  ];

  const contacts = [
    {
      url: "mailto:istovaidarmerda.online@gmail.com",
      value: "Email",
    },
    {
      url: "https://twitter.com/SoniaTelesF",
      value: "@SoniaTelesF",
    },
  ];

  return (
    <main>
      <Header title="Isto Vai" />
      <Intro />
      <Featured />
      <Ivdm />
      <Partners partners={partners} />
      <Footer social={social} contacts={contacts} />
    </main>
  );
}
