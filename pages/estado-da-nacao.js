import Header from "@components/Header";
import PageIntro from "@components/PageIntro";
import Article from "@components/Article";
import Partners from "@components/Partners";
import Footer from "@components/Footer";
import ButtonLink from "@components/ButtonLink";
import StreamButtons from "@components/StreamButtons";

export default function PedalarNaBosta() {
  const partners = [
    {
      image: "/images/partners/marketing-logo.svg",
      name: "market[ING]",
      url: "https://inglesparamarketing.com",
    },
  ];

  return (
    <main>
      <Header title="Isto Vai dar Merda - Estado da Nação" />
      <PageIntro
        title={["Isto Vai dar Merda", <br key={1}></br>, "Estado da Nação"]}
        subtitle="Vamos encher Portugal de piaçabas para ajudar a limpar esta merda toda."
        date="26 de outubro - 7 de novembro"
        image="/images/ivdm-estado-da-nacao.svg"
      />

      <StreamButtons>
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
