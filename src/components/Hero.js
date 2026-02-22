import React, { useEffect, useState } from "react";

const Hero = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  const scrollToShop = () => {
    const el = document.getElementById("shop");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={styles.heroWrapper}>
      {/* BACKGROUND FLOATING ELEMENTS */}
      <div
        style={{
          ...styles.abstractShape,
          transform: active
            ? "rotate(-5deg) scale(1)"
            : "rotate(0deg) scale(0.8)",
          opacity: active ? 1 : 0,
        }}
      />

      <div style={styles.container}>
        {/* IMAGE COMPOSITION (Mixed Layering) */}
        <div style={styles.imageSection}>
          <div
            style={{
              ...styles.mainImageFrame,
              transform: active ? "translateY(0)" : "translateY(40px)",
              opacity: active ? 1 : 0,
            }}
          >
            <img
              src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260"
              alt="Editorial"
              style={styles.img}
            />
            {/* Black overlay tag - part of the 35% */}
            <div style={styles.blackTag}>SERIES_026</div>
          </div>

          <div
            style={{
              ...styles.secondaryImageFrame,
              transform: active ? "translate(0, 0)" : "translate(-30px, 30px)",
              opacity: active ? 1 : 0,
              transitionDelay: "0.4s",
            }}
          >
            <img
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Texture"
              style={styles.img}
            />
          </div>
        </div>

        {/* TEXT CONTENT (Integrated Contrast) */}
        <div style={styles.textSection}>
          <div style={{ ...styles.overflowHide, marginBottom: "10px" }}>
            <span
              style={{
                ...styles.label,
                transform: active ? "translateY(0)" : "translateY(100%)",
                display: "block",
                transition: "transform 1s ease 0.5s",
              }}
            >
              DESIGNED IN LONDON / 2026
            </span>
          </div>

          <h1 style={styles.mainTitle}>
            <span
              style={{
                ...styles.titleLine,
                color: "#000",
                transform: active ? "translateX(0)" : "translateX(-50px)",
                opacity: active ? 1 : 0,
              }}
            >
              VELVET
            </span>
            <br />
            <span
              style={{
                ...styles.titleLine,
                color: "#fff",
                backgroundColor: "#000", // Black block mixing into the white
                padding: "0 20px",
                transform: active ? "translateX(0)" : "translateX(50px)",
                opacity: active ? 1 : 0,
                transitionDelay: "0.2s",
              }}
            >
              GOLD
            </span>
          </h1>

          <div
            style={{
              ...styles.descriptionBox,
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.6s",
            }}
          >
            <p style={styles.description}>
              High-contrast tailoring for the digital age. A symphony of{" "}
              <span style={{ color: "#000", fontWeight: "bold" }}>shadow</span>{" "}
              and light.
            </p>

            <div style={styles.btnWrapper}>
              <button
                style={styles.cta}
                onClick={scrollToShop}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#c5a059";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#000";
                  e.target.style.color = "#fff";
                }}
              >
                VIEW ARCHIVE
              </button>
              <div style={styles.goldLine}></div>
            </div>
          </div>
        </div>
      </div>

      {/* METADATA STRIP */}
      <div style={styles.metadata}>
        <span>80% ORGANIC COTTON</span>
        <span style={styles.dot}></span>
        <span>20% RECYCLED POLY</span>
        <span style={styles.dot}></span>
        <span>LIMITED RELEASE</span>
      </div>
    </section>
  );
};

const styles = {
  heroWrapper: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#c7c497", // 60% White base
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    fontFamily: '"Inter", sans-serif',
  },
  abstractShape: {
    position: "absolute",
    width: "40vw",
    height: "40vw",
    backgroundColor: "#ececec",
    borderRadius: "100px",
    top: "-10%",
    right: "-5%",
    zIndex: 0,
    transition: "all 2s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  container: {
    width: "85%",
    maxWidth: "1200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
    gap: "40px",
  },
  imageSection: {
    flex: 1,
    position: "relative",
    height: "70vh",
  },
  mainImageFrame: {
    width: "80%",
    height: "100%",
    backgroundColor: "#000",
    position: "relative",
    zIndex: 2,
    transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
    overflow: "hidden",
  },
  blackTag: {
    position: "absolute",
    top: "20px",
    left: "0",
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "10px",
    letterSpacing: "3px",
    zIndex: 5,
  },
  secondaryImageFrame: {
    position: "absolute",
    bottom: "-30px",
    right: "-20px",
    width: "50%",
    height: "40%",
    border: "10px solid #f9f9f9",
    backgroundColor: "#000",
    zIndex: 3,
    transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.9,
  },
  textSection: {
    flex: 1,
    paddingLeft: "40px",
  },
  overflowHide: {
    overflow: "hidden",
  },
  label: {
    fontSize: "12px",
    letterSpacing: "5px",
    color: "#c5a059",
    fontWeight: "700",
  },
  mainTitle: {
    fontSize: "7vw",
    lineHeight: "1.1",
    margin: "0 0 30px 0",
    fontWeight: "900",
  },
  titleLine: {
    display: "inline-block",
    transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  descriptionBox: {
    maxWidth: "400px",
    transition: "all 1s ease",
  },
  description: {
    fontSize: "16px",
    color: "#000000",
    lineHeight: "1.8",
    marginBottom: "40px",
  },
  btnWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  cta: {
    padding: "18px 40px",
    backgroundColor: "#000", // The 35% black contrast
    color: "#fff",
    border: "none",
    fontSize: "11px",
    fontWeight: "800",
    letterSpacing: "2px",
    cursor: "pointer",
    transition: "0.3s",
  },
  goldLine: {
    height: "1px",
    flex: 1,
    backgroundColor: "#c5a059",
  },
  metadata: {
    position: "absolute",
    bottom: "40px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    fontSize: "9px",
    color: "#aaa",
    letterSpacing: "2px",
    fontWeight: "600",
  },
  dot: {
    width: "4px",
    height: "4px",
    backgroundColor: "#c5a059",
    borderRadius: "50%",
  },
};

export default Hero;
