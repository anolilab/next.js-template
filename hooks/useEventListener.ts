import { useEffect, useRef } from "preact/hooks";

export const useEventListener = (
    eventName: string,
    handler: Function,
    options?: boolean | AddEventListenerOptions,
    element: Document = document
) => {
    const savedHandler = useRef();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const isSupported = element && element.addEventListener;
        if (!isSupported) {
            return;
        }

        const eventListener = (event) => savedHandler.current(event);

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
