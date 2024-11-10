import React, {useEffect, useRef} from "react";

export function useClickOutside<T extends HTMLElement>(
    handler: () => void
): React.RefObject<T> {
    const ref = useRef<T>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handler]);

    return ref;
}