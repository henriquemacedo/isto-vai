import Link from "next/link";
import Icon from "@components/Icon";
import * as Styles from "./styles";

export default function ButtonLink(props) {
  const { className, href, value, external = false } = props;

  return (
    <Link href={href} passHref>
      <Styles.Button
        className={className}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {value} {external && <Icon icon="external-link" />}
      </Styles.Button>
    </Link>
  );
}
