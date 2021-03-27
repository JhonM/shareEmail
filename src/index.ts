import ShareForm from "./shareForm";
import { Props } from './types'

export const setup = (selector: HTMLElement, props: Props) => new ShareForm(selector, props);
