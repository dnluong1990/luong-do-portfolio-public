<script setup>
import { ref, computed, onMounted } from 'vue';
import { cvData } from './data/cvData.js';
import HeaderSection from './components/HeaderSection.vue';
import AboutSection from './components/AboutSection.vue';
import FeaturedProjectsSection from './components/FeaturedProjectsSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import EducationSection from './components/EducationSection.vue';

const currentLang = ref('vi');
const isDarkMode = ref(false);

onMounted(() => {
  // Check local storage or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark';
  } else {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  updateTheme();
});

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  updateTheme();
};

const updateTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'vi' ? 'en' : 'vi';
};

const currentData = computed(() => cvData[currentLang.value]);
</script>

<template>
  <main class="portfolio-app">
    
    <!-- Top Controls (Theme & Lang) -->
    <div class="top-controls">
      <button @click="toggleTheme" class="theme-toggle-btn" aria-label="Toggle Theme">
        <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      </button>
      
      <div class="lang-divider"></div>

      <div class="lang-switcher">
        <button 
          @click="currentLang = 'vi'" 
          :class="['lang-btn', { active: currentLang === 'vi' }]">
          VI
        </button>
        <button 
          @click="currentLang = 'en'" 
          :class="['lang-btn', { active: currentLang === 'en' }]">
          EN
        </button>
      </div>
    </div>

    <!-- Header Section -->
    <HeaderSection :personal="currentData.personal" />

    <!-- About Section -->
    <AboutSection v-appear :summary="currentData.summary" :goals="currentData.goals" :ui="currentData.ui" />

    <!-- Featured Projects Section -->
    <FeaturedProjectsSection v-appear :projects="currentData.featuredProjects" :ui="currentData.ui" />

    <!-- Experience Section -->
    <ExperienceSection v-appear :experience="currentData.experience" :ui="currentData.ui" />

    <!-- Skills Section -->
    <SkillsSection v-appear :skills="currentData.skills" :ui="currentData.ui" />

    <!-- Education Section -->
    <EducationSection v-appear :education="currentData.education" :ui="currentData.ui" />
    
    <!-- Footer Section -->
    <footer class="footer">
      <div class="container text-center">
        <p>Built with ❤️ by {{ currentData.personal.name }}</p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.portfolio-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.top-controls {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  background-color: var(--surface-color);
  padding: 0.25rem;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  z-index: 100;
}

.theme-toggle-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: var(--transition);
}

.theme-toggle-btn:hover {
  color: var(--primary-color);
  background-color: rgba(37, 99, 235, 0.1);
}

.lang-switcher {
  display: flex;
  align-items: center;
}

.lang-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  font-size: 0.85rem;
  border-radius: var(--radius-full);
  color: var(--text-muted);
  transition: var(--transition);
}

.lang-btn:hover {
  color: var(--text-main);
}

.lang-btn.active {
  background-color: var(--primary-color);
  color: white;
}

.lang-divider {
  width: 1px;
  height: 16px;
  background-color: var(--border-color);
  margin: 0 0.25rem;
}

.footer {
  background-color: var(--surface-color);
  border-top: 1px solid var(--border-color);
  padding: 2rem 0;
  text-align: center;
  margin-top: auto;
}

.footer p {
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.built-with {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--primary-color) !important;
}

@media (max-width: 768px) {
  .top-controls {
    top: 1rem;
    right: 1rem;
  }
}
</style>
