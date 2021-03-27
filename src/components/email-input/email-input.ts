import {ClipboardEvent, InputType } from '../../types';

const labelTemplate = (placeholder: string) =>
  `
    <input type="email" placeholder="${placeholder}" multiple>
  `;

const onBlur = (e: string, action: (e: string) => void) => {
  fireAction(e, action);
};

const onKeyDown = (e: string, action: (e: string) => void) => {
  fireAction(e, action);
};

const onPaste = (e:ClipboardEvent, action: (e: string) => void) => {
  const paste = (e.clipboardData || window.clipboardData).getData('text');
  const pasteArr = paste.split(',');
  pasteArr.forEach((email: string) => action(email));
};

const fireAction = (e:string, action: (e: string) => void) => {
  const newEmail = e;
  if (newEmail === '') return;
  action(newEmail);
};

export default (props: InputType) => {
  const template = document.createElement('div');
  template.dataset.shareForm = 'share-box-input-container';
  template.innerHTML = labelTemplate(props.placeholder);

  const input = template.querySelector('input');

  // fire action on blur
  input?.addEventListener('blur', (e) => {
    onBlur((<HTMLInputElement>e.target).value, props.action);

      (<HTMLInputElement>e.target).value = '';
  });

  // fire action when keypress is Comma or Enter
  input?.addEventListener('keydown', (e) => {
    if (
      e.keyCode === 188 ||
      e.keyCode === 13 ||
      ['Comma', 'Enter'].includes(e.code)
    ) {
      onKeyDown((<HTMLInputElement>e.target).value, props.action);

      (<HTMLInputElement>e.target).value = '';
      input.removeEventListener('blur', onBlur);
    }
  });

  // make sure to strip the comma when when typing
  input?.addEventListener('input', function (e) {
    const removeComma = (<HTMLInputElement>e.target).value.replace(/,/g, '');
    (<HTMLInputElement>e.target).value = removeComma;
  });

  // fire action when user paste a string with emails
  input?.addEventListener('paste', (e) => {
    onPaste(e, props.action);
    (<HTMLInputElement>e.target).blur();
  });

  return template;
};
