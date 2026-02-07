const projects = [
  {
    title: "Netflix clone <span class='black'>(Full stack)</span>",
    link: "https://jarro-netflix.onrender.com/",
    tech: "React - TypeScript - Node - PostgreSQL",
    img: "img/netflix.png",
  },
  {
    title: "Reddit clone <span class='black'>(Full stack)</span>",
    link: "https://jmern.vercel.app/",
    tech: "React - TypeScript - Node - MongoDB",
    img: "img/reddit.png",
  },
  {
    title: "Whatsapp clone <span class='black'>(Full stack)</span>",
    link: "https://jarro-chat.onrender.com/",
    tech: "React - TypeScript - Node - MongoDB",
    img: "img/whatsapp.png",
  },
];

const container = document.querySelector(".container");

projects.forEach((project) => {
  const section = document.createElement("section");

  section.innerHTML = `
    <a href="${project.link}" target="_blank">
      <div class="box">
        <img src="${project.img}" class="logo"/>
        <div>
          <p class="heading light-blue">
          ${project.title}
          </p>
          <p><span class="bold smaller">${project.tech}</span></p>
        </div>
      </div>
    </a>
  `;

  container.appendChild(section);
});
