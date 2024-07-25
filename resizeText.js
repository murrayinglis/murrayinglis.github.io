document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector('.about-content');
    const text = textContainer.querySelector('p');

    function adjustFontSize() {
        const containerHeight = textContainer.offsetHeight;
        let fontSize = parseInt(window.getComputedStyle(text).fontSize);

        while (textContainer.scrollHeight <= containerHeight && fontSize < 30) { // 100 is an arbitrary max font size
            fontSize++;
            text.style.fontSize = fontSize + 'px';
        }

        while (textContainer.scrollHeight > containerHeight && fontSize > 10) { // 10 is an arbitrary min font size
            fontSize--;
            text.style.fontSize = fontSize + 'px';
        }
    }

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);
});
