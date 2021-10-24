import ButtonLink from "@components/ButtonLink";
import * as Styles from "./styles";

export default function Featured() {
  return (
    <Styles.Wrapper>
      <h2>Isto Vai Pedalar na Bosta</h2>
      <span>4 de agosto — 21:30</span>
      <p>
        Em 2005, os <mark>Ena Pá 2000 lançavam o álbum</mark> "20 Anos a Pedalar
        na Bosta". Em 2021,{" "}
        <mark>o Isto Vai lançava o seu primeiro evento</mark>, o "Isto Vai Dar
        Merda".{" "}
        <mark>
          Juntar os dois pareceu-nos algo natural, óbvio, necessário, até.
        </mark>
      </p>
      <ButtonLink href="/pedalar-na-bosta" value="Saber Mais" />
    </Styles.Wrapper>
  );
}
