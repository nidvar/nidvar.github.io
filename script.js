const projects = [
    {
        title: "Reddit clone",
        link: "https://jmern.vercel.app/",
        description: "Login, password authentication and database",
        tech: "React - TypeScript - Node - MongoDB"
    },
    {
        title: "Whatsapp clone",
        link: "https://jarrochat.vercel.app/",
        description: "Login, password authentication and database",
        tech: "React - TypeScript - Node - MongoDB"
    },
];

const container = document.querySelector(".container");

projects.forEach(project => {
    const section = document.createElement("section");

    section.innerHTML = `
    <a href="${project.link}" target="_blank">
        <p class="heading light-blue">
        ${project.title}
        </p>
        <p>${project.description}</p>
        <p><span class="bold smaller">${project.tech}</span></p>
    </a>
  `;

    container.appendChild(section);
});
