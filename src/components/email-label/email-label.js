const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const labelTemplate = ({ email }) =>
  `
    <label data-share-form="share-box-email-label">
      ${email} <span data-share-form="share-box-email-close" tabindex="0">x</span>
    </label>
  `;

export default (props) => {
  const template = document.createElement('div');
  template.dataset.shareForm = 'share-box-email-label-container';
  template.tabIndex = 0;
  template.classList.add(validateEmail(props.email) ? 'valid' : 'invalid');
  template.innerHTML = labelTemplate(props);
  template
    .querySelector('[data-share-form="share-box-email-close"]')
    .addEventListener('click', (e) => {
      props.action(template);
    });

  return template;
};
