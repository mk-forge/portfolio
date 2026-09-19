<svelte:head>
  <title>MK | Projekty</title>
</svelte:head>

<script lang="ts">
  import { DatabaseIcon, CubeIcon, PacmanIcon, BookOpenIcon, SquaresIntersectIcon, GemIcon, FilmIcon, PingPongIcon, IdCardIcon, BroomIcon, ExternalLinkIcon } from '$lib/assets/icons';
  import { TabPanelScrollbar } from '$lib/components';
  import { marked } from 'marked';
  import '$lib/styles/projects.css';

  let projects = [
    { label: 'Data Collection Generator', icon: DatabaseIcon, repoUrl: 'https://github.com/mk-forge/data-collection-generator', readmeUrl: 'https://raw.githubusercontent.com/mk-forge/data-collection-generator/main/README.md' },
    { label: 'RenderForge', icon: CubeIcon, repoUrl: 'https://github.com/mk-forge/render-forge', readmeUrl: 'https://raw.githubusercontent.com/mk-forge/render-forge/main/README.md' },
    { label: 'PAC-XON', icon: PacmanIcon, repoUrl: 'https://github.com/mk-forge/pac-xon', readmeUrl: 'https://raw.githubusercontent.com/mk-forge/pac-xon/main/README.md' },
    { label: 'E-Learning Platform', icon: BookOpenIcon, repoUrl: 'https://github.com/mk-forge/e-learning-platform', readmeUrl: 'https://raw.githubusercontent.com/mk-forge/e-learning-platform/main/README.md' },
    { label: 'Set Intersection', icon: SquaresIntersectIcon, repoUrl: 'https://github.com/mk-forge/set-intersection', readmeUrl: 'https://raw.githubusercontent.com/mk-forge/set-intersection/main/README.md' },
    { label: 'Minecraft Gems Mod', icon: GemIcon, repoUrl: 'https://github.com/mk-forge/minecraft-gems-mod', readmeUrl: 'https://raw.githubusercontent.com/mk-forge/minecraft-gems-mod/main/README.md' },
    { label: 'ČSFD Extended', icon: FilmIcon, repoUrl: 'https://github.com/mk-forge/csfd-extended', readmeUrl: 'https://raw.githubusercontent.com/mk-forge/csfd-extended/main/README.md' },
    { label: 'Table Tennis Manager', icon: PingPongIcon, repoUrl: 'https://github.com/mk-forge/table-tennis-manager', readmeUrl: 'https://raw.githubusercontent.com/mk-forge/table-tennis-manager/main/README.md' },
    { label: 'Portfolio', icon: IdCardIcon, repoUrl: 'https://github.com/mk-forge/portfolio', readmeUrl: 'https://raw.githubusercontent.com/mk-forge/portfolio/main/README.md' },
    { label: 'Windows Process Cleaner', icon: BroomIcon, repoUrl: 'https://github.com/mk-forge/windows-process-cleaner', readmeUrl: 'https://raw.githubusercontent.com/mk-forge/windows-process-cleaner/main/README.md' }
  ];

  let activeTab = $state(0);
  let readmes: Record<string, string> = $state({});

  $effect(() => {
    projects.forEach(project => {
      if (readmes[project.repoUrl] == undefined) {
        fetch(project.readmeUrl)
          .then(response => response.text())
          .then(text => {
            readmes[project.repoUrl] = text;
          });
      }
    });
  });

  function openLinksInNewTab() {
    let links = document.querySelectorAll('.project-content a');
    links.forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  }

  $effect(() => {
    activeTab;
    
    if (readmes[projects[activeTab].repoUrl] != undefined) {
      setTimeout(openLinksInNewTab, 0);
    }
  });
</script>

<div class="page">
  <div class="projects-page">
    <h1 class="heading"><span class="heading-prefix">></span> Moje projekty</h1>
    <p class="subtitle">Klikni na záložku a prohlédni si detaily projektu.</p>

    <div class="tabs-container">
      <div class="tab-list">
        {#each projects as project, i}
          <button type="button" class="tab" class:active={activeTab == i} onclick={() => activeTab = i}>
            <img src={project.icon} alt="" class="tab-icon"/>
            <span>{project.label}</span>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" class="repo-link-btn" title="Otevřít repozitář" onclick={(e) => e.stopPropagation()} tabindex="-1">
              <img src={ExternalLinkIcon} alt="" class="tab-icon repo-icon"/>
            </a>
          </button>
        {/each}
      </div>

      <TabPanelScrollbar>
        <div class="tab-panel">
          <div class="project-content">
            {#if readmes[projects[activeTab].repoUrl] != undefined}
              {@html marked(readmes[projects[activeTab].repoUrl])}
            {:else}
              <p>Načítám…</p>
            {/if}
          </div>
        </div>
      </TabPanelScrollbar>
    </div>
  </div>
</div>