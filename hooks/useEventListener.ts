import { useEffect, useRef } from "react";

export const useEventListener = (
    eventName: string,
    handler: Function,
    options?: boolean | AddEventListenerOptions,
    element = global,
) => {
    const savedHandler = useRef<Function>();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const isSupported = element && element.addEventListener;

        if (!isSupported) {
            return;
        }

        const eventListener = (event: Event) => savedHandler.current(event);

        if (options !== undefined) {
            element.addEventListener(eventName, eventListener);
        } else {
            element.addEventListener(eventName, eventListener, options);
        }

        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
};
