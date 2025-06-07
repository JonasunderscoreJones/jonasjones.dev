<script>
  import Navbar from "../components/NavBar.svelte";
  import Footer from "../components/Footer.svelte";
  import ParallaxBg from "../components/ParallaxBg.svelte";
  import Padding from "../components/padding.svelte";
</script>

<ParallaxBg>
  <Navbar />
  <title>Jonas_Jones</title>
  <Padding />
  <div class="image-wrapper">
    <img
      src="/icon_800x800_transparent.webp"
      alt="Jonas_Jones Icon"
      class="picture"
      style="width: 100%; height: auto; max-width: 200px; max-height: 200px;"
    />
    <h1 class="name">Jonas_Jones</h1>
  </div>
  <div class="hr-sub-header-line">
    <hr />
  </div>
  <div class="quick-links">
    <div class="row">
      <a href="https://github.com/JonasunderscoreJones" target="_blank" aria-label="github-link"><i class="fab fa-github"></i><p>GitHub</p></a>
      <a href="https://docs.jonasjones.dev" target="_blank" aria-label="docs-link"><i class="fas fa-book"></i><p>Docs</p></a>
      <a href="https://blog.jonasjones.dev" target="_blank" aria-label="blog-link"><i class="fas fa-square-rss"></i><p>Blog</p></a>
      <a href="mailto:me@jonasjones.dev" aria-label="mail-link"><i class="fas fa-envelope"></i><p>Email</p></a>
    </div>
  </div>
  <div class="line">
    <hr />
  </div>
  <div class="line-content">
    <p>Idk how this dot got here but im leaving it.</p>
  </div>
  <!--<a href="#all-links" class="all-links-button" aria-label="all-links-button">
    <i class="fas fa-circle-down"></i>
  </a>-->
  <Padding />
  <div class="all-links" id="all-links">
    <h1>All Links</h1>
    <div class="quick-links">
      <div class="row">
        <a href="https://discord.gg/V2EsuUVmWh" target="_blank" aria-label="discord-link"><i class="fab fa-discord"></i><p>Discord</p></a>
        <a href="https://www.youtube.com/channel/UCVIxvKBIMSMgurYS8pK7fSg" target="_blank" aria-label="youtube-link"><i class="fab fa-youtube"></i><p>YouTube</p></a>
        <a href="https://www.instagram.com/_jonas_jones_/" target="_blank" aria-label="instagram-link"><i class="fab fa-instagram"></i><p>Instagram</p></a>
      </div>
    </div>
    <div class="quick-links">
      <div class="row">
        <a href="https://dash.jonasjones.dev" target="_blank" aria-label="dashboard-link"><i class="fas fa-gauge-high"></i><p>Dashboard</p></a>
        <a href="https://bingo.jonasjones.dev" target="_blank" aria-label="bingo-link"><i class="fas fa-table-cells"></i><p>Bingo</p></a>
        <a href="https://stats.jonasjones.dev" target="_blank" aria-label="stats-link"><i class="fas fa-chart-column"></i><p>Analytics</p></a>
        <a href="https://kcomebacks.jonasjones.dev" target="_blank" aria-label="kcomebacks-link"><i class="fas fa-bullhorn"></i><p>K-Comebacks</p></a>
        <a href="https://fileshare.jonasjones.dev" target="_blank" aria-label="fileshare-link"><i class="fas fa-square-share-nodes"></i><p>Fileshare</p></a>
        <a href="https://codes.jonasjones.dev" target="_blank" aria-label="code-gen-link"><i class="fas fa-qrcode"></i><p>Code Gen.</p></a>
        <a href="https://builds.jonasjones.dev" target="_blank" aria-label="pages-builds-link"><i class="fas fa-wrench"></i><p>Builds Index</p></a>
      </div>
    </div>
  </div>
  <Padding />
</ParallaxBg>
<Footer />
