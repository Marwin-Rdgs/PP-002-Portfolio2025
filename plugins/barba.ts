import barba from '@barba/core';
import gsap from 'gsap';

export default defineNuxtPlugin(() => {
  if (process.client) {
    barba.init({
      transitions: [
        {
          name: 'overlay-transition',
          beforeLeave(data) {
            const overlay = document.querySelector('.overlay-container');
            if (overlay) {
              // Affiche l'overlay avec une animation
              gsap.set(overlay, { opacity: 0, display: 'block' });
              return gsap.to(overlay, { opacity: 1, duration: 0.5 });
            }
          },
          leave(data) {
            return gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
          },
          enter(data) {
            const overlay = document.querySelector('.overlay-container');
            if (overlay) {
              return gsap
                .timeline()
                .set(data.next.container, { opacity: 0 })
                .to(overlay, { opacity: 0, duration: 0.5 })
                .to(data.next.container, { opacity: 1, duration: 0.5 }, '<')
                .set(overlay, { display: 'none' });
            }
          },
        },
      ],
    });
  }
});
