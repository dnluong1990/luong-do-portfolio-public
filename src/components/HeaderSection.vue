<script setup>
import { computed } from "vue";

const props = defineProps({
    personal: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <header class="header-section section animate-fade-in">
        <div class="container header-container">
            <div class="header-content">
                <h1 class="name">{{ personal.name }}</h1>
                <h2 class="title">{{ personal.title }}</h2>
                <div class="contact-info">
                    <a :href="`mailto:${personal.email}`" class="contact-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                            ></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        {{ personal.email }}
                    </a>
                    <a
                        :href="`tel:${personal.phone.replace(/\./g, '')}`"
                        class="contact-item"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                            ></path>
                        </svg>
                        {{ personal.phone }}
                    </a>
                    <div class="contact-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                            ></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {{ personal.address }}
                    </div>
                </div>
            </div>
            <div class="header-image-container">
                <img
                    src="../assets/images/my_avatar.jpg"
                    alt="Avatar"
                    class="profile-image"
                />
            </div>
        </div>
    </header>
</template>

<style scoped>
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
}

.header-content {
    flex: 1;
}

.name {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    background: linear-gradient(
        135deg,
        var(--text-main) 0%,
        var(--primary-color) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.title {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-muted);
    margin-bottom: 2rem;
}

.contact-info {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-main);
    background-color: var(--surface-color);
    padding: 0.5rem 1rem;
    border-radius: var(--radius-full);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
}

.contact-item:hover {
    color: white;
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
}

.contact-item svg {
    color: var(--primary-color);
    transition: var(--transition);
}

.contact-item:hover svg {
    color: white;
}

.header-image-container {
    flex-shrink: 0;
}

.profile-image {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    box-shadow: var(--shadow-lg);
    animation: morph 8s ease-in-out infinite alternate;
    border: 4px solid var(--surface-color);
}

@keyframes morph {
    0% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    100% {
        border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
    }
}

@media (max-width: 768px) {
    .header-container {
        flex-direction: column-reverse;
        text-align: center;
        gap: 2rem;
    }

    .name {
        font-size: 2.5rem;
    }

    .contact-info {
        justify-content: center;
    }

    .contact-item:hover {
        transform: translateY(-2px);
    }

    .profile-image {
        width: 200px;
        height: 200px;
    }
}
</style>
