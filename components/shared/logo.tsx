import { useRef, useEffect } from "react";
import gsap from "gsap";

const Logo = () => {
  const nRef = useRef(null);
  const uRef = useRef(null);
  const rRef = useRef(null);
  const jRef = useRef(null);
  const oRef = useRef(null);
  const vRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const n = nRef.current;
    const u = uRef.current;
    const r = rRef.current;
    const j = jRef.current;
    const o = oRef.current;
    const v = vRef.current;
    const box = boxRef.current;

    gsap.set([n, u, r, j, o, v], { opacity: 0.2 });

    const timeline = gsap.timeline();

    timeline
      .to(n, { opacity: 1, rotation: "-=360", duration: 0.5 })
      .to(u, { opacity: 1,rotationX : -360, duration: 0.5 })
      .to(r, { opacity: 1, rotationX : -360, duration: 0.5 })
      .to(j, { opacity: 1,rotationX : -360, duration: 0.5 })
      .to(o, { opacity: 1,rotationX : -360, duration: 0.5 })
      .to(v, { opacity: 1,rotationX : -360, duration: 0.5 });

    // Hover animatsiyasi
    //@ts-ignore
    box.addEventListener("mouseenter", () => {
      timeline.play(); // animatsiyani boshlash
    });
    //@ts-ignore
    box.addEventListener("mouseleave", () => {
      timeline.reverse(); // animatsiyani orqaga qaytarish
    });
  }, []);

  return (
    <div className="flex font-bold text-inherit" ref={boxRef}>
      <div ref={nRef}>N</div>
      <div ref={uRef}>U</div>
      <div ref={rRef}>R</div>
      <div ref={jRef}>J</div>
      <div ref={oRef}>O</div>
      <div ref={vRef}>N</div>
    </div>
  );
};

export default Logo;
