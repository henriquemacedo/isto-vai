import Header from "@components/Header";
import Link from "next/link";

export default function DarMerda() {
  return (
    <main>
      <Header title="Isto Vai Dar Merda" />
      <Link href="/">
        <a>home</a>
      </Link>
    </main>
  );
}
