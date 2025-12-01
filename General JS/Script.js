

const projects = [
  { title: "Chat-chan 👘", desc: "Excuse generator with cute animations", folder: "https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/Chat-chan", img: "./IMG's/screen/g.png"},
  { title: "Driftwiki ⛐", desc: "Tiny wiki-style notes and interactions", folder: "https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/Driftwiki", img: "./IMG's/screen/f.png" },
  { title: "Gengar's login 👻", desc: "Moody purple login page animation", folder: "https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/Gangar's-login-page", img: "./IMG's/screen/e.png" },
  { title: "Config page ⚙️", desc: "Configuration UI with animated backgrounds", folder: "https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/Little-configs", img: "./IMG's/screen/d.png" },
  { title: "Pokedex 🔮", desc: "Interactive Pokedex demo application", folder: "https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/Pokedex", img: "./IMG's/screen/c.png" },
  { title: "Social menu 🌐", desc: "Floating animated social menu component", folder: "https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/Social-menu", img: "./IMG's/screen/b.png" },
  { title: "Dark login", desc: "Dark themed login interface design", folder: "https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/today%20is%20rain%20in%20xique-xique", img: "./IMG's/screen/j.png" },
  { title: "Card", desc: "Modern card component with effects", folder: "https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/today%20is%20rain%20in%20xique-xique", img: "./IMG's/screen/h.png" },
  { title: "Will it rain?", desc: "Weather prediction interactive application", folder: "https://github.com/miguel-lamazares/Do-you-like-make-cakes/tree/main/Projects/today%20is%20rain%20in%20xique-xique", img: "./IMG's/screen/a.png" }
];

const grid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="conteiner">
        <div class="cardinto">
        <div class="topCard">
            <h4 class="title">${p.title}</h2>
            <span class="smallText">${p.desc}</span>
        </div>

        <div class="media">
            <img src="${p.img}" class="imgCard" alt="${p.title}">
        </div>
        <div class="bottomCard">
            <div class="actionsCard">
                <button class="btnCard" onclick='openFolder("${p.folder}")'>Show</button>
                <button class="btnCard" onclick='openFolder("${p.folder}")'>Download</button>
            </div>
        </div>
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

const Social = `you may find me on: 

- <a href="https://github.com/miguel-lamazares" target="_blank">GitHub</a>
- <a href="https://www.instagram.com/miguel.lamazx/" target="_blank">Instagram</a>
- <a href="https://www.linkedin.com/in/miguellamazares/" target="_blank">Linkedin</a>
- <a href="https://discord.com/users/1052760246906527775" target="_blank">Discord</a>
- <a href="mailto:contatomiguellamazares@gmail.com" target="_blank">Gmail</a>
- <a href="https://wa.me/5524992007353" target="_blank">Whatsapp</a>
- <a href="https://linktr.ee/dexzn" target="_blank">Linktree</a>
`;

// Social media 
const SoModal = document.getElementById('socialModal');
const SoText = document.getElementById('socialText');
document.getElementById('openSocialScriptBtn').addEventListener('click', () => { SoText.innerHTML = Social; SoModal.style.display = 'flex'; });
document.getElementById('closeSocialModal').addEventListener('click', () => { SoModal.style.display = 'none'; });

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
