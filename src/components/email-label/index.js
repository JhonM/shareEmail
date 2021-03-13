const labelTemplate = ({ email, invalid, action }) =>
  `
    <label class="emailLabel ${invalid ? "red" : "blue"}" tabindex="0">
      ${email} <span class="close" tabindex="0">X</span>
    </label>
  `;

export default function emailLabel(props) {
  const template = document.createElement("template");
  template.innerHTML = labelTemplate(props);

  const label = template.content;

  if (props.action) {
    label.querySelector(".close").addEventListener("click", (e) => {
      props.action(e.srcElement);
    });
  }
  return label;
}
