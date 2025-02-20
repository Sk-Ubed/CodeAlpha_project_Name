// script.js
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', function() {
        document.getElementById('lightbox').style.display = 'flex';
        document.getElementById('lightbox-img').src = this.src;
    });
});

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

