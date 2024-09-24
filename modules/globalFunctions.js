export class gunctions {
    previewImage(event) {
        const imageInput = event.target;
        const file = imageInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imagePreview = document.getElementById('imagePreview');
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    }
}