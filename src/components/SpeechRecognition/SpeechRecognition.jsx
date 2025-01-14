"use client"

import React, { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { Iconmicrophone } from "@tabler/icons-react";

const SpeechRecognitionComponent = () => {
    const { transcript, listening } = useSpeechRecognition()

    useEffect(() => {
        setSourceText(transcript)
    }, [transcript, setSourceText])

    const handlingVoiceRecording = () => {
        if (listening) {
            SpeechRecognition.stopListening();
        } else {
            SpeechRecognition.startListening();
        }
    }

    return (
        <div>
            <Iconmicrophone
                size={22}
                className="text-gray-400"
                onClick={handlingVoiceRecording}
            />
        </div>
    )
};

export default SpeechRecognitionComponent;
