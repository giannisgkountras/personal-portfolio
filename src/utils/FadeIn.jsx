import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

function FadeIn({ children }) {
    const [inView, setInView] = useState(false);
    const [ref, inViewProps] = useInView({
        threshold: 0,
        onChange: (inView) => setInView(inView),
    });

    return (
        <div
            ref={ref}
            style={{ opacity: inView ? 1 : 0, transition: "opacity 5s" }}
        >
            {children}
        </div>
    );
}

export default FadeIn;
