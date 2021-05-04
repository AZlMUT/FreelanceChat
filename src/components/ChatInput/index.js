import React from "react";
import "./ChatInput.scss";

const ChatInput = () => {
  return (
    <div>
      <input className="c-checkbox" type="checkbox" id="checkbox"/>
      <div class="c-formContainer">
        <form class="c-form" action="">
          <input
            class="c-form__input"
            placeholder="Введите текст"
            type="text"
            required
          />
          <label class="c-form__buttonLabel" for="checkbox">
            <button class="c-form__button" type="button">
              Отправить
            </button>
          </label>
          <label
            class="c-form__toggle"
            for="checkbox"
            data-title="Notify me"
          ></label>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
