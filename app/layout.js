import './globals.css';

export const metadata = {
  title: 'Ruchi Singh | Full-Stack & Mobile Developer',
  description: 'Full-stack and mobile developer building Flutter applications, Node.js backends, secure payment systems, and AI integrations. Explore Ruchi Singh’s work and experience.',
  openGraph: {
    title: 'Ruchi Singh | Full-Stack & Mobile Developer',
    description: 'From mobile interfaces to backend systems and production delivery. Selected work, engineering experience, and contact details.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
