import { emailLabel } from '../components/email-label';
import { emailInput } from '../components/email-input';

export default class shareForm {
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
