// Get all the nav items and content sections
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');

// Function to hide all sections and show the selected one
function showSection(sectionId) {
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Attach click event listeners to all navigation items
navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        
        const sectionToShow = item.getAttribute('data-section') + '-section';
        showSection(sectionToShow);
    });
});

// Toggle dropdown when profile image or admin name is clicked
document.getElementById("profileDropdown").onclick = function() {
    toggleDropdown();
};

function toggleDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.profile-pic') && !event.target.matches('.admin-name')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
