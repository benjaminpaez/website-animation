import Image from "next/image";
import MotionTransition from "../MotionTransition/MotionTransition";

export default function About() {
  return (
    <div id="about" className="grid items-center py-20 md:grid-cols-2 md:py-35">
        <MotionTransition>
            <Image src='/assets/about.png' alt='About image' width='600' height='400'/>
        </MotionTransition>
        <div className="md:pr-20"> 
            <h2 className="mb-10 text-4xl font-extrabold">
            Equipo dedicado a la innovación <br/>  
            Damos vida a la visión de un mañana más <span className="text-blue-700">inteligente, conectado y accesible</span> para todos
            </h2>
            <p className="mb-10">Forjamos el futuro con conectividad y una visión transformadora</p>

            <button className="px-8 py-3 bg-blue-700 rounded-xl text-white">
                Comienza ahora
            </button>
        </div>
    </div>
  )
}
