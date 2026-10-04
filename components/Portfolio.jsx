'use client';

import { useEffect, useRef, useState } from 'react';
import { experience, projects, skillGroups, credentials, contributions, links } from '@/data/portfolio';
import Icon from '@/components/Icon';

function Arrow({ diagonal = false }) { return <Icon name={diagonal ? 'external' : 'arrow'} />; }
function Tags({ items }) { return <ul className="tags" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>; }
function ExternalLink({ href, children, className }) { return <a href={href} className={className} target="_blank" rel="noreferrer">{children} <Arrow diagonal /></a>; }

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  useEffect(() => {
    let frame;
    const updateSection = () => {
      let current = 'home';
      for (const id of ['home', 'work', 'experience', 'about', 'contact']) {
        if (document.getElementById(id).getBoundingClientRect().top <= 140) current = id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = 'contact';
      setActiveSection(current);
      frame = undefined;
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(updateSection); };
    updateSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = event => {
      if (event.key === 'Escape') { setMenuOpen(false); menuButtonRef.current?.focus(); }
    };
    const outside = event => { if (!headerRef.current?.contains(event.target)) setMenuOpen(false); };
    window.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    return () => { window.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside); };
  }, [menuOpen]);
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(timer);
  }, [copied]);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(links.email); setCopied(true); }
    catch { window.location.href = `mailto:${links.email}`; }
  }

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    {menuOpen && <button className="menu-backdrop" tabIndex={-1} aria-label="Close navigation" onClick={() => setMenuOpen(false)} />}
    <header className="site-header" ref={headerRef}><div className="container nav-row">
      <a className="wordmark" href="#home" aria-label="Ruchi Singh home">ruchi singh<span>.</span></a>
      <button className="menu-toggle" ref={menuButtonRef} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <Icon name={menuOpen ? 'close' : 'menu'} /></button>
      <nav id="navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        {[['work', 'Work'], ['experience', 'Experience'], ['about', 'About'], ['contact', 'Contact']].map(([id, label]) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <ExternalLink className="nav-resume" href={links.resume}>Résumé</ExternalLink>
      </nav>
    </div></header>
    <main id="main">
      <section className="hero container" id="home" aria-labelledby="hero-title">
        <div className="hero-content"><p className="eyebrow"><span className="tiny-line" /> FULL-STACK & MOBILE DEVELOPER</p>
          <h1 id="hero-title">I build mobile apps<br /><span>and the systems<br className="desktop-break" /> behind them.</span></h1>
          <p className="hero-description">I’m Ruchi Singh, a full-stack developer working with Flutter, Node.js, and AWS—from product interfaces to integrations and production delivery.</p>
          <div className="actions"><a className="button button-primary" href="#work">Explore work <Arrow /></a><ExternalLink className="button button-secondary" href={links.resume}>View resume</ExternalLink></div>
          <div className="hero-socials"><ExternalLink href={links.github}><Icon name="github" /> GitHub</ExternalLink><ExternalLink href={links.linkedin}><Icon name="linkedin" /> LinkedIn</ExternalLink></div>
        </div>
        <aside className="engineering-card" aria-label="Current engineering focus">
          <div className="card-topline"><span className="status-dot" /> CURRENTLY BUILDING <span>01 / VIDUR</span></div>
          <div className="system-visual" aria-hidden="true"><div className="system-node"><Icon name="phone" /> Mobile & web</div><div className="system-connector" /><div className="system-node main-node"><span>V</span> Vidur platform</div><div className="system-connector" /><div className="system-bottom"><div className="system-node"><Icon name="database" /> APIs & data</div><div className="system-node"><Icon name="code" /> Integrations</div></div></div>
          <h2>Building Vidur at Sattvastha Ventures.</h2><p>A wellness platform for Android and iOS. Explore the product and my engineering contributions below.</p><a href="#vidur">View featured project <Arrow /></a>
        </aside>
      </section>
      <div className="stack-strip"><div className="container"><p>MY CORE STACK</p><ul>{['Flutter', 'React', 'Node.js', 'MongoDB', 'AWS', 'Python'].map(item => <li key={item}>{item}</li>)}</ul></div></div>

      <section className="section container" id="work" aria-labelledby="work-title">
        <div className="section-heading"><div><p className="eyebrow">01 / WORK</p><h2 id="work-title">Selected projects</h2></div><p>Professional work and independent builds across mobile, web, and backend.</p></div>
        <article className="featured-project" id="vidur">
          <div className="featured-intro"><p className="eyebrow">FEATURED / PROFESSIONAL WORK</p><h3>Vidur</h3><p className="project-subtitle">AI-powered wellness platform</p><p>A cross-platform application bringing together guided wellness, journaling, assessments, courses, and counselling.</p><Tags items={['Flutter / Dart', 'Node.js / Express', 'MongoDB', 'AWS']} /><ExternalLink className="text-link" href="https://www.vidur.co/">Visit product website</ExternalLink><div className="store-links" aria-label="Vidur mobile apps"><ExternalLink className="store-link" href={links.googlePlay}><Icon name="play" /><span><small>ANDROID</small>Google Play</span></ExternalLink><ExternalLink className="store-link" href={links.appStore}><Icon name="appStore" /><span><small>iOS</small>App Store</span></ExternalLink></div><p className="project-context">Sattvastha Ventures · Application Developer<br />November 2025 – Present</p></div>
          <div className="featured-details"><p className="eyebrow">ENGINEERING HIGHLIGHTS</p><p className="highlights-intro">A closer look at the systems behind the app.</p>{contributions.map(({ title, summary, detail }, index) => <details className="engineering-detail" key={title}><summary><span className="detail-number">0{index + 1}</span><div><h4>{title}</h4><p>{summary}</p></div><Icon name="arrow" /></summary><p className="detail-body">{detail}</p></details>)}</div>
        </article>
        <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-card-top"><span>0{index + 2}</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.description}</p><Tags items={project.stack} /><ExternalLink href={project.href} className="text-link">{project.linkLabel}</ExternalLink></article>)}</div>
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title"><div className="container section">
        <div className="section-heading"><div><p className="eyebrow">02 / CAREER</p><h2 id="experience-title">Experience</h2></div><p>Application ownership, fullstack development, and a foundation in engineering.</p></div>
        <div className="experience-list">{experience.map((job, index) => <article className="experience-row" key={job.company + job.role}><div className="job-date"><span className={index === 0 ? 'timeline-dot current' : 'timeline-dot'} /><p>{job.dates}</p>{index === 0 && <span className="current-label">CURRENT ROLE</span>}</div><div><h3>{job.role}</h3><p className="company-name">{job.company}</p><ul className="job-bullets">{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
        <div className="earlier-experience"><p className="eyebrow">EARLIER ENGINEERING EXPERIENCE</p><p><strong>Methods Engineer · Jagapati Engineers</strong><span>2020 – 2022</span>Process development, cost optimization, and cross-functional collaboration.</p><p><strong>Quality Engineer · Bombardier Transportation</strong><span>2019 – 2020</span>Data-driven quality analysis, auditing, and documentation.</p></div>
      </div></section>

      <section className="section container" id="about" aria-labelledby="about-title"><div className="about-layout">
        <div className="about-copy"><p className="eyebrow">03 / BACKGROUND</p><h2 id="about-title">About me</h2><p>I moved into software after working in mechanical, process, and quality engineering. That background still shapes my approach: understand the system, investigate the cause, and build a solution that holds up in use.</p><p>I enjoy working across product and infrastructure, especially on authentication, payments, and native integrations—where careful engineering makes a direct difference to the user experience.</p><ExternalLink className="text-link" href={links.linkedin}>More on LinkedIn</ExternalLink></div>
        <div className="skills-panel">{skillGroups.map((group, index) => <div className="skill-group" key={group.title}><h3><Icon name={['phone', 'database', 'cloud', 'quality'][index]} />{group.title}</h3><p>{group.skills.join(' · ')}</p></div>)}</div>
      </div><div className="credentials"><div><p className="eyebrow">EDUCATION</p><h3>B.Tech, Mechanical Engineering</h3><p>Kurukshetra University · 2018</p><span>Aggregate: 8.6 / 10</span></div><div><p className="eyebrow">CONTINUED LEARNING</p><ul>{credentials.map(item => <li key={item}>{item}</li>)}</ul></div></div></section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="container contact-layout"><div><p className="eyebrow">04 / LET’S CONNECT</p><h2 id="contact-title">Have a role or a<br />project in mind?</h2><p>Let’s talk about your product, your team, and the engineering challenges ahead.</p></div><div className="contact-details"><a className="contact-email" href={`mailto:${links.email}`}>{links.email} <Arrow diagonal /></a><button className="copy-button" onClick={copyEmail}><Icon name={copied ? 'check' : 'copy'} />{copied ? 'Email copied' : 'Copy email address'}</button><span className="sr-only" role="status">{copied ? 'Email address copied to clipboard.' : ''}</span><a className="phone-link" href="tel:+918340403952"><Icon name="phone" />+91 83404 03952</a><div className="contact-socials"><ExternalLink href={links.linkedin}>LinkedIn</ExternalLink><ExternalLink href={links.github}>GitHub</ExternalLink><ExternalLink href={links.resume}>Résumé</ExternalLink></div></div></div></section>
    </main>
    <footer className="container site-footer"><p>© {new Date().getFullYear()} Ruchi Singh</p><p>Built with care. Always improving.</p><a href="#home">Back to top <Icon name="up" /></a></footer>
  </>;
}
