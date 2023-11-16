import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex items-center justify-center p-5 mt-10 text-white bg-blue-950 md:px-20 md:py-10 ">
      <div className="text-center">
        <Image
          src="/assets/logo.png"
          alt="Logo Website"
          width="200"
          height="120"
        />
        <p className="font-semibold">Tecnología que transforma tu mundo</p>
      </div>
    </footer>
  );
}
