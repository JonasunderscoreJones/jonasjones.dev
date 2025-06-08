<script lang="ts">
    //import type Project from "../scripts/interfaces";
    export let project/*: Project*/;
    import ProjectsLinks from "./ProjectsLinks.svelte";
    import ProjectLanguageIndicator from "./ProjectLanguageIndicator.svelte";

    import "../routes/+page.css";

</script>

<div class="top">
    <img class="image" src="/project-banners{project.backgroud}" alt=" " />
    {#if project.kanban}
        <a href={project.kanban} target="_blank" class="project-kanban"><img class="project-kanban-image" src="/kanban.png" alt="Kanban Icon" /></a>
    {/if}
</div>
<div class="project-languages">
    <ProjectLanguageIndicator {project} />
</div>
<div class="project-links">
    <ProjectsLinks {project} />
</div>
<div class="bottom">
    <div class="content">
        <div></div>
        <div class="project-topline">
            <div class="project-title">{project.title}</div>
            <div class="project-titleinfo">
                <div>
                    <span
                        class="project-status"
                        style="color: {project.statuscolor};border-color:{project.statuscolor}"
                    >
                        {project.status}
                    </span>
                    <span class="project-version">{project.version ? project.version : "-"}</span>
                </div>
            </div>
        </div>
        <div class="project-description">{project.description}</div>
    </div>
</div>

<style>
    .project-title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: left;
    }

    .project-status {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
        padding: 2px;
        padding-left: 5px;
        padding-right: 5px;
        border: 3px solid #dcdcdc;
        border-radius: 3px;
    }

    .project-version {
        font-size: 20px;
        font-weight: bold;
        color: var(--project-version-color);
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: -4px;
        padding: 2px 10px;
        border: 3px solid var(--project-version-color);
        border-radius: 100px;
        float: right;
        min-width: 70px;
    }

    .project-description {
        margin-top: 20px;
        margin-bottom: 10px;
        margin-right: 12px;
        text-align: left;
    }

    .project-links {
        display: flex;
        align-items: right;
        text-align: right;
        align-content: right;
        width: 100%;
        border-bottom: 1px solid var(--project-border-color);
    }

    .top {
        flex: 2;
        display: flex;
        align-items: center;
    }

    .bottom {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .image {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    .content {
        margin: 20px;
    }

    .project-topline {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .project-languages {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .project-titleinfo {
        display: flex;
        align-items: center;
    }

    .project-kanban {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .project-kanban-image {
        width: 40px;
        height: 40px;
        filter: invert(1);
    }

    @media only screen and (max-width: 620px) {
        .project-topline {
            flex-direction: column;
        }
    }
</style>
