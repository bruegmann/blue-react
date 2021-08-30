/// <reference types="react" />
import { BlueModalType } from "./shared";
export interface BlueModalProps {
    modalContent?: string;
    unSetModalContent: (modalContent?: string) => void;
    onSubmit?: (input: string | boolean) => void;
    defaultInput?: string;
    type: BlueModalType;
}
/**
 * Simple modal/dialog. Designed to be as an alternative to JavaScript's native `alert()`, `prompt()` and `confirm()` functions.
 * It uses Bootstrap's Modal components.
 */
export default function BlueModal({ modalContent, unSetModalContent, onSubmit, defaultInput, type }: BlueModalProps): JSX.Element;
