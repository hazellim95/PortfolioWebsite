// Get project elements by id
const project1 = document.getElementById('project-1');
const project2 = document.getElementById('project-2');
const project3 = document.getElementById('project-3');

let projectDescr1 = document.getElementById('project-descrp-1'); 
let projectDescr2 = document.getElementById('project-descrp-2');
let projectDescr3 = document.getElementById('project-descrp-3');

// Helper function to toggle project descriptions
// const toggleDescrp = element => {
//     if (element.style.display === 'none') {
//         element.style.display = 'block';
//     } else {
//         element.style.display = 'none';
//     };
// }



// Add event listeners to project elements
project1.addEventListener('click', function() {
    projectDescr1.classList.toggle('show');
});
project2.addEventListener('click', function() {
    projectDescr2.classList.toggle('show');
});
project3.addEventListener('click', function() {
    projectDescr3.classList.toggle('show');
});




// Toggle Dark Mode
const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});




