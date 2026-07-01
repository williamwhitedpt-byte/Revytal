import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Clinic Conversation - Revytal",
  description: "Revytal helps clinics turn everyday rehab product recommendations into a clearer patient handoff.",
  robots: { index: false, follow: false },
}

export default function Page() {
  return (
    <>
      <main id="main">
            <section className="clinic-hero">
              <div className="wrap clinic-hero-grid">
                <div className="clinic-hero-copy reveal">
                  <p className="eyebrow">Clinic conversation</p>
                  <h1>Let me ask you <span className="accent-word">one question</span> first.</h1>
                  <p className="lead">How many times a day does one of your therapists say something like, "You should probably get one of these"?</p>
                  <ul className="clinic-quote-stack" role="list" aria-label="Common clinic recommendation examples">
                    <li>"You should probably get one of these resistance bands."</li>
                    <li>"I'd like you to buy a TENS unit."</li>
                    <li>"You need a better ankle brace."</li>
                    <li>"Grab a foam roller."</li>
                    <li>"You'd benefit from a wedge pillow."</li>
                  </ul>
                </div>
                <div className="clinic-moment reveal" role="group" aria-label="Revytal recommendation moment">
                  <div className="clinic-moment-header">
                    <span>After the visit</span>
                    <span>Usually...</span>
                  </div>
                  <div className="clinic-moment-body">
                    <p className="patient-line">"Was it the blue one or the black one?"</p>
                    <p className="therapist-line">"Let me find the link again."</p>
                    <button className="recommend-pulse" type="button" data-demo-action="Revytal keeps the recommendation attached to the exact product path.">Recommend to Patient</button>
                    <p className="demo-status" data-demo-status aria-live="polite">Tap the recommendation button for the cleaner version.</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="soft">
              <div className="wrap clinic-split">
                <div className="reveal">
                  <p className="clinic-label">Today</p>
                  <h2>Most clinics have these conversations dozens of times a week.</h2>
                  <p className="section-copy">So what actually happens after the therapist says it? Usually one of these:</p>
                </div>
                <div className="clinic-list-panel reveal">
                  <ul className="clinic-check-list">
                    <li>Tell the patient to look on Amazon.</li>
                    <li>Print off a link and hope it still points to the right item.</li>
                    <li>Search Google while the patient is sitting there.</li>
                    <li>Keep a drawer of miscellaneous products.</li>
                    <li>Or simply hope the patient buys the right thing.</li>
                  </ul>
                  <p>That experience is not great for anyone.</p>
                </div>
              </div>
            </section>
            <section>
              <div className="wrap clinic-search-section">
                <div className="reveal">
                  <p className="clinic-label">What Revytal is</p>
                  <h2>A rehab product path built specifically for <span className="accent-word">clinicians</span>.</h2>
                  <p className="section-copy">Your therapist opens Revytal. Instead of searching like they are shopping online, they search like they are thinking clinically.</p>
                </div>
                <div className="clinic-search-console reveal" aria-label="Revytal clinical search example">
                  <div className="search-bar"><span>Rotator cuff repair, six weeks post-op</span><i /></div>
                  <div className="console-head">
                    <span>Clinically relevant options</span>
                    <strong>Focused path</strong>
                  </div>
                  <div className="clinical-chip-grid">
                    <span>Pulley system</span>
                    <span>Sling / immobilizer</span>
                    <span>Cold therapy wrap</span>
                    <span>Light resistance bands</span>
                    <span>Posture support</span>
                  </div>
                  <p>Not a general retail feed. Not a maze of warehouse categories. A focused pilot product set organized around clinical intent.</p>
                </div>
                <div className="clinic-callout reveal">
                  <h3>It is built for how therapists think, not how warehouses catalog.</h3>
                  <p>Most medical supply sites are warehouse catalogs: thousands of products, tiny filters, and categories that do not match how clinicians work. Revytal organizes the handoff around the problem you are solving. You are not shopping. You are helping a patient act on the plan.</p>
                </div>
              </div>
            </section>
            <section className="wash">
              <div className="wrap">
                <div className="section-head reveal">
                  <div>
                    <p className="clinic-label">The handoff</p>
                    <h2>Then your therapist simply recommends them.</h2>
                  </div>
                  <p className="section-copy">The recommendation moves from a spoken aside to a clear path the patient can open, understand, and complete.</p>
                </div>
                <div className="handoff-flow reveal">
                  <article>
                    <span>01</span>
                    <h3>The patient gets a text or email.</h3>
                    <p>It opens a simple page with the recommended products and why each one was chosen.</p>
                  </article>
                  <article>
                    <span>02</span>
                    <h3>They check out in a few taps.</h3>
                    <p>Optional instructions can be included. The path is focused, clear, and free of account hurdles.</p>
                  </article>
                  <article>
                    <span>03</span>
                    <h3>It ships directly to their home.</h3>
                    <p>No inventory. No open-ended retail search. No guessing what was discussed in the visit.</p>
                  </article>
                </div>
              </div>
            </section>
            <section>
              <div className="wrap clinic-split clinic-why">
                <div className="reveal">
                  <p className="clinic-label">Why clinics care</p>
                  <h2>The revenue opportunity is real. The bigger win is consistency.</h2>
                  <p className="section-copy">Clinics already create product demand through clinical trust. During the pilot, purchases through the clinic path can create revenue back to the clinic, depending on product mix and pilot terms.</p>
                </div>
                <div className="clinic-consistency reveal">
                  <h3>What that looks like day to day</h3>
                  <p>Instead of each therapist recommending different products from memory, your clinic builds a shared library of trusted recommendations. New therapists ramp up faster. Patients get more consistent guidance. Therapists spend less time hunting for links.</p>
                  <p>Over time, clinics can start to see what patients actually purchase and where the handoff may need support.</p>
                </div>
              </div>
            </section>
            <section className="soft">
              <div className="wrap clinic-case-grid">
                <div className="reveal">
                  <p className="clinic-label">In your clinic</p>
                  <h2>A patient comes in with lateral epicondylitis.</h2>
                  <p className="section-copy">Your therapist evaluates them and prescribes exercises. Then they open Revytal and recommend the support products that match the plan.</p>
                </div>
                <div className="clinic-case-card reveal">
                  <span className="badge">Example recommendation</span>
                  <h3>Tennis elbow, conservative care</h3>
                  <div className="clinical-chip-grid">
                    <span>FlexBar</span>
                    <span>Counterforce brace</span>
                    <span>Massage ball</span>
                    <span>Cold therapy wrap</span>
                  </div>
                  <p>The patient receives the recommendations before they even get home. They purchase exactly what was discussed during the visit. Everyone is on the same page.</p>
                </div>
              </div>
            </section>
            <section className="clinic-origin">
              <div className="wrap clinic-origin-grid">
                <div className="reveal">
                  <p className="clinic-label">Why we built it</p>
                  <blockquote>Physical therapists spend years learning what products help patients, but they still rely on retail search to deliver those recommendations.</blockquote>
                  <p>We built the platform we wish existed: one place where clinicians can confidently discover, recommend, and deliver the right rehab products while creating a better experience for both the patient and the clinic.</p>
                  <p>Revytal is not trying to replace your clinical expertise. It is designed to extend it beyond the walls of your clinic, and make acting on your recommendations as seamless as writing a home exercise program.</p>
                </div>
                <div className="origin-pillars reveal">
                  <article><h3>Integrity</h3><p>Clinically relevant and reviewable.</p></article>
                  <article><h3>Simplicity</h3><p>Minimal behavior change. No inventory.</p></article>
                  <article><h3>Ownership</h3><p>Completing the care cycle.</p></article>
                </div>
              </div>
            </section>
            <section className="blue-section">
              <div className="wrap grid-2">
                <div className="reveal">
                  <p className="eyebrow">Pilot clinics</p>
                  <h2>Build a product handoff your clinicians would actually use.</h2>
                  <p>Revytal is selecting early clinic teams to test a cleaner recommendation-to-purchase workflow with a focused product set and hands-on support.</p>
                </div>
                <div className="reveal" style={{alignSelf: 'end'}}><a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSeBa4y1REzCzltl7FXJauQ9Jz7-3ZUsET4ad5pxPDPqzHmKBg/viewform?usp=publish-editor&utm_source=revytal_site&utm_medium=web&utm_campaign=clinic_conversation" target="_blank" rel="noopener">Request Pilot</a></div>
              </div>
            </section>
          </main>
    </>
  )
}
