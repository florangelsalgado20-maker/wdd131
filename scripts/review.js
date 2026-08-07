document.addEventListener('DOMContentLoaded', () => {
    // Contador con localStorage: +1 cada vez que carga review.html
    let count = parseInt(localStorage.getItem('reviewCount'), 10) || 0;
    count += 1;
    localStorage.setItem('reviewCount', count);
    document.getElementById('count').textContent = count;

    // Resumen de la reseña enviada (llega por la URL con method="get")
    const params = new URLSearchParams(window.location.search);
    const productName = params.get('product');
    const rating = params.get('rating');
    const summary = document.getElementById('review-summary');

    if (summary && productName) {
        const names = {
            'snake-plant': 'Snake Plant (Sansevieria)',
            'golden-pothos': 'Golden Pothos',
            'zz-plant': 'ZZ Plant'
        };
        const display = names[productName] || productName;
        summary.textContent = rating
            ? 'You reviewed the ' + display + ' with a rating of ' + rating + ' star(s). Thank you!'
            : 'You reviewed the ' + display + '. Thank you!';
        summary.hidden = false;
    }
});
