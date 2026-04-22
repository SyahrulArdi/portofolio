import React, { useEffect } from 'react';

const LoadingScreen = () => {
    useEffect(() => {
        // Load Inter font for the sleek, premium typographic aesthetic
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => { };
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] bg-[#000000] flex flex-col items-center justify-center overflow-hidden" style={{ perspective: 1000, WebkitFontSmoothing: 'antialiased' }}>

            {/* Cinematic Background: Ambient breathing glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(circle_at_center,_rgba(76,29,149,0.25)_0%,_rgba(0,0,0,1)_60%)] animate-[pulseGlow_4s_ease-in-out_infinite]"
                    style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
                ></div>
            </div>

            {/* Core container for the text with Exit Zoom animation (syncs with 5s timeout in App.jsx) */}
            <div
                className="relative z-10 w-full flex items-center justify-center animate-[exitZoom_5s_cubic-bezier(0.8,0,0.2,1)_forwards]"
                style={{ willChange: "transform, opacity, filter", backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
            >

                {/* The Premium DARDCOR Text */}
                <h1
                    className="text-transparent bg-clip-text text-center font-black relative leading-none"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        backgroundImage: "linear-gradient(to right, #6b21a8, #d946ef, #fb7185, #d946ef, #6b21a8)",
                        backgroundSize: "200% auto",
                        WebkitTextStroke: "1px rgba(255,255,255,0.1)",
                        animation: "textReveal 3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards, shimmer 3s linear infinite",
                        fontSize: "clamp(4rem, 18vw, 14rem)",
                        willChange: "transform, opacity, filter, letter-spacing, background-position",
                        backfaceVisibility: "hidden"
                    }}
                >
                    DARDCOR

                    {/* Glowing reflection/shadow behind the main text */}
                    <span
                        className="absolute top-0 left-0 w-full h-full z-[-1] blur-[40px] opacity-0 animate-[shadowBloom_4s_cubic-bezier(0.2,0.8,0.2,1)_forwards] bg-clip-text text-transparent pointer-events-none"
                        style={{
                            backgroundImage: "linear-gradient(to right, #6b21a8, #d946ef, #fb7185)",
                            willChange: "transform, opacity, filter",
                            backfaceVisibility: "hidden"
                        }}
                    >
                        DARDCOR
                    </span>

                    {/* Prismatic lens flare effect sweeping across the text */}
                    <span
                        className="absolute top-0 left-0 w-full h-full z-[2] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.9)_50%,transparent_100%)] bg-clip-text text-transparent opacity-0 animate-[flare_2.5s_ease-in-out_1.5s_forwards] pointer-events-none"
                        style={{
                            backgroundSize: "200% auto",
                            willChange: "background-position, opacity, filter",
                            backfaceVisibility: "hidden"
                        }}
                    >
                        DARDCOR
                    </span>
                </h1>
            </div>

            {/* Pure CSS Animations optimized for GPU Hardware Acceleration */}
            <style jsx>{`
                /* Background ambient breathing */
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.5; transform: translate3d(-50%, -50%, 0) scale(1); }
                    50% { opacity: 1; transform: translate3d(-50%, -50%, 0) scale(1.05); }
                }

                /* Typography reveal: Un-blur and expand tracking (letter-spacing) */
                @keyframes textReveal {
                    0% { 
                        letter-spacing: -0.5em; 
                        filter: blur(30px); 
                        opacity: 0; 
                        transform: translate3d(0, 20px, 0) scale(0.6);
                    }
                    40% {
                        filter: blur(0px);
                        opacity: 1;
                    }
                    100% { 
                        letter-spacing: 0.1em; 
                        filter: blur(0px); 
                        opacity: 1; 
                        transform: translate3d(0, 0, 0) scale(1);
                    }
                }

                /* Endless horizontal gradient shift simulating fluidity */
                @keyframes shimmer {
                    to { background-position: 200% center; }
                }

                /* Intense drop shadow blooming as light hits the text */
                @keyframes shadowBloom {
                    0%, 30% { opacity: 0; filter: blur(50px); transform: translate3d(0,0,0) scale(0.9); }
                    100% { opacity: 0.9; filter: blur(30px); transform: translate3d(0,0,0) scale(1.02); }
                }

                /* A radiant flare of light sweeping horizontally */
                @keyframes flare {
                    0% { background-position: 200% center; opacity: 0; filter: brightness(1); }
                    20% { opacity: 1; filter: brightness(1.5); }
                    80% { opacity: 1; filter: brightness(1.5); }
                    100% { background-position: -200% center; opacity: 0; filter: brightness(1); }
                }

                /* The final climax: rapid scale-up zoom right into the screen before unmounting */
                @keyframes exitZoom {
                    0%, 80% { transform: translate3d(0,0,0) scale(1); opacity: 1; filter: brightness(1); }
                    90% { transform: translate3d(0,0,0) scale(1.2); opacity: 1; filter: brightness(2); }
                    98% { transform: translate3d(0,0,0) scale(15); opacity: 0; filter: brightness(5); }
                    100% { transform: translate3d(0,0,0) scale(20); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;
