export const imageUploader = async (e, image, setImage) => {
  const imageFile = e.target.files[0];
  const reader = new FileReader();
  e.target.value = "";

  if (!imageFile) {
    return;
  }
  if (!imageFile.name.match(/\.(jpg|jpeg|png)$/)) {
    return;
  }
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      setImage(URL.createObjectURL(imageFile));
    };
    img.onerror = () => {
      return;
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(imageFile);
};
