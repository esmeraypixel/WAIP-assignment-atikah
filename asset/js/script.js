// dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark_mode');
    const darkBtn = document.querySelector('.dark_mode_btn');
    const isDark = document.body.classList.contains('dark_mode');

    darkBtn.textContent = isDark ? ' Light Mode' : ' Dark Mode';
    console.log("Dark mode:", isDark);
}

// form submission validation
function submitForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all the fields');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email address. Try again!');
        return;
    }

    alert(`Thanks ${name}! Message sent!`);
    document.querySelector('.contact_form').reset();
    console.log("Form submitted:", { name, email, message });
}

// smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});