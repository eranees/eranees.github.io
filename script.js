document.addEventListener('DOMContentLoaded', () => {
  const profile = {
    name: 'Anees Akbar',
    role: 'Fullstack Developer',
    company: 'GraphicWeave',
    picture: 'photo.jpg',
    about: function () {
      return `
        Hi, I’m <strong>Anees Akbar</strong>, a full-stack developer from Safapora, Ganderbal, Kashmir. I hold a Master’s in
        Computer Applications and specialize in building modern, scalable web applications with a strong focus on both frontend
        and backend development.
        <br /><br />
        On the backend, I have deep expertise in <strong>Node.js</strong>, <strong>NestJS</strong>, <strong>Go</strong>,
        <strong>PostgreSQL</strong>, and <strong>MySQL</strong>. I’ve developed robust systems including e-commerce platforms,
        complex order processing and payment flows, and real-time file storage solutions using <strong>MinIO</strong>.
        <br /><br />
        On the frontend, I work with <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and modern JavaScript to
        build responsive, user-friendly interfaces that are tightly integrated with backend APIs.
        <br /><br />
        I follow clean architecture principles, write maintainable code, and take pride in efficient database and API design.
        My development process emphasizes scalability, security, and performance.
        <br /><br />
        I’m passionate about solving real-world problems with code, automating workflows, and staying updated with the latest
        technologies and best practices.
        <br /><br />
        When I'm not coding, you'll find me exploring the breathtaking landscapes of <strong>Kashmir</strong> or working
        on side projects and tools that make development more enjoyable and efficient.
      `;
    },
  };


  document.querySelectorAll('.name').forEach(element => element.innerHTML = profile.name);
  document.querySelector('#role').innerHTML = profile.role;
  document.getElementById('picture').style.backgroundImage = `url(${profile.picture})`;
  document.querySelector('#about').innerHTML = profile.about();

  const skills = ["ReactJs", "NestJs", "GO", "Javascript", "Express", "Typescript", "Git", "Postgres"];

  const skillCard = document.querySelector('#skill-card');
  let skillHTML = '';
  skills.forEach(skill => {
    skillHTML += `<div class="p-4 border border-[#3b4754] bg-[#1b2127] rounded-lg text-white font-bold">${skill}</div>`;
  });
  skillCard.innerHTML = skillHTML;

  const projects = [
    {
      image: 'photo.jpg',
      title: 'E-Commerce Platform',
      description: 'Custom-built system with product packages, coupon handling, Stripe payments, and webhook processing.'
    },
    {
      image: 'photo.jpg',
      title: 'Blog App',
      description: 'Fullstack blogging system with Markdown support, author pages, and comment moderation.'
    },
  ];
  const projectCard = document.querySelector('#project-card');
  let projectHTML = '';
  projects.forEach(project => {
    projectHTML += `
      <div class="bg-[#1b2127] rounded-lg p-4 border border-[#3b4754] flex gap-4 items-start">
        <img src="${project.image}" alt="${project.title}" class="rounded w-40 h-28 object-cover flex-shrink-0" />
        <div>
          <h3 class="text-lg font-semibold">${project.title}</h3>
          <p class="text-[#9cabba] mb-2">${project.description}</p>
        </div>
      </div>
    `;
  });
  projectCard.innerHTML = projectHTML;


  const experiences = [
    {
      role: 'Fullstack Engineer',
      company: 'GraphicWeave',
      workMode: 'on site',
      startDate: 'December 2021',
      endDate: 'Present',
      description: `Building and maintaining scalable web applications using NestJS, PostgreSQL, and Express.js. Led the development of a complete e-commerce backend system, integrated third-party APIs, and implemented advanced order and payment workflows.`,
      technologies: ['Go', 'Express.js', 'NestJS', 'React', 'PostgreSQL', 'MinIO', 'Redis'],
    },
    {
      role: 'Software Developer Intern',
      company: 'Lelafe IT Solutions',
      workMode: 'on site',
      startDate: 'June 2021',
      endDate: 'August 2021',
      description: `Worked on enterprise-level applications using Angular and .NET. Gained practical experience in frontend development, REST APIs, and integrating backend logic with modern UI components.`,
      technologies: ['Angular', '.NET'],
    }

  ];
  const experienceCard = document.querySelector('#experience-card');
  let experienceHTML = '';
  experiences.forEach(experience => {
    const pills = experience.technologies
      .map(course => `<span class="bg-[#2e3743] text-white text-xs font-medium px-3 py-1 rounded-full mr-2 mb-2 inline-block">${course}</span>`)
      .join('');

    experienceHTML += `
      <div>
        <h3 class="text-lg font-semibold">${experience.role} at ${experience.company}</h3>
        <p class="text-sm text-[#9cabba] mb-1">${experience.startDate} – ${experience.endDate} · ${experience.workMode}</p>
        <p class="text-base text-[#ffffff]/90 leading-relaxed text-justify">
          ${experience.description}
        </p>
        <div class="flex flex-wrap mt-1">${pills}</div>
      </div>
    `;
  });
  experienceCard.innerHTML = experienceHTML;


  const educations = [
    {
      title: 'Master of Computer Applications (MCA)',
      institution: 'University of Kashmir',
      startDate: 'December 2020',
      endDate: 'December 2023',
      description: 'Postgraduate degree with a strong focus on software architecture, backend development, distributed systems, and advanced database modeling. Engaged in hands-on projects and research-based learning throughout the program.',
      courseWork: ['C', 'C++', 'DBMS', 'DSA', 'Java', 'Operating Systems', 'Artificial Intelligence'],
    },
    {
      title: 'Bachelor of Computer Applications (BCA)',
      institution: 'University of Kashmir',
      startDate: 'July 2017',
      endDate: 'October 2020',
      description: 'Undergraduate program emphasizing foundational concepts in computer science, programming, and system design. Completed multiple academic projects involving backend logic and database-driven applications.',
      courseWork: ['C', 'C++', 'DBMS', 'DSA', 'Java', 'Operating Systems', 'Artificial Intelligence'],
    },
  ];

  const educationCard = document.querySelector('#education-card');
  let educationHTML = '';
  educations.forEach(education => {
    const pills = education.courseWork
      .map(course => `<span class="bg-[#2e3743] text-white text-xs font-medium px-3 py-1 rounded-full mr-2 mb-2 inline-block">${course}</span>`)
      .join('');

    educationHTML += `
      <div>
          <h3 class="text-lg font-semibold">${education.title}</h3>
          <p class="text-sm text-[#9cabba] mb-1">${education.institution} · ${education.startDate} – ${education.endDate}</p>
          <p class="text-base text-[#ffffff]/90 leading-relaxed text-justify">${education.description}</p>
          <div class="flex flex-wrap mt-1">${pills}</div>
        </div>
    `;
  });
  educationCard.innerHTML = educationHTML;
});
