import { Props } from '../types';
export default class shareForm {
    selector: HTMLElement;
    list: HTMLElement;
    props: Props;
    emails: string[];
    /**
     * @param {HTMLElement} selector -  the selector to bind this class to
     * @param {Array} (optional) props -  an array with object
     * @param props
     */
    constructor(selector: HTMLElement, props: Props);
    /**
     * Builds list based on emails array and appends this to this.selector
     * Appends emailInput component this.selector
     */
    buildList(): void;
    /**
     * @param {string} email - adds an email to appendChildEmail
     */
    addEmail(email: string): void;
    /**
     * Adds a random email to appendChildEmail
     */
    randomEmail(): void;
    /**
     * @param {string} email - removes an email from this.list
     */
    removeEmail(email: HTMLElement): void;
    /**
     * @param {string} email - adds an email to emailLabel components and append this to this.list
     */
    appendChildEmail(email: string): void;
    /**
     * Gets length from this.list
     */
    emailsCount(): void;
}
