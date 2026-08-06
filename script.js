/* ---------- data (client & description intentionally omitted) ---------- */
const PRO = [
  {
    t: "Real Time Traffic Information",
    role: "Front-End Developer · UX Designer",
    acc: [
      "Delivered high-fidelity prototypes for client review and evaluation.",
      "Redesigned the UI with built-in responsiveness across all media devices.",
      "Shipped live real-time traffic + camera feeds across all five NYC boroughs.",
    ],
    tech: [
      "Figma",
      "Angular 18",
      "TypeScript",
      "Material UI",
      "GraphQL",
      "REST API",
      "HTML",
      "SCSS",
      "GitHub",
    ],
    link: "https://webcams.nyctmc.org",
    label: "NYC DOT RTTI",
    live: true,
  },
  {
    t: "Street Lighting Management Portal",
    role: "Front-End Developer · UX Designer",
    acc: [
      "Built inspection & work-order workflows for 315K+ street-lighting poles.",
      "Designed responsive UI validated through client prototype reviews.",
      "Integrated and synchronized data seamlessly with ITS AMP.",
    ],
    tech: [
      "Figma",
      "Angular 18",
      "TypeScript",
      "Material UI",
      "GraphQL",
      "REST API",
      "HTML",
      "SCSS",
      "GitHub",
    ],
    link: "",
    label: "Private Application",
    live: false,
  },
  {
    t: "NYC Signal Repairs",
    role: "Front-End Developer · UX Designer",
    acc: [
      "Built a public tool for residents to report traffic-signal issues.",
      "Developed responsive elements fully compliant with WCAG accessibility.",
      "Wrote robust, maintainable code for critical urban infrastructure.",
    ],
    tech: [
      "Figma",
      "Angular 18",
      "TypeScript",
      "Material UI",
      "GraphQL",
      "REST API",
      "HTML",
      "SCSS",
      "GitHub",
    ],
    link: "https://service.nyctmc.nyc/",
    label: "NYC Signal Repairs",
    live: true,
  },
  {
    t: "JTMC Users Management",
    role: "Front-End Developer · UX Designer",
    acc: [
      "Led UX design for an intuitive account-management interface.",
      "Enabled account requests with real-time admin notifications.",
      "Ensured reliable synchronization with Active Directory.",
    ],
    tech: [
      "Figma",
      "Angular 19",
      "TypeScript",
      "Kendo UI",
      "GraphQL",
      "REST API",
      "HTML",
      "SCSS",
      "GitHub",
    ],
    link: "",
    label: "Private Application",
    live: false,
  },
  {
    t: "McCain Flex Device Controller",
    role: "Front-End Developer · UX Designer",
    acc: [
      "Built an Angular interface to remotely control McCain Flex hardware.",
      "Enabled browser-accessible device commands for operational flexibility.",
      "Crafted a responsive UI optimized for diverse end-users.",
    ],
    tech: [
      "Figma",
      "Angular 19",
      "TypeScript",
      "Kendo UI",
      "GraphQL",
      "REST API",
      "HTML",
      "SCSS",
      "GitHub",
    ],
    link: "",
    label: "Private Application",
    live: false,
  },
];
const PERSONAL = [
  {
    t: "Calendar",
    role: "Personal Project",
    acc: [
      "Create calendar events and share them with the people who need them.",
      "Built for shared occasions like birthdays, kept in sync among relatives.",
      "Fully localized in English and Romanian.",
    ],
    tech: [],
    link: "https://calendar.ghenadie-berco.com",
    label: "Try it",
    live: true,
  },
];
const SKILLS = [
  {
    group: "Front-End Development",
    items: [
      [
        "A",
        "Angular 20",
        "Angular Signals for reactive state management, optimized performance and simpler change detection.",
      ],
      ["R", "React JS", "Building dynamic and interactive user interfaces with React."],
      [
        "TS",
        "TypeScript",
        "Strong typing and interfaces to boost maintainability and cut runtime errors.",
      ],
      ["JS", "JavaScript", "Interactive web apps with vanilla JS and modern frameworks."],
      ["5", "HTML5", "Semantic, accessible web structures using HTML5 best practices."],
      ["#", "SCSS/CSS", "Responsive, maintainable stylesheets with SCSS for scalability."],
      ["GQ", "GraphQL", "Optimized data fetching for efficient client-side rendering."],
      ["{}", "REST API", "Integrating RESTful APIs to enhance functionality and data flow."],
      ["M", "Material UI", "User-friendly, consistent interfaces with Material UI."],
      ["K", "Kendo UI", "Advanced data visualization and interactive widgets."],
    ],
  },
  {
    group: "UX / UI Design",
    items: [
      [
        "?",
        "Gathering Requirements",
        "User interviews and surveys to gather actionable design insights.",
      ],
      ["F", "Figma", "Wireframes and high-fidelity prototypes for collaborative workflows."],
      ["Ai", "Adobe Illustrator", "Custom SVG icons and design elements for unique branding."],
    ],
  },
];

