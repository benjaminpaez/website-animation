import MotionTransition from "../MotionTransition/MotionTransition";

export default function Practice() {
  return (
    <MotionTransition>
        <div id="practice" className="grid items-center py-20 md:grid-cols-2 md:py-56">
            <div className="md:pr-20">
                <h2 className="mb-10 text-4xl font-extrabold">Desafía límites y potencia tus habilidades tecnológicas <br />
                <span className="text-purple-700 text-3xl">con nosotros</span></h2>
                <p className="mb-10">Explora. Practica. Innova. Conéctate.</p>
                <button className="px-8 py-3 text-white bg-blue-700 rounded-xl">Comienza ahora</button>
            </div>
            <video width="750" height="500" autoPlay muted loop>
                <source src="/assets/business.mp4" type="video/mp4" />
            </video>
        </div>
    </MotionTransition>
  )
}
