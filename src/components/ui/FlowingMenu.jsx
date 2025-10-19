import React from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

function FlowingMenu({ items = [] }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} index={idx} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image, callback, index }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);
  const animationRef = React.useRef(null);

  const animationDefaults = { duration: 0.6, ease: "expo.out" };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = Math.abs(mouseY);
    const bottomEdgeDist = Math.abs(mouseY - height);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;

    // Kill any ongoing animations
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    animationRef.current = gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;

    // Kill any ongoing animations
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    animationRef.current = gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  // Clean up animations on unmount
  React.useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="text-[#060010] uppercase font-normal text-[4vh] leading-[1.2] px-[2vw] py-0">
        {text}
      </span>
      {image && (
        <div
          className="w-[200px] h-[7vh] my-[2vh] mx-[2vw] rounded-[50px] bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
    </React.Fragment>
  ));

  return (
    <div
      className="flex-1 relative overflow-hidden max-h-[120px] text-center border-b border-zinc-300 bg-white"
      ref={itemRef}
    >
      {callback ? (
        <button
          className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-slate-900 text-[4vh] hover:text-[#060010] focus:text-slate-900 focus-visible:text-[#060010] w-full bg-transparent border-none outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={callback}
          type="button"
        >
          <span className="flex items-center justify-center gap-5 w-full h-full">
            {text}
            <ArrowRight size={30} />
          </span>
        </button>
      ) : (
        <a
          className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-slate-900 text-[4vh] hover:text-[#060010] focus:text-slate-900 focus-visible:text-[#060010] w-full outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          href={link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
        </a>
      )}

      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-blue-100 translate-y-full"
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] will-change-transform animation-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;

// Note: this is also needed
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       translate: {
//         '101': '101%',
//       },
//       keyframes: {
//         marquee: {
//           'from': { transform: 'translateX(0%)' },
//           'to': { transform: 'translateX(-50%)' }
//         }
//       },
//       animation: {
//         marquee: 'marquee 15s linear infinite'
//       }
//     }
//   },
//   plugins: [],
// };
