import * as Styles from "./styles";

export default function Article(props) {
  const { children } = props;
  return <Styles.Wrapper>{children}</Styles.Wrapper>;
}
