import type {
  ContactLink,
  Publication,
  ExperienceEntry,
  ProjectEntry,
  SkillGroup,
} from "./data.js";

// Escape any text before it goes into innerHTML, so the data file
// can never accidentally break markup.
function escapeHtml(value: string): string {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

export function renderContactLinks(containerId: string, links: ContactLink[]): void {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = links
    .map(
      (link) => `
        <li>
          <a href="${escapeHtml(link.href)}" target="_blank" rel="noopener">${escapeHtml(
            link.label
          )}</a>
        </li>
      `
    )
    .join("");
}

export function renderPublications(containerId: string, items: Publication[]): void {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = items
    .map(
      (pub) => `
        <article class="pub">
          <div class="pub-head">
            <h3 class="pub-title">${escapeHtml(pub.title)}</h3>
            <span class="pub-year">${escapeHtml(pub.year)}</span>
          </div>
          <p class="pub-venue">${escapeHtml(pub.venue)}</p>
          <ul class="bullets">
            ${pub.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

export function renderExperience(containerId: string, items: ExperienceEntry[]): void {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = items
    .map(
      (job) => `
        <article class="exp">
          <div class="exp-head">
            <div>
              <h3 class="exp-org">${escapeHtml(job.org)}</h3>
              <p class="exp-role">${escapeHtml(job.role)} — ${escapeHtml(job.location)}</p>
            </div>
            <span class="exp-date">${escapeHtml(job.start)} – ${escapeHtml(job.end)}</span>
          </div>
          <ul class="bullets">
            ${job.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

export function renderProjects(containerId: string, items: ProjectEntry[]): void {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = items
    .map(
      (proj) => `
        <article class="proj">
          <div class="proj-head">
            <h3 class="proj-title">${escapeHtml(proj.title)}</h3>
            <p class="proj-stack">${proj.stack.map((s) => escapeHtml(s)).join(" · ")}</p>
          </div>
          <ul class="bullets">
            ${proj.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

export function renderSkills(containerId: string, groups: SkillGroup[]): void {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = groups
    .map(
      (group) => `
        <div class="skill-group">
          <p class="skill-label">${escapeHtml(group.label)}</p>
          <p class="skill-items">${group.items.map((i) => escapeHtml(i)).join(", ")}</p>
        </div>
      `
    )
    .join("");
}
