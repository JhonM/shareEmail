import emailLabel from "../email-label";

export default function emailContainer(element, props) {
  const selector = element;
  const options = Object.assign(props, { action: () => console.log("action") });

  selector.appendChild(emailLabel(options));
}
