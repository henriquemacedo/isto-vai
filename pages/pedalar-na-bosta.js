import Header from "@components/Header";
import PageIntro from "@components/PageIntro";
import Article from "@components/Article";
import Partners from "@components/Partners";
import Footer from "@components/Footer";
// import Link from "next/link";

export default function PedalarNaBosta() {
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
  ];

  return (
    <main>
      <Header title="Isto Vai — Pedalar na Bosta" />
      <PageIntro
        title={["Isto Vai", <br key={1}></br>, "Pedalar na Bosta"]}
        subtitle="Manuel João Vieira entrevistado por Bernardo Gomes e Susana Peralta"
        date="4 de agosto — 21:30"
      />

      <Article>
        <p>
          Em 2005, os Ena Pá 2000 lançavam o álbum "20 Anos a Pedalar na Bosta".
          Em 2021, o Isto Vai lançava o seu primeiro evento, o "Isto Vai Dar
          Merda". Juntar os dois pareceu-nos algo natural, óbvio, necessário,
          até.
        </p>
        <p>
          Numa sessão única, a actualidade Portuguesa receberá o comentário e
          opinião que falta e tanta falta tem feito – a de Manuel João Vieira.
        </p>
        <p>
          Entrevistado por Bernardo Gomes (Médico de Saúde Pública) e Susana
          Peralta (Economista e colunista no jornal Público), ambos absolutos
          devotos e fãs do Manuel João, os mais recentes acontecimentos
          Portugueses terão, finalmente, a análise que merecem – sem paninhos
          quentes, sem floreados e, acima de tudo, sem merdas.
        </p>
        <p>
          No dia 4 de Agosto, pelas 21:30, o Bernardo e a Susana farão as
          perguntas que todos gostaríamos de fazer ao Manuel João e o Manuel
          João, por sua vez, dará as respostas que talvez nem todos gostemos de
          ouvir.
        </p>
      </Article>
      <Partners partners={partners} />
      <Footer />
    </main>
  );
}
