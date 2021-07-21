import Header from "@components/Header";
import Link from "next/link";

export default function PedalarNaBosta() {
  return (
    <main>
      <Header title="Isto Vai — Pedalar na Bosta" />
      <p>pedalar na bosta</p>
      <Link href="/">
        <a>home</a>
      </Link>
    </main>
  );
}
