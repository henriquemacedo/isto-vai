import Link from "next/link";
import * as Styles from "./styles";

export default function Partners(props) {
  const { partners } = props;

  return (
    <Styles.Wrapper>
      <Styles.PartnersGrid>
        {partners.map((item, index) => (
          <div key={index}>
            <Link href={item.url} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={item.name} />
              </a>
            </Link>
          </div>
        ))}
      </Styles.PartnersGrid>
    </Styles.Wrapper>
  );
}
