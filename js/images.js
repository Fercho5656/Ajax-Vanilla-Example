const ajaxImagesButton = document.querySelector("#ajaxImagesButton");
const ajaxImages = document.querySelector("#ajaxImages");

const getImages = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  if (!response.ok) {
    const message = `Error! ${response.status}`;
    throw new Error(message);
  }
  const images = await response.json();
  return images;
};

const createImage = (image) => {
  const imageDiv = document.createElement("div");
  imageDiv.className = "col-lg-3 col-md-3 col-sm-3 col-xs-6";

  const img = document.createElement("img");
  img.src = image.thumbnailUrl;
  img.alt = image.title;
  img.className = "img-responsive mt-3";

  imageDiv.appendChild(img);
  return imageDiv;
};

ajaxImagesButton.addEventListener("click", () => {
  ajaxImagesButton.disabled = true;
  getImages()
    .then((images) => {
      const data = images.slice(0, 8);
      data.map((image) => {
        const newImg = createImage(image);
        ajaxImages.appendChild(newImg);
      });
      alert('Imagenes Cargadas')
    })
    .catch((e) => {
      alert(e);
      ajaxImagesButton.disabled = false;
      alert('Error al cargar las imagenes')
    });
});
