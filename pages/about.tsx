import Link from "next/link";
import { DarkLayout } from "../components/layoutl/DarkLayout";
import { MainLayout } from "../components/layoutl/MainLayout";

export default function About() {
  return (
    <>
      <h1>About Page</h1>

      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/about.js</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
