function changeLoginButtonText(classname, name, basename) {
    if (screen.width <= 600) {
        const footerButtons = document.querySelectorAll(classname);
        footerButtons.forEach((button) => {
            button.textContent = name;
        });
    } else if (screen.width > 600) {
        const footerButtons = document.querySelectorAll(classname);
        footerButtons.forEach((button) => {
            button.textContent = basename;
        });
    }
}