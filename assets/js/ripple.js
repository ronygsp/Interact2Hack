// Add this script at the end of your HTML body
document.addEventListener('DOMContentLoaded', function() {
    const negociosButton = document.querySelector('.action-icon[onclick="window.location.href=\'misNegocios.html\';"]');
    
    negociosButton.classList.add('ripple');
    
    negociosButton.addEventListener('click', function(e) {
        const pos = negociosButton.getBoundingClientRect();
        const x = e.clientX - pos.left;
        const y = e.clientY - pos.top;
        
        // Update the background position to create the ripple from the click point
        negociosButton.style.backgroundPosition = x + 'px ' + y + 'px';
    });
});