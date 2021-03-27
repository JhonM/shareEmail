import emailLabel from '../src/components/email-label/email-label';
import { fullTrim } from './helpers/string-helpers';

test('should render valid email', () => {
  const email = emailLabel({ email: 'jane@doe.com', action: () => { return true } });
  const userName = email.querySelector('[data-share-form="share-box-email"]')
  console.log(userName, 'username')
  expect(fullTrim(userName?.textContent)).toBe('jane@doe.com x');
});
