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
  <!--<div class="social-media">
    <div class="row">
      <a href="https://github.com/JonasunderscoreJones" aria-label="github-link"><i class="fab fa-github"></i></a>
      <a href="https://www.youtube.com/channel/UCVIxvKBIMSMgurYS8pK7fSg" aria-label="youtube-link"><i class="fab fa-youtube"></i></a>
      <a href="https://discord.gg/V2EsuUVmWh" aria-label="discord-link"><i class="fab fa-discord"></i></a>
      <a href="mailto:me@jonasjones.dev" aria-label="email-link"><i class="fas fa-envelope"></i></a>
    </div>
  </div>-->
</ParallaxBg>
<Footer />
