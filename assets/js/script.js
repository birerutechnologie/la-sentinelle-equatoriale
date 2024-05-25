
document.addEventListener('DOMContentLoaded', function() {
    const servicesMenu = document.getElementById('servicesMenu');
    const submenu = servicesMenu.querySelector('ul');

    servicesMenu.addEventListener('click', function(event) {
        event.preventDefault();
        submenu.classList.toggle('hidden');
    });

    submenu.addEventListener('click', function(event) {
        const target = event.target.closest('a');
        if (target) {
            const anchor = target.getAttribute('href');
            document.querySelector(anchor).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

  document.addEventListener('DOMContentLoaded', () => {
    const bateauSVG = document.getElementById('bateauSVG');
    const sonar = document.getElementById('sonar');
    const objet = document.getElementById('objet');
    const text = document.getElementById('text');
    const text2 = document.getElementById('text2');
    const droneSVG = document.getElementById('droneSVG');

    const bateauTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    bateauTimeline
        .to({}, {
        duration: 1, // Arrêt de 10 secondes
        onStart: function () {
            // Afficher le texte avec effet "zoom in"
            text.style.display = 'block';
            text.classList.add('zoomIn');
            // Cacher le texte après 3 secondes
            setTimeout(() => {
            text.style.display = 'none';
            }, 9000);
        }
        })
        
      .to([bateauSVG, sonar], {
        duration: 5,
        x: window.innerWidth, // Aller jusqu'au bout de l'écran
        ease: 'power1.inOut',
        onComplete: function () {
          // Afficher l'objet détecté quand le bateau commence à retourner
          gsap.set(objet, { x: window.innerWidth / 2, y: 260 });
          objet.style.display = 'block';
        }
      })
      .to([bateauSVG, sonar], {
        duration: 0.5,
        scaleX: -1, // Pour retourner le bateau
        transformOrigin: "center"
      })
      .to([bateauSVG, sonar], {
        duration: 2.5,
        x: window.innerWidth / 2, // Revenir à la moitié de l'écran
        ease: 'power1.inOut'
      })
      .to({}, {
        duration: 4, // Arrêt de 10 secondes
        onStart: function () {
            // Afficher le texte avec effet "zoom in"
            text2.style.display = 'block';
            text2.classList.add('zoomIn');
            // Cacher le texte après 3 secondes
            setTimeout(() => {
            text2.style.display = 'none';
            }, 4000);
        }
        })
      .to([bateauSVG, sonar], {
        duration: 5,
        delay: 5, // Arrêt de 10 secondes
        onComplete: function () {
          // Masquer l'objet détecté
          objet.style.display = 'none';
        }
      })
      .to([bateauSVG, sonar], {
        duration: 5,
        x: - window.innerWidth, // Aller jusqu'au bout de l'écran
        ease: 'power1.inOut'
      })
      .to({}, {
      duration: 0, // Ajouter une pause après que le bateau ait atteint le bout de l'écran
      onComplete: function () {
        // Afficher le drone et démarrer l'animation
        droneSVG.style.display = 'block';
        gsap.to('#droneSVG', { 
        duration: 10, 
        x: -50, 
        y: 10, // Ajout du mouvement vertical
        yoyo: true, 
        repeat: 1, 
        ease: 'power1.inOut' 
        });
        gsap.to('.propeller', { rotation: 90, transformOrigin: "center", repeat: -1, ease: "linear", duration: 1 });
      }
    })
    .to({}, {
      duration: 10, // Durée de l'animation du drone
      onComplete: function () {
        // Masquer le drone après l'animation
        droneSVG.style.display = 'none';
      }
    });
  });





