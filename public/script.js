document.addEventListener('DOMContentLoaded', () => {
    const previewLinks = document.querySelectorAll('.preview-link');
    const closeButtons = document.querySelectorAll('.close-preview');
    const overlay = document.querySelector('.overlay');

    // Khi nhấp vào "Xem trước"
    previewLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const previewWindow = link.parentElement.nextElementSibling;
            if (previewWindow) {
                const previewUrl = link.getAttribute('data-preview-url');
                previewWindow.style.display = 'block';
                overlay.style.display = 'block'; // Hiện overlay
                const iframe = previewWindow.querySelector('iframe');
                iframe.src = previewUrl;
            }
        });
    });

    // Khi nhấp vào nút đóng
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const previewWindow = button.closest('.preview-window');
            if (previewWindow) {
                previewWindow.style.display = 'none';
                overlay.style.display = 'none'; // Ẩn overlay
                const iframe = previewWindow.querySelector('iframe');
                iframe.src = '';
            }
        });
    });

    // Ẩn preview-window và overlay khi nhấp vào overlay
    overlay.addEventListener('click', () => {
        const previewWindow = document.querySelector('.preview-window[style*="block"]');
        if (previewWindow) {
            previewWindow.style.display = 'none';
            overlay.style.display = 'none';
            const iframe = previewWindow.querySelector('iframe');
            iframe.src = '';
        }
    });
});