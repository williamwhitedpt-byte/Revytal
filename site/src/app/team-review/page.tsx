import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Team Review - Revytal",
  description: "Revytal team review board for the current page set.",
  robots: { index: false, follow: false },
}

export default function Page() {
  return (
    <>
      <main id="main">
            <section className="page-hero review-hero">
              <div className="wrap">
                <div className="reveal">
                  <p className="eyebrow">Internal review board</p>
                  <h1>Review the new Revytal pages without losing the <span className="accent-word">map</span>.</h1>
                  <p className="lead">The approved review surface is now available for team review: core site pages, segmented landing pages, form surfaces, roadmap, investor materials, and the PT-facing one-pager.</p>
                  <div className="review-stats" aria-label="Build inventory">
                    <div><strong>22</strong><span>implemented pages</span></div>
                    <div><strong>12</strong><span>new / variant pages</span></div>
                    <div><strong>1</strong><span>team review board</span></div>
                  </div>
                </div>
                <div className="review-status-card reveal">
                  <span className="badge">Build reality</span>
                  <h3>The public-safe planning surface is represented as review pages.</h3>
                  <p>Forms are review-ready static surfaces, not production backend submissions. That is intentional for this pass: the team can review fields, copy, routing logic, and page structure before anyone wires data flow.</p>
                </div>
              </div>
            </section>
            <section>
              <div className="wrap review-board" data-review-board>
                <aside className="review-filter-panel reveal" aria-label="Review filters">
                  <h2>Review Set</h2>
                  <p>Filter by build status or audience. Cards open the page; thumbnails open the screenshot.</p>
                  <div className="review-filter-group" aria-label="Status filters">
                    <button className="filter-btn is-active" type="button" data-review-filter="all" aria-pressed="true">All cards</button>
                    <button className="filter-btn" type="button" data-review-filter="built" aria-pressed="false">Built pages</button>
                    <button className="filter-btn" type="button" data-review-filter="form" aria-pressed="false">Form pages</button>
                  </div>
                  <div className="review-filter-group" aria-label="Audience filters">
                    <button className="filter-btn" type="button" data-review-filter="clinic" aria-pressed="false">Clinic audience</button>
                    <button className="filter-btn" type="button" data-review-filter="investor" aria-pressed="false">Investor audience</button>
                    <button className="filter-btn" type="button" data-review-filter="internal" aria-pressed="false">Internal / ops</button>
                  </div>
                </aside>
                <div className="review-grid reveal">
                  <article className="review-card" data-review-card data-review-tags="built clinic investor" data-status="Built" data-title="Home" data-href="/">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/home.png" data-lightbox-title="Home"><img src="/assets/review-shots/home.png" alt="Screenshot of the Revytal home review page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Home</h3><p>Establishes the trusted product path and points teams into workflow, pilot, trust, and economics.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Clinic owners, PT directors, investors secondarily.</dd><dt>Purpose</dt><dd>Explain the broken product handoff and position Revytal as the clean clinic-branded path.</dd><dt>Funnel</dt><dd>TOFU to MOFU.</dd></dl></div><a className="btn btn-primary" href="/">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built clinic" data-status="Built" data-title="Clinic Conversation" data-href="/clinic-conversation/">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/clinic-conversation.png" data-lightbox-title="Clinic Conversation"><img src="/assets/review-shots/clinic-conversation.png" alt="Screenshot of the Clinic Conversation review page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Clinic Conversation</h3><p>Answers the clinic's first question through the everyday therapist product recommendation scene.</p><button className="review-detail-toggle" type="button" aria-expanded="false" aria-controls="details-clinic-conversation">Details</button><div className="review-details" id="details-clinic-conversation" hidden><dl><dt>Audience</dt><dd>Clinic owners, PT directors, treating clinicians.</dd><dt>Purpose</dt><dd>Explain the product handoff in a warmer, more conversational clinic voice.</dd><dt>Funnel</dt><dd>TOFU / clinic education.</dd></dl></div><a className="btn btn-primary" href="/clinic-conversation/">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built clinic internal" data-status="Built" data-title="Platform" data-href="/index_v3/platform.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/platform.png" data-lightbox-title="Platform"><img src="/assets/review-shots/platform.png" alt="Screenshot of the Platform page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Platform</h3><p>Shows the MVP system without pretending every future supplier or dashboard layer is already done.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Clinic operators, administrators, clinicians.</dd><dt>Purpose</dt><dd>Clarify recommendation flow, checkout, routing, and current boundaries.</dd><dt>Funnel</dt><dd>MOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/platform.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built clinic" data-status="Built" data-title="How It Works" data-href="/index_v3/how-it-works.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/how-it-works.png" data-lightbox-title="How It Works"><img src="/assets/review-shots/how-it-works.png" alt="Screenshot of the How It Works page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>How It Works</h3><p>Turns the workflow into a fast scan: recommend, share, checkout, route, and learn.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Clinicians, clinic managers, pilot prospects.</dd><dt>Purpose</dt><dd>Make the product flow obvious in under 30 seconds.</dd><dt>Funnel</dt><dd>MOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/how-it-works.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built clinic" data-status="Built" data-title="Pilot Program" data-href="/index_v3/pilot-program.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/pilot-program.png" data-lightbox-title="Pilot Program"><img src="/assets/review-shots/pilot-program.png" alt="Screenshot of the Pilot Program page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Pilot Program</h3><p>Sets expectations for selective pilot clinics and links to the live Google Form.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Friendly PT/OT clinics and operators.</dd><dt>Purpose</dt><dd>Recruit controlled pilot clinics without overpromising automation.</dd><dt>Funnel</dt><dd>BOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/pilot-program.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built clinic investor" data-status="Built" data-title="Economics" data-href="/index_v3/economics.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/economics.png" data-lightbox-title="Economics"><img src="/assets/review-shots/economics.png" alt="Screenshot of the Economics page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Economics</h3><p>Frames clinic upside carefully and keeps revenue secondary to trust and workflow clarity.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Clinic owners, practice operators, investors.</dd><dt>Purpose</dt><dd>Explain margin opportunity without turning clinicians into salespeople.</dd><dt>Funnel</dt><dd>MOFU / BOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/economics.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built clinic investor" data-status="Built" data-title="Follow-Through" data-href="/index_v3/follow-through.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/follow-through.png" data-lightbox-title="Follow-Through"><img src="/assets/review-shots/follow-through.png" alt="Screenshot of the Follow-Through page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Follow-Through</h3><p>Introduces the future visibility layer without claiming proven outcomes.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Clinic leaders, investors, outcomes-minded PT directors.</dd><dt>Purpose</dt><dd>Frame check-ins, feedback, and product movement as a future signal layer.</dd><dt>Funnel</dt><dd>MOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/follow-through.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built clinic internal" data-status="Built" data-title="Trust & Compliance" data-href="/index_v3/trust-compliance.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/trust-compliance.png" data-lightbox-title="Trust & Compliance"><img src="/assets/review-shots/trust-compliance.png" alt="Screenshot of the Trust and Compliance page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Trust &amp; Compliance</h3><p>States clinical responsibility, fulfillment ownership, and what not to collect.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Decision makers, administrators, legal/compliance helpers.</dd><dt>Purpose</dt><dd>Reduce adoption anxiety and state operational boundaries.</dd><dt>Funnel</dt><dd>MOFU / BOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/trust-compliance.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built clinic investor" data-status="Built" data-title="Resources" data-href="/index_v3/resources.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/resources.png" data-lightbox-title="Resources"><img src="/assets/review-shots/resources.png" alt="Screenshot of the Resources page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Resources</h3><p>Collects guide/checklist/FAQ stubs for future downloadable or gated materials.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Clinic owners, PT directors, internal enablement.</dd><dt>Purpose</dt><dd>Separate education and support materials from selling pages.</dd><dt>Funnel</dt><dd>TOFU / nurture.</dd></dl></div><a className="btn btn-primary" href="/index_v3/resources.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built clinic investor" data-status="Built" data-title="About" data-href="/index_v3/about.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/about.png" data-lightbox-title="About"><img src="/assets/review-shots/about.png" alt="Screenshot of the About page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>About</h3><p>Gives clinics and investors a quick trust check on the team and workflow origin.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Clinics and investors doing trust checks.</dd><dt>Purpose</dt><dd>Explain why the team can build from inside the PT workflow.</dd><dt>Funnel</dt><dd>Trust support.</dd></dl></div><a className="btn btn-primary" href="/index_v3/about.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built investor" data-status="Built" data-title="Investors" data-href="/index_v3/investors.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/investors.png" data-lightbox-title="Investors"><img src="/assets/review-shots/investors.png" alt="Screenshot of the Investors page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Investors</h3><p>Separates the bigger margin/data thesis from clinic-facing trust copy. Marked noindex.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Angel, pre-seed, seed, healthcare/operator investors.</dd><dt>Purpose</dt><dd>Tell the investor story without distorting clinic pages.</dd><dt>Funnel</dt><dd>Investor BOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/investors.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built clinic" data-status="Built" data-title="Pilot LP: Cleaner Product Handoff" data-href="/index_v3/lp-cleaner-product-handoff.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/lp-cleaner-product-handoff.png" data-lightbox-title="Pilot LP: Cleaner Product Handoff"><img src="/assets/review-shots/lp-cleaner-product-handoff.png" alt="Screenshot of the Cleaner Product Handoff landing page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Pilot LP: Cleaner Product Handoff</h3><p>Segmented clinic-facing pilot page focused on the exact product handoff.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Clinicians and clinic managers.</dd><dt>Purpose</dt><dd>Safest clinic-facing pilot angle.</dd><dt>Funnel</dt><dd>BOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/lp-cleaner-product-handoff.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built clinic investor" data-status="Built" data-title="Pilot LP: Revenue Capture" data-href="/index_v3/lp-revenue-capture.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/lp-revenue-capture.png" data-lightbox-title="Pilot LP: Revenue Capture"><img src="/assets/review-shots/lp-revenue-capture.png" alt="Screenshot of the Revenue Capture landing page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Pilot LP: Revenue Capture</h3><p>Owner/operator page for incremental economics after trust is established.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Owner/operators and finance leads.</dd><dt>Purpose</dt><dd>Show economics without leading with monetization.</dd><dt>Funnel</dt><dd>BOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/lp-revenue-capture.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built clinic investor" data-status="Built" data-title="Pilot LP: Follow-Through Signals" data-href="/index_v3/lp-follow-through-signals.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/lp-follow-through-signals.png" data-lightbox-title="Pilot LP: Follow-Through Signals"><img src="/assets/review-shots/lp-follow-through-signals.png" alt="Screenshot of the Follow-Through Signals landing page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Pilot LP: Follow-Through Signals</h3><p>Future-feature validation page for post-purchase visibility.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Outcomes-minded clinics and operators.</dd><dt>Purpose</dt><dd>Test interest in visibility after purchase.</dd><dt>Funnel</dt><dd>BOFU / validation.</dd></dl></div><a className="btn btn-primary" href="/index_v3/lp-follow-through-signals.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built clinic internal" data-status="Built" data-title="PT-Facing One-Pager" data-href="/index_v3/pt-facing-one-pager.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/pt-facing-one-pager.png" data-lightbox-title="PT-Facing One-Pager"><img src="/assets/review-shots/pt-facing-one-pager.png" alt="Screenshot of the PT-facing one-pager" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>PT-Facing One-Pager</h3><p>Printable clinician enablement page for explaining the pilot without a sales pitch.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Individual PTs and clinic staff.</dd><dt>Purpose</dt><dd>Explain the pilot quickly and plainly.</dd><dt>Funnel</dt><dd>Enablement.</dd></dl></div><a className="btn btn-primary" href="/index_v3/pt-facing-one-pager.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built investor" data-status="Built" data-title="Investor LP" data-href="/index_v3/investor-lp.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/investor-lp.png" data-lightbox-title="Investor LP"><img src="/assets/review-shots/investor-lp.png" alt="Screenshot of the Investor LP" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Investor LP</h3><p>Review-stage investor narrative with market wedge, milestones, and packet request path.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Qualified investors and advisors.</dd><dt>Purpose</dt><dd>Tell the bigger story outside clinic-facing pages.</dd><dt>Funnel</dt><dd>Investor BOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/investor-lp.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built internal investor" data-status="Built" data-title="Roadmap" data-href="/index_v3/roadmap.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/roadmap.png" data-lightbox-title="Roadmap"><img src="/assets/review-shots/roadmap.png" alt="Screenshot of the Roadmap page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Roadmap</h3><p>Sequencing page for MVP, pilot, post-MVP, future layer, and excluded scope.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Clinics, investors, internal stakeholders.</dd><dt>Purpose</dt><dd>Show current, next, later, and excluded.</dd><dt>Funnel</dt><dd>MOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/roadmap.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built form clinic" data-status="Built" data-title="Form: Contact / Demo" data-href="/index_v3/form-contact-demo.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/form-contact-demo.png" data-lightbox-title="Form: Contact / Demo"><img src="/assets/review-shots/form-contact-demo.png" alt="Screenshot of the Contact Demo form page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Form: Contact / Demo</h3><p>General inquiry form model for clinics and partners.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>General clinic or partner inquiry.</dd><dt>Purpose</dt><dd>Route a human follow-up.</dd><dt>Funnel</dt><dd>TOFU / MOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/form-contact-demo.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built form clinic" data-status="Built" data-title="Form: Pilot Signup" data-href="/index_v3/form-pilot-signup.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/form-pilot-signup.png" data-lightbox-title="Form: Pilot Signup"><img src="/assets/review-shots/form-pilot-signup.png" alt="Screenshot of the Pilot Signup form page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Form: Pilot Signup</h3><p>Pilot qualification field model, with link to the live Google Form.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Clinic owners and PT directors.</dd><dt>Purpose</dt><dd>Qualify pilot fit before setup promises.</dd><dt>Funnel</dt><dd>BOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/form-pilot-signup.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built form clinic internal" data-status="Built" data-title="Form: Clinic Intake" data-href="/index_v3/form-clinic-intake.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/form-clinic-intake.png" data-lightbox-title="Form: Clinic Intake"><img src="/assets/review-shots/form-clinic-intake.png" alt="Screenshot of the Clinic Intake form page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Form: Clinic Intake</h3><p>Accepted-pilot onboarding form model with explicit sensitive-data guardrails.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Accepted pilot clinics.</dd><dt>Purpose</dt><dd>Gather setup details safely.</dd><dt>Funnel</dt><dd>Onboarding.</dd></dl></div><a className="btn btn-primary" href="/index_v3/form-clinic-intake.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built form investor" data-status="Built" data-title="Form: Investor Interest" data-href="/index_v3/form-investor-interest.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/form-investor-interest.png" data-lightbox-title="Form: Investor Interest"><img src="/assets/review-shots/form-investor-interest.png" alt="Screenshot of the Investor Interest form page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Form: Investor Interest</h3><p>Noindex investor inbound form model for founder-reviewed material requests.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Qualified investors and advisors.</dd><dt>Purpose</dt><dd>Capture context before sending sensitive materials.</dd><dt>Funnel</dt><dd>Investor BOFU.</dd></dl></div><a className="btn btn-primary" href="/index_v3/form-investor-interest.html">Open Page</a></div>
                  </article>
                  <article className="review-card" data-review-card data-review-tags="built form internal" data-status="Built" data-title="Form: Supplier / Partner Inquiry" data-href="/index_v3/form-supplier-partner.html">
                    <button className="review-shot" type="button" data-lightbox-image="/assets/review-shots/form-supplier-partner.png" data-lightbox-title="Form: Supplier / Partner Inquiry"><img src="/assets/review-shots/form-supplier-partner.png" alt="Screenshot of the Supplier Partner form page" /><span>View screenshot</span></button>
                    <div className="review-card-body"><span className="badge">Built</span><h3>Form: Supplier / Partner Inquiry</h3><p>Partner-intake form model for suppliers, fulfillment partners, and clinic networks.</p><button className="review-detail-toggle" type="button" aria-expanded="false">Details</button><div className="review-details" hidden><dl><dt>Audience</dt><dd>Suppliers, fulfillment partners, clinic networks.</dd><dt>Purpose</dt><dd>Capture partner leads without public pricing promises.</dd><dt>Funnel</dt><dd>Partner intake.</dd></dl></div><a className="btn btn-primary" href="/index_v3/form-supplier-partner.html">Open Page</a></div>
                  </article>      </div>
              </div>
            </section>
            <section className="soft">
              <div className="wrap section-head reveal">
                <h2>What is actually built?</h2>
                <p className="section-copy">The review build now covers the public-safe planning canvas as static pages. The form surfaces are intentionally review-ready placeholders until a backend and routing owner are selected.</p>
              </div>
            </section>
          </main>
      <dialog className="review-lightbox" data-review-lightbox>
          <button className="review-lightbox-close" type="button" data-lightbox-close aria-label="Close screenshot">Close</button>
          <h2 data-lightbox-heading>Page screenshot</h2>
          <img data-lightbox-target src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" alt="" />
        </dialog>
    </>
  )
}
