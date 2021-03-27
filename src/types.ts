export interface Props {
  emails: string[]
}

export interface EmailType {
  email: string,
  action: () => void
} 

export interface InputType {
  placeholder: string,
  action: (e: string) => void
} 

export interface KeyboardEvent {
  code: string;
}

export interface FocusEvent {
  target: string;
}

export interface ClipboardEvent {
  clipboardData: any;
}

export interface Window {
  clipboardData: any;
}
