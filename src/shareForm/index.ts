import { Props } from '../types';
import { emailLabel } from '../components/email-label';
import { emailInput } from '../components/email-input';

export default class shareForm {
  selector: HTMLElement;
  list: HTMLElement;
  props: Props;
  emails: string[];

  /**
   * @param {HTMLElement} selector -  the selector to bind this class to
   * @param {Array} (optional) props -  an array with object
   * @param props
   */
  constructor(selector: HTMLElement, props: Props) {
    this.selector = selector;
    this.list = document.createElement('span');
    this.props = props;
    this.emails = props?.emails || [];

    this.buildList();
  }

  /**
   * Builds list based on emails array and appends this to this.selector
   * Appends emailInput component this.selector
   */
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
        action: (e: string) => this.addEmail(e),
      }),
    );
  }

  /**
   * @param {string} email - adds an email to appendChildEmail
   */
  addEmail(email: string) {
    this.appendChildEmail(email);
  }

  /**
   * Adds a random email to appendChildEmail
   */
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

  /**
   * @param {string} email - removes an email from this.list
   */
  removeEmail(email: HTMLElement) {
    this.list.removeChild(email);
  }

  /**
   * @param {string} email - adds an email to emailLabel components and append this to this.list
   */
  appendChildEmail(email: string) {
    const template = emailLabel({
      email,
      action: () => this.removeEmail(template),
    });
    this.list.appendChild(template);
  }

  /**
   * Gets length from this.list
   */
  emailsCount() {
    const currentLength = this.list.querySelectorAll(
      '[data-share-form="share-box-email-label-container"]',
    ).length;
    alert(`Current email count is: ${currentLength}`);
  }
}