/* ---------- render ---------- */
function cardHTML(p, i) {
  return `<article class="card hoverable reveal ${"d" + (i % 4 || "")}">
    <div class="num-tag">${String(i + 1).padStart(2, "0")}</div>
    <h3>${p.t}</h3><div class="role">${p.role}</div>
    <ul>${p.acc.map((a) => `<li>${a}</li>`).join("")}</ul>
    ${p.tech.length ? `<div class="chips">${p.tech.map((t) => `<span class="chip">${t}</span>`).join("")}</div>` : ""}
    ${
      p.live && p.link
        ? `<a class="link live hoverable" href="${p.link}" target="_blank" rel="noopener">${p.label}</a>`
        : `<span class="link priv">🔒 ${p.label}</span>`
    }
  </article>`;
}
document.getElementById("cards-pro").innerHTML = PRO.map(cardHTML).join("");
document.getElementById("cards-personal").innerHTML = PERSONAL.map(cardHTML).join("");
document.getElementById("skills-root").innerHTML = SKILLS.map(
  (g) => `
  <div class="skill-group reveal"><h3>${g.group}</h3>
    <div class="skill-grid">${g.items
      .map(
        (it) => `
      <div class="skill hoverable"><div class="name"><span class="ic">${it[0]}</span>${it[1]}</div><div class="desc">${it[2]}</div></div>`,
      )
      .join("")}
    </div></div>`,
).join("");

/* keep the "products shipped" stat in sync with the project lists above */
document.getElementById("projects-count").dataset.count = PRO.length + PERSONAL.length;

/* ---------- tabs ---------- */
document.querySelectorAll(".tabs button").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".tabs button").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    const pro = b.dataset.tab === "pro";
    document.getElementById("cards-pro").style.display = pro ? "grid" : "none";
    document.getElementById("cards-personal").style.display = pro ? "none" : "grid";
    observeReveals();
  }),
);

/* ---------- reveal on scroll ---------- */
let io;
function observeReveals() {
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
}
io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
        if (e.target.querySelector?.("[data-count]")) countUp(e.target);
      }
    }),
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => {
  if (el.querySelector("[data-count]")) io.observe(el);
});
observeReveals();

/* ---------- count up ---------- */
function countUp(scope) {
  scope.querySelectorAll("[data-count]").forEach((el) => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || "";
    let cur = 0;
    const step = Math.max(1, Math.round(target / 45));
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) {
        cur = target;
        clearInterval(t);
      }
      el.textContent = cur + suffix;
    }, 22);
  });
}

/* ---------- nav scroll state + active link ---------- */
const nav = document.getElementById("nav");
const links = [...document.querySelectorAll(".nav-links a")];
const secs = ["hero", "projects", "skills", "contact"].map((id) => document.getElementById(id));
addEventListener("scroll", () => {
  const y = scrollY;
  nav.classList.toggle("scrolled", y > 40);
  document.querySelector(".progress").style.width =
    (y / (document.body.scrollHeight - innerHeight)) * 100 + "%";
  let cur = secs[0].id;
  secs.forEach((s) => {
    if (y >= s.offsetTop - 160) cur = s.id;
  });
  links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
});

/* ---------- mobile menu ---------- */
const burger = document.getElementById("burger"),
  navlinks = document.getElementById("navlinks"),
  scrim = document.getElementById("nav-scrim"),
  desktop = matchMedia("(min-width:901px)");

function setMenu(open) {
  burger.classList.toggle("open", open);
  navlinks.classList.toggle("open", open);
  scrim.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
}
burger.addEventListener("click", () => setMenu(!navlinks.classList.contains("open")));
scrim.addEventListener("click", () => setMenu(false));
navlinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navlinks.classList.contains("open")) {
    setMenu(false);
    burger.focus();
  }
});
/* resizing past the breakpoint would otherwise strand the scroll lock */
desktop.addEventListener("change", (e) => e.matches && setMenu(false));

/* ---------- card cursor glow / tilt ---------- */
document.addEventListener("mousemove", (e) => {
  const c = e.target.closest?.(".card");
  if (c) {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  }
});

/* ---------- custom cursor ---------- */
const cur = document.querySelector(".cursor"),
  ring = document.querySelector(".cursor-ring");
let rx = 0,
  ry = 0,
  mx = 0,
  my = 0;
addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + "px";
  cur.style.top = my + "px";
});
(function loop() {
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(loop);
})();
document.addEventListener("mouseover", (e) => {
  if (e.target.closest(".hoverable,a,button")) ring.classList.add("hovering");
});
document.addEventListener("mouseout", (e) => {
  if (e.target.closest(".hoverable,a,button")) ring.classList.remove("hovering");
});

/* ---------- starfield ---------- */
const cv = document.getElementById("stars"),
  ctx = cv.getContext("2d");
let stars = [];
function resize() {
  cv.width = innerWidth;
  cv.height = innerHeight;
  stars = Array.from({ length: Math.min(120, innerWidth / 12) }, () => ({
    x: Math.random() * cv.width,
    y: Math.random() * cv.height,
    r: Math.random() * 1.4 + 0.2,
    a: Math.random(),
    s: Math.random() * 0.02 + 0.004,
  }));
}
resize();
addEventListener("resize", resize);
(function draw() {
  ctx.clearRect(0, 0, cv.width, cv.height);
  stars.forEach((st) => {
    st.a += st.s;
    const o = 0.4 + Math.sin(st.a) * 0.4;
    ctx.beginPath();
    ctx.arc(st.x, st.y, st.r, 0, 7);
    ctx.fillStyle = `rgba(180,165,255,${o})`;
    ctx.fill();
  });
  requestAnimationFrame(draw);
})();

/* ---------- form ---------- */
document.querySelector("form").addEventListener("submit", function () {
  const btn = this.querySelector("button span");
  btn.textContent = "Message ready ✓";
  const mail =
    "mailto:ghenadie.berco@gmail.com?subject=" +
    encodeURIComponent(
      "Portfolio message from " + (document.getElementById("name").value || "someone"),
    ) +
    "&body=" +
    encodeURIComponent(
      document.getElementById("msg").value + "\n\nFrom: " + document.getElementById("email").value,
    );
  setTimeout(() => {
    location.href = mail;
    btn.textContent = "Send Message";
  }, 600);
});

document.getElementById("year").textContent = new Date().getFullYear();
