/// <reference types="react" />
export interface FluentBtnProps {
    /**
     * Content of the button. You can also set all other props you would give a button or a link.
     */
    children?: any;
    className?: string;
    /**
     * If set, it will be an `<a>` element. Otherwise it will be a `<button>`.
     */
    href?: string;
    /**
     * Can be set for buttons with white background. The glow will be a little bit darker than.
     */
    light?: boolean;
    type?: string;
    title?: string;
    style?: any;
    onClick?: (e?: any) => void;
}
/**
 * @deprecated Fluent buttons got removed from blue-react.
 * Shortcut for `<button class="fluent-btn"><div className="fluent-btn-ball"></div></button>`.
 * Button with a fancy and fluent acrylic effect.
 */
export default function FluentBtn(props: FluentBtnProps): JSX.Element;
