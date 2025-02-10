document.getElementById('convertBtn').addEventListener('click', function () {
    const fileInput = document.getElementById('imageUpload');
    const convertedImage = document.getElementById('convertedImage');
    const downloadLink = document.getElementById('downloadLink');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            // Display the uploaded image
            convertedImage.src = e.target.result;

            // Enable download link
            downloadLink.href = e.target.result;
            downloadLink.style.display = 'block';
        };

        reader.readAsDataURL(fileInput.files[0]);
    } else {
        alert('Please upload an image first.');
    }
});
