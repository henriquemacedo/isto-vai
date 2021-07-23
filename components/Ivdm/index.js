import ButtonLink from "@components/ButtonLink";
import * as Styles from "./styles";

export default function Ivdm() {
  return (
    <Styles.Wrapper>
      <h2>Isto Vai Dar Merda</h2>
      <span>12 de janeiro — 12 de fevereiro</span>
      <p>
        O <mark>Isto Vai Dar Merda</mark> é um evento que materializa a máxima
        “quem avisa, amigo é”, pensado para abordar{" "}
        <mark>temas que estão no "tipping point" de dar merda</mark> mas que{" "}
        <mark>ainda podem ser salvos</mark> de tão triste fado.
      </p>
      <ButtonLink
        href="https://istovaidarmerda.online"
        value="Saber Mais"
        external
      />
    </Styles.Wrapper>
  );
}
