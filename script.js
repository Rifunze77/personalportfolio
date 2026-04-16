function showSection(sectionId) {
    let sections = document.querySelectorAll("section");

    sections.forEach(sec => {
        sec.style.display = "none";
    });

    let target = document.getElementById(sectionId);
    
    if (sectionId === 'home') {
        target.style.display = "flex";
    } else {
        target.style.display = "block";
    }
}

function showALLSections() {
    let sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        if (sec.id === 'home') {
            sec.style.display = "flex";
        } else {
            sec.style.display = "block";
        }
    });
}

window.onload = () => showSection('home');