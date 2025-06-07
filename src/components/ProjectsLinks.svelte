<script>
  export let project;

  import "../routes/+page.css";
  import FontAwesome from "./FontAwesome.svelte";
</script>
<FontAwesome />
<div class="project-links">
  {#each Object.entries(project.links) as [platform, link]}
    <a
      class="project-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {#if platform === "GH"}
        <i class="fab fa-github" aria-hidden="true"></i>
      {:else if platform === "WB"}
        <i class="fa fa-globe" aria-hidden="true"></i>
      {:else if platform === "YT"}
        <i class="fa fa-youtube" aria-hidden="true"></i>
      {:else if platform === "TW"}
        <i class="fa fa-twitter" aria-hidden="true"></i>
      {:else if platform === "DS"}
        <i class="fa fa-discord" aria-hidden="true"></i>
      {:else if platform === "PT"}
        <i class="fa fa-patreon" aria-hidden="true"></i>
      {:else if platform === "SP"}
        <i class="fa fa-spotify" aria-hidden="true"></i>
      {:else if platform === "IG"}
        <i class="fa fa-instagram" aria-hidden="true"></i>
      {:else if platform === "MR"}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12.252.004a11.78 11.768 0 0 0-8.92 3.73a11 10.999 0 0 0-2.17 3.11a11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77c.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02c.2-.04.22.1-.26-1.7l-.36-1.37l-1.01-.06a8.5 8.489 0 0 1-5.18-1.8a5.34 5.34 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97l2.07-.43l2.06-.43l1.47-1.47c.8-.8 1.48-1.5 1.48-1.52c0-.09-.42-1.63-.46-1.7c-.04-.06-.2-.03-1.02.18c-.53.13-1.2.3-1.45.4l-.48.15l-.53.53l-.53.53l-.93.1l-.93.07l-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6l.43-.57c.68-.9.68-.9 1.46-1.1c.4-.1.65-.2.83-.33c.13-.099.65-.579 1.14-1.069l.9-.9l-.7-.7l-.7-.7l-1.95.54c-1.07.3-1.96.53-1.97.53c-.03 0-2.23 2.48-2.63 2.97l-.29.35l.28 1.03c.16.56.3 1.16.31 1.34l.03.3l-.34.23c-.37.23-2.22 1.3-2.84 1.63c-.36.2-.37.2-.44.1c-.08-.1-.23-.6-.32-1.03c-.18-.86-.17-2.75.02-3.73a8.84 8.839 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1c.06-.17.5-2.999.47-3.039c-.01-.02-.1-.02-.2-.03Zm3.68.67c-.2 0-.3.1-.37.38c-.06.23-.46 2.42-.46 2.52c0 .04.1.11.22.16a8.51 8.499 0 0 1 2.99 2a8.38 8.379 0 0 1 2.16 3.449a6.9 6.9 0 0 1 .4 2.8c0 1.07 0 1.27-.1 1.73a9.37 9.369 0 0 1-1.76 3.769c-.32.4-.98 1.06-1.37 1.38c-.38.32-1.54 1.1-1.7 1.14c-.1.03-.1.06-.07.26c.03.18.64 2.56.7 2.78l.06.06a12.07 12.058 0 0 0 7.27-9.4c.13-.77.13-2.58 0-3.4a11.96 11.948 0 0 0-5.73-8.578c-.7-.42-2.05-1.06-2.25-1.06Z"/>
        </svg>
      {:else if platform === "CF"}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor" d="M18.326 9.214s4.9-.772 5.674-3.026h-7.507V4.4H0l2.032 2.358v2.415s5.127-.267 7.11 1.237c2.714 2.516-3.053 5.917-3.053 5.917l-.99 3.273c1.547-1.473 4.494-3.377 9.899-3.286c-2.057.65-4.125 1.665-5.735 3.286h10.925l-1.029-3.273s-7.918-4.668-.833-7.112z"/>
        </svg>
      {:else if platform === "FJ"}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor" d="M16.777 0a2.9 2.9 0 1 1-2.529 4.322H12.91a4.266 4.266 0 0 0-4.265 4.195v2.118a7.076 7.076 0 0 1 4.147-1.42l.118-.002h1.338a2.9 2.9 0 0 1 5.43 1.422a2.9 2.9 0 0 1-5.43 1.422H12.91a4.266 4.266 0 0 0-4.265 4.195v2.319A2.9 2.9 0 0 1 7.222 24A2.9 2.9 0 0 1 5.8 18.57V8.589a7.109 7.109 0 0 1 6.991-7.108l.118-.001h1.338A2.9 2.9 0 0 1 16.778 0ZM7.223 19.905a1.194 1.194 0 1 0 0 2.389a1.194 1.194 0 0 0 0-2.389Zm9.554-10.464a1.194 1.194 0 1 0 0 2.389a1.194 1.194 0 0 0 0-2.39Zm0-7.735a1.194 1.194 0 1 0 0 2.389a1.194 1.194 0 0 0 0-2.389Z"/>
        </svg>
      {:else if platform === "DC"}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 8 8">
          <path fill="currentColor" d="M1 0C.93 0 .87.01.81.03C.42.11.11.42.03.81C0 .87 0 .93 0 1v5.5C0 7.33.67 8 1.5 8H7V7H1.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H7V.5c0-.28-.22-.5-.5-.5H6v3L5 2L4 3V0H1z"/>
        </svg>
      {:else}
        {platform}
      {/if}
    </a>
  {/each}
</div>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
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
