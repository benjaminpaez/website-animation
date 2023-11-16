import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="grid items-center justify-between lg:grid-cols-2 gap-4 md:gap-20 md:px-20 "> 
        <Image src="/assets/logo.png" alt="Logo" width="200" height="25" className="mx-auto lg:mx-0"/>
        <div className="flex gap-4 text-center justify-end">
            <Link href="#overview">Inicio</Link>
            <Link href="#features">Caracteristicas</Link>
            <Link href="#about">Acerca de</Link>
            <Link href="#practice">Practica</Link>
            <Link href="#pricing">Precios</Link>
        </div>
    </div>
  )
}
