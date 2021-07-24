import ButtonLink from "@components/ButtonLink";
import * as Styles from "./styles";
const logo = "/images/isto-vai--pedalar-na-bosta.svg";

export default function Featured() {
  return (
    <Styles.Wrapper>
      <div className="content">
        <h2>Isto Vai Pedalar na Bosta</h2>
        <span>4 de agosto — 21:30</span>
        <p>
          Em 2005, os <mark>Ena Pá 2000 lançavam o álbum</mark> "20 Anos a
          Pedalar na Bosta". Em 2021,{" "}
          <mark>o Isto Vai lançava o seu primeiro evento</mark>, o "Isto Vai Dar
          Merda".{" "}
          <mark>
            Juntar os dois pareceu-nos algo natural, óbvio, necessário, até.
          </mark>
        </p>
        <ButtonLink href="/pedalar-na-bosta" value="Saber Mais" />
      </div>
      <div className="image">
        <img src={logo} alt="Isto Vai — Pedalar na Bosta" />
      </div>
    </Styles.Wrapper>
  );
}
