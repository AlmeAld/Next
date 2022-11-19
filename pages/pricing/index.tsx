import Link from "next/link";
import { MainLayout } from "../../components/layoutl/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>

      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing{" "}
        <code className="code">pages/pricing/index.js</code>
      </p>
    </MainLayout>
  );
}

// tsx -> ayuda a saber el funcionamiento de los componentes (saber que tipo de dato reciben los props)
