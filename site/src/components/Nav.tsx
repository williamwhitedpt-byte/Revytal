import { pilotFormUrl } from '../data/site'

export function Nav() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <div className="wrap nav-inner">
        <a className="brand" href="/" aria-label="Revytal homepage">
          <img src="/assets/revytal-dark-logobrand.svg" alt="Revytal" />
        </a>
        <button className="nav-toggle" type="button" aria-label="Toggle menu" aria-expanded="false">
          <span />
          <span />
          <span />
        </button>
        <div className="nav-links">
          <a href="/index_v3/platform.html">Platform</a>
          <a href="/index_v3/how-it-works.html">How It Works</a>
          <a href="/index_v3/pilot-program.html">Pilot Program</a>
          <a href="/index_v3/resources.html">Resources</a>
          <a className="btn btn-primary" href={pilotFormUrl} target="_blank" rel="noopener">
            Request Pilot
          </a>
        </div>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
    </nav>
  )
}
