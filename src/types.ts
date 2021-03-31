export interface Props {
  emails: string[];
}

export interface EmailType {
  email: string;
  action: () => void;
}

export interface InputType {
  placeholder: string;
  action: (e: string) => void;
}

export interface ClipboardEvent {
  clipboardData: any;
}
