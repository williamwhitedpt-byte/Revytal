import type { Metadata } from 'next'
import { pilotFormUrl } from '../../data/site'
import { HandoffDemo } from './HandoffDemo'
import { RevenueCalculator } from './RevenueCalculator'
import styles from './home.module.css'

export const metadata: Metadata = {
  title: 'Revytal | Keep the Recommendation Connected',
  description:
    'Revytal gives physical therapy clinics a clinic-branded path from an exact product recommendation to patient checkout.',
}

const pilotUrl = `${pilotFormUrl}&utm_content=home_refined`
const estimatedDailyRecommendations = 37_000 * 32 * 0.6 * 0.15
const roundedDailyRecommendations = Math.round(estimatedDailyRecommendations / 5_000) * 5_000

export default function HomePage() {
  return (
    <main id="main" className={styles.home}>
      <section className={styles.hero} aria-labelledby="home-hero-title">
        <img
          className={styles.heroMark}
          src="/assets/revytal-dark-logo.svg"
          alt=""
          aria-hidden="true"
        />
        <div className={`wrap ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.contextLine}>A clinic-branded path for PT recommendations</p>
            <h1 id="home-hero-title">
              The patient asks: <span className={styles.accent}>which one</span> should I buy?
            </h1>
            <p className={styles.heroLead}>
              Revytal gives physical therapists a fast way to answer with the exact item, right there in the
              visit. The patient scans, checks out on a clinic-branded page, and leaves with one clear next step.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href={pilotUrl} target="_blank" rel="noopener">
                Request a pilot
              </a>
              <a className={styles.textLink} href="#handoff">
                See the handoff <span aria-hidden="true">↓</span>
              </a>
            </div>
            <ul className={styles.promiseList} aria-label="Revytal clinic benefits">
              <li>No retail search</li>
              <li>No clinic inventory</li>
              <li>No second-guessing the item</li>
            </ul>
          </div>

          <figure className={styles.heroVisual}>
            <img
              src="/assets/home/clinic-select.webp"
              alt="A physical therapist selecting a hinged knee brace from a clinic-branded Revytal product list on a tablet."
              width="900"
              height="1125"
              fetchPriority="high"
            />
            <figcaption>Exact-product selection in a clinic-branded Revytal flow.</figcaption>
          </figure>
        </div>
      </section>

      <div className={styles.handoffStrip} aria-label="Revytal recommendation path">
        <div className={`wrap ${styles.handoffStripInner}`}>
          <span>One clinical recommendation</span>
          <i aria-hidden="true">→</i>
          <span>One exact item</span>
          <i aria-hidden="true">→</i>
          <span>One connected purchase path</span>
        </div>
      </div>

      <section className={styles.flowSection} id="handoff" aria-labelledby="handoff-title">
        <div className="wrap">
          <header className={styles.sectionHeader}>
            <h2 id="handoff-title">It should feel this simple.</h2>
            <p>
              The patient is already in the room. Revytal keeps the recommendation there too, from the PT&apos;s
              exact selection through the patient&apos;s checkout.
            </p>
          </header>
          <HandoffDemo />
        </div>
      </section>

      <section className={styles.compareSection} aria-labelledby="compare-title">
        <div className={`wrap ${styles.compareLayout}`}>
          <div>
            <h2 id="compare-title">The recommendation is not the hard part.</h2>
            <p className={styles.sectionLead}>
              PTs already know what they want a patient to use. The friction begins when that exact answer turns
              into an open-ended shopping trip.
            </p>
          </div>
          <div className={styles.pathComparison}>
            <div className={styles.pathRow}>
              <span className={styles.pathLabel}>Today</span>
              <p>Say the product name → open retail search → compare near matches → hope</p>
            </div>
            <div className={`${styles.pathRow} ${styles.pathRowRevytal}`}>
              <span className={styles.pathLabel}>With Revytal</span>
              <p>Select the exact item → scan in the clinic → check out on the clinic page</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valueSection} aria-labelledby="clinic-value-title">
        <div className={`wrap ${styles.valueLayout}`}>
          <div>
            <h2 id="clinic-value-title">The clinic should still feel like a clinic.</h2>
            <p>
              Revytal makes a recommendation easier to follow without turning a therapist into a salesperson or
              the clinic into a store.
            </p>
          </div>
          <ol className={styles.valueList}>
            <li>
              <span>01</span>
              <div>
                <h3>The exact item, not a near match</h3>
                <p>The patient sees the product and size the clinician actually meant.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>No second job in retail</h3>
                <p>No stock room, retail counter, or clinic-managed shipping workflow.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Care first. Revenue second.</h3>
                <p>The handoff has to work for patient care first. Any clinic revenue is the practical upside.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.economicsSection} aria-labelledby="economics-title">
        <div className={`wrap ${styles.economicsLayout}`}>
          <div className={styles.economicsCopy}>
            <h2 id="economics-title">A practical upside, after the handoff works.</h2>
            <p>
              The clinic should not need a stockroom or a shipping desk to benefit from a purchase it helped
              create. Pilot data and approved supplier terms will determine the real economics.
            </p>
            <a className={styles.textLink} href="/index_v3/economics.html">
              Review the economics model <span aria-hidden="true">→</span>
            </a>
          </div>
          <RevenueCalculator />
        </div>
      </section>

      <section className={styles.demandSection} aria-labelledby="demand-title">
        <div className={`wrap ${styles.demandLayout}`}>
          <div className={styles.demandMetric}>
            <strong>~{roundedDailyRecommendations.toLocaleString('en-US')}</strong>
            <span>estimated PT product recommendations in the U.S. each day</span>
          </div>
          <div className={styles.demandCopy}>
            <h2 id="demand-title">PTs already make the recommendation.</h2>
            <p>
              Physical therapists already tell patients which brace, band, or recovery tool to use. Revytal gives
              that trusted moment a cleaner, measurable ending.
            </p>
            <details>
              <summary>How Revytal estimates this</summary>
              <p>
                Approximately 37,000 outpatient rehab clinics × 32 daily visits × 60% orthopedic or MSK visits ×
                a 15% product-recommendation rate, rounded to the nearest 5,000. This is a planning estimate, not
                measured Revytal platform activity.
              </p>
            </details>
            <a className={styles.textLink} href="/index_v3/investors.html">
              View the investor overview <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.statusSection} aria-labelledby="status-title">
        <div className="wrap">
          <header className={styles.statusHeader}>
            <span>Preparing for a focused pilot</span>
            <h2 id="status-title">First, make the purchase path work. Then learn from what happens next.</h2>
          </header>
          <div className={styles.statusColumns}>
            <article>
              <h3>What the pilot is built to test</h3>
              <ul>
                <li>Exact-item selection during the visit</li>
                <li>In-clinic QR checkout on a clinic-branded page</li>
                <li>Clear order visibility and a reliable fulfillment handoff</li>
                <li>A focused, approved product set</li>
              </ul>
            </article>
            <article>
              <h3>What comes after the path is proven</h3>
              <ul>
                <li>Product-specific arrival, fit, and use check-ins</li>
                <li>Patient feedback outside the visit</li>
                <li>Deeper product and clinic follow-through signals</li>
                <li>A clearer picture of what patients buy, use, and find helpful</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.closingSection} aria-labelledby="closing-title">
        <img
          className={styles.closingMark}
          src="/assets/revytal-white-logobrand.svg"
          alt=""
          aria-hidden="true"
        />
        <div className={`wrap ${styles.closingInner}`}>
          <div>
            <h2 id="closing-title">Bring us the real clinic questions.</h2>
            <p>
              Revytal is selecting a small number of clinic teams to test the in-room workflow, product set, and
              handoff details against real clinic routines before broader release.
            </p>
          </div>
          <div className={styles.closingActions}>
            <a className={styles.coralButton} href={pilotUrl} target="_blank" rel="noopener">
              Request a pilot
            </a>
            <a className={styles.lightLink} href="/index_v3/how-it-works.html">
              See how it works
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
