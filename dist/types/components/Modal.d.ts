/// <reference types="react" />
import { ModalType } from "./shared";
export interface ModalProps {
    modalContent?: string;
    unSetModalContent: (modalContent?: string) => void;
    /**
     * Type of `input` depends on `type` prop and which action occured.
     * When it's a string, the user entered something. When it's a boolean, the user clicked "Yes" or "No".
     * When it's `null`, the user cancelled the modal.
     */
    onSubmit?: (input: string | boolean | null) => void;
    defaultInput?: string;
    /**
     * `"ask"` | `"tell"` | `"verify"`
     */
    type: ModalType;
}
/**
 * Simple modal/dialog. Designed to work as an alternative to JavaScript's native `alert()`, `prompt()` and `confirm()` functions.
 * It uses Bootstrap's Modal components.
 *
 * For easy use, you should use the hook `useModal` together with `ModalProvider`. See the example below.
 */
export default function Modal({ modalContent, unSetModalContent, onSubmit, defaultInput, type }: ModalProps): JSX.Element;
