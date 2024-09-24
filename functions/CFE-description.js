function toggleDescription() {
    var description = document.getElementById('description');
    var btnText = document.getElementById('readMoreBtn');

    // Toggle between expanded and normal state
    if (description.classList.contains('expanded')) {
        description.classList.remove('expanded');
        btnText.innerHTML = "Read more";
    } else {
        description.classList.add('expanded');
        btnText.innerHTML = "Read less";
    }
}