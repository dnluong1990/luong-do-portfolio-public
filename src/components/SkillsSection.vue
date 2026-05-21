<script setup>
defineProps({
  skills: {
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
  <section class="section skills-section">
    <div class="container">
      <h2 class="section-title">{{ ui.skills }}</h2>
      
      <div class="skills-grid">
        <div v-for="(skillGroup, index) in skills" :key="index" class="card skill-card">
          <h3 class="skill-category">{{ skillGroup.category }}</h3>
          <div class="skill-tags">
            <span v-for="(item, i) in skillGroup.items" :key="i" class="skill-tag">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  display: flex;
  flex-direction: column;
}

.skill-category {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 1.25rem;
  font-weight: 600;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  background-color: var(--bg-color);
  color: var(--text-main);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.skill-tag:hover {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}
</style>
