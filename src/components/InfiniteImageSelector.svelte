<script lang="ts">
  interface Image {
    id: number;
    src: string;
    property: string;
  }

  let images: Image[] = [];
  let selectedSquares = new Set();
  let loading = false;

  const fetchImages = () => {
    loading = true;
    // Load images from the /areyouarobot folder
    // You can replace this with your image loading logic
    setTimeout(() => {
      // Simulate loading images with random properties (e.g., 'X', 'O', etc.)
      for (let i = 0; i < 16; i++) {
        const imageId = images.length + i;
        const row = Math.floor(i / 4);
        const col = i % 4;
        const property = Math.random() > 0.5 ? "X" : "O"; // Simulate random properties
        console.log(
          "imageId: " +
            imageId +
            " row: " +
            row +
            " col: " +
            col +
            " property: " +
            property
        );

        images.push({
          id: imageId,
          src: `/image_${row}_${col}.jpg`,
          property: property,
        });
      }
      loading = false;
    }, 1000);
  };

  const toggleSquareSelection = (image: Image) => {
    if (selectedSquares.has(image.id)) {
      selectedSquares.delete(image.id);
    } else {
      selectedSquares.add(image.id);
    }
  };

  window.addEventListener("scroll", () => {
    if (
      !loading &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
    ) {
      fetchImages();
    }
  });

  // Initial load
  fetchImages();
</script>

<div class="grid">
  {#each images as image}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <img
      class="image {selectedSquares.has(image.id) ? 'selected' : ''}"
      src={image.src}
      alt={`Image ${image.id}`}
      on:click={() => toggleSquareSelection(image)}
    />
  {/each}

  {#if loading}
    <p>Loading...</p>
  {/if}
</div>

<div>
  <p>Selected squares: {Array.from(selectedSquares).join(", ")}</p>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 2px solid transparent;
    cursor: pointer;
  }

  .selected {
    border-color: blue;
  }
</style>
