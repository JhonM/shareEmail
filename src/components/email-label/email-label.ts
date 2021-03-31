// import { Remove } from '../../../dist/assets/bundle';
import { EmailType } from '../../types'

/**
 * Validates email
 * @param {String} email - email value
 */
const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/**
 * @param {String} email - email value
 */
const labelTemplate = (email: string) =>
  `
    <label data-share-form="share-box-email-label">
      <span  data-share-form="share-box-email">${email}<span>
      <span data-share-form="share-box-email-close" tabindex="0">x</span>
    </label>
  `;

/**
 * @param {Object} props - { email, action }
 * returns Node
 */
export default (props: EmailType) => {
  const template = document.createElement('div');
  template.dataset.shareForm = 'share-box-email-label-container';
  template.tabIndex = 0;
  template.classList.add(validateEmail(props.email) ? 'valid' : 'invalid');
  template.innerHTML = labelTemplate(props.email);

  /**
    * remove email label on click
   */
  template?.querySelector('[data-share-form="share-box-email-close"]')
    ?.addEventListener('click', () => {
      props.action();
    });

  /**
   * remove email label on enter
   */
  template.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 || e.code === 'Enter') {
      props.action();
    }
  });

  return template;
};
