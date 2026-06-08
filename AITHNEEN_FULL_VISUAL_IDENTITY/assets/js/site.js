const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const logoGrid = document.querySelector("#logo-grid");
const portraitGrid = document.querySelector("#portrait-grid");
const cardTemplate = document.querySelector("#asset-card-template");
const canonicalOrigin = "https://aithneen-visual-identity.pages.dev";
let logos = [];

function assetUrl(path) {
  return `${canonicalOrigin}/${path.replace(/^\.\//, "")}`;
}

async function copyText(text, button) {
  await navigator.clipboard.writeText(text);
  const original = button.textContent;
  button.textContent = "Copied";
  setTimeout(() => { button.textContent = original; }, 1400);
}

function makeCard({ title, detail, preview, file, dark = false }) {
  const card = cardTemplate.content.firstElementChild.cloneNode(true);
  const previewLink = card.querySelector(".asset-preview");
  const image = card.querySelector("img");
  const download = card.querySelector(".download");
  const copy = card.querySelector(".copy-asset");
  previewLink.href = file;
  previewLink.classList.toggle("dark", dark);
  image.src = preview;
  image.alt = title;
  card.querySelector("strong").textContent = title;
  card.querySelector(".asset-meta > span").textContent = detail;
  download.href = file;
  copy.addEventListener("click", () => copyText(assetUrl(file), copy));
  return card;
}

function renderLogos(filter = "all") {
  logoGrid.replaceChildren();
  logos.filter(item => filter === "all" || item.form === filter).forEach(item => {
    const svg = `./assets/logos/svg/${item.svg}`;
    logoGrid.append(makeCard({
      title: item.svg.replace(".svg", ""),
      detail: `${item.form} / ${item.color} / ${item.surface}`,
      preview: svg,
      file: svg,
      dark: item.surface === "dark_bg"
    }));
  });
}

async function loadAssets() {
  const [logoManifest, portraits] = await Promise.all([
    fetch("./assets/logos/manifest.json").then(response => response.json()),
    fetch("./assets/portraits/portrait_collection_manifest.json").then(response => response.json())
  ]);
  logos = logoManifest.assets;
  renderLogos();
  portraits.forEach(item => {
    const file = `./assets/portraits/${item.pack_filename}`;
    portraitGrid.append(makeCard({
      title: item.original_filename,
      detail: `${item.size} / ${(item.bytes / 1048576).toFixed(2)} MB`,
      preview: file,
      file
    }));
  });
}

themeToggle.addEventListener("click", () => {
  const dark = root.dataset.theme === "dark";
  root.dataset.theme = dark ? "light" : "dark";
  themeToggle.textContent = dark ? "Dark mode" : "Light mode";
});

document.querySelectorAll("[data-logo-filter]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-logo-filter]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderLogos(button.dataset.logoFilter);
  });
});

document.querySelectorAll("[data-copy-target]").forEach(button => {
  button.addEventListener("click", () => copyText(document.querySelector(`#${button.dataset.copyTarget}`).textContent, button));
});

loadAssets().catch(error => {
  logoGrid.textContent = "Unable to load the asset catalog.";
  portraitGrid.textContent = "Unable to load the portrait catalog.";
  console.error(error);
});
