// Function to load the navigation bar
function loadNavbar(activePage) {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (!navbarPlaceholder) {
        console.error('Navbar placeholder element not found!');
        return;
    }

    // Define navigation structure
    const navItems = [
        { name: 'Home', href: 'index.html', id: 'home' },
        { name: 'Weave', href: 'weave.html', id: 'weave' },
        { name: 'Solutions', href: 'solutions.html', id: 'solutions' },
        {
            name: 'Industries', id: 'industries',
            subItems: [
                { name: 'Healthcare', href: 'healthcare.html', id: 'healthcare' }
            ]
        },
        { name: 'About', href: 'about.html', id: 'about' },
        { name: 'Contact', href: 'mailto:general@asklepic.com', id: 'contact', isButton: true }
    ];

    // Build the HTML string
    let navHTML = `
<nav>
    <div class="container">
        <a href="index.html" class="logo">
            <img src="assets/logo.png" alt="ASKLEPIC" style="height: 32px; width: auto;">
            <span class="logo-text">ASKLEPIC</span>
        </a>
        
        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </button>
        
        <ul class="nav-menu">`;

    navItems.forEach(item => {
        if (item.subItems) {
            // Handle dropdown parent item
            let parentIsActive = item.subItems.some(sub => sub.id === activePage);
            navHTML += `<li class="dropdown ${parentIsActive ? 'active-parent' : ''}">`;
            navHTML += `<a href="#" class="dropdown-toggle">${item.name} 
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dropdown-arrow"><path d="m6 9 6 6 6-6"/></svg>
            </a>`;
            navHTML += `<ul class="dropdown-menu">`;
            item.subItems.forEach(subItem => {
                navHTML += `<li><a href="${subItem.href}" class="${subItem.id === activePage ? 'active' : ''}">${subItem.name}</a></li>`;
            });
            navHTML += `</ul></li>`;
        } else {
            // Handle regular or button item
            const isActive = item.id === activePage;
            const itemClass = item.isButton ? 'cta-button-nav' : (isActive ? 'active' : '');
            const tagName = 'a';

            navHTML += `<li><${tagName} href="${item.href}" class="${itemClass}">${item.name}</${tagName}></li>`;
        }
    });

    navHTML += `
        </ul>
    </div>
</nav>`;

    navbarPlaceholder.innerHTML = navHTML;

    // Initialize mobile menu functionality
    initMobileMenu();
}

// Initialize mobile menu
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (!toggle || !navMenu) return;

    // Toggle mobile menu
    toggle.addEventListener('click', function () {
        const isOpen = navMenu.classList.toggle('is-open');
        toggle.classList.toggle('is-active');
        toggle.setAttribute('aria-expanded', isOpen);

        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Handle dropdown toggles on mobile
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');

        dropdownToggle.addEventListener('click', function (e) {
            // Only prevent default and toggle on mobile
            if (window.innerWidth <= 900) {
                e.preventDefault();
                dropdown.classList.toggle('is-open');

                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('is-open');
                    }
                });
            }
        });
    });

    // Close menu when clicking a link (except dropdown toggles)
    navMenu.querySelectorAll('a:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 900) {
                navMenu.classList.remove('is-open');
                toggle.classList.remove('is-active');
                toggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 900) {
            navMenu.classList.remove('is-open');
            toggle.classList.remove('is-active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            dropdowns.forEach(dropdown => dropdown.classList.remove('is-open'));
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 900 && navMenu.classList.contains('is-open')) {
            if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
                navMenu.classList.remove('is-open');
                toggle.classList.remove('is-active');
                toggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu is initialized when navbar is loaded
});
