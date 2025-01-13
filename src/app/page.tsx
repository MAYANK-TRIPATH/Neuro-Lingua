import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className=" mb-[450px] items-center">
    <h1 className="text-6xl text-white font-extrabold">
      Neuro<span className="text-red-600">Lingua</span>
    </h1>
   <p className="mt-3 text-neutral-400 text-base items-center text-center font-semibold">
   Translatation is just one click away.
   </p>
    </div>



  </div>
  );
}
