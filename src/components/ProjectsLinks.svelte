<script>
  export let project;

  import "../routes/+page.css";
</script>

<div class="project-links">
  {#each Object.entries(project.links) as [platform, link]}
    <a
      class="project-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {#if platform === "GH"}
        <i class="fa fa-github" aria-hidden="true"></i>
      {:else if platform === "WB"}
        <i class="fa fa-globe" aria-hidden="true"></i>
      {:else if platform === "YT"}
        <i class="fa fa-youtube" aria-hidden="true"></i>
      {:else if platform === "TW"}
        <i class="fa fa-twitter" aria-hidden="true"></i>
      {:else if platform === "DC"}
        <i class="fa fa-discord" aria-hidden="true"></i>
      {:else if platform === "PT"}
        <i class="fa fa-patreon" aria-hidden="true"></i>
      {:else if platform === "SP"}
        <i class="fa fa-spotify" aria-hidden="true"></i>
      {:else if platform === "IG"}
        <i class="fa fa-instagram" aria-hidden="true"></i>
      {:else}
        {platform}
      {/if}
    </a>
  {/each}
</div>

<style>
  .project-links {
    display: flex;
    width: 100%;
  }
  .project-link {
    color: var(--project-link-color);
    background-color: var(--project-link-background-color);
    text-decoration: none;
    transition: color 0.3s;
    margin-top: 3px;
    font-size: 25px;
    width: 100%;
    align-items: center;
    text-align: center;
  }

  .project-link:hover {
    color: var(--project-link-color-hover);
    background-color: var(--project-link-background-color-hover);
  }
</style>
