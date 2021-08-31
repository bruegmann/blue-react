/// <reference types="react" />
import { ModalType } from "./shared";
export interface ModalProps {
    modalContent?: string;
    unSetModalContent: (modalContent?: string) => void;
    onSubmit?: (input: string | boolean | null) => void;
    defaultInput?: string;
    type: ModalType;
}
/**
 * Simple modal/dialog. Designed to be as an alternative to JavaScript's native `alert()`, `prompt()` and `confirm()` functions.
 * It uses Bootstrap's Modal components.
 */
export default function Modal({ modalContent, unSetModalContent, onSubmit, defaultInput, type }: ModalProps): JSX.Element;
