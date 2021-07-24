import ButtonLink from "@components/ButtonLink";
import * as Styles from "./styles";

export default function Article(props) {
  const { children } = props;
  return (
    <Styles.Wrapper>
      {children}
      <Styles.BackButton>
        <ButtonLink href="/" value="Voltar" />
      </Styles.BackButton>
    </Styles.Wrapper>
  );
}
