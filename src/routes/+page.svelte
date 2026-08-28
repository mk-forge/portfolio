<svelte:head>
  <title>MK | Vývojář</title>
</svelte:head>

<script lang="ts">
  import { CLogo, CppLogo, CSharpLogo, GradleLogo, DoxygenLogo, PostmanLogo, BootstrapLogo, OpenGLLogo, PrismaLogo, SwigLogo, ExpressLogo, BlazorLogo, PostgreSQLLogo, SQLiteLogo, NextJSLogo, IntelliJIDEALogo, BashLogo, BatchLogo, JavaScriptLogo, TypeScriptLogo, AndroidLogo, NodeJSLogo, MakeLogo, DatabaseIcon } from '$lib/assets/icons';
  import '$lib/styles/home.css';
</script>

<div class="page">
  <div class="home-page">
    <div class="profile-card">
      <h1 class="heading"><span class="heading-prefix">></span> O mě</h1>
      <p class="subtitle">
        Jsem vývojář s přesahem od systémového programování v C++ po webové technologie jako Svelte a React. Baví mě řešit zajímavé problémy, jsem absolventem VŠB-TUO (Bc.). Aktuálně hledám práci, kde bych mohl dále růst a přinášet reálnou hodnotu.
      </p>
    </div>

    <div class="skills-grid-2col">
      <div class="skills-card-wide">
        <div class="skills-section">
          <h3 class="heading"><span class="heading-prefix">></span> Programovací jazyky</h3>
          <div class="skill-items">
            <span class="skill-item"><img src={CppLogo} alt="C++" class="custom-logo logo-size-first"/> C++ <span class="tag">širší</span></span>
            <span class="skill-item"><img src={CSharpLogo} alt="C#" class="custom-logo logo-size-first"/> C# <span class="tag">širší</span></span>
            <span class="skill-item"><img src={JavaScriptLogo} alt="JavaScript" class="custom-logo"/> JavaScript <span class="tag">širší</span></span>
            <span class="skill-item"><img src={TypeScriptLogo} alt="TypeScript" class="custom-logo"/> TypeScript <span class="tag">širší</span></span>
            <span class="skill-item"><img src={DatabaseIcon} alt="SQL" class="custom-logo"/> SQL <span class="tag">širší</span></span>
            <span class="skill-item"><img src={CLogo} alt="C" class="custom-logo logo-size-first"/> C <span class="tag">základní</span></span>
            <span class="skill-item"><i class="devicon-python-plain devicon-logo"></i> Python <span class="tag">základní</span></span>
            <span class="skill-item"><i class="devicon-java-plain devicon-logo"></i> Java <span class="tag">základní</span></span>
            <span class="skill-item"><img src={DatabaseIcon} alt="PL/SQL" class="custom-logo"/> PL/SQL <span class="tag">základní</span></span>
            <span class="skill-item"><i class="devicon-svelte-plain devicon-logo"></i> Svelte <span class="tag">základní</span></span>
          </div>
        </div>
      </div>

      <div class="skills-card-wide">
        <div class="skills-section">
          <h3 class="heading"><span class="heading-prefix">></span> Technologie & frameworky</h3>
          <div class="skill-items">
            <span class="skill-item"><i class="devicon-svelte-plain devicon-logo"></i> SvelteKit</span>
            <span class="skill-item"><i class="devicon-react-original devicon-logo"></i> React</span>
            <span class="skill-item"><img src={NextJSLogo} alt="Next.js" class="custom-logo"/> Next.js</span>
            <span class="skill-item"><i class="devicon-dot-net-plain devicon-logo"></i> .NET</span>
            <span class="skill-item"><img src={BlazorLogo} alt="Blazor" class="custom-logo"/> Blazor</span>
            <span class="skill-item"><img src={NodeJSLogo} alt="NodeJS" class="custom-logo"/> Node.js</span>
            <span class="skill-item"><img src={ExpressLogo} alt="Express" class="custom-logo"/> Express</span>
            <span class="skill-item"><img src={PostgreSQLLogo} alt="PostgreSQL" class="custom-logo"/> PostgreSQL</span>
            <span class="skill-item"><img src={SQLiteLogo} alt="SQLite" class="custom-logo"/> SQLite</span>
            <span class="skill-item"><img src={PrismaLogo} alt="Prisma" class="custom-logo"/> Prisma</span>
            <span class="skill-item"><img src={OpenGLLogo} alt="OpenGL" class="custom-logo logo-size-first"/> OpenGL</span>
            <span class="skill-item"><img src={SwigLogo} alt="SWIG" class="custom-logo swig-logo logo-size-first"/> SWIG</span>
            <span class="skill-item"><img src={BootstrapLogo} alt="Bootstrap" class="custom-logo"/> Bootstrap</span>
          </div>
        </div>
      </div>

      <div class="skills-card-wide">
        <div class="skills-section">
          <h3 class="heading"><span class="heading-prefix">></span> Vývojová prostředí & nástroje</h3>
          <div class="skill-items">
            <span class="skill-item"><i class="devicon-visualstudio-plain devicon-logo"></i> Visual Studio</span>
            <span class="skill-item"><i class="devicon-vscode-plain devicon-logo"></i> Visual Studio Code</span>
            <span class="skill-item"><img src={IntelliJIDEALogo} alt="IntelliJ IDEA" class="custom-logo"/> IntelliJ IDEA</span>
            <span class="skill-item"><i class="devicon-git-plain devicon-logo"></i> Git</span>
            <span class="skill-item"><i class="devicon-github-original devicon-logo"></i> GitHub</span>
            <span class="skill-item"><i class="devicon-gitlab-plain devicon-logo"></i> GitLab</span>
            <span class="skill-item"><img src={MakeLogo} alt="Make" class="custom-logo logo-size-second"/> GNU Make</span>
            <span class="skill-item"><img src={GradleLogo} alt="Gradle" class="custom-logo"/> Gradle</span>
            <span class="skill-item"><img src={DoxygenLogo} alt="Doxygen" class="custom-logo logo-size-second"/> Doxygen</span>
            <span class="skill-item"><img src={PostmanLogo} alt="Postman" class="custom-logo"/> Postman</span>
            <span class="skill-item"><i class="devicon-putty-plain devicon-logo"></i> PuTTY</span>
            <span class="skill-item"><img src={BatchLogo} alt="Batch" class="custom-logo"/> Batch</span>
            <span class="skill-item"><img src={BashLogo} alt="Bash" class="custom-logo"/> Bash</span>
          </div>
        </div>
      </div>

      <div class="skills-card-wide">
        <div class="skills-section">
          <h3 class="heading"><span class="heading-prefix">></span> Operační systémy</h3>
          <div class="skill-items">
            <span class="skill-item"><i class="devicon-windows8-original devicon-logo"></i> Windows <span class="tag">každodenní</span></span>
            <span class="skill-item"><img src={AndroidLogo} alt="Android" class="custom-logo logo-size-first"/> Android <span class="tag">každodenní</span></span>
            <span class="skill-item"><i class="devicon-linux-plain devicon-logo"></i> Linux <span class="tag">občasné</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>