// Small, monochrome SVG icons. No image requests or icon-library dependency.
export default function Icon({ name, className = '' }) {
  const paths = {
    arrow: <><path d="M4 12h16" /><path d="m14 6 6 6-6 6" /></>,
    external: <><path d="M6 18 18 6M6 6h12v12" /></>,
    up: <><path d="M12 20V4m-6 6 6-6 6 6" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V4H4v12h4" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    phone: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 18h4" /></>,
    code: <><path d="m7 6-6 6 6 6m10-12 6 6-6 6m-3-15-4 18" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 4 16 4 16 0V5M4 12v7c0 4 16 4 16 0v-7" /></>,
    cloud: <path d="M6 19a5 5 0 0 1-1-10 7 7 0 0 1 13-2 6 6 0 0 1 0 12H6Z" />,
    quality: <><path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z" /><path d="m8 12 3 3 5-6" /></>,
    play: <path d="m5 3 15 9-15 9V3Z" />,
    appStore: <><rect x="2" y="2" width="20" height="20" rx="5" /><path d="m8 17 7-12M9 5l7 12M6 14h12" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m4 0v-7m0 3a3 3 0 0 1 6 0v4" /><circle cx="7" cy="7" r=".6" /></>,
    github: <><path d="M9 21v-4c-4 1-4-2-5-3m11 7v-4c0-1-.2-2-1-2 4-.5 6-2 6-5 0-1-.4-2-1-3 0-1 0-2-.5-3-2 0-3 1-3.5 1a13 13 0 0 0-8 0C6 4 5 4 4 4c-.5 1-.5 2-.5 3C3 8 3 9 3 10c0 3 2 5 6 5-.8.5-1 1-1 2" /></>,
  };
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name] || paths.code}</svg>;
}
