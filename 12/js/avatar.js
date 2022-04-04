const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_SRC = 'img/muffin-grey.svg';

const avatarfileChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('div.ad-form-header__preview img');
const housingfileChooser = document.querySelector('.ad-form__input');
const photoContainer = document.querySelector('.ad-form__photo');

const housingPreview = document.createElement('img');
housingPreview.classList.add('ad-form__housing-photo');
photoContainer.appendChild(housingPreview);

export {avatarPreview, housingPreview};

const uploadFile = (fileChooser, preview) => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};

uploadFile(avatarfileChooser, avatarPreview);

uploadFile(housingfileChooser, housingPreview);

const removeFile = (avatarPhoto, housingPhoto) => {
  avatarPhoto.src = DEFAULT_SRC;
  housingPhoto.remove();
};

export {removeFile};
