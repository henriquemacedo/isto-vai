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
          Estamos <mark>fartos desta merda</mark>. Vamos fazer uma{" "}
          <mark>manifestação nacional com piaçabas</mark> com o objectivo de ser
          a maior mostra de descontentamento alguma vez vista em Portugal,
          participada pelos que acreditam que{" "}
          <mark>o futuro não tem de conter o pior do nosso passado</mark>.
        </p>
        <ButtonLink href="/estado-da-nacao" value="Saber Mais" />
      </div>
      <div className="image">
        <img src={logo} alt="Isto Vai — Pedalar na Bosta" />
      </div>
    </Styles.Wrapper>
  );
}
