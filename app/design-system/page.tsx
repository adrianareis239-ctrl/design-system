import styles from './page.module.css'

export const metadata = {
  title: 'Design System / v1.0',
}

export default function DesignSystem() {
  return (
    <main className={styles.main}>

      {/* ── HEADER ───────────────────────────────────────────────────────── */}
      <header className={styles.header}>
        <p className={styles.headerLabel}>Design System</p>
        <h1 className={styles.displayName}>Adriana Reis.</h1>
        <p className={styles.displaySub}>A designer's system, in two registers</p>
        <p className={styles.headerDesc}>
          [Graphic and UX designer based in Brazil. Half my work ships to checkout pages. The other half is the editorial design I keep coming back to.]
        </p>
        <div className={styles.badgeRow}>
          <span className={`${styles.tag} ${styles.tagSolid}`}>v 1.0.0</span>
          <span className={`${styles.tag} ${styles.tagDefault}`}>3 core colors</span>
          <span className={`${styles.tag} ${styles.tagDefault}`}>2 typefaces</span>
          <span className={`${styles.tag} ${styles.tagDefault}`}>8px grid</span>
        </div>
      </header>

      {/* ── 01 COLORS ────────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.secNum}>01</p>
        <p className={styles.secTitle}>Color tokens</p>
        <p className={styles.secDesc}>Red leads. Black holds. White breathes.</p>

        <p className={styles.groupLabel}>— Brand</p>
        <div className={styles.tokenGrid}>
          {[
            { var: '--red-500', desc: 'Primary brand',    hex: '#D4361C', rgb: '212·54·28'  },
            { var: '--red-400', desc: 'Hover / secondary',hex: '#E05A41', rgb: '224·90·65'  },
            { var: '--red-600', desc: 'Pressed / deep',   hex: '#A8260F', rgb: '168·38·15'  },
            { var: '--red-100', desc: 'Light tint',       hex: '#FAD5CE', rgb: '250·213·206'},
          ].map((t) => (
            <div key={t.var} className={styles.tokenCard}>
              <div className={styles.tokenSwatch} style={{ background: t.hex }} />
              <div className={styles.tokenInfo}>
                <p className={styles.tokenVar}>{t.var}</p>
                <p className={styles.tokenDesc}>{t.desc}</p>
                <p className={styles.tokenHex}>{t.hex} · RGB {t.rgb}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.groupLabel} style={{ marginTop: 20 }}>— Ink (neutrals)</p>
        <div className={styles.tokenGrid}>
          {[
            { var: '--ink-900', desc: 'Canvas',     hex: '#0A0A0A' },
            { var: '--ink-800', desc: 'Surface',    hex: '#141414' },
            { var: '--ink-700', desc: 'Surface alt', hex: '#1C1C1C' },
            { var: '--ink-500', desc: 'Border',     hex: '#3A3A3A' },
            { var: '--ink-300', desc: 'Muted text', hex: '#808080' },
            { var: '--ink-100', desc: 'Body copy',  hex: '#E0E0E0' },
            { var: '--white',   desc: 'Headings',   hex: '#FAFAFA' },
          ].map((t) => (
            <div key={t.var} className={styles.tokenCard}>
              <div
                className={styles.tokenSwatch}
                style={{
                  background: t.hex,
                  border: t.hex === '#FAFAFA' || t.hex === '#E0E0E0'
                    ? '0.5px solid #3A3A3A'
                    : undefined,
                }}
              />
              <div className={styles.tokenInfo}>
                <p className={styles.tokenVar}>{t.var}</p>
                <p className={styles.tokenDesc}>{t.desc}</p>
                <p className={styles.tokenHex}>{t.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 02 TYPOGRAPHY ────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.secNum}>02</p>
        <p className={styles.secTitle}>Typography</p>
        <p className={styles.secDesc}>PiePie for display + structure. Clash Grotesk for body.</p>

        <div className={styles.typeRows}>
          <div className={styles.typeRow}>
            <span className={styles.typeMeta}>Display / 64 / 400</span>
            <span className={styles.tDisplay}>Selected work</span>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeMeta}>H1 / 40 / 400</span>
            <span className={styles.tH1}>Selected work</span>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeMeta}>H2 / 28 / 600</span>
            <span className={styles.tH2}>E-commerce and editorial</span>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeMeta}>H3 / 18 / 500</span>
            <span className={styles.tH3}>Recent case study</span>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeMeta}>Body / 15 / 400</span>
            <span className={styles.tBody}>[I work with founders building online stores and editors making things worth keeping. The system here is what makes that possible without burning out.]</span>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeMeta}>Label / 11 / 500 caps</span>
            <span className={styles.tLabel}>Project category</span>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeMeta}>Mono / 11 / 400</span>
            <span className={styles.tMono}>{'// system.version → 1.0.0'}</span>
          </div>
        </div>

        <div className={styles.fontPair}>
          <div>
            <p className={styles.fontPairLabel}>DISPLAY</p>
            <p className={styles.fontPairName}>PiePie</p>
          </div>
          <div>
            <p className={styles.fontPairLabel}>BODY + UI</p>
            <p className={styles.fontPairName}>Clash Grotesk</p>
          </div>
        </div>
      </section>

      {/* ── 03 SPACING ───────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.secNum}>03</p>
        <p className={styles.secTitle}>Spacing</p>
        <p className={styles.secDesc}>8px base. Everything snaps to the grid.</p>
        <div className={styles.spGrid}>
          {[
            { h: 4,  val: '4px',  token: '--sp-1' },
            { h: 8,  val: '8px',  token: '--sp-2' },
            { h: 12, val: '12px', token: '--sp-3' },
            { h: 16, val: '16px', token: '--sp-4' },
            { h: 24, val: '24px', token: '--sp-5' },
            { h: 32, val: '32px', token: '--sp-6' },
            { h: 48, val: '48px', token: '--sp-7' },
            { h: 64, val: '64px', token: '--sp-8' },
          ].map((s) => (
            <div key={s.token} className={styles.spItem}>
              <div className={styles.spBar} style={{ height: s.h }} />
              <span className={styles.spVal}>{s.val}</span>
              <span className={styles.spToken}>{s.token}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04 BUTTONS ───────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.secNum}>04</p>
        <p className={styles.secTitle}>Buttons</p>
        <p className={styles.secDesc}>Sharp edges. Zero radius. One primary action per view.</p>
        <div className={styles.btnRow}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>Get in touch →</button>
          <button className={`${styles.btn} ${styles.btnOutline}`}>View work</button>
          <button className={`${styles.btn} ${styles.btnDanger}`}>Download CV</button>
          <button className={`${styles.btn} ${styles.btnGhost}`}>Skip for now</button>
        </div>
      </section>

      {/* ── 05 TAGS & INPUTS ─────────────────────────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.secNum}>05</p>
        <p className={styles.secTitle}>Tags & Inputs</p>
        <p className={styles.secDesc}>Mono, uppercase, tight tracking.</p>
        <div className={styles.tagRow}>
          {['Default', 'Active', 'Featured', 'v1.0.0', 'UI Design', 'Branding', 'Motion'].map((t, i) => (
            <span
              key={t}
              className={`${styles.tag} ${
                i === 0 ? styles.tagDefault :
                i === 1 ? styles.tagActive  :
                i === 2 ? styles.tagSolid   :
                i === 3 ? styles.tagWhite   :
                styles.tagDefault
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>— Email address</label>
          <input
            className={styles.input}
            type="email"
            placeholder="your@email.com"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>— Message</label>
          <textarea
            className={styles.input}
            rows={3}
            placeholder="Let's talk about your project..."
          />
        </div>
      </section>

      {/* ── 06 CARDS ─────────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.secNum}>06</p>
        <p className={styles.secTitle}>Cards</p>
        <p className={styles.secDesc}>Three weights: surface, primary, signal.</p>
        <div className={styles.cardGrid}>
          <div className={`${styles.card} ${styles.cardSurface}`}>
            <p className={styles.cardLabel}>Surface card</p>
            <p className={styles.cardTitle}>[Project title]</p>
            <p className={styles.cardBody}>Default container for content and project groups. Sits flat on the canvas.</p>
          </div>
          <div className={`${styles.card} ${styles.cardPrimary}`}>
            <p className={styles.cardLabel}>Primary card</p>
            <p className={styles.cardTitle}>Skincare brand rebuild</p>
            <p className={styles.cardBody}>Use sparingly — once per section max. Draws the eye without shouting.</p>
          </div>
          <div className={`${styles.card} ${styles.cardSignal}`}>
            <p className={styles.cardLabel}>Signal card</p>
            <p className={styles.cardTitle}>Got something in mind?</p>
            <p className={styles.cardBody}>Reserve for the most important action. One per viewport.</p>
          </div>
        </div>
      </section>

      {/* ── 07 ICONOGRAPHY ───────────────────────────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.secNum}>07</p>
        <p className={styles.secTitle}>Iconography</p>
        <div className={styles.iconRules}>
          {[
            ['01', '24×24', 'viewBox with 2px safe-area padding'],
            ['02', '1.5px', 'stroke width. Never filled — line only'],
            ['03', 'square', 'caps + miter joins. Sharp, never soft'],
            ['04', 'currentColor', 'inherits text color'],
          ].map(([num, code, text]) => (
            <div key={num} className={styles.iconRule}>
              <span className={styles.iconRuleNum}>{num}</span>
              <span className={styles.iconRuleText}>
                <code className={styles.inlineCode}>{code}</code> {text}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.iconSizes}>
          {[
            { size: 16, label: '16 / sm' },
            { size: 20, label: '20 / md' },
            { size: 24, label: '24 / base' },
            { size: 32, label: '32 / lg' },
          ].map((s) => (
            <div key={s.label} className={styles.iconSizeItem}>
              <svg
                width={s.size}
                height={s.size}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              <span className={styles.iconSizeLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <p className={styles.groupLabel} style={{ marginTop: 24 }}>— UI essentials</p>
        <div className={styles.iconGrid}>
          {[
            { name: 'arrow-up-right', label: 'external', variant: 'red' },
            { name: 'chevron-down',   label: 'chevron',  variant: 'default' },
            { name: 'menu',           label: 'menu',     variant: 'default' },
            { name: 'close',          label: 'close',    variant: 'default' },
            { name: 'search',         label: 'search',   variant: 'default' },
            { name: 'user',           label: 'contact',  variant: 'default' },
            { name: 'briefcase',      label: 'work',     variant: 'default' },
            { name: 'download',       label: 'download', variant: 'default' },
            { name: 'arrow-right',    label: 'cta',      variant: 'filled' },
            { name: 'dots',           label: 'more',     variant: 'muted' },
            { name: 'mail',           label: 'email',    variant: 'default' },
            { name: 'link',           label: 'link',     variant: 'default' },
          ].map((icon) => (
            <div key={icon.label} className={styles.iconItem}>
              <div className={`${styles.iconBox} ${
                icon.variant === 'red'    ? styles.iconBoxRed    :
                icon.variant === 'filled' ? styles.iconBoxFilled :
                icon.variant === 'muted'  ? styles.iconBoxMuted  :
                ''
              }`}>
                <IconSVG name={icon.name} />
              </div>
              <span className={styles.iconName}>{icon.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 08 COMPOSITION ───────────────────────────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.secNum}>08</p>
        <p className={styles.secTitle}>Composition</p>
        <p className={styles.secDesc}>How the system speaks in full sentences.</p>
        <div className={styles.composition}>
          <div className={styles.compMetric}>
            <p className={styles.compMetricTag}>{'// highlight.2025'}</p>
            <p className={styles.compMetricNum}>[2]×</p>
            <p className={styles.compMetricUnit}>practices, one studio</p>
          </div>
          <div className={styles.compCopy}>
            <p className={styles.compCopyTag}>Numbers speak louder than adjectives.</p>
            <p className={styles.compCopyH}>Two practices, one studio.</p>
            <p className={styles.compCopyP}>E-commerce keeps me sharp on conversion and speed. Editorial keeps me honest about craft and patience. The work gets better when both sides feed each other.</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <span className={styles.footerText}>Adriana <span className={styles.footerDot}>●</span> DESIGN SYSTEM <span className={styles.footerDot}>●</span>:)</span>
        <span className={styles.footerFonts}>PiePie + Clash Grotesk</span>
      </footer>

    </main>
  )
}

function IconSVG({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    'arrow-up-right': <><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></>,
    'chevron-down':   <polyline points="6 9 12 15 18 9"/>,
    'menu':           <><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></>,
    'close':          <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    'search':         <><circle cx="11" cy="11" r="6"/><line x1="16" y1="16" x2="21" y2="21"/></>,
    'user':           <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    'briefcase':      <><rect x="2" y="7" width="20" height="14" rx="0"/><path d="M16 7V5a2 2 0 0 0-4 0v2"/></>,
    'download':       <><path d="M21 15v4H3v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    'arrow-right':    <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    'dots':           <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
    'mail':           <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    'link':           <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>,
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      {icons[name]}
    </svg>
  )
}
