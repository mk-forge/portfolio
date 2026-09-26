<svelte:head>
  <title>MK | Vývojář</title>
</svelte:head>

<script lang="ts">
  import { CLogo, CppLogo, CSharpLogo, GradleLogo, DoxygenLogo, PostmanLogo, BootstrapLogo, OpenGLLogo, PrismaLogo, SwigLogo, ExpressLogo, BlazorLogo, PostgreSQLLogo, SQLiteLogo, NextJSLogo, IntelliJIDEALogo, BashLogo, BatchLogo, JavaScriptLogo, TypeScriptLogo, NodeJSLogo, GNUMakeLogo, ViteLogo, DatabaseIcon, PythonLogo, CordovaLogo, IonicLogo, EmscriptenLogo, WiresharkLogo, PacketTracerLogo, VirtualBoxLogo, VmwareLogo, SvelteKitLogo, TampermonkeyLogo, FormspreeLogo, JavaLogo, ReactLogo, DotnetLogo, DjangoLogo, WebAssemblyLogo, VisualStudioLogo, VisualStudioCodeLogo, GitLogo, GitLabLogo, GitHubLogo, CloudflareWorkersLogo, NetlifyLogo, MavenLogo, SonarQubeLogo, ESLintLogo, PuttyLogo, WindowsLogo, AndroidLogo, LinuxLogo, RenderLogo, NeonLogo, DockerLogo, MakeLogo, NtfyLogo, CLogoOriginal, CppLogoOriginal, CSharpLogoOriginal, GradleLogoOriginal, DoxygenLogoOriginal, PostmanLogoOriginal, BootstrapLogoOriginal, OpenGLLogoOriginal, PrismaLogoOriginal, ExpressLogoOriginal, BlazorLogoOriginal, PostgreSQLLogoOriginal, SQLiteLogoOriginal, NextJSLogoOriginal, IntelliJIDEALogoOriginal, BashLogoOriginal, BatchLogoOriginal, JavaScriptLogoOriginal, TypeScriptLogoOriginal, NodeJSLogoOriginal, PythonLogoOriginal, CordovaLogoOriginal, IonicLogoOriginal, WiresharkLogoOriginal, PacketTracerLogoOriginal, VirtualBoxLogoOriginal, VmwareLogoOriginal, SvelteKitLogoOriginal, TampermonkeyLogoOriginal, FormspreeLogoOriginal, JavaLogoOriginal, ReactLogoOriginal, DotnetLogoOriginal, DjangoLogoOriginal, WebAssemblyLogoOriginal, VisualStudioLogoOriginal, VisualStudioCodeLogoOriginal, GitLogoOriginal, GitLabLogoOriginal, GitHubLogoOriginal, CloudflareWorkersLogoOriginal, NetlifyLogoOriginal, MavenLogoOriginal, SonarQubeLogoOriginal, ESLintLogoOriginal, PuttyLogoOriginal, WindowsLogoOriginal, AndroidLogoOriginal, LinuxLogoOriginal, ViteLogoOriginal, DatabaseIconOriginal, EmscriptenLogoOriginal, NeonLogoOriginal, DockerLogoOriginal, MakeLogoOriginal, NtfyLogoOriginal } from '$lib/assets/icons';
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
      <div class="profile-text">
        <h1 class="heading"><span class="heading-prefix">></span> O mě</h1>
        <p class="subtitle">
          Jsem vývojář s přesahem od systémového programování v C++ po webové technologie jako SvelteKit a React. Baví mě řešit zajímavé problémy, jsem absolventem VŠB-TUO (Bc.). Aktuálně hledám práci, kde bych mohl dále růst a přinášet reálnou hodnotu.
        </p>
      </div>
      <div class="stats">
        <img class="stats-dark" src="https://github-readme-stats.shion.dev/api/top-langs/?username=mk-forge&layout=donut&langs_count=6&hide=html,css,swig,batchfile,makefile&theme=default&hide_title=true" alt="Top Languages" loading="lazy" decoding="async"/>
        <img class="stats-light" src="https://github-readme-stats.shion.dev/api/top-langs/?username=mk-forge&layout=donut&langs_count=6&hide=html,css,swig,batchfile,makefile&theme=one_dark_pro&hide_title=true" alt="Top Languages" loading="lazy" decoding="async"/>
      </div>
    </div>

    <div class="skills-grid-2col">
      <div class="skills-card-wide">
        <div class="skills-section">
          <h3 class="heading"><span class="heading-prefix">></span> Programovací & skriptovací jazyky</h3>
          <div class="skill-items">
            <span class="skill-item"><span class="logo-wrapper"><img src={CppLogo} alt="C++" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={CppLogoOriginal} alt="C++" class="custom-logo logo-hover"/></span> C++ <span class="tag">širší</span></span>
            <span class="skill-item"><span class="logo-wrapper"><img src={CSharpLogo} alt="C#" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={CSharpLogoOriginal} alt="C#" class="custom-logo logo-hover"/></span> C# <span class="tag">širší</span></span>
            <span class="skill-item"><span class="logo-wrapper"><img src={JavaScriptLogo} alt="JavaScript" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={JavaScriptLogoOriginal} alt="JavaScript" class="custom-logo logo-hover"/></span> JavaScript <span class="tag">širší</span></span>
            <span class="skill-item"><span class="logo-wrapper"><img src={TypeScriptLogo} alt="TypeScript" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={TypeScriptLogoOriginal} alt="TypeScript" class="custom-logo logo-hover"/></span> TypeScript <span class="tag">širší</span></span>
            <span class="skill-item"><span class="logo-wrapper"><img src={DatabaseIcon} alt="SQL" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={DatabaseIconOriginal} alt="SQL" class="custom-logo logo-hover"/></span> SQL <span class="tag">širší</span></span>
            <span class="skill-item"><span class="logo-wrapper"><img src={CLogo} alt="C" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={CLogoOriginal} alt="C" class="custom-logo logo-hover"/></span> C <span class="tag">základní</span></span>
            <span class="skill-item"><span class="logo-wrapper"><img src={PythonLogo} alt="Python" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={PythonLogoOriginal} alt="Python" class="custom-logo logo-hover"/></span> Python <span class="tag">základní</span></span>
            <span class="skill-item"><span class="logo-wrapper"><img src={JavaLogo} alt="Java" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={JavaLogoOriginal} alt="Java" class="custom-logo logo-hover"/></span> Java <span class="tag">základní</span></span>
            <span class="skill-item"><span class="logo-wrapper"><img src={DatabaseIcon} alt="PL/SQL" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={DatabaseIconOriginal} alt="PL/SQL" class="custom-logo logo-hover"/></span> PL/SQL <span class="tag">základní</span></span>
            <span class="skill-item"><span class="logo-wrapper"><img src={BatchLogo} alt="Batch" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={BatchLogoOriginal} alt="Batch" class="custom-logo logo-hover"/></span> Batch <span class="tag">základní</span></span>
            <span class="skill-item"><span class="logo-wrapper"><img src={BashLogo} alt="Bash" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={BashLogoOriginal} alt="Bash" class="custom-logo logo-hover"/></span> Bash <span class="tag">základní</span></span>
          </div>
        </div>
      </div>

      <div class="skills-card-wide">
        <div class="skills-section">
          <h3 class="heading"><span class="heading-prefix">></span> Technologie & frameworky</h3>
          <div class="skill-items">
            <span class="skill-item"><span class="logo-wrapper"><img src={SvelteKitLogo} alt="SvelteKit" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={SvelteKitLogoOriginal} alt="SvelteKit" class="custom-logo logo-hover"/></span> SvelteKit</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={ReactLogo} alt="React" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={ReactLogoOriginal} alt="React" class="custom-logo logo-hover"/></span> React</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={NextJSLogo} alt="Next.js" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={NextJSLogoOriginal} alt="Next.js" class="custom-logo logo-hover"/></span> Next.js</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={DotnetLogo} alt=".NET" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={DotnetLogoOriginal} alt=".NET" class="custom-logo logo-hover"/></span> .NET</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={BlazorLogo} alt="Blazor" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={BlazorLogoOriginal} alt="Blazor" class="custom-logo logo-hover"/></span> Blazor</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={NodeJSLogo} alt="Node.js" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={NodeJSLogoOriginal} alt="Node.js" class="custom-logo logo-hover"/></span> Node.js</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={ExpressLogo} alt="Express" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={ExpressLogoOriginal} alt="Express" class="custom-logo logo-hover"/></span> Express</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={DjangoLogo} alt="Django" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={DjangoLogoOriginal} alt="Django" class="custom-logo logo-hover"/></span> Django</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={PostgreSQLLogo} alt="PostgreSQL" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={PostgreSQLLogoOriginal} alt="PostgreSQL" class="custom-logo logo-hover"/></span> PostgreSQL</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={SQLiteLogo} alt="SQLite" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={SQLiteLogoOriginal} alt="SQLite" class="custom-logo logo-hover"/></span> SQLite</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={PrismaLogo} alt="Prisma" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={PrismaLogoOriginal} alt="Prisma" class="custom-logo logo-hover"/></span> Prisma</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={OpenGLLogo} alt="OpenGL" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={OpenGLLogoOriginal} alt="OpenGL" class="custom-logo logo-hover"/></span> OpenGL</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={BootstrapLogo} alt="Bootstrap" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={BootstrapLogoOriginal} alt="Bootstrap" class="custom-logo logo-hover"/></span> Bootstrap</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={IonicLogo} alt="Ionic" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={IonicLogoOriginal} alt="Ionic" class="custom-logo logo-hover"/></span> Ionic</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={CordovaLogo} alt="Cordova" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={CordovaLogoOriginal} alt="Cordova" class="custom-logo logo-hover"/></span> Cordova</span>
          </div>
        </div>
      </div>

      <div class="skills-card-wide">
        <div class="skills-section">
          <h3 class="heading"><span class="heading-prefix">></span> Vývojová prostředí & nástroje</h3>
          <div class="skill-items">
            <span class="skill-item"><span class="logo-wrapper"><img src={VisualStudioLogo} alt="Visual Studio" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={VisualStudioLogoOriginal} alt="Visual Studio" class="custom-logo logo-hover"/></span> Visual Studio</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={VisualStudioCodeLogo} alt="Visual Studio Code" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={VisualStudioCodeLogoOriginal} alt="Visual Studio Code" class="custom-logo logo-hover"/></span> Visual Studio Code</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={IntelliJIDEALogo} alt="IntelliJ IDEA" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={IntelliJIDEALogoOriginal} alt="IntelliJ IDEA" class="custom-logo logo-hover"/></span> IntelliJ IDEA</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={GitLogo} alt="Git" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={GitLogoOriginal} alt="Git" class="custom-logo logo-hover"/></span> Git</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={GitLabLogo} alt="GitLab" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={GitLabLogoOriginal} alt="GitLab" class="custom-logo logo-hover"/></span> GitLab</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={GitHubLogo} alt="GitHub" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={GitHubLogoOriginal} alt="GitHub" class="custom-logo logo-hover"/></span> GitHub</span>
            <span class="skill-item"><img src={GNUMakeLogo} alt="Make" class="custom-logo logo-default" loading="lazy" decoding="async"/> GNU Make</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={ViteLogo} alt="Vite" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={ViteLogoOriginal} alt="Vite" class="custom-logo logo-hover"/></span> Vite</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={MavenLogo} alt="Maven" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={MavenLogoOriginal} alt="Maven" class="custom-logo logo-hover"/></span> Maven</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={GradleLogo} alt="Gradle" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={GradleLogoOriginal} alt="Gradle" class="custom-logo logo-hover"/></span> Gradle</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={DoxygenLogo} alt="Doxygen" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={DoxygenLogoOriginal} alt="Doxygen" class="custom-logo logo-hover"/></span> Doxygen</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={SonarQubeLogo} alt="SonarQube" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={SonarQubeLogoOriginal} alt="SonarQube" class="custom-logo logo-hover"/></span> SonarQube</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={ESLintLogo} alt="ESLint" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={ESLintLogoOriginal} alt="ESLint" class="custom-logo logo-hover"/></span> ESLint</span>
            <span class="skill-item"><img src={SwigLogo} alt="SWIG" class="custom-logo logo-default" loading="lazy" decoding="async"/> SWIG</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={EmscriptenLogo} alt="Emscripten" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={EmscriptenLogoOriginal} alt="Emscripten" class="custom-logo logo-hover"/></span> Emscripten</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={PostmanLogo} alt="Postman" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={PostmanLogoOriginal} alt="Postman" class="custom-logo logo-hover"/></span> Postman</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={PuttyLogo} alt="PuTTY" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={PuttyLogoOriginal} alt="PuTTY" class="custom-logo logo-hover"/></span> PuTTY</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={WiresharkLogo} alt="Wireshark" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={WiresharkLogoOriginal} alt="Wireshark" class="custom-logo logo-hover"/></span> Wireshark</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={PacketTracerLogo} alt="Packet Tracer" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={PacketTracerLogoOriginal} alt="Packet Tracer" class="custom-logo logo-hover"/></span> Packet Tracer</span>
          </div>
        </div>
      </div>

      <div class="skills-card-wide">
        <div class="skills-section">
          <h3 class="heading"><span class="heading-prefix">></span> Operační systémy & platformy</h3>
          <div class="skill-items">
            <span class="skill-item"><span class="logo-wrapper"><img src={WindowsLogo} alt="Windows" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={WindowsLogoOriginal} alt="Windows" class="custom-logo logo-hover"/></span> Windows</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={LinuxLogo} alt="Linux" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={LinuxLogoOriginal} alt="Linux" class="custom-logo logo-hover"/></span> Linux</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={AndroidLogo} alt="Android" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={AndroidLogoOriginal} alt="Android" class="custom-logo logo-hover"/></span> Android</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={CloudflareWorkersLogo} alt="Cloudflare Workers" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={CloudflareWorkersLogoOriginal} alt="Cloudflare Workers" class="custom-logo logo-hover"/></span> Cloudflare Workers</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={NetlifyLogo} alt="Netlify" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={NetlifyLogoOriginal} alt="Netlify" class="custom-logo logo-hover"/></span> Netlify</span>
            <span class="skill-item"><img src={RenderLogo} alt="Render" class="custom-logo logo-default" loading="lazy" decoding="async"/> Render</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={NeonLogo} alt="Neon" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={NeonLogoOriginal} alt="Neon" class="custom-logo logo-hover"/></span> Neon</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={MakeLogo} alt="Make" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={MakeLogoOriginal} alt="Make" class="custom-logo logo-hover"/></span> Make</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={FormspreeLogo} alt="Formspree" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={FormspreeLogoOriginal} alt="Formspree" class="custom-logo logo-hover"/></span> Formspree</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={NtfyLogo} alt="ntfy" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={NtfyLogoOriginal} alt="ntfy" class="custom-logo logo-hover"/></span> ntfy</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={WebAssemblyLogo} alt="WebAssembly" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={WebAssemblyLogoOriginal} alt="WebAssembly" class="custom-logo logo-hover"/></span> WebAssembly</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={TampermonkeyLogo} alt="Tampermonkey" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={TampermonkeyLogoOriginal} alt="Tampermonkey" class="custom-logo logo-hover"/></span> Tampermonkey</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={DockerLogo} alt="Docker" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={DockerLogoOriginal} alt="Docker" class="custom-logo logo-hover"/></span> Docker</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={VirtualBoxLogo} alt="VirtualBox" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={VirtualBoxLogoOriginal} alt="VirtualBox" class="custom-logo logo-hover"/></span> VirtualBox</span>
            <span class="skill-item"><span class="logo-wrapper"><img src={VmwareLogo} alt="VMware" class="custom-logo logo-default" loading="lazy" decoding="async"/><img src={VmwareLogoOriginal} alt="VMware" class="custom-logo logo-hover"/></span> VMware</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>