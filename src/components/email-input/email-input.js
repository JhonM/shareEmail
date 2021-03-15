const labelTemplate = ({ placeholder }) =>
  `
    <input type="email" placeholder="${placeholder}" multiple>
  `;

const onBlur = (e, action) => {
  fireAction(e, action);
};

const onKeyDown = (e, action) => {
  fireAction(e, action);
};

const onPaste = (e, action) => {
  const paste = (e.clipboardData || window.clipboardData).getData('text');
  const pasteArr = paste.split(',');
  pasteArr.forEach((email) => action(email));
};

const fireAction = (e, action) => {
  const newEmail = e?.target?.value;
  if (newEmail === '') return;
  action(newEmail);
};

export default (props) => {
  const template = document.createElement('div');
  template.dataset.shareForm = 'share-box-input-container';
  template.innerHTML = labelTemplate(props);

  const input = template.querySelector('input');

  // fire action on blur
  input.addEventListener('blur', (e) => {
    onBlur(e, props.action);
  });

  // fire action when keypress is Comma or Enter
  input.addEventListener('keypress', (e) => {
    if (['Comma', 'Enter'].includes(e.code)) {
      onKeyDown(e, props.action);
      input.focus();
      input.removeEventListener('blur', onBlur);
    }
  });

  // fire action when
  input.addEventListener('paste', (e) => {
    onPaste(e, props.action);
    input.focus();
    input.removeEventListener('blur', onBlur);
  });

  return template;
};
