import { ClipboardEvent, InputType } from '../../types';

/**
 * @param {string} placeholder - placeholder value
 */
const labelTemplate = (placeholder: string) =>
  `
    <input type="email" placeholder="${placeholder}" multiple>
  `;

/**
 * @param {string} e - blur value
 * @param {Function} action - callback function
 */
const onBlur = (e: string, action: (e: string) => void) => {
  fireAction(e, action);
};

/**
 * @param {string} e - keydown value
 * @param {Function} action - callback function
 */
const onKeyDown = (e: string, action: (e: string) => void) => {
  fireAction(e, action);
};

/**
 * @param {Event} ClipboardEvent - paste event
 * @param e
 * @param {Function} action - a callback function
 */
const onPaste = (e: ClipboardEvent, action: (e: string) => void) => {
  const paste = (e.clipboardData || (<any>window).clipboardData).getData(
    'text',
  );
  const pasteArr = paste.split(/[\s,]+/);
  pasteArr.forEach((email: string) => action(email));
};

/**
 * @param {string} e - passed in value
 * @param {Function} action - callback function
 */
const fireAction = (e: string, action: (e: string) => void) => {
  const newEmail = e;
  if (newEmail === '') return;
  action(newEmail);
};

/**
 * @param {Object} props - { placeholder, action }
 * returns Node
 */
export default (props: InputType) => {
  const template = document.createElement('div');
  template.dataset.shareForm = 'share-box-input-container';
  template.innerHTML = labelTemplate(props.placeholder);

  const input = template.querySelector('input');

  /**
   * fire action on blur
   */
  input?.addEventListener('blur', (e) => {
    onBlur((<HTMLInputElement>e.target).value, props.action);

    (<HTMLInputElement>e.target).value = '';
  });

  /**
   * fire action when keypress is Comma or Enter
   */
  input?.addEventListener('keydown', (e) => {
    if (
      e.keyCode === 188 ||
      e.keyCode === 13 ||
      ['Comma', 'Enter'].includes(e.code)
    ) {
      onKeyDown((<HTMLInputElement>e.target).value, props.action);

      (<HTMLInputElement>e.target).value = '';
      // input.removeEventListener('blur', onBlur);
    }
  });

  /**
   * make sure to strip the comma when when typing
   */
  input?.addEventListener('input', function (e) {
    const removeComma = (<HTMLInputElement>e.target).value.replace(/,/g, '');
    (<HTMLInputElement>e.target).value = removeComma;
  });

  /**
   * fire action when user paste a string with emails
   */
  input?.addEventListener('paste', (e) => {
    onPaste(e, props.action);
    (<HTMLInputElement>e.target).blur();
  });

  return template;
};
