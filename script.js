document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          container.classList.add('fadeIn');  // Déclenche l'animation
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(container);
  });
  

  //animation sous titre ecriture 
  function typeLine(lineId, delay, duration, callback) {
    const line = document.getElementById(lineId);
    setTimeout(() => {
      line.style.visibility = 'visible';
      line.style.animation = `typing ${duration}ms steps(40, end) forwards, blink 0.7s step-end infinite`;
      setTimeout(() => {
        line.style.borderRight = 'none';
        if (callback) callback();
      }, duration);
    }, delay);
  }
  
  typeLine("line1", 0, 1200, () => {
    typeLine("line2", 300, 1200, () => {
      typeLine("line3", 300, 1200);
    });
  });
  



  //navigation
  function highlightImage(section) {
    let scrollPosition = 0;
  
    // Vérification des positions de chaque section
    switch(section) {
      case 'info':
        scrollPosition = 0;  // Défilement vers le haut de la page pour Info
        break;
      case 'languages':
        scrollPosition = document.getElementById('languages').offsetTop;
        break;
      case 'tools':
        scrollPosition = document.getElementById('tools').offsetTop;
        break;
      case 'projets':
        scrollPosition = document.getElementById('projects').offsetTop;
        break;
      default:
        console.log("Section non reconnue :", section);
        return;
    }
  
    // Effectuer le défilement vers la position de la section
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  }
  
  
  
  
  // Apparition/disparition en fondu de la section languages
const languageSection = document.querySelector('#languages');
const languageContainer = document.querySelector('.languages-container');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      languageContainer.classList.add('visible');
    } else {
      languageContainer.classList.remove('visible');
    }
  });
}, { threshold: 0.3 });

observer.observe(languageSection);


// IntersectionObserver pour la section des outils
document.addEventListener('DOMContentLoaded', function() {
  const toolsSection = document.getElementById('tools');
  const toolsContainer = document.querySelector('.tools-container');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        toolsContainer.classList.add('visible');
      } else {
        toolsContainer.classList.remove('visible'); // Retirer la classe si on sort de la section
      }
    });
  }, { threshold: 0.5 }); // Observer la section quand 50% est visible

  observer.observe(toolsSection); // Observer la section "tools"
});


// Ajout d'une animation pour faire apparaître les projets et les titres
document.addEventListener("DOMContentLoaded", function() {
  const projects = document.querySelectorAll(".project-card");
  const title = document.querySelector(".projects-title");
  const subtitle = document.querySelector(".projects-subtitle");

  const onScroll = () => {
    // Animation du titre
if (title.getBoundingClientRect().top <= window.innerHeight - 100) {
  title.classList.add("visible");
} else {
  title.classList.remove("visible");
}

// Animation du sous-titre
if (subtitle.getBoundingClientRect().top <= window.innerHeight - 100) {
  subtitle.classList.add("visible");
} else {
  subtitle.classList.remove("visible");
}


    // Animation des projets
    projects.forEach(project => {
      const rect = project.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100 && rect.bottom >= 0) {
        project.classList.add("visible");
      } else {
        project.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll();  // Vérifier dès le chargement si les éléments sont visibles
});




//baniière
document.querySelector(".scroll-top").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("email-icon").addEventListener("click", function() {
  const email = "octave.silva37@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const tooltip = this.querySelector(".tooltip");
    tooltip.classList.add("visible");
    setTimeout(() => tooltip.classList.remove("visible"), 1500);
  });
});



