import { useRouter } from "next/router";
import Link from "next/link";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink = ({ text, href }) => {
  // router.asPath obtiene la informaciion de la ruta actual
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : null}>{text}</a>
    </Link>
  );
};
