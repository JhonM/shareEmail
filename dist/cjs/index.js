'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var remove = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMC44TDcuMiAwTDQgMy4yTDAuOCAwTDAgMC44TDMuMiA0TDAgNy4yTDAuOCA4TDQgNC44TDcuMiA4TDggNy4yTDQuOCA0TDggMC44WiIgZmlsbD0iIzA1MDAzOCIvPgo8L3N2Zz4K";

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const labelTemplate$1 = ({ email }) =>
  `
    <label data-share-form="share-box-email-label">
      <span>${email}<span>
      <span data-share-form="share-box-email-close" tabindex="0"><img src=${remove}></span>
    </label>
  `;

var emailLabel = (props) => {
  const template = document.createElement('div');
  template.dataset.shareForm = 'share-box-email-label-container';
  template.tabIndex = 0;
  template.classList.add(validateEmail(props.email) ? 'valid' : 'invalid');
  template.innerHTML = labelTemplate$1(props);

  // remove email label on click
  template
    .querySelector('[data-share-form="share-box-email-close"]')
    .addEventListener('click', (e) => {
      props.action(template);
    });

  // remove email label on enter
  template.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 || e.code === 'Enter') {
      props.action(template);
    }
  });

  return template;
};

const labelTemplate = ({ placeholder }) =>
  `
    <input type="email" placeholder="${placeholder}" multiple>
  `;

const onBlur = (e, action) => {
  fireAction(e, action);
};

const onKeyDown = (e, action) => {
  fireAction(e, action);
};

const onPaste = (e, action) => {
  const paste = (e.clipboardData || window.clipboardData).getData('text');
  const pasteArr = paste.split(',');
  pasteArr.forEach((email) => action(email));
};

const fireAction = (e, action) => {
  const newEmail = e?.target?.value;
  if (newEmail === '') return;
  action(newEmail);
};

var emailInput = (props) => {
  const template = document.createElement('div');
  template.dataset.shareForm = 'share-box-input-container';
  template.innerHTML = labelTemplate(props);

  const input = template.querySelector('input');

  // fire action on blur
  input.addEventListener('blur', (e) => {
    onBlur(e, props.action);
    e.target.value = '';
  });

  // fire action when keypress is Comma or Enter
  input.addEventListener('keydown', (e) => {
    if (
      e.keyCode === 188 ||
      e.keyCode === 13 ||
      ['Comma', 'Enter'].includes(e.code)
    ) {
      onKeyDown(e, props.action);

      e.target.value = '';
      input.removeEventListener('blur', onBlur);
    }
  });

  // make sure to strip the comma when when typing
  input.addEventListener('input', function (e) {
    const removeComma = e.target.value.replace(/,/g, '');
    e.target.value = removeComma;
  });

  // fire action when user paste a string with emails
  input.addEventListener('paste', (e) => {
    onPaste(e, props.action);
    e.target.blur();
  });

  return template;
};

class shareForm {
  constructor(selector, props) {
    this.selector = selector;
    this.list = document.createElement('span');
    this.props = props;
    this.emails = props?.emails || [];

    this.buildList(this.emails);
  }

  buildList() {
    this.emails.forEach((email) => {
      const template = emailLabel({
        email,
        action: () => this.removeEmail(template),
      });
      this.list.appendChild(template);
    });

    this.selector.appendChild(this.list);

    this.selector.appendChild(
      emailInput({
        placeholder: 'add more people...',
        action: (e) => this.addEmail(e),
      })
    );
  }

  addEmail(email) {
    this.appendChildEmail(email);
  }

  randomEmail() {
    const emailArray = [
      'push@push.it',
      'peter@doe.com',
      'linda@doe.ru',
      'lisa.pater@doe.com',
      'floor@longurl.it',
      'jan@longurl.com',
      'robert@longurl.ru',
      'britt.pater@longurl.com',
    ];
    const randomEmail =
      emailArray[Math.floor(Math.random() * emailArray.length)];

    this.appendChildEmail(randomEmail);
  }

  removeEmail(email) {
    this.list.removeChild(email);
  }

  appendChildEmail(email) {
    const template = emailLabel({
      email,
      action: () => this.removeEmail(template),
    });
    this.list.appendChild(template);
  }

  emailsCount() {
    const currentLength = this.list.querySelectorAll(
      '[data-share-form="share-box-email-label-container"]'
    ).length;
    alert(`Current email count is: ${currentLength}`);
  }
}

const setup = (selector, props) => new shareForm(selector, props);

exports.setup = setup;
//# sourceMappingURL=index.js.map
