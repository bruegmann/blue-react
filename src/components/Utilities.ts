import {
    startLoading,
    finishLoading,
    showSuccess,
    hideSuccess,
    resetAlertMessage,
    setAlertMessage,
    guid,
    scrollToTop,
    fetchData
} from "blue-web/dist/js/utils.js"

/**
 * @deprecated Use (el as HTMLElement).classList.contains("my-class") instead.
 */
export function hasClass(el: HTMLElement | null, className: string) {
    if (el!.classList) return el!.classList.contains(className)
    else
        return !!el!.className.match(
            new RegExp("(\\s|^)" + className + "(\\s|$)")
        )
}

/**
 * @deprecated Use (el as HTMLElement).classList.add("my-class") instead.
 */
export function addClass(el: HTMLElement | null, className: string) {
    if (el!.classList) el!.classList.add(className)
    else if (!hasClass(el, className)) el!.className += " " + className
}

/**
 * @deprecated Use (el as HTMLElement).classList.remove("my-class") instead.
 */
export function removeClass(el: HTMLElement | null, className: string) {
    if (el!.classList) el!.classList.remove(className)
    else if (hasClass(el, className))
        el!.className = el!.className.replace(
            new RegExp("(\\s|^)" + className + "(\\s|$)"),
            " "
        )
}

/**
 * @deprecated Use (el as HTMLElement).classList.toggle("my-class") instead.
 */
export function toggleClass(element: HTMLElement | null, className: string) {
    if (!element || !className) {
        return
    }

    var classString = element.className,
        nameIndex = classString.indexOf(className)
    if (nameIndex === -1) {
        classString += " " + className
    } else {
        classString =
            classString.substr(0, nameIndex) +
            classString.substr(nameIndex + className.length)
    }
    element.className = classString
}

/**
 * @deprecated Is handled inside of `ActioMenu` component now
 */
export function toggleActions() {
    toggleClass(document.querySelector(".blue-wrapper")!, "active")
    toggleClass(document.querySelector(".blue-layout")!, "wrapper-in")

    const els = document.querySelectorAll(".blue-legacy-actions")
    for (let i = 0; i < els.length; i++) {
        toggleClass(els[i] as HTMLElement, "open")
    }
}

/**
 * @deprecated In future versions of Blue React, you will need to use utils of Blue Web directly.
 */
export default {
    hasClass,
    addClass,
    removeClass,
    toggleClass,
    startLoading,
    finishLoading,
    showSuccess,
    hideSuccess,
    toggleActions,
    resetAlertMessage,
    setAlertMessage,
    guid,
    scrollToTop,
    fetchData
}
