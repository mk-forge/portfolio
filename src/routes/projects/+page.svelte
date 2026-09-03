<svelte:head>
  <title>MK | Projekty</title>
</svelte:head>

<script lang="ts">
  import { readmeDataGenRaw, readmeElearningRaw, readmePacXonRaw, readmePortfolioRaw, readmeMcRaw, readmeCsfdRaw, readmeTableTennisRaw, readmeSetIntersectionRaw, readmeWindowsCleanerRaw } from '$lib/assets/readmes';
  import { DatabaseIcon, BookOpenIcon, PacmanIcon, IdCardIcon, GemIcon, FilmIcon, PingPongIcon, SquaresIntersectIcon, BroomIcon, ExternalLinkIcon } from '$lib/assets/icons';
  import { TabPanelScrollbar } from '$lib/components';
  import { marked } from 'marked';
  import '$lib/styles/projects.css';

  let tabs = [
    { label: 'Data Collection Generator', icon: DatabaseIcon, repoUrl: 'https://github.com/mk-forge/data-collection-generator', content: marked(readmeDataGenRaw) },
    { label: 'E-Learning Platform', icon: BookOpenIcon, repoUrl: 'https://github.com/mk-forge/e-learning-platform', content: marked(readmeElearningRaw) },
    { label: 'PAC-XON', icon: PacmanIcon, repoUrl: 'https://github.com/mk-forge/pac-xon', content: marked(readmePacXonRaw) },
    { label: 'Portfolio', icon: IdCardIcon, repourl: 'https://github.com/mk-forge/portfolio', content: marked(readmePortfolioRaw) },
    { label: 'Minecraft Gems Mod', icon: GemIcon, repoUrl: 'https://github.com/mk-forge/minecraft-gems-mod', content: marked(readmeMcRaw) },
    { label: 'ČSFD Extended', icon: FilmIcon, repoUrl: 'https://github.com/mk-forge/csfd-extended', content: marked(readmeCsfdRaw) },
    { label: 'Table Tennis Manager', icon: PingPongIcon, repoUrl: 'https://github.com/mk-forge/table-tennis-manager', content: marked(readmeTableTennisRaw) },
    { label: 'Set Intersection', icon: SquaresIntersectIcon, repoUrl: 'https://github.com/mk-forge/set-intersection', content: marked(readmeSetIntersectionRaw) },
    { label: 'Windows Process Cleaner', icon: BroomIcon, repoUrl: 'https://github.com/mk-forge/windows-process-cleaner', content: marked(readmeWindowsCleanerRaw) }
  ];

  let activeTab = $state(0);

  function openLinksInNewTab() {
    let links = document.querySelectorAll('.project-content a');
    links.forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  }

  $effect(() => {
    openLinksInNewTab();
  });
</script>

<div class="page">
  <div class="projects-page">
    <h1 class="heading"><span class="heading-prefix">></span> Moje projekty</h1>
    <p class="subtitle">Klikni na záložku a prohlédni si detaily projektu.</p>

    <div class="tabs-container">
      <div class="tab-list">
        {#each tabs as tab, i}
          <button type="button" class="tab" class:active={activeTab == i} onclick={() => activeTab = i}>
            <img src={tab.icon} alt="" class="tab-icon"/>
            <span>{tab.label}</span>
            <a href={tab.repoUrl} target="_blank" rel="noopener noreferrer" class="repo-link-btn" title="Otevřít repozitář" onclick={(e) => e.stopPropagation()} tabindex="-1">
              <img src={ExternalLinkIcon} alt="" class="tab-icon repo-icon"/>
            </a>
          </button>
        {/each}
      </div>

      <TabPanelScrollbar>
        <div class="tab-panel">
          <div class="project-content">
            {@html tabs[activeTab].content}
          </div>
        </div>
      </TabPanelScrollbar>
    </div>
  </div>
</div>