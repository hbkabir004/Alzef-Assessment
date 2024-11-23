"use client"

import CategoryMenu from "./components/CategoryMenu";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <main className="flex overflow-hidden flex-col bg-zinc-100 max-md:pb-24 h-screen">
      <Header />
      <section className="flex relative flex-col items-start pl-[18%] pb-3 w-full text-xs leading-tight min-h-[391px] text-zinc-800 max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="/hero_banner.png" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative z-10 flex-wrap gap-5 justify-between max-w-full w-[660px]">
          <div className="flex items-start">
            <CategoryMenu/>
          </div>

        </div>
      </section>
    </main>
  );
}