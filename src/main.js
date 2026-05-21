import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  })
}, {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
})

app.directive('appear', {
  mounted(el) {
    el.classList.add('fade-up-element');
    observer.observe(el);
  },
  unmounted(el) {
    observer.unobserve(el);
  }
})

app.mount('#app')
