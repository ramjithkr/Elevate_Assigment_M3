document.addEventListener('DOMContentLoaded', function() {
    const divs = document.querySelectorAll('.div');
    divs.forEach(div => {
        div.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.5s ease';
        });
        div.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.5s ease';
        });
    });
});
