const labelTemplate = ({ email }) =>
  `
    <label data-share-form="share-box-email-label">
      ${email} <span data-share-form="share-box-email-close" tabindex="0">x</span>
    </label>
  `;

export default (props) => {
  const { valid } = props;
  const template = document.createElement('div');
  template.dataset.shareForm = 'share-box-email-label-container';
  template.tabIndex = 0;
  template.classList.add(valid ? 'valid' : 'invalid');
  template.innerHTML = labelTemplate(props);
  template
    .querySelector('[data-share-form="share-box-email-close"]')
    .addEventListener('click', (e) => {
      props.action(e);
    });

  return template;
};
