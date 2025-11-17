
// ==== CONFIG: list your projects here (title, folder, short description) ====
const projects = [
  { title: "Chat-chan",desc: "A small playful UI (HTML/CSS/JS)." },
  { title: "Driftwiki",desc: "Tiny wiki-style notes and interactions." },
  { title: "Gengar's login", desc: "A moody/purple login animation." },
  { title: "Config page with animed background",desc: "Config UI with animated background effects." },
  { title: "Pokedex",desc: "Small Pokedex demo — maybe uses an API or local data." },
  { title: "Socia menu",desc: "Floating/animated social menu component." }
];

const grid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
        <div>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>
        <div class="row">
          <div style="margin-left:auto;display:flex;gap:8px">
            <a class="btn" href="${p.folder}" target="_blank" rel="noopener noreferrer">Open</a>
            <button class="btn" onclick='openFolder("${p.folder}")'>Show</button>
          </div>
        </div>
      `;
  grid.appendChild(card);
});

function openFolder(folder) {
  // Try to open folder; if it's a local file, this will navigate. If missing, user will see 404 in server.
  window.location.href = folder;
}

// Modal script content (tailored, edit as you like)
const videoScript = `Welcome! I'm Miguel — welcome to my Mini Projects Showcase.

These are small HTML / CSS / JavaScript experiments I built while learning and exploring UI ideas.

I'll quickly show you each one and highlight what it's about:

1) Chat-chan — a playful UI with small interactions and micro animations. It explores character-driven styling and hover effects.

2) Driftwiki — a tiny wiki-like interface for notes and short articles. Good for testing layout and local search behavior.

3) Gengar's login — a moody login animation focused on motion and theme (great for practicing UI transitions).

4) Config page with animed background — a settings/config page with an animated backdrop. Nice for learning layered CSS animations.

5) Pokedex — a small demo that lists Pokémon and shows details. Useful for practicing fetch / API or local JSON handling.

6) Socia menu — an animated floating social menu component that you can reuse in other projects.

Recording tips (OBS / screen capture):
- Record at 1920x1080, 30 or 60 FPS. Keep fonts large and use zoom-ins for small UI details.
- Start with a short intro (5-8s) showing the hub, then open each project for 8-20s.
- Use a microphone close to your mouth, speak clearly. Keep sentences short.
- Add music under voice at low volume ("instrumental"), fade out when speaking.

Closing: Thanks for watching — if you like any of these, check the repo for source code and feel free to fork or remix. See you!\n`;

// Modal controls
const modal = document.getElementById('modal');
const scriptPre = document.getElementById('scriptPre');
document.getElementById('openScriptBtn').addEventListener('click', () => { scriptPre.textContent = videoScript; modal.style.display = 'flex'; });
document.getElementById('closeModal').addEventListener('click', () => { modal.style.display = 'none'; });
document.getElementById('downloadScript').addEventListener('click', () => {
  const blob = new Blob([videoScript], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'video-script-en.txt'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
});

// Copy git commands
document.getElementById('copyCmd').addEventListener('click', () => {
  const cmd = `mkdir mini-projects\n# move your folders into mini-projects (or edit names)\n# then:\ncd mini-projects\n# copy this index.html into the mini-projects folder\ngit init\ngit add .\ngit commit -m "Initial mini projects hub"\n# add remote and push as needed`;
  navigator.clipboard.writeText(cmd).then(() => { alert('Git commands copied to clipboard'); }).catch(() => { alert('Could not copy. You can still follow the instructions in the file.'); });
});

// Refresh button (just a hint to the user)
document.getElementById('refreshBtn').addEventListener('click', () => { location.reload(); });
