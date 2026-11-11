const button = document.createElement('button');
button.textContent = 'Click Me';
button.addEventListener('click', () => {
    alert('Button was clicked!');
});
document.body.appendChild(button);
