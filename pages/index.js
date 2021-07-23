import Header from "@components/Header";
import Intro from "@components/Intro";
import Featured from "@components/Featured";
import Ivdm from "@components/Ivdm";

export default function Home() {
  return (
    <main>
      <Header title="Isto Vai" />
      <Intro />
      <Featured />
      <Ivdm />
    </main>
  );
}
