const labelTemplate$1 = ({ email }) =>
  `
    <label data-share-form="share-box-email-label">
      ${email} <span data-share-form="share-box-email-close" tabindex="0">x</span>
    </label>
  `;

var emailLabel = (props) => {
  const { valid } = props;
  const template = document.createElement('div');
  template.dataset.shareForm = 'share-box-email-label-container';
  template.tabIndex = 0;
  template.classList.add(valid ? 'valid' : 'invalid');
  template.innerHTML = labelTemplate$1(props);
  template
    .querySelector('[data-share-form="share-box-email-close"]')
    .addEventListener('click', (e) => {
      props.action(e);
    });

  return template;
};

const labelTemplate = ({ placeholder }) =>
  `
    <input type="email" placeholder="${placeholder}" />
  `;

var emailInput = (props) => {
  const template = document.createElement('div');
  template.dataset.shareForm = 'share-box-input-container';
  template.innerHTML = labelTemplate(props);
  template.querySelector('input').addEventListener('blur', (e) => {
    props.onBlur(e);
  });

  return template;
};

class shareForm {
  constructor(selector, props) {
    this.selector = selector;
    this.props = props;
    this.emails = props?.emails || [];

    this.build(this.emails);
  }

  build() {
    this.buildList(this.emails);
  }

  buildList() {
    while (this.selector.firstChild) {
      this.selector.removeChild(this.selector.firstChild);
    }
    this.emails.forEach((email) => {
      this.selector.appendChild(
        emailLabel({
          email,
          action: () => this.removeEmail(email),
          valid: false,
        })
      );
    });
    this.selector.appendChild(
      emailInput({
        placeholder:
          this.emails.length > 0 ? 'add more people...' : 'add a person...',
        onBlur: (e) => this.onBlur(e),
      })
    );
  }

  addEmail(email) {
    this.emails.push(email);
    this.build(this.emails);
  }

  randomEmail() {
    this.emails.push('push@push.it');

    this.build(this.emails);
  }

  removeEmail(email) {
    const index = this.emails.indexOf(email);
    if (index !== -1) {
      this.emails.splice(index, 1);
    }

    this.buildList(this.emails);
  }

  emailsCount() {
    alert(`Current email count is: ${this.emails.length}`);
  }

  onBlur(e) {
    console.log(e?.target?.value, 'onBlur event');
    const newEmail = e?.target?.value;
    if (newEmail === '') return;
    this.addEmail(newEmail);
  }
}

const setup = (selector, props) => new shareForm(selector, props);

export { setup };
//# sourceMappingURL=index.js.map
