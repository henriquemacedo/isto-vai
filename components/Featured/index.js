import ButtonLink from "@components/ButtonLink";
import * as Styles from "./styles";
const logo = "/images/ivdm-estado-da-nacao.svg";

export default function Featured() {
  return (
    <Styles.Wrapper>
      <div className="content">
        <h2>Isto Vai Dar Merda - Estado da Nação</h2>
        <span>26 de outubro - 7 de novembro</span>
        <p>
          Estamos <mark>fartos desta merda</mark> toda. Vamos encher Portugal de{" "}
          <mark>piaçabas</mark> para ajudar a limpar esta merda toda.
        </p>
        <ButtonLink href="/estado-da-nacao" value="Saber Mais" />
      </div>
      <div className="image">
        <img src={logo} alt="Isto Vai — Pedalar na Bosta" />
      </div>
    </Styles.Wrapper>
  );
}
