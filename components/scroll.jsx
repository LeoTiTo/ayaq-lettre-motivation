'use client'
import { useEffect } from 'react';

export default function ScrollSpy() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const sections = Array.from(document.querySelectorAll('section[id]'));
      const navLinks = document.querySelectorAll('nav a[href^=\"#\"]');

      let currentSectionId = null;
      let minDistance = Infinity;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // On veut la section dont le haut est le plus proche du haut du viewport, mais pas en dessous
        if (rect.top - navbarHeight <= 1) {
          const distance = Math.abs(rect.top - navbarHeight);
          if (distance < minDistance) {
            minDistance = distance;
            currentSectionId = section.getAttribute('id');
          }
        }
      });

      // Si aucune section n'est trouvée (on est tout en haut), on peut désactiver tous les liens
      if (!currentSectionId && sections.length) {
        const firstSection = sections[0];
        if (window.scrollY < firstSection.offsetTop - navbarHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
        }
      }

      // Activation des liens
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (currentSectionId && link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });

      // Met à jour le hash de l'URL sans recharger la page
      if (currentSectionId) {
        if (window.location.hash !== `#${currentSectionId}`) {
          history.replaceState(null, '', `#${currentSectionId}`);
        }
      }

      // Animation d'apparition
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('show-animate');
        } else {
          section.classList.remove('show-animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
