import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footerMain}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* BRAND COLUMN */}
          <div style={styles.brandCol}>
            <h2 style={styles.logo}>
              VELVET <span style={styles.goldThin}>GOLD</span>
            </h2>
            <p style={styles.brandDesc}>
              Established in 2026. <br />
              Architectural silhouettes, <br />
              curated for the global archive.
            </p>
          </div>

          {/* LINKS COLUMNS */}
          <div style={styles.linkCol}>
            <h4 style={styles.heading}>CLIENT CARE</h4>
            <p style={styles.fLink}>Track Order</p>
            <p style={styles.fLink}>Returns & Exchanges</p>
            <p style={styles.fLink}>Size Guide</p>
          </div>

          <div style={styles.linkCol}>
            <h4 style={styles.heading}>COMPANY</h4>
            <p style={styles.fLink}>Our Story</p>
            <p style={styles.fLink}>Sustainability</p>
            <p style={styles.fLink}>Careers</p>
          </div>

          {/* NEWSLETTER COLUMN (35% Black anchor) */}
          <div style={styles.newsCol}>
            <h4 style={styles.heading}>NEWSLETTER</h4>
            <p style={styles.newsDesc}>Join the elite list for early access.</p>
            <div style={styles.inputGroup}>
              <input
                type="text"
                placeholder="EMAIL ADDRESS"
                style={styles.input}
              />
              <button
                style={styles.subBtn}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#000")}
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#c5a059")
                }
              >
                JOIN
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div style={styles.copyrightRow}>
          <div style={styles.copyrightText}>© 2026 VELVET GOLD EXCLUSIVE.</div>
          <div style={styles.copyrightText}>ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footerMain: {
    background: "#ececec", // Light White (60% Scheme)
    color: "#000", // Black Text (35% Scheme)
    padding: "100px 0 40px 0",
    fontFamily: '"Inter", sans-serif',
    borderTop: "1px solid #eee",
  },
  container: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "60px",
  },
  logo: {
    letterSpacing: "8px",
    fontSize: "24px",
    fontWeight: "900",
    margin: "0 0 20px 0",
  },
  goldThin: {
    color: "#c5a059", // 5% Gold
    fontWeight: "200",
    fontStyle: "italic",
  },
  brandDesc: {
    color: "#615050",
    lineHeight: "1.8",
    fontSize: "14px",
    letterSpacing: "0.5px",
  },
  heading: {
    fontSize: "11px",
    letterSpacing: "3px",
    fontWeight: "800",
    color: "#000",
    marginBottom: "30px",
  },
  fLink: {
    color: "#615050",
    cursor: "pointer",
    marginBottom: "12px",
    fontSize: "13px",
    letterSpacing: "1px",
    transition: "0.3s",
  },
  newsDesc: {
    color: "#615050",
    fontSize: "13px",
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    marginTop: "15px",
    borderBottom: "1px solid #000", // Minimalist underline
  },
  input: {
    background: "transparent",
    border: "none",
    padding: "12px 0",
    color: "#000",
    width: "100%",
    outline: "none",
    fontSize: "11px",
    letterSpacing: "2px",
  },
  subBtn: {
    background: "#c5a059",
    color: "#fff",
    border: "none",
    padding: "0 25px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "10px",
    letterSpacing: "2px",
    transition: "0.4s ease",
  },
  copyrightRow: {
    marginTop: "100px",
    paddingTop: "30px",
    borderTop: "1px solid #000000",
    display: "flex",
    justifyContent: "space-between",
  },
  copyrightText: {
    color: "#615050",
    fontSize: "9px",
    letterSpacing: "2px",
  },
};

export default Footer;
