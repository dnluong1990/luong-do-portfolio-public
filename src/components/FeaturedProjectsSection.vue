<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  },
  ui: {
    type: Object,
    required: true
  }
});

const getImageUrl = (imageName) => {
  return new URL(`../assets/project_img/${imageName}`, import.meta.url).href;
};
</script>

<template>
  <section class="section featured-projects-section">
    <div class="container">
      <h2 class="section-title">{{ ui.featuredProjects }}</h2>
      
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="card project-card">
          <div class="project-image-container">
            <img :src="getImageUrl(project.image)" :alt="project.title" class="project-image" />
            <div v-if="project.isConfidential" class="nda-badge" :title="ui.confidential">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              {{ ui.confidential }}
            </div>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            <div class="tech-stack">
              <span v-for="(tech, i) in project.techStack" :key="i" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-image-container {
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-color);
  position: relative;
}

.nda-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(15, 23, 42, 0.85);
  color: #fbbf24; /* amber-400 */
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(251, 191, 36, 0.3);
  box-shadow: var(--shadow-sm);
  z-index: 10;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.75rem;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  flex: 1;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  font-weight: 600;
}
</style>
