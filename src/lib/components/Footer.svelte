<script lang="ts">
  import "$lib/styles/footer.css";
  import { GitHubLogoOriginal } from "$lib/assets/icons";

  let year = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-content">
    <p>© {year} MK – Všechna práva vyhrazena.</p>
    <a href="https://github.com/mk-forge" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <img src={GitHubLogoOriginal} alt="" class="footer-logo"/>
    </a>
  </div>
</footer>