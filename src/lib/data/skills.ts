export const skillCategories: Record<string, string[]> = {
  'Programovací jazyky': ['C++', 'C', 'C#', 'SQL', 'PL/SQL', 'Java', 'Haskell', 'JavaScript', 'TypeScript', 'Python'],
  'Skriptovací jazyky': ['Batch', 'Bash'],
  'Frameworky': ['SvelteKit', 'React', 'Next.js', 'Blazor', 'Express', 'Django', 'Ionic', 'Cordova'],
  'Databáze': ['PostgreSQL', 'SQLite', 'Prisma', 'Neon'],
  'Runtimy': ['.NET', 'Node.js', 'Tampermonkey', 'WebAssembly'],
  'Knihovny': ['OpenGL', 'Bootstrap', 'jQuery'],
  'Vývojová prostředí': ['Visual Studio', 'Visual Studio Code', 'IntelliJ IDEA', 'SSMS'],
  'Verzování': ['Git', 'GitHub', 'GitLab'],
  'Sestavení': ['GNU Make', 'Vite', 'npm', 'Maven', 'Gradle', 'SWIG', 'Emscripten'],
  'CI/CD': ['GitHub Actions', 'Dependabot'],
  'Kvalita kódu': ['Doxygen', 'SonarQube', 'ESLint', 'Prettier'],
  'Optimalizace': ['esbuild', 'PurgeCSS', 'SVGO'],
  'Sítě': ['Postman', 'PuTTY', 'Packet Tracer'],
  'Modelování': ['Visual Paradigm'],
  'Operační systémy': ['Windows', 'Linux', 'Android'],
  'Nasazení': ['Cloudflare Workers', 'Netlify', 'Render'],
  'Formuláře': ['Formspree', 'Web3Forms'],
  'Služby': ['Make', 'ntfy', 'AWT', 'hCaptcha'],
  'Kontejnerizace': ['Docker'],
  'Virtualizace': ['VirtualBox', 'VMware']
};

export const allSkills = Object.values(skillCategories).flat();
export const uniqueSkills = [...new Set(allSkills)];