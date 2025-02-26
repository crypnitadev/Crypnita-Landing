import { Download, Info } from "lucide-react";
import AnimatedBackground from "../AnimatedBackground.tsx";
import logo from "src/assets/hero/logo_world_white.png";
import hero from "src/assets/hero/hero.png";

export default function Home() {
  return (
    <main className="min-h-screen flex pt-20 relative overflow-hidden font-poppins items-center justify-center">
      <AnimatedBackground />

      <div className="container relative mx-auto p-4 flex items-center justify-center">
        <div className="border border-white/10 rounded-3xl p-10 md:p-20 backdrop-blur-sm bg-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-wider">
                  Obtén tu Identidad anónima digital con
                </h1>
                <div className="w-[350px]">
                  <img
                    src={logo.src}
                    alt="World Device"
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="text-xl md:text-2xl text-white/80">
                También recibe bonos en tu billetera y obtén tu pasaporte
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://join.worldcoin.org/M4EZ40K"
                  className="bg-gradient-to-r from-[#377B74] to-[#572D5B] text-white px-8 py-3 rounded-full font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Descargar World
                </a>
                <a
                  href="/Crypnita-Landing/#world"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Info className="w-5 h-5" />
                  Quiero más info
                </a>
              </div>
            </div>

            <div className="relative flex w-full mx-auto items-center justify-center">
              <div className="absolute z-0 bg-gradient-to-r from-[#377B74] to-[#572D5B] blur-xl md:blur-3xl rounded-full w-full h-full mx-auto"></div>
              <img
                src={hero.src}
                alt="World Device"
                className="object-contain z-10 w-[90%] h-[90%]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
