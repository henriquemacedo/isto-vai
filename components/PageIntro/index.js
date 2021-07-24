import Stripes from "@components/Stripes";
import * as Styles from "./styles";

export default function Hero(props) {
  const { title, subtitle, date } = props;

  return (
    <>
      <Stripes />
      <Styles.Hero>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <mark>
          <span>{date}</span>
        </mark>
      </Styles.Hero>
    </>
  );
}
