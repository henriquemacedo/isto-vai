import Header from "@components/Header";
import PageIntro from "@components/PageIntro";
import Article from "@components/Article";
import Partners from "@components/Partners";
import Footer from "@components/Footer";
import ButtonLink from "@components/ButtonLink";
import StreamButtons from "@components/StreamButtons";

export default function PedalarNaBosta() {
  const partners = [
    {
      image: "/images/partners/marketing-logo.svg",
      name: "market[ING]",
      url: "https://inglesparamarketing.com",
    },
  ];

  return (
    <main>
      <Header title="Isto Vai dar Merda - Estado da Nação" />
      <PageIntro
        title={["Isto Vai dar Merda", <br key={1}></br>, "Estado da Nação"]}
        subtitle="Estamos fartos desta merda. Vamos fazer uma manifestação nacional com piaçabas."
        date="26 de outubro - 7 de novembro"
        image="/images/ivdm-estado-da-nacao.svg"
      />

      <StreamButtons>
        <ButtonLink
          className="twitter"
          href="https://twitter.com/IstoVai"
          value="Twitter"
          external
        />
        <ButtonLink
          className="instagram"
          href="https://instagram.com/isto.vai"
          value="Instagram"
          external
        />
      </StreamButtons>

      <Article>
        <h2>Prévio</h2>

        <p>
          O <mark>Isto Vai Dar Merda estreou-se em Janeiro de 2021</mark> com o
          Isto Vai Dar Merda – na Pandemia. Um evento exclusivamente online, com
          um total de 11 sessões, participadas por mais de 50 pessoas que, nas
          suas áreas de especialidade, falaram, conversaram e partilharam
          opiniões sobre os efeitos que a pandemia de COVID-19 estaria a ter em
          Portugal.
        </p>
        <p>
          <mark>Desde então, muito mudou.</mark> Não foi, claro, fácil. Nem lá
          perto. Para se andar para a frente com a pandemia a morder-nos os
          calcanhares, muitas coisas tiveram que ficar para trás. Algumas ainda
          lá estão, a aguardar o resgate de um futuro sem esperança. As coisas,
          de facto, acalmaram desde então e{" "}
          <mark>
            um futuro igual ao que fora o passado pré-pandémico está, agora, no
            horizonte
          </mark>
          . E isso, em muitos casos, é o pior que pode acontecer.
        </p>
        <p>
          {" "}
          Estamos numa fase única da vida do nosso país. Estamos no momento{" "}
          <mark>‘Ou Vai ou Racha’</mark> da nossa sociedade. Estamos, quer
          queiramos, quer não, no olho da tempestade,{" "}
          <mark>no meio de uma enganadora calmaria</mark> que nos sossega o
          coração, mas não engana a alma.
        </p>
        <p>
          Se tudo o que estava errado antes da pandemia, e que foi posto a
          descoberto e exacerbado pela mesma, é para ser mudado,{" "}
          <mark>é agora neste recomeço que temos de agir</mark>. É agora, agora
          mesmo, que temos de{" "}
          <mark>
            fazer algo para que o futuro não seja apenas um Passado 2.0
          </mark>
          .
        </p>
        <p>
          <mark>É agora.</mark>
        </p>
        <p>
          É agora que mostramos que somos melhores, que somos mais, que
          merecemos mais e melhor do que isto, seja de quem nos governa, seja de
          quem se senta ao nosso lado no autocarro.
        </p>
        <p>
          <mark>Tem de ser agora.</mark>
        </p>
        <p>
          O que há a fazer, então? Como mostrar este descontentamento? Como
          falar e ter a certeza que somos ouvidos? Sair à rua e gritar palavras
          de ordem? Criar cartazes engraçados e espirituosos? Bloquear estradas?
          Incendiar carros? Fazermos greve? Partirmos montras? Irmos para a
          Assembleia da República chamar nomes a quem lá está dentro?
        </p>
        <p>Não.</p>
        <p>
          Somos melhores que isso. Somos mais criativos do que isso. Temos de
          ser mais eficazes do que isso.
        </p>
        <p>
          A II Edição do Isto Vai Dar Merda oferece uma solução. Aliás, oferece
          a única solução possível para nos livrarmos da merda da qual todos se
          queixam. Sem paninhos quentes, sem rodeios, sem merdas absolutamente
          nenhumas.
        </p>

        <h2>O Manifesto de um país às voltas com demasiada merda</h2>

        <p>
          <mark>Estamos fartos desta merda toda</mark>, diz o povo.
        </p>
        <p>
          Mas, que merda é essa de que{" "}
          <mark>tantos se queixam, tantos reclamam e todos estão fartos</mark>?
        </p>
        <p>
          Que merda é esta que, de tão forte e universal, consegue colocar um
          país inteiro a reclamar da sua existência?
        </p>
        <p>
          <mark>De que merda reclamas tu?</mark>
        </p>
        <p>Qual é a merda que te encanita e faz suspirar de frustração?</p>
        <p>
          Qual é a merda que te enerva e faz levantar a voz nos almoços de
          família?
        </p>
        <p>
          Que merda, afinal, é essa que invade conversas de café, inflama trocas
          nas redes sociais e domina discussões de família?{" "}
          <mark>Que merda é essa que te enfurece?</mark>
        </p>
        <p>
          <mark>É o que queremos saber.</mark>
        </p>
        <p>
          A II Edição do Isto Vai Dar Merda é sobre o{" "}
          <mark>Estado da Nação</mark>, ou, se quiserem, o{" "}
          <mark>Estado a que chegámos</mark>. Não haverá sessões online com
          painéis de convidados para opinar sobre como aqui chegámos e como
          daqui saímos. Esta edição do IVDM{" "}
          <mark>
            será totalmente feita por ti e por todos aqueles que estão fartos
            desta merda toda
          </mark>
          .
        </p>
        <p>
          Os ilustres convidados desta edição do Isto Vai dar Merda são os
          Portugueses e Portuguesas que não aguentam mais esta merda e querem
          fazer algo para a limpar. Ou seja, tu e outros como tu.
        </p>
        <p>
          O Isto Vai Dar Merda – Estado da Nação quer fazer{" "}
          <mark>
            um retrato do que deu merda, está a dar merda e dará merda caso algo
            não seja feito
          </mark>
          . Quem melhor para expor essas merdas do que quem as vive diariamente?
          Se alguém devia fazer alguma coisa sobre o assunto A ou B, então, sê
          essa pessoa. Esse alguém podes ser tu. Deves ser tu.{" "}
          <mark>
            Tu és esse alguém que pode fazer alguma coisa em relação a essa
            merda.
          </mark>{" "}
          E se suficientes pessoas como tu se manifestarem a quem pode alterar
          as merdas que precisam ser alteradas, e essas forem efectivamente
          alteradas, então, este mega evento-manifestação nacional terá atingido
          o seu objectivo.
        </p>
        <p>
          Mas antes de te revelarmos qual a forma como vamos todos manifestar o
          nosso desagrado com o estado a que chegámos, umas notas.
        </p>
        <p>
          <mark>
            Isto é sobre o que nós, enquanto povo de um país, podemos fazer para
            que a vida de todos possa melhorar.
          </mark>
        </p>
        <p>
          <mark>Isto não é sobre as tuas merdas em particular</mark>, mas sim
          sobre as merdas que nos pesam enquanto sociedade e nos impedem de ter
          menos merdas sobre as quais reclamar.
        </p>
        <p>
          <mark>Isto não é sobre política</mark>, mas sim sobre politiquices.
        </p>
        <p>
          <mark>Não é sobre partidos políticos</mark>, mas sim sobre um sistema
          político que não está a corresponder às necessidades das pessoas que é
          suposto servir, independentemente de em quem se vote.
        </p>
        <p>
          <mark>Isto não é sobre o caso do banqueiro</mark> que se tenta escapar
          à justiça, mas sim sobre um sistema que não mostra ter o mesmo peso e
          a mesma medida para todos os que lá entram, que é moroso, lento e
          pesado, cego e incapaz de fazer, em tempo útil, aquilo para o qual foi
          concebido.
        </p>
        <p>
          <mark>Isto não é sobre os homens mandarem nesta merda toda</mark>, mas
          sim sobre as dezenas de mulheres mortas todos os anos em Portugal
          pelos seus companheiros e sobre os milhares de mulheres e crianças que
          todos os dias têm de sobreviver a quem as agride, violenta, viola e
          castiga sem que a justiça aplique a devida punição a quem o faz.
        </p>
        <p>
          <mark>Isto não é sobre um rio poluído</mark>, mas sim sobre a falta de
          uma política de defesa e preservação do ambiente que impeça que tal
          aconteça ou, acontecendo, castigue quem faça essa merda.
        </p>
        <p>
          <mark>
            Isto não é sobre as multinacionais e seus donos bilionários
          </mark>{" "}
          que só pagam ordenados porque a lei assim os obrig- ok, ok. É também
          um pouco sobre esses. Mas é mais sobre as micro e pequenas empresas,
          pequenos negócios familiares, as lojas independentes e a restauração,
          e todos os outros que se aventuram em criar os seus próprios negócios.
          É sobre estes e as cargas fiscais e burocráticas que carregam para
          manter a porta aberta, sobre a merda que têm de aturar para manter o
          negócio em actividade.
        </p>
        <p>
          <mark>
            Isto não é sobre a chatice que é não poderes ir de férias para a
            Brasil durante 15 dias
          </mark>
          , é sobre a pobreza quase endémica que assola as vidas de 2 milhões de
          conterrâneos teus sem que pareça haver forma de acabar com essa merda.
          Esses nem de férias vão.
        </p>
        <p>
          <mark>
            Isto não é sobre a escola dos teus putos não ter aulas de música
          </mark>
          , é sobre os teus putos terem colegas cuja única refeição do dia é a
          que comem na escola.
        </p>
        <p>
          <mark>
            Isto não é sobre tu não conseguires que a tua empresa te permita
            trabalhar em casa
          </mark>{" "}
          (ou onde quiseres), obrigando-te a deslocações desnecessárias para
          locais onde vais acabar por fazer o mesmo que farias em casa, mas a um
          custo muito mais reduzido. Espera. É. É também sobre isso, sim. É
          sobre essa merda, sim.
        </p>
        <p>
          <mark>
            Isto não é sobre aquele teu tio bêbado e racista que se enfrasca no
            jantar de Natal e te critica e ofende por teres amigos negros ou
            homossexuais.
          </mark>{" "}
          É sobre o aparecimento de um espaço em que tal é não só permitido,
          como também bem visto, aplaudido e encorajado. Quer se queira, quer
          não, nós permitimos que o espaço aparecesse e agora todos nos
          queixamos do cheiro.
        </p>
        <p>
          <mark>
            Não é sobre o que fazes ou deixas de fazer para ajudares a tua
            comunidade
          </mark>
          , mas sim sobre o porquê de ainda ser preciso a comunidade receber
          ajuda para coisas tão básicas como comida, roupa e outros bens
          essenciais à vida de todos. Não é sobre o que dás; é sobre ainda haver
          quem precise.
        </p>
        <p>
          <mark>
            Isto não é sobre os negacionistas disto ou daquilo ou de como a
            comunicação social descura o seu papel social de providenciar
            informação clara, concisa e verdadeira.
          </mark>
        </p>
        <p>
          <mark>
            Estamos a brincar. Claro que é sobre esta merda. É muito sobre esta
            merda.
          </mark>
        </p>
        <p>
          <mark>Isto não é sobre o aquecimento global</mark> e a forma como os
          governos do mundo parecem estar a ignorar os sinais, as evidências e a
          ciência que nos garante que o clima vai-nos lixar o futuro.{" "}
          <mark>Não, por acaso, é.</mark> É também sobre isso. É sobre uma
          consciencialização pública para os perigos que estamos a enfrentar e
          os que vamos deixar para as gerações futuras.
        </p>
        <p>
          <mark>
            Não é sobre tu não conseguires marcar uma consulta com a tua médica
          </mark>
          para ver daquele sinal que achas esquisito, mas sim sobre o facto de
          os profissionais de saúde estarem presos num sistema de gestão
          deficitária, negligente, que os denigre e ignora quanto às suas
          revindicações para melhores condições e meios de prestação de cuidados
          de saúde.
        </p>
        <p>Isto não é sobre futebol. Não é. Esquece lá isso.</p>
        <p>
          <mark>Não é sobre aquele polícia racista</mark> que faz bolinhas com
          os dedos, mas sim sobre um sistema cujo filtro não funciona e fomenta
          que estes desvios pareçam ser um recurso viável para quem se sente
          frustrado e prejudicado pelo sistema no qual trabalha e devia
          defender.
        </p>
        <p>
          <mark>Isto não é sobre a subida dos preços do combustível</mark> sem
          que pareça haver algum tipo de regulação num mercado dominado por
          empresas que têm lucros bilionários todos os anos.{" "}
          <mark>Pois. Esperem. É sobre isso, sim.</mark> Sobre isso e outros
          bens essenciais e básicos como a electricidade, gás e internet e o
          porquê de os preços serem tão altos para uma população que não os pode
          comportar.
        </p>
        <p>
          <mark>
            Isto não é sobre aquela história mal contada naquele jornal que só
            quer fazer título bombásticos para aumentar as visualizações e
            afins.
          </mark>
          É sobre todas as histórias que nem chegam a ser contadas por
          considerarem que o povo, totó, não tem interesse em saber de outras
          coisas que não abóboras gigantes, encontros manhosos em restaurantes
          entre dirigentes desportivos e a mais recente viagem de uma influencer
          qualquer.
        </p>
        <p>
          <mark>
            Isto não é sobre a malta que deixa o carro mal estacionado para ir
            só beber um cafezinho ou largar os filhos na escola.
          </mark>{" "}
          Isto é sobre uma sociedade em que esse tipo de egoísmo e falta de
          consideração parece estar a tornar-se a norma, e não a excepção.
        </p>
        <p>
          <mark>
            Isto não é sobre a falta de condições dos lares ou os custos
            altíssimos dos cuidados pré-escolares.
          </mark>{" "}
          Por acaso, até é. Mas não só. Isto é sobre aqueles que abandonam os
          seus idosos em hospitais e nos lares, sobre quem tem de escolher entre
          trabalhar ou ficar em casa a tomar conta dos seus filhos por não ter
          meios ou não haver vagas nos serviços pré-escolares públicos. É sobre
          a forma como os mais novos e os mais velhos parecem ser sempre o elo
          mais fraco na nossa sociedade.
        </p>
        <p>
          <mark>
            Isto não é sobre a professora de Português que escreve com erros nos
            bilhetes que envia para casa dos pais dos alunos.
          </mark>{" "}
          É sobre um sistema de educação em falência, que sofre com a falta de
          recursos, falta de profissionais, falta de meios e falta de respeito
          por parte dos que lhe confiam os filhos para ensinar.
        </p>
        <p>
          <mark>Isto não é sobre cores políticas.</mark> Não é. Esquece isso.
          Esquece. Isso.
        </p>
        <p>
          <mark>Isto não é sobre ti</mark>, mas sobre o todo no qual te inseres,
          do qual fazes parte, no qual vives e convives.
        </p>
        <p>
          <mark>Isto é sobre a merda que temos de comer e calar</mark>, que
          achamos que temos de comer e calar.
        </p>
        <p>
          <mark>
            Isto é sobre as dores de se ser Português, sobre as merdas que há
            décadas aturamos, reclamamos e reivindicamos.
          </mark>{" "}
          No fundo, é sobre o que tu quiseres. Mas se também for sobre algo que
          nos ajude a todos, perfeito.
        </p>
        <p>
          <mark>
            Merecemos melhor. Temos de fazer melhor. Temos de ser melhor. Nós
            conseguimos melhor. Somos capazes de melhor. Só nos falta querer.
          </mark>
        </p>

        <h2>O Evento-Manif</h2>

        <p>
          <mark>Entre os dias 26 de Outubro e 7 de Novembro</mark>, pega num{" "}
          <mark>piaçaba</mark> (novo, de preferência), ata-lhe uma{" "}
          <mark>fita</mark> (ou cinco) onde escreveste a merda que mais te
          chateia, e <mark>exibe-o onde todos o possam ver</mark> - na varanda
          de casa, na antena do carro, plantado num jardim, pendurado numa
          vedação ou numa árvore, enfiado num buraco duma parede, ou na mala que
          levas todos os dias para o trabalho. As opções são infindáveis e
          quanto mais visíveis, melhor. Manifesta-te sozinho com o teu piaçaba
          ou organiza um grupo de amigos, de colegas, familiares, e
          manifestem-se de forma mais visível ainda com lindos ramos de piaçabas
          coloridos. <mark>Seja como e onde for, manifesta-te.</mark>
        </p>
        <p>
          Depois, <mark>tira uma foto e publica</mark> nas redes sociais usando
          as hashtags
          <mark>#istovaidarmerda</mark>, <mark>#ivdmestadodanacao</mark> e{" "}
          <mark>#ivdm</mark>
        </p>
        <p>
          Entre os dias 26 de Outubro e 7 de Novembro,{" "}
          <mark>expõe o teu piaçaba e fitas</mark> com as razões do teu
          descontentamento onde mais visibilidade tiverem. A esperança pelo dia
          em que as coisas milagrosamente melhorem sozinhas acaba aqui. A ideia
          de que eles hão-de perceber o que é preciso fazer morre aqui. Que
          descanse em paz. Nós temos mais o que fazer.
        </p>
        <p>
          Entre os dias 26 de Outubro e 7 de Novembro, coloca o teu{" "}
          <mark>
            piaçaba e a mensagem que queres partilhar num local bem visível
          </mark>{" "}
          à tua escolha. Tira foto. Faz um pequeno vídeo se quiseres.{" "}
          <mark>Envia para nós</mark>(
          <a href="mailto:istovaidarmerda.online@gmail.com" target="_blank">
            istovaidarmerda.online@gmail.com
          </a>
          ). <mark>Publica no Twitter e no Instagram</mark>e identifica-nos, usa
          as hashtags que criámos.
        </p>
        <p>
          Entre os dias 26 de Outubro e 7 de Novembro,{" "}
          <mark>
            vamos manifestar-nos contra toda a merda que tem de ser limpa deste
            país
          </mark>{" "}
          para que, de uma vez por todas, paremos de reclamar da merda na qual
          vivemos. Não estão cansados disso? De reclamar e nada mudar?
        </p>
        <p>Nós estamos.</p>
        <p>
          <mark>É agora.</mark>
        </p>
        <p>
          <i>
            “É uma vergonha. Onde é que isto vai parar? Alguém devia fazer
            alguma coisa.”
          </i>
        </p>
        <p>
          Pois devia. Especialmente os que ainda acreditam que, sim, isto ainda
          dá para ir a algum lado sem ser à merda.
        </p>
        <p>Vamos a isso?</p>
        <p>
          <mark>Publica as fotografias</mark> da tua participação nesta
          manifestação no
          <mark>Twitter e Instagram</mark> e faz tag ao Isto Vai Dar Merda –
          Estado da Nação:
        </p>
        <ul>
          <li>
            Twitter:{" "}
            <a href="https://twitter.com/IstoVai" target="_blank">
              @IstoVai
            </a>
          </li>
          <li>
            Instagram:{" "}
            <a href="https://instagram.com/isto.vai" target="_blank">
              @isto.vai
            </a>
          </li>
          <li>
            E-mail:{" "}
            <a href="mailto:istovaidarmerda.online@gmail.com" target="_blank">
              istovaidarmerda.online@gmailcom
            </a>
          </li>
        </ul>
        <p>
          O Isto Vai Dar Merda – Estado da Nação{" "}
          <mark>partilhará nos seus meios as fotos e vídeos</mark> que considere
          corresponderem ao objectivo do evento-manif, excepto aqueles que forem
          mais merdosos ainda do que o que se está a tentar protestar com o
          mesmo.
        </p>
        <p>Hashtags:</p>
        <ul>
          <li>#istovaidarmerda</li>
          <li>#ivdmestadodanacao</li>
          <li>#ivdm</li>
        </ul>
      </Article>
      <Partners partners={partners} />
      <Footer />
    </main>
  );
}
