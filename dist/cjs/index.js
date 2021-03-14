'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const labelTemplate$1 = ({ email }) =>
  `
    <label data-share-form="share-box-email-label">
      ${email} <span data-share-form="share-box-email-close" tabindex="0">x</span>
    </label>
  `;

var emailLabel = (props) => {
  const template = document.createElement('div');
  template.dataset.shareForm = 'share-box-email-label-container';
  template.tabIndex = 0;
  template.classList.add(validateEmail(props.email) ? 'valid' : 'invalid');
  template.innerHTML = labelTemplate$1(props);
  template
    .querySelector('[data-share-form="share-box-email-close"]')
    .addEventListener('click', (e) => {
      props.action(template);
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
    input.value = '';
    onBlur(e, props.action);
  });

  // fire action when keypress is Comma or Enter
  input.addEventListener('keypress', (e) => {
    if (['Comma', 'Enter'].includes(e.code)) {
      onKeyDown(e, props.action);
      input.focus();
      input.removeEventListener('blur', onBlur);
    }
  });

  // fire action when
  input.addEventListener('paste', (e) => {
    onPaste(e, props.action);
    input.focus();
    input.removeEventListener('blur', onBlur);
  });

  return template;
};

class shareForm {
  constructor(selector, props) {
    this.selector = selector;
    this.list = document.createElement('span');
    this.props = props;
    this.emails = props?.emails || [];

    this.build(this.emails);
  }

  build() {
    this.buildList(this.emails);
  }

  buildList() {
    this.emails.forEach((email) => {
      const template = emailLabel({
        email,
        action: () => this.removeEmail(template),
      });
      this.list.appendChild(template);
      this.selector.appendChild(this.list);
    });

    this.selector.appendChild(
      emailInput({
        placeholder:
          this.emails.length > 0 ? 'add more people...' : 'add a person...',
        action: (e) => this.addEmail(e),
      })
    );
  }

  addEmail(email) {
    this.appendChildEmail(email);
  }

  randomEmail() {
    const email = 'push@push.it';
    this.appendChildEmail(email);
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
    alert(`Current email count is: ${this.emails.length}`);
  }
}

const setup = (selector, props) => new shareForm(selector, props);

exports.setup = setup;
//# sourceMappingURL=index.js.map
