import { contactLinks, publications, experience, projects, skills } from "./data.js";
import {
  renderContactLinks,
  renderPublications,
  renderExperience,
  renderProjects,
  renderSkills,
} from "./render.js";

function setLastUpdated(): void {
  const el = document.getElementById("last-updated");
  if (!el) return;
  const date = new Date();
  el.textContent = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

renderContactLinks("contact-row", contactLinks);
renderContactLinks("contact-row-footer", contactLinks);
renderPublications("publications-list", publications);
renderExperience("experience-list", experience);
renderProjects("projects-list", projects);
renderSkills("skills-list", skills);
setLastUpdated();
