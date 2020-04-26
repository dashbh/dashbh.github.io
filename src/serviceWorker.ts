export function register() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            const swUrl = '/sw.js';
            navigator.serviceWorker.register(swUrl).then(registration => {
                console.log('Service worker registered: ', registration);
            }).catch(error => {
                console.log('Error during service worker registration', error);
            });
        });
    }
}
