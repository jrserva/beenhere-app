import Head from "next/head";
import { CheckinCard } from "../components/CheckinCard";
import { CuradoriaLista } from "../components/CuradoriaLista";
import { Mapa } from "../components/Mapa";

export default function Home() {
  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <Head>
        <title>BeenHere</title>
      </Head>

      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="space-y-4">
          <h1 className="text-2xl font-bold">🌍 Check-ins Recentes</h1>
          <CheckinCard
            lugar="Bar do Zeca"
            tempo="há 15 min"
            comentario="Climinha animado e ótima música ao vivo!"
            vibes={["🎉 Animado", "🍻 Bar"]}
          />
          <CheckinCard
            lugar="Mirante 9 de Julho"
            tempo="há 30 min"
            comentario="Vista linda da cidade e café tranquilo 🍰☕"
            vibes={["🌇 Romântico", "☕ Café"]}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📍 Descubra pelo Mapa</h2>
          <Mapa />
          <h3 className="text-xl font-semibold mt-4">✨ Curadoria do Dia</h3>
          <CuradoriaLista />
        </section>
      </main>
    </div>
  );
}
