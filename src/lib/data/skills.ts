export const skillCategories: Record<string, string[]> = {
  'Programovací jazyky': ['C++', 'C', 'C#', 'SQL', 'PL/SQL', 'Java', 'Haskell', 'JavaScript', 'TypeScript', 'Python'],
  'Skriptovací jazyky': ['JavaScript', 'TypeScript', 'Python', 'Batch', 'Bash'],
  'Frameworky': ['SvelteKit', 'React', 'Next.js', 'Blazor', 'Express', 'Django', 'Ionic', 'Cordova'],
  'Databáze': ['PostgreSQL', 'SQLite', 'Prisma', 'Neon'],
  'Technologie': ['.NET', 'Node.js', 'OpenGL', 'Bootstrap', 'Tampermonkey'],
  'Vývojová prostředí': ['Visual Studio', 'Visual Studio Code', 'IntelliJ IDEA'],
  'Verzování': ['Git', 'GitHub', 'GitLab'],
  'Sestavení': ['GNU Make', 'Vite', 'npm', 'Maven', 'Gradle'],
  'Dokumentace': ['Doxygen'],
  'Lintery': ['SonarQube', 'ESLint'],
  'Formátování': ['Prettier'],
  'Wrappery': ['SWIG'],
  'Toolchainy': ['Emscripten'],
  'Sítě': ['Postman', 'PuTTY', 'Wireshark', 'Packet Tracer'],
  'UML': ['Visual Paradigm'],
  'Operační systémy': ['Windows', 'Linux', 'Android'],
  'Nasazení': ['Cloudflare Workers', 'Netlify', 'Render'],
  'Automatizace': ['Make'],
  'Služby': ['Formspree', 'ntfy'],
  'Runtimy': ['WebAssembly'],
  'Kontejnerizace': ['Docker'],
  'Virtualizace': ['VirtualBox', 'VMware'],
};

export const allSkills = Object.values(skillCategories).flat();
export const uniqueSkills = [...new Set(allSkills)];