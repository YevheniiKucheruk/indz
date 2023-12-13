import React from 'react';

const FormComponent = () => {

  return (
    <form className="custom-form">
      <label htmlFor="name" className="input-label">
          <b>Ім'я:</b>
        </label>
        <input id="name" type="text" placeholder="Ваше ім'я" className="custom-input" />

        <label htmlFor="surname" className="input-label">
          <b>Прізвище:</b>
        </label>
        <input id="surname" type="text" placeholder="Ваше прізвище" className="custom-input" />

        <label htmlFor="age" className="input-label">
          <b>Вік:</b>
        </label>
        <input id="age" type="text" placeholder="Ваш вік" className="custom-input" />
      <button type="submit" className="custom-button">
        Надіслати
      </button>
    </form>
  );
};

export default FormComponent;
