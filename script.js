document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.querySelector('.cookie-banner');
    const acceptBtn = document.querySelector('.cookie-btn.accept');
    const rejectBtn = document.querySelector('.cookie-btn.reject');

    // Check if user has already made a choice
    if (localStorage.getItem('cookiePreference')) {
        cookieBanner.style.display = 'none';
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiePreference', 'true');
        cookieBanner.style.display = 'none';
    });

    rejectBtn.addEventListener('click', () => {
        localStorage.setItem('cookiePreference', 'false');
        cookieBanner.style.display = 'none';
    });
});
