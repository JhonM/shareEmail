const labelTemplate = ({ placeholder }) =>
  `
    <input type="email" placeholder="${placeholder}" />
  `;

export default (props) => {
  const template = document.createElement('div');
  template.className = 'share-box-input-container';
  template.innerHTML = labelTemplate(props);
  template.querySelector('input').addEventListener('blur', (e) => {
    props.onBlur(e);
  });

  return template;
};
