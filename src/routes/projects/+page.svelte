<script lang="ts">
  import FontAwesome from "../../components/FontAwesome.svelte";
  import Footer from "../../components/Footer.svelte";
  import NavBar from "../../components/NavBar.svelte";
  import ParallaxBg from "../../components/ParallaxBg.svelte";
  import Padding from "../../components/padding.svelte";
  import ProjectComponent from "../../components/ProjectComponent.svelte";

  // import './+page.css';

  export let data: {
    projects: Project[];
  };

  interface Project {
    title: string;
    description: string;
    categories: string[];
    languages: { [key: string]: any };
    status: string;
    visible: boolean;
  }

  let projects: Project[] = data.projects ?? [];
  let searchResults: Project[] = projects.filter(p => p.visible);

  let searchtext = "";
  let searchcategory = "";
  let searchlanguage = "";
  let searchstatus = "";

  function handleSearchText(event: Event) {
    searchtext = (event.target as HTMLInputElement).value.toLowerCase();
    handleSearch();
  }

  function handleSearchCategory(event: Event) {
    searchcategory = (event.target as HTMLSelectElement).value.toLowerCase();
    handleSearch();
  }

  function handleSearchLang(event: Event) {
    searchlanguage = (event.target as HTMLSelectElement).value.toLowerCase();
    handleSearch();
  }

  function handleSearchStatus(event: Event) {
    searchstatus = (event.target as HTMLSelectElement).value.toLowerCase();
    handleSearch();
  }

  function handleSearch() {
    searchResults = projects.filter((project) => {
      const text = project.title.toLowerCase() + project.description.toLowerCase();
      const category = project.categories.join(" ").toLowerCase();
      const language = Object.keys(project.languages).join(" ").toLowerCase();
      const status = project.status.toLowerCase();

      return (
        text.includes(searchtext) &&
        category.includes(searchcategory) &&
        language.includes(searchlanguage) &&
        status.includes(searchstatus) &&
        project.visible
      );
    });
  }
</script>

<FontAwesome />
<ParallaxBg>
  <title>Projects</title>
  <div class="container">
    <Padding />
    <NavBar />
    <h1>Projects</h1>
    <div class="search-bar">
      <input
        type="text"
        placeholder="Search projects"
        on:input={handleSearchText}
      />
      <i class="fa fa-folder-open" aria-hidden="true"></i>
      <select name="category" id="category" on:change={handleSearchCategory}>
        <option value="">All</option>
        <optgroup label="Minecraft">
          <option value="minecraft">Minecraft</option>
          <option value="mcmodding">Modding</option>
          <option value="fabric">FabricMC</option>
          <option value="quilt">QuiltMC</option>
          <option value="forge">Forge</option>
        </optgroup>
        <optgroup label="WebDev">
          <option value="webdev">WebDev</option>
          <option value="website">Website</option>
        </optgroup>
        <optgroup label="Other">
          <option value="tools">Tool</option>
          <option value="lib">Library</option>
        </optgroup>
      </select>
      <i class="fa fa-globe" aria-hidden="true"></i>
      <select name="language" id="language" on:change={handleSearchLang}>
        <option value="">All</option>
        <option value="clang">C</option>
        <option value="c++">C++</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="Rust">Rust</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="jslang">Javascript</option>
        <option value="svelte">Svelte</option>
        <option value="Shell">Shell</option>
        <option value="lualang">Lua</option>
        <option value="ps2">PowerShell 2</option>
        <option value="godot">Godot Lang</option>
      </select>
      <i class="fa fa-tasks" aria-hidden="true"></i>
      <select name="status" id="status" on:change={handleSearchStatus}>
        <option value="">All</option>
        <option value="planned">Planned</option>
        <option value="dev">In Development</option>
        <option value="alpha">Alpha</option>
        <option value="beta">Beta</option>
        <option value="release">Release</option>
        <option value="discontinued">Discontinued</option>
      </select>

      <!-- Replaced <a> with <span> to fix accessibility warning -->
      <span style="float: right; margin-right: 10px; margin-top: 10px;">
        {searchResults.length} results
      </span>
    </div>

    <div class="project-container">
      {#if searchResults.length === 0}
        <h2>No results found</h2>
      {/if}
      {#each searchResults as project}
        <div class="project">
          <ProjectComponent {project} />
        </div>
      {/each}
    </div>
    <Padding />
  </div>
  <Footer />
</ParallaxBg>


<style>
  .container {
    width: 90%;
}

.project-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(530px, 1fr));
    gap: 20px;
    width: 100%;
}

.project {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid var(--project-border-color);
    min-width: 530px;
    background-color: var(--background-color);
}

.search-bar {
    margin-bottom: 20px;
    background-color: var(--project-search-background-color);
    padding: 10px;
    border-radius: 5px;
}

.search-bar input {
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--project-search-input-font-color);
    font-size: 20px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
}

.search-bar select {
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--project-search-input-font-color);
    font-size: 20px;
    padding-left: 10px;
    padding-right: 10px;
}

@media only screen and (max-width: 620px) {
    .project-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    .project {
    min-width: 200px;
    }
}
</style>