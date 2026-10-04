export const links = {
  email: 'ruchisinghmech0509@gmail.com',
  github: 'https://github.com/ruchi-singh0509',
  linkedin: 'https://www.linkedin.com/in/ruchi-singh-100956166',
  resume: '/Resume_Ruchi_Singh.pdf',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.sattvastha.vidur&pcampaignid=web_share',
  appStore: 'https://apps.apple.com/in/app/vidur-ai-wellness/id6766118653',
};

export const contributions = [
  { title: 'Mobile & native integrations', summary: 'Cross-platform Flutter UI, localization, and device health data.', detail: 'Built reusable UI components and Provider state management with English/Hindi localization. Connected Flutter to Health Connect and HealthKit through Kotlin/Swift platform bridges, with permission handling and manual check-in fallbacks.' },
  { title: 'Authentication & payments', summary: 'Secure sessions and verified purchases across three payment providers.', detail: 'Implemented Google/Apple sign-in, JWT refresh-token rotation, and role-based access. Verified Razorpay, Google Play Billing, and Apple IAP purchases on the server, with webhook deduplication, entitlement reconciliation, and refund handling.' },
  { title: 'AI & background workflows', summary: 'Wellness insights, conversational features, and scheduled reminders.', detail: 'Integrated chat, journal analysis, and personalized insights with response normalization, timeouts, and fallbacks around external AI services. Built timezone-aware reminders and notification deduplication to handle repeated dispatch attempts.' },
  { title: 'Testing & production reliability', summary: 'Automated release gates, monitoring, and AWS delivery.', detail: 'API and end-to-end tests gate CI/CD releases. AWS CloudWatch, structured logs, alerts, health checks, and synthetic monitoring help detect failures across critical journeys. Production delivery uses AWS EC2/S3, NGINX, PM2, and GitHub Actions.' },
];

export const projects = [
  { title: 'Food Delivery App', category: 'FULL STACK', description: 'An ordering platform connecting a React frontend with backend APIs and Stripe payments. Includes Redis caching and a Dockerized backend.', stack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'], href: 'https://food-app-frontend-m155.onrender.com/', linkLabel: 'Open live project' },
  { title: 'Restaurant Monitoring', category: 'BACKEND', description: 'A backend service tracking restaurant availability during business hours and generating uptime and downtime reports for owners.', stack: ['Python', 'Django', 'MySQL'], href: 'https://github.com/ruchi-singh0509/StoreProject', linkLabel: 'Explore source code' },
  { title: 'Voice & Text Chatbot', category: 'AI INTEGRATION', description: 'A conversational interface with voice and text input, OpenAI API responses, and spoken output, connecting a familiar chat experience with AI services.', stack: ['Node.js', 'OpenAI API', 'Voice interaction'], href: 'https://voice-chatbot-zjlg.vercel.app/', linkLabel: 'Open live project' },
];

export const experience = [
  { company: 'Sattvastha Ventures', role: 'Application Developer · Full Stack', dates: 'Nov 2025 – Present', bullets: ['Own Vidur development across mobile, backend, integrations, and production delivery.', 'Build secure purchase, session, and wellness workflows for Android and iOS.', 'Maintain automated testing, CI/CD release gates, and production monitoring.'] },
  { company: 'Fenopix Tech', role: 'Frontend Intern', dates: 'Dec 2024 – Apr 2025', bullets: ['Developed responsive dashboards and data visualization features with attention to frontend performance.', 'Contributed to code reviews, unit testing, debugging, and reusable frontend components.'] },
  { company: 'Cuvette Tech', role: 'Frontend Intern', dates: 'May 2024 – Aug 2024', bullets: ['Built React and Next.js applications from UI/UX wireframes with reusable components and responsive layouts.', 'Applied lazy loading and code splitting, and investigated frontend issues using browser and React developer tools.'] },
  { company: 'Jagapati Engineers Pvt. Ltd.', role: 'Full-Stack Engineer', dates: 'Jan 2023 – Apr 2024', bullets: ['Developed and deployed REST APIs with Python/Django and Node.js/Express for business workflows and CRM integrations.', 'Optimized database queries and caching, and contributed to testing, code reviews, debugging, and production maintenance.'] },
];

export const skillGroups = [
  { title: 'Mobile & frontend', skills: ['Flutter', 'Dart', 'Provider', 'React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Localization'] },
  { title: 'Backend & data', skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'MongoDB / Mongoose', 'MySQL', 'Redis', 'JWT / OAuth'] },
  { title: 'Cloud, delivery & observability', skills: ['AWS EC2 / S3 / CloudWatch', 'NGINX', 'PM2', 'Linux', 'GitHub Actions', 'Docker', 'CI/CD', 'Synthetic monitoring', 'Automated alerts'] },
  { title: 'Integrations & quality', skills: ['Razorpay', 'Google Play Billing', 'Apple IAP', 'FCM', 'Health Connect / HealthKit', 'Kotlin / Swift bridges', 'AI APIs', 'Unit / API / E2E testing', 'CI/CD quality gates'] },
];

export const credentials = ['MERN Development · Cuvette', 'Python Bootcamp · Udemy', 'Cloud & AWS Fundamentals · Udemy', 'CI/CD · GitLab', 'Docker · LinkedIn', 'Generative AI · Databricks'];

