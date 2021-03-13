import emailLabel from '../src/components/email-label/email-label.js';
const email = emailLabel({ email: 'jhon@example.com' });

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
      console.log(email, 'email');
    });
  });
});
