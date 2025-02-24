import { Download, Info } from "lucide-react";
import AnimatedBackground from "../AnimatedBackground.tsx";
import logo from "src/assets/img/hero/world_logo.svg";
import hero from "src/assets/img/hero/frame.png";

export default function Home() {
  return (
    <main className="min-h-screen flex pt-20 relative overflow-hidden bg-darker font-poppins items-center justify-center">
      <AnimatedBackground />

      <div className="container relative mx-auto px-4 py-12 md:py-24 flex items-center justify-center">
        <div className="border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm bg-white/40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-wider">
                  Obtén tu Identidad
                  anónima digital
                  con
                </h1>
                <img
                  src={logo.src}
                  alt="World Device"
                  className="object-contain"
                />
                
              </div>

              <p className="text-xl md:text-2xl text-white/80">
                También recibe bonos en tu billetera y obtén tu pasaporte
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#377B74] to-[#572D5B] text-white px-8 py-3 rounded-full font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Descargar World
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Info className="w-5 h-5" />
                  Quiero más info
                </button>
              </div>
            </div>

            <div className="relative w-full aspect-square max-w-[500px] mx-auto floating">
              <img
                src={hero.src}
                alt="World Device"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
