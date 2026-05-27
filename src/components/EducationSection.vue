<script setup>
defineProps({
  education: {
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
  <section class="section education-section">
    <div class="container">
      <h2 class="section-title">{{ ui.education }}</h2>
      
      <div class="education-list">
        <div v-for="(edu, index) in education" :key="index" class="card education-card">
          <div class="edu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
          </div>
          <div class="edu-details">
            <h3 class="school">{{ edu.school }}</h3>
            <div class="degree-major">
              <span class="degree">{{ edu.degree }}</span>
              <span v-if="edu.major" class="separator">•</span>
              <span v-if="edu.major" class="major">{{ edu.major }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.education-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.edu-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.edu-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.school {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-main);
}

.degree-major {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 1rem;
}

.degree {
  font-weight: 500;
  color: var(--primary-color);
}

.separator {
  color: var(--border-color);
}

@media (max-width: 600px) {
  .education-card {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
}
</style>
