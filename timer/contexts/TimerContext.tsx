import { createContext, ReactNode, useContext, useState } from "react";

type TimerContextType = {
    timer: string;
    setTimer: React.Dispatch<React.SetStateAction<string>>;
}

const TimerContext = createContext<TimerContextType>(null!);

export function TimerProvider({ children }: { children: ReactNode }) {
    const [timer, setTimer] = useState("060");

    return (
        <TimerContext.Provider value={{ timer, setTimer }}>
            { children }
        </TimerContext.Provider>
    );
}

export const useTimer = () => useContext(TimerContext);