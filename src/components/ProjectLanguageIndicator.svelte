<script lang='ts'>
    //import type Project from "../scripts/interfaces";
    export let project/*: Project*/;

    import { onMount } from "svelte";

    import { language_colors } from "../scripts/langs";

    let languageLength = (Object.values(project.languages) as number[]).reduce(
        (acc: number, curr: number) => acc + curr,
        0
    );
</script>

<div class="indicator">
    {#each Object.keys(project.languages) as language}
        <div
            class="language-color"
            style="background-color: {language_colors[
                language as keyof typeof language_colors
            ]}; width: {(project.languages[language] / languageLength) * 100}%"
        >
            <p>{language}</p>
        </div>
    {/each}
</div>

<style>
    .indicator {
        display: flex;
        height: 20px;
        width: 100%;
    }

    .language-color {
        flex: 1;
        height: 100%;
        width: 100%;
    }

    .language-color p {
        color: white;
        font-size: 0.9rem;
        margin: 0;
        padding: 0;
    }
</style>
