// Function to load the navigation bar
function loadNavbar(activePage) {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (!navbarPlaceholder) {
        console.error('Navbar placeholder element not found!');
        return;
    }

    const navItems = [
        { name: 'Home', href: 'index.html', id: 'home' },
        {
            name: 'Industries', id: 'industries',
            subItems: [
                { name: 'Healthcare', href: 'healthcare.html', id: 'healthcare' }
            ]
        },
        { name: 'About', href: 'about.html', id: 'about' },
        { name: 'Contact', href: 'mailto:general@asklepic.com', id: 'contact', isButton: true }
    ];

    let navHTML = `
<nav>
    <div class="container">
        <a href="index.html#homepage" class="logo"><span class="logo-text">ASKLEPIC</span></a>
        <ul>`;

    navItems.forEach(item => {
        if (item.subItems) {
            const parentIsActive = item.subItems.some(sub => sub.id === activePage);
            navHTML += `<li class="dropdown ${parentIsActive ? 'active-parent' : ''}">`;
            navHTML += `<a href="#">${item.name} <span class="dropdown-arrow">▼</span></a>`;
            navHTML += `<ul class="dropdown-menu">`;
            item.subItems.forEach(subItem => {
                navHTML += `<li><a href="${subItem.href}" class="${subItem.id === activePage ? 'active' : ''}">${subItem.name}</a></li>`;
            });
            navHTML += `</ul></li>`;
        } else {
            const isActive = item.id === activePage;
            const itemClass = item.isButton ? 'cta-button-nav' : (isActive ? 'active' : '');
            const prefix = '';
            const href = (item.id === 'home' && activePage === 'home') ? 'index.html#homepage' : item.href;
            navHTML += `<li><a href="${href}" class="${itemClass}">${prefix}${item.name}</a></li>`;
        }
    });

    navHTML += `
        </ul>
    </div>
</nav>`;

    navbarPlaceholder.innerHTML = navHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for potential dropdown click behavior on mobile
});


