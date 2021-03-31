import emailLabel from '../src/components/email-label/email-label';
import { fullTrim } from './helpers/string-helpers';

describe('Email label component', () => {
  test('should render valid email', () => {
    const email = emailLabel({
      email: 'jane@doe.com',
      action: () => {
        return true;
      },
    });
    const userName: string = (<HTMLElement>(
      email.querySelector('[data-share-form="share-box-email"]')
    )).textContent!;

    expect(email.classList.contains('valid')).toBe(true);
    expect(fullTrim(userName)).toBe('jane@doe.com x');
  });

  test('should call close action', () => {
    const action = () => {
      return true;
    };
    const mockCallBack = jest.fn(action);
    const email = emailLabel({ email: 'jane@doe.com', action: mockCallBack });
    const closeButton: HTMLElement = email.querySelector(
      '[data-share-form="share-box-email-close"]',
    ) as HTMLElement;

    closeButton.click();
    expect(mockCallBack).toBeCalled();
  });
});
