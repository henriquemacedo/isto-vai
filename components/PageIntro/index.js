import Stripes from "@components/Stripes";
import * as Styles from "./styles";

export default function Hero(props) {
  const { title, subtitle, date, image = "" } = props;

  return (
    <>
      <Stripes />
      <Styles.Hero>
        <div className="content">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <mark>
            <span>{date}</span>
          </mark>
        </div>
        {image && (
          <div className="image">
            <img src={image} alt="Isto Vai — Pedalar na Bosta" />
          </div>
        )}
      </Styles.Hero>
    </>
  );
}
