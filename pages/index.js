import Header from "@components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header title="Isto Vai" />
      <p>sadlhslhd</p>
      <ul>
        <li>
          <Link href="/dar-merda">
            <a>isto vai dar merda</a>
          </Link>
        </li>
        <li>
          <Link href="/pedalar-na-bosta">
            <a>Pedalar na Bosta</a>
          </Link>
        </li>
      </ul>
    </main>
  );
}
