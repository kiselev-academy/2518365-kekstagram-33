const containerElement = document.querySelector('.pictures');
const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const renderPhoto = (picture) => {
  const {url, description, likes, comments} = picture;
  const pictureElement = pictureTemplateElement.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  return pictureElement;
};

const renderPhotos = (photos) => {
  photos.forEach((photo) => {
    fragment.appendChild(renderPhoto(photo));
  });

  containerElement.appendChild(fragment);
};

export {renderPhotos};

