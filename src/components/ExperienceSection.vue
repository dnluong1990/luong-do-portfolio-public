<script setup>
defineProps({
  experience: {
    type: Array,
    required: true
  },
  ui: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <section class="section experience-section">
    <div class="container">
      <h2 class="section-title">{{ ui.experience }}</h2>
      
      <div class="timeline">
        <div v-for="(job, index) in experience" :key="index" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="card timeline-content">
            <div class="job-header">
              <div>
                <h3 class="position">{{ job.position }}</h3>
                <h4 class="company">{{ job.company }}</h4>
              </div>
              <div class="period">{{ job.period }}</div>
            </div>
            
            <ul class="job-description">
              <li v-for="(desc, i) in job.description" :key="i">{{ desc }}</li>
            </ul>
            
            <div v-if="job.projects && job.projects.length > 0" class="projects">
              <h5>{{ ui.projects }}</h5>
              <div class="project-list">
                <div v-for="(project, i) in job.projects" :key="i" class="project-item">
                  <h6>{{ project.name }}</h6>
                  <p v-if="project.role"><strong>{{ ui.role }}</strong> {{ project.role }}</p>
                  <p v-if="project.achievements"><strong>{{ ui.achievements }}</strong> {{ project.achievements }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 5px;
  width: 2px;
  height: 100%;
  background-color: var(--border-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -2rem;
  top: 1.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--primary-color);
  border: 2px solid var(--surface-color);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.position {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.company {
  font-size: 1.1rem;
  color: var(--primary-color);
  font-weight: 500;
}

.period {
  font-size: 0.9rem;
  padding: 0.25rem 0.75rem;
  background-color: var(--border-color);
  border-radius: var(--radius-full);
  color: var(--text-muted);
  font-weight: 500;
}

.job-description {
  list-style: none;
  margin-bottom: 1.5rem;
}

.job-description li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-main);
}

.job-description li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

.projects h5 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--text-main);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
}

.project-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.project-item {
  background-color: var(--bg-color);
  padding: 1rem;
  border-radius: var(--radius-md);
  border-left: 3px solid var(--primary-color);
}

.project-item h6 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-main);
}

.project-item p {
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.project-item p strong {
  color: var(--text-muted);
}
</style>
