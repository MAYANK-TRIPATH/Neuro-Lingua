"use client"
import "regenerator-runtime/runtime";
import Image from "next/image";
import TextArea from "@/components/Inputs/TextArea"
import React, { useState, ChangeEvent } from "react";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";



export default function Home() {

  const [sourceText, setSourceText] = useState<string>("")

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

        <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
          <div className="rid gap-4 md:grid-cols-2 grid-cols-1">
            <div className="relative z-10 flex flex-col space-x-3 p-3  border rounded-lg shadow-lg  bg-neutral-900 border-neutral-700 shadow-gray-900/20">
              <TextArea
                id="source-language"
                value={sourceText}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                  setSourceText(e.target.value);
                }}
                placeholder="Source Langugage"
              />
            </div>
                <div className="flex flex-col justify-between w-full">
                <span className="cursor-pointer flex space-x-2 flex-row">
                <SpeechRecognitionComponent
                setSourceText={setSourceText}
                />
                </span>
                </div>
          </div>
        </div>
      </div>



    </div>
  );
}
