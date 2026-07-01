import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Revytal - The Trusted Product Path for PT Recommendations",
  description: "Revytal gives PT clinics a trusted, clinic-branded path from product recommendation to patient purchase.",
}

export default function Page() {
  return (
    <>
      <main id="main">
            <section className="hero">
              <div className="wrap hero-grid">
                <div className="reveal">
                  <p className="eyebrow">Clinic-branded product path</p>
                  <h1>The product recommendation should not <span className="accent-word">vanish</span> into a retail search.</h1>
                  <p className="hero-copy">Revytal gives PT and rehab clinics a clean, clinic-branded path from recommendation to purchase, so patients get the exact item their clinician meant and clinics keep visibility into the handoff.</p>
                  <div className="hero-actions">
                    <a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSeBa4y1REzCzltl7FXJauQ9Jz7-3ZUsET4ad5pxPDPqzHmKBg/viewform?usp=publish-editor&utm_source=revytal_site&utm_medium=web&utm_campaign=pilot_program" target="_blank" rel="noopener">Request Pilot</a>
                    <a className="btn btn-secondary" href="/index_v3/how-it-works.html">See How It Works</a>
                  </div>
                  <div className="grid-3">
                    <div><span className="badge">Exact item</span><p className="muted">No guessing between seven similar braces at midnight.</p></div>
                    <div><span className="badge">No inventory</span><p className="muted">The clinic does not need a stock room or a side career in shipping.</p></div>
                    <div><span className="badge">Clinic connected</span><p className="muted">The purchase stays attached to the recommendation that earned the trust.</p></div>
                  </div>
                </div>
                <div className="reveal">
                  <div className="phone" aria-label="Revytal checkout demo">
                    <div className="phone-screen">
                      <div className="phone-header">
                        <span className="clinic-name">Mend Physical Therapy</span>
                        <span className="badge">Recommended</span>
                      </div>
                      <div className="phone-body">
                        <h2>Your recovery kit</h2>
                        <p className="muted">Products selected for today's home plan.</p>
                        <div className="product-row">
                          <div className="product-top"><span className="product-name">Ankle stability brace</span><span className="price">$42</span></div>
                          <div className="product-note">Chosen for return-to-run support and daily confidence.</div>
                        </div>
                        <div className="product-row">
                          <div className="product-top"><span className="product-name">Recovery topical</span><span className="price">$28</span></div>
                          <div className="product-note">Use after evening mobility work.</div>
                        </div>
                        <span className="demo-label">Checkout preview</span>
                        <button className="btn btn-primary" type="button" data-demo-action="Order complete. The clinic sees the purchase and Revytal routes fulfillment." style={{width: '100%', marginTop: 6}}>Complete Purchase</button>
                        <p className="demo-status" data-demo-status>Recommendation matched to the clinic-approved product path.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="soft">
              <div className="wrap">
                <div className="section-head reveal">
                  <h2>The current handoff relies too much on memory.</h2>
                  <p className="section-copy">A clinician says the right thing. The patient hears it, then the purchase often drifts into search results, product reviews, sizing confusion, and whatever a marketplace algorithm decided to put first that day. That is a fragile way to handle a trusted recommendation.</p>
                </div>
                <div className="grid-3 reveal">
                  <article className="card"><span className="number">01</span><h3>The clinic creates the demand.</h3><p>Product recommendations come from clinical judgment, not casual shopping.</p></article>
                  <article className="card"><span className="number">02</span><h3>The purchase leaves the room.</h3><p>Patients go to Amazon, retail, or a half-remembered product name.</p></article>
                  <article className="card"><span className="number">03</span><h3>The clinic loses the signal.</h3><p>No simple visibility into what was purchased, what was skipped, or where the handoff broke.</p></article>
                </div>
              </div>
            </section>
            <section>
              <div className="wrap">
                <div className="section-head reveal">
                  <h2>Revytal keeps the handoff inside the clinic relationship.</h2>
                  <p className="section-copy">Revytal is not here to make clinicians sell. It is here to make the product path cleaner when they already recommend something useful.</p>
                </div>
                <div className="grid-4 reveal">
                  <article className="card"><span className="badge">Recommend</span><h3>Choose the exact product.</h3><p>Clinicians work from an approved product set instead of sending patients into open-ended search.</p></article>
                  <article className="card"><span className="badge">Share</span><h3>Send a link or QR code.</h3><p>The patient gets one focused path, branded to the clinic and tied to the visit.</p></article>
                  <article className="card"><span className="badge">Fulfill</span><h3>Route the order.</h3><p>Revytal handles the commerce layer so the clinic does not become a retail counter.</p></article>
                  <article className="card"><span className="badge">Learn</span><h3>See the product movement.</h3><p>The clinic gets a clearer view of recommendation activity without adding another visit task.</p></article>
                </div>
              </div>
            </section>
            <section className="wash">
              <div className="wrap grid-2">
                <div className="reveal">
                  <p className="eyebrow">For clinic teams</p>
                  <h2>A better patient handoff, with revenue as the practical bonus.</h2>
                  <p className="section-copy">The patient handoff comes first: exact product, clean checkout, no inventory, and no awkward affiliate links. Margin is the practical upside once the handoff feels right.</p>
                  <div className="actions"><a className="btn btn-primary" href="/index_v3/platform.html">Explore Platform</a><a className="btn btn-secondary" href="/index_v3/economics.html">Review Economics</a></div>
                </div>
                <aside className="calc-card reveal" data-revenue-calculator aria-label="Example clinic revenue math">
                  <h3>Sample monthly math</h3>
                  <p className="calc-intro">Illustrative only, based on a small clinic's recommendation volume.</p>
                  <div className="calc-row calc-control">
                    <div>
                      <label htmlFor="daily-recommendations">Product recommendations per day</label>
                      <input className="calc-range" id="daily-recommendations" type="range" min={1} max={20} step={1} defaultValue={7} data-recs-input aria-describedby="revenue-calc-note" />
                    </div>
                    <output data-recs-value htmlFor="daily-recommendations">7</output>
                  </div>
                  <div className="calc-row"><span>Patient follow-through rate</span><strong>40%</strong></div>
                  <div className="calc-row"><span>Average clinic revenue per order</span><strong>$7</strong></div>
                  <div className="calc-row calc-total">
                    <span className="calc-total-label">Estimated<br />monthly revenue</span>
                    <strong data-monthly-value aria-live="polite">$390</strong>
                  </div>
                  <div className="calc-confetti" data-confetti aria-hidden="true" />
                  <p className="calc-note" id="revenue-calc-note">Example only. Results depend on visit volume, product mix, pricing, and patient follow-through.</p>
                </aside>
              </div>
            </section>
            <section>
              <div className="wrap">
                <div className="section-head reveal">
                  <h2>Currently a focused pilot, with follow-through features coming next.</h2>
                  <p className="section-copy">Revytal is a working product in controlled pilot use with clinics now. Follow-through features come next.</p>
                </div>
                <div className="grid-3 reveal">
                  <article className="card"><h3>Focused pilot.</h3><p>The pilot uses a focused product set, hands-on support, and direct clinic feedback before expanding.</p><a className="btn btn-ghost" href="/index_v3/pilot-program.html">Review Pilot Plan</a></article>
                  <article className="card"><h3>Simple boundaries.</h3><p>Clinics keep clinical responsibility. Revytal supports the product path, fulfillment routing, and follow-up.</p><a className="btn btn-ghost" href="/index_v3/trust-compliance.html">Review Trust Page</a></article>
                  <article className="card"><h3>Investor overview.</h3><p>Clinic economics, supplier relationships, and follow-through are covered on the investor overview.</p><a className="btn btn-ghost" href="/index_v3/investors.html">Investor View</a></article>
                </div>
              </div>
            </section>
            <section className="blue-section">
              <div className="wrap grid-2">
                <div className="reveal">
                  <p className="eyebrow">Pilot clinics</p>
                  <h2>Help shape the recommendation path your clinic would actually use.</h2>
                  <p>Revytal is selecting early clinic teams to test a cleaner recommendation-to-purchase workflow with a curated product set and hands-on support.</p>
                </div>
                <div className="reveal" style={{alignSelf: 'end'}}><a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSeBa4y1REzCzltl7FXJauQ9Jz7-3ZUsET4ad5pxPDPqzHmKBg/viewform?usp=publish-editor&utm_source=revytal_site&utm_medium=web&utm_campaign=pilot_program" target="_blank" rel="noopener">Request Pilot</a></div>
              </div>
            </section>
          </main>
    </>
  )
}
