const textarea = document.getElementById('noteArea');

// Load saved note
textarea.value = localStorage.getItem('note') || '';

// Save note as you type
textarea.addEventListener('input', () => {
  localStorage.setItem('note', textarea.value);
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registered!'))
    .catch(err => console.error('Service Worker failed:', err));
}
