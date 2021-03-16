import { Remove } from '../../../dist/assets/bundle';

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const labelTemplate = ({ email }) =>
  `
    <label data-share-form="share-box-email-label">
      <span>${email}<span>
      <span data-share-form="share-box-email-close" tabindex="0"><img src=${Remove}></span>
    </label>
  `;

export default (props) => {
  const template = document.createElement('div');
  template.dataset.shareForm = 'share-box-email-label-container';
  template.tabIndex = 0;
  template.classList.add(validateEmail(props.email) ? 'valid' : 'invalid');
  template.innerHTML = labelTemplate(props);

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
