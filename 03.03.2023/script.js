var uploadFile
function uploadImage() {
  const input = document.getElementById('formFileLg')
  input.accept = 'image/*';
  input.onchange = function() {
    uploadFile = input.files[0];
    if (uploadFile.type.startsWith('image/')) {
      const formData = new FormData();
      formData.append('image', uploadFile);
      axios.post('https://jpegConverterserver.aleksandrlitvin.repl.co', formData, {
        responseType: 'arraybuffer'
      })
          .then(response => {
            const file = new Blob([response.data], { type: 'image/webp' });
            const fileURL = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = fileURL;
            const fileName = `${uploadFile.name.split(".").slice(0, -1).join(".")}.webp`
            link.download = fileName;
            link.click();
          })
          .catch(error => {
            console.error(error);
          });
    } else {
      alert('Выберите изображение');
    }
  };
  input.click();
}

uploadImage()
console.log('here')