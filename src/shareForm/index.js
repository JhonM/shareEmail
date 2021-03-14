import { emailLabel } from '../components/email-label';
import { emailInput } from '../components/email-input';

export default class shareForm {
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
    this.selector.innerHTML = '';
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
