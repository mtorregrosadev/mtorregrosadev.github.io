# mtorregrosa.dev

Personal portfolio for Marc Lumbreras — Computer Engineering student at La Salle Campus Barcelona.

No build step. No dependencies. Pure HTML + CSS + JS.
Open `index.html` in a browser or serve with any HTTP server.

> Future domain: [mtorregrosa.is-a.dev](https://mtorregrosa.is-a.dev)

---

## Sections

- **About** — Bio, location, current role, and education
- **Skills** — 20 technologies (Languages, Frameworks, Cloud & IoT, Tools & OS, Certifications)
- **Experience** — 3 positions (Algorithmics, MICA ECO, CJS Som-hi Tots!)
- **Projects** — 7 projects in a carousel; click any card to open a modal with image carousel and details
- **Contact** — Interactive terminal

---

## File structure

```
mtorregrosa.dev/
├── index.html          — full single-page structure
├── styles.css          — all styles (CSS variables, retro macOS aesthetic)
├── main.js             — navbar, project carousel, modal, terminal, snake game
├── translations.json   — all UI text in EN / ES / CA (canonical source of truth)
└── src/                — local images (WebP for photos, SVG for vector icons)
    └── empreses/       — company logos (WebP)
```

### Images in `src/`

| File | Use |
|------|-----|
| `photo.webp` | Profile photo |
| `NearHere.webp` | Near-Here project |
| `Dewi-Hack.webp` | Dewi project |
| `Hack-rutes.webp` | Ruta Damm — image 1 |
| `Hack-carrega.webp` | Ruta Damm — image 2 |
| `Octopus-2.webp` | Octop-Scraper — image 1 |
| `Octopus.webp` | Octop-Scraper — image 2 |
| `playwright.webp` | Playwright skill icon |
| `flet.webp` | Flet skill icon |
| `esp32.webp` | ESP32 skill icon |
| `PlatformIO.svg` | PlatformIO skill icon (vector) |
| `empreses/algorithmics.webp` | Algorithmics logo |
| `empreses/mica.webp` | MICA ECO logo |
| `empreses/somhi.webp` | CJS Som-hi Tots! logo |

---

## Running locally

```bash
# Option 1 — open directly (translations load from fallback in main.js)
open index.html

# Option 2 — serve with Python (recommended, loads translations.json)
python3 -m http.server 8080
# then open http://localhost:8080
```

---

## Terminal

Click the `contact.txt — Terminal` window and start typing. The cursor blinks, history works with ↑/↓.

### Keyboard shortcuts

| Key | Action |
|-----|--------|
| `Enter` | Run command |
| `↑` / `↓` | Navigate history |
| `Ctrl+L` / `⌘+L` | Clear terminal |

### Available commands

| Command | Output |
|---------|--------|
| `help` | List all commands |
| `whoami` | Quick intro |
| `ls` | List projects |
| `cat about.txt` | Full bio |
| `cat cv.pdf` | Download CV |
| `contact` | Email, GitHub, LinkedIn |
| `sudo hire marc` | Permission granted |
| `clear` | Clear screen |

---

## Easter eggs

### Snake 🕹️

Three ways to launch:
- Type `snake` or `play` in the terminal
- Click the `⌘` logo in the navbar
- Enter the **Konami code** anywhere on the page: `↑ ↑ ↓ ↓ ← → ← → B A`

Controls: arrow keys to move, `Space` to pause, `Esc` to quit. High score saved to `localStorage`.

### ASCII commands

| Command | Output |
|---------|--------|
| `happy` / `happymac` | Happy Mac in ASCII |
| `sad` / `sadmac` | Sad Mac (System Failure) |
| `bomb` / `crash` | Classic bomb dialog |
| `boot` / `reboot` | System 1.0 boot sequence |
| `save` | Floppy disk ASCII |
| `coffee` | Coffee cup ASCII |
| `fortune` | Random programming quote |
| `matrix` | Mini Matrix rain |
| `tux` / `linux` | Tux + Marc's stack |
| `rm -rf /` | "nice try." + bomb |
| `sudo make me a sandwich` | "okay." |
```
