document.addEventListener('DOMContentLoaded', function() {

    // Get references to all the important elements
    const timetableBtn = document.getElementById('timetable-btn');
    const dashboardBtn = document.getElementById('dashboard-btn');
    const mainHeading = document.getElementById('main-heading');

    const dashboardContent = document.getElementById('dashboard-content');
    const timetableContent = document.getElementById('timetable-content');

    // Event listener for the "TimeTable" button
    timetableBtn.addEventListener('click', function() {
        // Switch the main heading
        mainHeading.textContent = 'My Weekly TimeTable';
        
        // Hide dashboard content and show timetable content [cite: 6]
        dashboardContent.classList.add('d-none');
        timetableContent.classList.remove('d-none');
        
        // Update active state on buttons
        timetableBtn.classList.add('active', 'btn-light');
        timetableBtn.classList.remove('btn-outline-light');
        dashboardBtn.classList.remove('active');
    });

    // Event listener for the "Dashboard" button to return to the main view
    dashboardBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        
        // Switch the main heading back
        mainHeading.textContent = 'Welcome, Student!';

        // Hide timetable and show dashboard
        timetableContent.classList.add('d-none');
        dashboardContent.classList.remove('d-none');
        
        // Update active state on buttons
        timetableBtn.classList.remove('active', 'btn-light');
        timetableBtn.classList.add('btn-outline-light');
        dashboardBtn.classList.add('active');
    });

    // Set initial active state for the dashboard button
    dashboardBtn.classList.add('active');
});