const projects = [
    {
        title: "Netflix clone",
        link: "https://jarro-netflix.onrender.com/",
        description: "Login, authentication and database. Simple Netflix clone",
        tech: "React - TypeScript - Node - PostgreSQL"
    },
    {
        title: "Reddit clone",
        link: "https://jmern.vercel.app/",
        description: "Login, authentication and database. Create and update blog posts, images and comment on other people's posts",
        tech: "React - TypeScript - Node - MongoDB"
    },
    {
        title: "Whatsapp clone",
        link: "https://jarro-chat.onrender.com/",
        description: "Login, authentication and database. Real time chat with websockets",
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
        <p class='description'>${project.description}</p>
        <p><span class="bold smaller">${project.tech}</span></p>
    </a>
  `;

    container.appendChild(section);
});
