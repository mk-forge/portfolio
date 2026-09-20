<svelte:head>
  <title>MK | Vývojář</title>
</svelte:head>

<script lang="ts">
  import { CLogo, CppLogo, CSharpLogo, GradleLogo, DoxygenLogo, PostmanLogo, BootstrapLogo, OpenGLLogo, PrismaLogo, SwigLogoLight, SwigLogoDark, ExpressLogo, BlazorLogo, PostgreSQLLogo, SQLiteLogo, NextJSLogo, IntelliJIDEALogo, BashLogo, BatchLogo, JavaScriptLogo, TypeScriptLogo, NodeJSLogo, MakeLogoLight, MakeLogoDark, ViteLogoLight, ViteLogoDark, DatabaseIcon, PythonLogo, CordovaLogo, IonicLogo, EmscriptenLogoLight, EmscriptenLogoDark, WiresharkLogo, PacketTracerLogo, VirtualBoxLogo, VmwareLogo, SvelteLogo, TampermonkeyLogo, FormspreeLogo, JavaLogo, ReactLogo, DotnetLogo, DjangoLogo, WebAssemblyLogo, VisualStudioLogo, VisualStudioCodeLogo, GitLogo, GitLabLogo, GitHubLogo, CloudflareWorkersLogo, NetlifyLogo, MavenLogo, SonarQubeLogo, ESLintLogo, PuttyLogo, WindowsLogo, AndroidLogo, LinuxLogo } from '$lib/assets/icons';
  import { onMount } from 'svelte';
  import '$lib/styles/home.css';

  let hydrated = $state(false);

  onMount(() => {
    hydrated = true;
  });
</script>

