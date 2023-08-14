const dropDownWrapper = document.querySelector('.dropdown');
const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
const dropDownListItems = dropDownList.querySelectorAll('.dropdown__item');
const dropdownSelect = document.querySelector('.catalog__sorting-select');

dropdownSelect.classList.remove('catalog__sorting-select--nojs');
dropDownWrapper.classList.remove('dropdown--nojs');

// Клик по кнопке. Открыть/Закрыть select
dropDownBtn.addEventListener('click', function (e) {
  dropDownList.classList.toggle('dropdown__list--visible');
  this.classList.add('dropdown__button--active');

  if (!dropDownList.classList.contains('dropdown__list--visible')) {
    dropDownBtn.classList.remove('dropdown__button--active');
  }
});

// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
dropDownListItems.forEach(function (listItem) {
  listItem.addEventListener('click', function (e) {
    e.stopPropagation();
    dropDownBtn.innerText = this.innerText;
    dropDownBtn.focus();
    dropdownSelect.value = this.dataset.value;
    dropDownList.classList.remove('dropdown__list--visible');

    const currentItem = e.target;

    dropDownListItems.forEach(function (item) {
      item.classList.remove('dropdown__item--active');
    });

    currentItem.classList.add('dropdown__item--active');
    dropDownBtn.classList.remove('dropdown__button--active');
  });
});

// Клик снаружи дропдауна. Закрыть дропдаун
document.addEventListener('click', function (e) {
  if (e.target !== dropDownBtn) {
    dropDownBtn.classList.remove('dropdown__button--active');
    dropDownList.classList.remove('dropdown__list--visible');
  }
});

// Нажатие на Tab или Escape. Закрыть дропдаун
document.addEventListener('keydown', function (e) {
  if (e.key === 'Tab' || e.key === 'Escape') {
    dropDownBtn.classList.remove('dropdown__button--active');
    dropDownList.classList.remove('dropdown__list--visible');
  }
});
