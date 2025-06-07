// src/routes/projects/+page.ts
export async function load({ fetch }) {
  const res = await fetch("https://cdn.jonasjones.dev/api/projects/projects.json");
  const data = await res.json();
  return {
    projects: data?.slice(1) ?? []
  };
}
