const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_SRC = 'img/muffin-grey.svg';

const avatarFileChooserElement = document.querySelector('.ad-form-header__input');
const avatarPreviewElement = document.querySelector('div.ad-form-header__preview img');
const housingFileChooserElement = document.querySelector('.ad-form__input');
const photoContainerElement = document.querySelector('.ad-form__photo');

const housingPreviewElement = document.createElement('img');
housingPreviewElement.classList.add('ad-form__housing-photo');
photoContainerElement.appendChild(housingPreviewElement);

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

uploadFile(avatarFileChooserElement, avatarPreviewElement);

uploadFile(housingFileChooserElement, housingPreviewElement);

const removeFile = (avatarPhoto, housingPhoto) => {
  avatarPhoto.src = DEFAULT_SRC;
  housingPhoto.src = '';
};

export {avatarPreviewElement, housingPreviewElement, removeFile};
