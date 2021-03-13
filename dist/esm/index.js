const labelTemplate = ({ email, invalid, action }) =>
  `
    <label class="emailLabel ${invalid ? 'red' : 'blue'}" tabindex="0">
      ${email} <span class="close" tabindex="0">X</span>
    </label>
  `;

var emailLabel = (props) => {
  const template = document.createElement('template');
  template.innerHTML = labelTemplate(props);

  const label = template.content;

  if (props.action) {
    label.querySelector('.close').addEventListener('click', (e) => {
      props.action(e.srcElement);
    });
  }
  return label;
};

// export { default as emailContainer } from "./components/email-container";

class shareForm {
  constructor(selector, props) {
    this.selector = selector;
    this.props = props;

    this.build();
  }

  build() {
    this.selector.appendChild(
      emailLabel({ email: 'Jhon Majoor', action: () => alert('Clicked') })
    );
    console.log('build..');
  }

  age() {
    return this.selector;
  }
}

const setup = (selector, props) => new shareForm(selector, props);

export { setup };
//# sourceMappingURL=index.js.map
