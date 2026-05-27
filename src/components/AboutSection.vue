<script setup>
defineProps({
  summary: {
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
  <section class="section about-section">
    <div class="container">
      <h2 class="section-title">{{ ui.about }}</h2>
      <div class="about-content">
        <div class="card summary-card">
          <ul class="summary-list">
            <li v-for="(item, index) in summary" :key="index" class="summary-item">
              <span class="bullet">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              <p class="summary-text">{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.summary-card {
  padding: 2rem;
}

.summary-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.summary-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.bullet {
  color: var(--primary-color);
  flex-shrink: 0;
  margin-top: 0.25rem;
  background-color: rgba(37, 99, 235, 0.1);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.summary-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
}
</style>
