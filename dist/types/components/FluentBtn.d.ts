/// <reference types="react" />
export interface FluentBtnProps {
    /**
     * Content of the button. You can also set all other props you would give a button or a link.
     */
    children?: any;
    className?: string;
    /**
     * If set, it will be an `&lta&gt` element. Otherwise it will be a `&ltbutton&gt`.
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
 * Shortcut for `&lt;button class="fluent-btn"&gt;&lt;div className="fluent-btn-ball"&gt;&lt;/div&gt;&lt;/button&gt;`.
 * Button with a fancy and fluent acrylic effect.
 */
export default function FluentBtn(props: FluentBtnProps): JSX.Element;
