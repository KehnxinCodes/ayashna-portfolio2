import { useRef, useState, useCallback, useEffect } from "react";

export default function Compare() {
  const boxRef = useRef(null);
  const draggingRef = useRef(false);
  const [pct, setPct] = useState(50);

  const setFromClientX = useCallback((clientX) => {
    const box = boxRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    let p = ((clientX - rect.left) / rect.width) * 100;
    p = Math.max(0, Math.min(100, p));
    setPct(p);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(clientX);
    };
    const onUp = () => (draggingRef.current = false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [setFromClientX]);

  return (
    <section>
      <div className="wrap">
        <div className="eyebrow">04 — The Difference</div>
        <h2 style={{ fontSize: "clamp(32px,5vw,54px)", marginTop: "14px" }}>
          From raw footage to
          <br />
          something people want to watch.
        </h2>

        <div className="compare" ref={boxRef}>
          <div className="compare-raw">Raw Footage</div>
          <div
            className="compare-final"
            style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
          >
            Final Edit
          </div>
          <div className="compare-tag left">Raw</div>
          <div className="compare-tag right">Final</div>
          <div
            className="compare-handle"
            style={{ left: `${pct}%` }}
            role="slider"
            aria-label="Drag to compare raw footage and final edit"
            aria-valuenow={Math.round(pct)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onMouseDown={() => (draggingRef.current = true)}
            onTouchStart={() => (draggingRef.current = true)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPct((p) => Math.max(0, p - 5));
              if (e.key === "ArrowRight") setPct((p) => Math.min(100, p + 5));
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
