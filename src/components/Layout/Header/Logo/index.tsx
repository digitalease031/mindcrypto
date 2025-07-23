import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="font-extrabold text-3xl tracking-tight text-primary bg-clip-text">
      MindCrypto
    </Link>
  );
};

export default Logo;
