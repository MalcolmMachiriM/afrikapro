import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='min-h-fit min-w-fit py-8 sm:py-16relative'>
      <div className='h-[700px] sm:h-[890px] w-full bg-cover bg-center absolute inset-0 -z-10' style={{backgroundImage: "url(/backg.jpeg)"}}>
        
      </div>
      <div className="SectionContainer">
        <section className="grid grid-cols-1 sm:grid-cols-4">
          <div className="sm:col-span-3 flex flex-col justify-around px-2">
            <h1 className='text-[50px] text-white font-semibold'>
              AFRICAPRO 2024
            </h1>
            <Link href='/2024-afrikapro-entry-form' className='flex border w-fit mt-4 pr-6 space-x-4 cursor-pointer group select-none'>
            <img src="/svgs/button_hover_white.svg" alt="button line" className="w-11 h-auto invisible group-hover:visible globalTransition "/>
              <span className="py-2 group-hover:translate-x-2 globalTransition">
                2024-afrikapro-entry-form
              </span>
              <img src="/svgs/white_arrow_right.svg" alt="arrow" className="w-5 h-auto"/>
            </Link>
            <div className="flex gap-4 sm:gap:8 overflow-x-scroll sm:overflow-visible">
            <Link href=''>
              <div className="relative w-40 sm:w60 h-32 sm:h-40 flex flex-col justify-around group">
                <div className="absolute h-32 sm:h-40 w-full overflow-hidden">
                  <img src="/p1.png" alt="pic1" loading="lazy" width="400" height="160" decoding="async" className="object-cover w-full h-full group-hover:scale-125 globalTransition brightness-75 "style={{color:"transparent"}}  />
                </div>
                <h3 className="z-10 px-4 text-xl sm:text-3xl font-bold">2025 Shipment Date</h3>
                <span className="z-10 px-4 text-sm text-textGray font-heebo absolute bottom-1 left-0">7 days ago</span>
              </div>
            </Link>
              <Link href=''>
                <div className="relative w-40 sm:w60 h-32 sm:h-40 flex flex-col justify-around group">
                  <div className="absolute h-32 sm:h-40 w-full overflow-hidden">
                    <img src="/p2.jpeg" alt="pic1" loading="lazy" width="400" height="160" decoding="async" className="object-cover w-full h-full group-hover:scale-125 globalTransition brightness-75 "style={{color:"transparent"}}  />
                  </div>
                  <h3 className="z-10 px-4 text-xl sm:text-3xl font-bold">2025 Shipment Date</h3>
                  <span className="z-10 px-4 text-sm text-textGray font-heebo absolute bottom-1 left-0">8 days ago</span>
                </div>
              </Link>
              <Link href=''>
                <div className="relative w-40 sm:w60 h-32 sm:h-40 flex flex-col justify-around group">
                  <div className="absolute h-32 sm:h-40 w-full overflow-hidden">
                    <img src="p3.jpeg" alt="pic2" loading="lazy" width="400" height="160" decoding="async" className="object-cover w-full h-full group-hover:scale-125 globalTransition brightness-75 "style={{color:"transparent"}}  />
                  </div>
                  <h3 className="z-10 px-4 text-xl sm:text-3xl font-bold">2025 Shipment Date</h3>
                  <span className="z-10 px-4 text-sm text-textGray font-heebo absolute bottom-1 left-0">12 days ago</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="sm:pr-2 mt-4 sm:mt-0">
            <Link href="">
              <img src="/versale_laga.png" alt="versal logo" loading="lazy"  width="1272" height="288" decoding="async" className="object-contain h-20 w-full mb-4"style={{color:"transparent"}}/>
            </Link>
            <aside>
            <div className="bg-brown text-center py-4"><span className="text-2xl font-bold">2023 Ranking</span></div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
