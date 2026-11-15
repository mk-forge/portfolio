export const skillCategories: Record<string, string[]> = {
  'Programovací jazyky': ['C++', 'C', 'C#', 'SQL', 'PL/SQL', 'Java', 'Haskell', 'JavaScript', 'TypeScript', 'Python'],
  'Skriptovací jazyky': ['JavaScript', 'TypeScript', 'Python', 'Batch', 'Bash'],
  'Frameworky': ['SvelteKit', 'React', 'Next.js', 'Blazor', 'Express', 'Django', 'Ionic', 'Cordova'],
  'Databáze': ['PostgreSQL', 'SQLite', 'Prisma', 'Neon'],
  'Technologie': ['.NET', 'Node.js', 'OpenGL', 'Bootstrap', 'Tampermonkey', 'jQuery', 'SWIG', 'Emscripten', 'WebAssembly'],
  'Vývojová prostředí': ['Visual Studio', 'Visual Studio Code', 'IntelliJ IDEA', 'SSMS'],
  'Verzování': ['Git', 'GitHub', 'GitLab'],
  'Sestavení': ['GNU Make', 'Vite', 'npm', 'Maven', 'Gradle'],
  'CI/CD': ['GitHub Actions', 'Dependabot'],
  'Kvalita kódu': ['Doxygen', 'SonarQube', 'ESLint', 'Prettier'],
  'Optimalizace': ['esbuild', 'PurgeCSS', 'SVGO'],
  'Sítě': ['Postman', 'PuTTY', 'Packet Tracer'],
  'UML': ['Visual Paradigm'],
  'Operační systémy': ['Windows', 'Linux', 'Android'],
  'Nasazení': ['Cloudflare Workers', 'Netlify', 'Render'],
  'Služby': ['Make', 'Formspree', 'ntfy', 'AWT', 'hCaptcha'],
  'Kontejnerizace': ['Docker'],
  'Virtualizace': ['VirtualBox', 'VMware']
};

export const allSkills = Object.values(skillCategories).flat();
export const uniqueSkills = [...new Set(allSkills)];