document.addEventListener('DOMContentLoaded', () => {
const navRoutes = {
    "basics_id": "./basics.html",
    "armory_id": "./armory.html",
    "arsenal_id": "./arsenal.html",
    "main_id": "./index.html"
};

    document.querySelectorAll('.main-nav button').forEach( (btn) => {
        btn.type = 'button';
        btn.addEventListener('click', (e) => {
                const id = e.currentTarget.id;
                if (id in navRoutes) {
                    window.location.href = navRoutes[id];
                }
        });
    });
});    
