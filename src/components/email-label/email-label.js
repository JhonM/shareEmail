const labelTemplate = ({ email }) =>
  `
    <label class="share-box-email-label">
      ${email} <span class="share-box-email-close" tabindex="0">x</span>
    </label>
  `;

export default (props) => {
  const { valid } = props;
  const template = document.createElement('div');
  template.className = 'share-box-email-label-container';
  template.tabIndex = 0;
  template.classList.add(valid ? 'valid' : 'invalid');
  template.innerHTML = labelTemplate(props);
  template
    .querySelector('.share-box-email-close')
    .addEventListener('click', (e) => {
      props.action(e);
    });

  return template;
};
