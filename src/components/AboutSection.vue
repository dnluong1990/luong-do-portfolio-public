<script setup>
defineProps({
  summary: {
    type: String,
    required: true
  },
  goals: {
    type: Object,
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
          <p class="summary-text">{{ summary }}</p>
        </div>
        
        <div class="goals-container">
          <div class="card goal-card">
            <div class="goal-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <h3>{{ ui.shortTerm }}</h3>
            <p>{{ goals.shortTerm }}</p>
          </div>
          
          <div class="card goal-card">
            <div class="goal-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <h3>{{ ui.longTerm }}</h3>
            <p>{{ goals.longTerm }}</p>
          </div>
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

.summary-text {
  font-size: 1.1rem;
  line-height: 1.8;
}

.goals-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.goal-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 4px solid var(--primary-color);
}

.goal-icon {
  width: 48px;
  height: 48px;
  background-color: rgba(37, 99, 235, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.goal-card h3 {
  font-size: 1.25rem;
  color: var(--text-main);
}
</style>
