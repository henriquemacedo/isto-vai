import { useState } from "react";
import Stripes from "@components/Stripes";
import Button from "@components/Button";
import * as Styles from "./styles";

export default function Hero() {
  const [showShort, setShowShort] = useState(true);
  const [showLong, setShowLong] = useState(false);

  return (
    <>
      <Stripes />
      <Styles.Hero>
        <h1>Isto Vai</h1>
        <h2>Um conceito global dentro da máxima quem avisa, amigo é.</h2>

        <Styles.DescriptionButtons>
          <Button
            className={showShort && "active"}
            value="Curta"
            onClick={() => {
              setShowShort(true);
              setShowLong(false);
            }}
          />
          <Button
            className={showLong && "active"}
            value="Longa"
            onClick={() => {
              setShowShort(false);
              setShowLong(true);
            }}
          />
        </Styles.DescriptionButtons>

        {showShort && (
          <p>Sem falinhas mansas. Sem paninhos quentes. Sem merdas.</p>
        )}
        {showLong && (
          <>
            <p>
              O Isto Vai pode manifestar-se de várias formas – conversas
              descontraídas, discussões apaixonadas, debates informativos,
              rubricas artísticas – o que melhor servir o propósito de conseguir
              com que a comunicação aconteça, as vozes sejam ouvidas, a mensagem
              passe e algo, por muito pequeno que seja, mude em quem a recebe.
            </p>
            <p>
              O fio condutor? Não haver rodeios em temas que interessam a todos,
              os convidados não terem papas na língua e o objectivo ser sempre o
              de esclarecer, informar e dar luz a assuntos que precisam deste
              tipo de abordagem para serem bem compreendidos, discutidos e
              vividos.
            </p>
            <p>
              O Isto Vai é um mundo aberto ao mundo. É com esse espírito de
              abertura que vos convidamos a acompanharem-nos nestas incursões.
            </p>
            <p>Sem falinhas mansas. Sem paninhos quentes. Sem merdas.</p>
          </>
        )}
      </Styles.Hero>
    </>
  );
}