<div class="page" class:hydrated>
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
          <h3 class="heading"><span class="heading-prefix">></span> Programovací & skriptovací jazyky</h3>
          <div class="skill-items">
            <span class="skill-item"><img src={CppLogo} alt="C++" class="custom-logo"/> C++ <span class="tag">širší</span></span>
            <span class="skill-item"><img src={CSharpLogo} alt="C#" class="custom-logo"/> C# <span class="tag">širší</span></span>
            <span class="skill-item"><img src={JavaScriptLogo} alt="JavaScript" class="custom-logo"/> JavaScript <span class="tag">širší</span></span>
            <span class="skill-item"><img src={TypeScriptLogo} alt="TypeScript" class="custom-logo"/> TypeScript <span class="tag">širší</span></span>
            <span class="skill-item"><img src={DatabaseIcon} alt="SQL" class="custom-logo"/> SQL <span class="tag">širší</span></span>
            <span class="skill-item"><img src={CLogo} alt="C" class="custom-logo"/> C <span class="tag">základní</span></span>
            <span class="skill-item"><img src={PythonLogo} alt="Python" class="custom-logo"/> Python <span class="tag">základní</span></span>
            <span class="skill-item"><img src={JavaLogo} alt="Java" class="custom-logo"/> Java <span class="tag">základní</span></span>
            <span class="skill-item"><img src={DatabaseIcon} alt="PL/SQL" class="custom-logo"/> PL/SQL <span class="tag">základní</span></span>
            <span class="skill-item"><img src={BatchLogo} alt="Batch" class="custom-logo"/> Batch <span class="tag">základní</span></span>
            <span class="skill-item"><img src={BashLogo} alt="Bash" class="custom-logo"/> Bash <span class="tag">základní</span></span>
          </div>
        </div>
      </div>

      <div class="skills-card-wide">
        <div class="skills-section">
          <h3 class="heading"><span class="heading-prefix">></span> Technologie & frameworky</h3>
          <div class="skill-items">
            <span class="skill-item"><img src={SvelteLogo} alt="Svelte" class="custom-logo"/> SvelteKit</span>
            <span class="skill-item"><img src={ReactLogo} alt="React" class="custom-logo"/> React</span>
            <span class="skill-item"><img src={NextJSLogo} alt="Next.js" class="custom-logo"/> Next.js</span>
            <span class="skill-item"><img src={DotnetLogo} alt=".NET" class="custom-logo"/> .NET</span>
            <span class="skill-item"><img src={BlazorLogo} alt="Blazor" class="custom-logo"/> Blazor</span>
            <span class="skill-item"><img src={NodeJSLogo} alt="Node.js" class="custom-logo"/> Node.js</span>
            <span class="skill-item"><img src={ExpressLogo} alt="Express" class="custom-logo"/> Express</span>
            <span class="skill-item"><img src={DjangoLogo} alt="Django" class="custom-logo"/> Django</span>
            <span class="skill-item"><img src={PostgreSQLLogo} alt="PostgreSQL" class="custom-logo"/> PostgreSQL</span>
            <span class="skill-item"><img src={SQLiteLogo} alt="SQLite" class="custom-logo"/> SQLite</span>
            <span class="skill-item"><img src={PrismaLogo} alt="Prisma" class="custom-logo"/> Prisma</span>
            <span class="skill-item"><img src={OpenGLLogo} alt="OpenGL" class="custom-logo"/> OpenGL</span>
            <span class="skill-item"><img src={WebAssemblyLogo} alt="WebAssembly" class="custom-logo"/> WebAssembly</span>
            <span class="skill-item"><img src={BootstrapLogo} alt="Bootstrap" class="custom-logo"/> Bootstrap</span>
            <span class="skill-item"><img src={IonicLogo} alt="Ionic" class="custom-logo"/> Ionic</span>
            <span class="skill-item"><img src={CordovaLogo} alt="Cordova" class="custom-logo"/> Cordova</span>
          </div>
        </div>
      </div>

      <div class="skills-card-wide">
        <div class="skills-section">
          <h3 class="heading"><span class="heading-prefix">></span> Vývojová prostředí & nástroje</h3>
          <div class="skill-items">
            <span class="skill-item"><img src={VisualStudioLogo} alt="Visual Studio" class="custom-logo"/> Visual Studio</span>
            <span class="skill-item"><img src={VisualStudioCodeLogo} alt="Visual Studio Code" class="custom-logo"/> Visual Studio Code</span>
            <span class="skill-item"><img src={IntelliJIDEALogo} alt="IntelliJ IDEA" class="custom-logo"/> IntelliJ IDEA</span>
            <span class="skill-item"><img src={TampermonkeyLogo} alt="Tampermonkey" class="custom-logo"/> Tampermonkey</span>
            <span class="skill-item"><img src={GitLogo} alt="Git" class="custom-logo"/> Git</span>
            <span class="skill-item"><img src={GitLabLogo} alt="GitLab" class="custom-logo"/> GitLab</span>
            <span class="skill-item"><img src={GitHubLogo} alt="GitHub" class="custom-logo"/> GitHub</span>
            <span class="skill-item"><img src={CloudflareWorkersLogo} alt="Cloudflare Workers" class="custom-logo"/> Cloudflare Workers</span>
            <span class="skill-item"><img src={NetlifyLogo} alt="Netlify" class="custom-logo"/> Netlify</span>
            <span class="skill-item"><img src={MakeLogoLight} alt="Make" class="logo logo-light"/><img src={MakeLogoDark} alt="Make" class="logo logo-dark"/> Make</span>
            <span class="skill-item"><img src={ViteLogoLight} alt="Vite" class="logo logo-light"/><img src={ViteLogoDark} alt="Vite" class="logo logo-dark"/> Vite</span>
            <span class="skill-item"><img src={MavenLogo} alt="Maven" class="custom-logo"/> Maven</span>
            <span class="skill-item"><img src={GradleLogo} alt="Gradle" class="custom-logo"/> Gradle</span>
            <span class="skill-item"><img src={DoxygenLogo} alt="Doxygen" class="custom-logo logo-size"/> Doxygen</span>
            <span class="skill-item"><img src={SonarQubeLogo} alt="SonarQube" class="custom-logo logo-size"/> SonarQube</span>
            <span class="skill-item"><img src={ESLintLogo} alt="ESLint" class="custom-logo"/> ESLint</span>
            <span class="skill-item"><img src={SwigLogoLight} alt="SWIG" class="swig-logo swig-logo-light"/><img src={SwigLogoDark} alt="SWIG" class="swig-logo swig-logo-dark"/> SWIG</span>
            <span class="skill-item"><img src={EmscriptenLogoLight} alt="Emscripten" class="logo logo-light"/><img src={EmscriptenLogoDark} alt="Emscripten" class="logo logo-dark"/> Emscripten</span>
            <span class="skill-item"><img src={FormspreeLogo} alt="Formspree" class="custom-logo"/> Formspree</span>
            <span class="skill-item"><img src={PostmanLogo} alt="Postman" class="custom-logo"/> Postman</span>
            <span class="skill-item"><img src={PuttyLogo} alt="PuTTY" class="custom-logo"/> PuTTY</span>
            <span class="skill-item"><img src={WiresharkLogo} alt="Wireshark" class="custom-logo"/> Wireshark</span>
            <span class="skill-item"><img src={PacketTracerLogo} alt="Packet Tracer" class="custom-logo"/> Packet Tracer</span>
            <span class="skill-item"><img src={VirtualBoxLogo} alt="VirtualBox" class="custom-logo"/> VirtualBox</span>
            <span class="skill-item"><img src={VmwareLogo} alt="VMware" class="custom-logo"/> VMware</span>
          </div>
        </div>
      </div>

      <div class="skills-card-wide">
        <div class="skills-section">
          <h3 class="heading"><span class="heading-prefix">></span> Operační systémy & platformy</h3>
          <div class="skill-items">
            <span class="skill-item"><img src={WindowsLogo} alt="Windows" class="custom-logo"/> Windows <span class="tag">každodenní</span></span>
            <span class="skill-item"><img src={AndroidLogo} alt="Android" class="custom-logo"/> Android <span class="tag">každodenní</span></span>
            <span class="skill-item"><img src={LinuxLogo} alt="Linux" class="custom-logo"/> Linux <span class="tag">občasné</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>