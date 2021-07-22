import Link from "next/link";
import * as Styles from "./styles";

export default function ButtonLink(props) {
  const { className, href, value } = props;

  return (
    <Link href={href}>
      <Styles.Button className={className}>{value}</Styles.Button>
    </Link>
  );
}
