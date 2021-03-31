import './css/index.scss';
import ShareForm from './shAreForm';
import { Props } from './types';

export const setup = (selector: HTMLElement, props: Props) =>
  new ShareForm(selector, props);
