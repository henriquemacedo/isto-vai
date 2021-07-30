import Header from "@components/Header";
import PageIntro from "@components/PageIntro";
import Article from "@components/Article";
import Partners from "@components/Partners";
import Footer from "@components/Footer";
import ButtonLink from "@components/ButtonLink";
import StreamButtons from "@components/StreamButtons";
// import Link from "next/link";

export default function PedalarNaBosta() {
  const partners = [
    {
      image: "/images/partners/marketing-logo.svg",
      name: "market[ING]",
      url: "https://inglesparamarketing.com",
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
      image: "/images/partners/picselworks.svg",
      name: "Picselworks",
      url: "https://website-286603728600092778229-photographer.negocio.site",
    },
  ];

  return (
    <main>
      <Header title="Isto Vai — Pedalar na Bosta" />
      <PageIntro
        title={["Isto Vai", <br key={1}></br>, "Pedalar na Bosta"]}
        subtitle="Manuel João Vieira entrevistado por Bernardo Gomes e Susana Peralta"
        date="4 de agosto — 21:30"
        image="/images/isto-vai--pedalar-na-bosta-offset.svg"
      />

      <StreamButtons>
        <ButtonLink
          className="youtube"
          href="https://youtu.be/g_TPUwhuN0g"
          value="YouTube"
          external
        />
        <ButtonLink
          className="twitter"
          href="https://twitter.com/IstoVai"
          value="Twitter"
          external
        />
      </StreamButtons>

      <Article>
        <p>
          Em 2005, os <mark>Ena Pá 2000 lançavam o álbum</mark> "20 Anos a
          Pedalar na Bosta". Em 2021,{" "}
          <mark>o Isto Vai lançava o seu primeiro evento</mark>, o "Isto Vai Dar
          Merda".{" "}
          <mark>
            Juntar os dois pareceu-nos algo natural, óbvio, necessário, até.
          </mark>
        </p>
        <p>
          Numa sessão única, a actualidade Portuguesa receberá o{" "}
          <mark>comentário e opinião</mark> que falta e tanta falta tem feito –
          a de <mark>Manuel João Vieira</mark>.
        </p>
        <p>
          <mark>
            Entrevistado por Bernardo Gomes (Médico de Saúde Pública) e Susana
            Peralta (Economista e colunista no jornal Público)
          </mark>
          , ambos absolutos devotos e fãs do Manuel João, os mais recentes
          acontecimentos Portugueses terão, finalmente, a análise que merecem –{" "}
          <mark>
            sem paninhos quentes, sem floreados e, acima de tudo, sem merdas.
          </mark>
        </p>
        <p>
          No dia <mark>4 de Agosto, pelas 21:30</mark>, o Bernardo e a Susana
          farão as perguntas que todos gostaríamos de fazer ao Manuel João e o
          Manuel João, por sua vez, dará as respostas que talvez nem todos
          gostemos de ouvir.
        </p>
      </Article>
      <Partners partners={partners} />
      <Footer />
    </main>
  );
}
