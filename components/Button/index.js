import * as Styles from "./styles";

export default function Button(props) {
  const { className, value, onClick } = props;

  return (
    <Styles.Button className={className} onClick={onClick}>
      {value}
    </Styles.Button>
  );
}
