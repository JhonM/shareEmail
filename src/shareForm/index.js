import emailLabel from "../components/email-label";
// export { default as emailContainer } from "./components/email-container";

export default class shareForm {
  constructor(selector, props) {
    this.selector = selector;
    this.props = props;

    this.build();
  }

  build() {
    this.selector.appendChild(
      emailLabel({ email: "Jhon Majoor", action: () => alert("Clicked") })
    );
    console.log("build..");
  }

  age() {
    return this.selector;
  }
}
