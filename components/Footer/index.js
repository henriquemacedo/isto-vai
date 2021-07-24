import Link from "next/link";
import Icon from "@components/Icon";
import * as Styles from "./styles";

export default function Footer(props) {
  const { social, contacts } = props;

  return (
    <Styles.Wrapper>
      <div className="social">
        <ul>
          {social.map((item, index) => (
            <li key={index}>
              <Link href={item.url} passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <Icon icon={item.channel} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {contacts.map((item, index) => (
            <li key={index}>
              <Link href={item.url} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Styles.Wrapper>
  );
}
