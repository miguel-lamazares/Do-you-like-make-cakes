
// ==== CONFIG: list your projects here (title, folder, short description) ====
const projects = [
  { title: "Chat-chan 👘", desc: "🌸 Chat-chan - Gerador de Desculpas\n",folder:"https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/Chat-chan" },
  { title: "Driftwiki ⛐", desc: "Tiny wiki-style notes and interactions.",folder:"https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/Driftwiki" },
  { title: "Gengar's login 👻", desc: "A moody/purple login animation.",folder:"https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/Gangar's-login-page" },
  { title: "Config page ⚙️", desc: "Config UI with animated background effects.",folder:"https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/Little-configs" },
  { title: "Pokedex 🔮", desc: "Small Pokedex demo — maybe uses an API or local data.",folder:"https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/Pokedex" },
  { title: "Social menu 🌐 ", desc: "Floating/animated social menu component.",folder:"https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/Social-menu" },
  { title: "today is rain in xique-xique? 🌂", desc: "", folder: "https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/today%20is%20rain%20in%20xique-xique" }
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
          <div style="margin-left:auto;display:flex;gap:8px;">
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
const about = `Welcome! I'm Miguel — welcome to my Mini Projects Showcase.

These are small HTML / CSS / JavaScript experiments I built while learning and exploring UI ideas.

if you like any of these, check the repo for source code and feel free to fork or remix. See you!\n`;

// Modal controls
const modal = document.getElementById('modal');
const text = document.getElementById('text');
document.getElementById('openScriptBtn').addEventListener('click', () => { text.textContent = about; modal.style.display = 'flex'; });
document.getElementById('closeModal').addEventListener('click', () => { modal.style.display = 'none'; });

// Copy git commands
document.getElementById('copyCmd').addEventListener('click', () => {
  const cmd = `# Criar diretório para projetos\nmkdir -p mini-projects\n# Entrar na pasta\ncd mini-projects\n# CLONAR o repositório (em vez de git init)\ngit clone https://github.com/miguel-lamazares/Do-you-like-make-cakes.git\n# Entrar na pasta do projeto clonado\ncd Do-you-like-make-cakes\n# Verificar o status\ngit status`;
  navigator.clipboard.writeText(cmd).then(() => { alert('Git commands copied to clipboard'); }).catch(() => { alert('Could not copy. You can still follow the instructions in the file.'); });
});

// Refresh button (just a hint to the user)
document.getElementById('refreshBtn').addEventListener('click', () => { location.reload(); });
