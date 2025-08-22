// Add event listeners to toggle project descriptions
const project1 = document.getElementById('project-1');
const project2 = document.getElementById('project-2');
const project3 = document.getElementById('project-3');

project1.addEventListener('click', function() {
    let projectDescr1 = document.getElementById('project-descrp-1');
    if (projectDescr1.style.display === 'none') {
        projectDescr1.style.display = 'block';
    } else {
        projectDescr1.style.display = 'none'
    };
});

project2.addEventListener('click', function() {
    let projectDescr2 = document.getElementById('project-descrp-2');
    if (projectDescr2.style.display === 'none') {
        projectDescr2.style.display = 'block';
    } else {
        projectDescr2.style.display = 'none'
    };
});


project3.addEventListener('click', function() {
    let projectDescr3 = document.getElementById('project-descrp-3');
    if (projectDescr3.style.display === 'none') {
        projectDescr3.style.display = 'block';
    } else {
        projectDescr3.style.display = 'none'
    };
});

// Toggle Dark Mode
const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});




