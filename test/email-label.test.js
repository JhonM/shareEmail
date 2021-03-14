import emailLabel from '../src/components/email-label/email-label.js';
const email = emailLabel({ email: 'jane@doe.com' });

describe('EmailLabel', () => {
  describe('email address', () => {
    it('should render valid email', () => {
      assert.equal(email.innerText.trim(), 'jane@doe.com x');
    });
  });
});
