import { useSyncExternalStore } from "react";

type WindowSize = {
    windowWidth: number;
    windowHeight: number;
};

function subscribe(callback: () => void) {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
}

function getWindowWidth() {
    return window.innerWidth;
}

function getWindowHeight() {
    return window.innerHeight;
}

function getZero() {
    return 0;
}

export function useWindowSize(): WindowSize {
    const width = useSyncExternalStore(subscribe, getWindowWidth, getZero);
    const height = useSyncExternalStore(subscribe, getWindowHeight, getZero);
    return {
        windowWidth: width,
        windowHeight: height
    };
}
