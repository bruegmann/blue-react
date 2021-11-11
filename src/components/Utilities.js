let Utilities = {}

Utilities.hasClass = function (el, className) {
    if (el.classList) return el.classList.contains(className)
    else
        return !!el.className.match(
            new RegExp("(\\s|^)" + className + "(\\s|$)")
        )
}

Utilities.addClass = function (el, className) {
    if (el.classList) el.classList.add(className)
    else if (!Utilities.hasClass(el, className)) el.className += " " + className
}

Utilities.removeClass = function (el, className) {
    if (el.classList) el.classList.remove(className)
    else if (Utilities.hasClass(el, className))
        el.className = el.className.replace(
            new RegExp("(\\s|^)" + className + "(\\s|$)"),
            " "
        )
}

Utilities.toggleClass = function (element, className) {
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

Utilities.startLoading = function () {
    document.querySelectorAll(".blue-loading")[0].style.display = "block"
}

Utilities.finishLoading = function () {
    document.querySelectorAll(".blue-loading")[0].style.display = ""
}

Utilities.showSuccess = function () {
    document.querySelectorAll(".blue-status-success")[0].style.display =
        "flex"
}

Utilities.hideSuccess = function () {
    document.querySelectorAll(".blue-status-success")[0].style.display = ""
}

Utilities.toggleActions = function () {
    this.toggleClass(document.querySelector(".blue-wrapper"), "active")
    this.toggleClass(document.querySelector(".blue-grid"), "wrapper-in")

    var els = document.querySelectorAll(".blue-actions")
    for (var i = 0; i < els.length; i++) {
        this.toggleClass(els[i], "open")
    }
}

Utilities.resetAlertMessage = function (alertClassName = "info") {
    const alertElement = document.querySelectorAll(".blue-status-alert")[0]
    document.querySelectorAll(
        ".blue-status-" + alertClassName
    )[0].style.display = ""
    alertElement.style.display = ""
    this.removeClass(
        alertElement,
        "alert-" + (alertClassName === "loading" ? "info" : alertClassName)
    )
}

Utilities.setAlertMessage = function (
    message,
    alertClassName = "info",
    close = undefined,
    detailText = undefined
) {
    const alertElement = document.querySelectorAll(".blue-status-alert")[0]

    if (alertClassName.indexOf("alert-") > -1) {
        alertClassName = alertClassName.replace("alert-", "")
    }

    document.querySelectorAll(
        ".blue-status-" + alertClassName
    )[0].style.display = "flex"
    alertElement.style.display = "block"
    this.addClass(
        alertElement,
        "alert-" + (alertClassName === "loading" ? "info" : alertClassName)
    )

    alertElement.querySelector(".alert-body").innerHTML =
        `<h2>` + message + `</h2>`
    if (detailText) {
        alertElement.querySelector(".alert-body").innerHTML +=
            `<span>` + detailText + `</span>`
    }

    if (close) {
        alertElement.querySelector(".btn-close").style.display = "inline-block"
        alertElement.querySelector(".btn-close").onclick = () => {
            this.resetAlertMessage(alertClassName)
        }
    } else {
        alertElement.querySelector(".btn-close").style.display = "none"
    }
}

Utilities.guid = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    }
    return (
        s4() +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        s4() +
        s4()
    )
}

Utilities.scrollToTop = () => {
    const routerPage = document.querySelector(".router-page.active")

    routerPage.scroll({
        behavior: "smooth",
        left: 0,
        top: 0
    })
}

/**
 * @deprecated Fluent buttons got removed from blue-react.
 */
Utilities.fluentBtnsListener = (event, btn) => {
}

/**
 * @deprecated Fluent buttons got removed from blue-react.
 */
Utilities.unregisterFluentBtns = () => {
}

/**
 * @deprecated Fluent buttons got removed from blue-react.
 */
Utilities.registerFluentBtns = () => {
}

Utilities.fetchData = function (
    input,
    init = undefined,
    showErrorDetail = true,
    onError = undefined
) {
    return fetch(input, init)
        .then((response) => {
            if (!response.ok) throw response
            return response
        })
        .catch((reason) => {
            if (reason.text) {
                reason.text().then((errorMessage) => {
                    Utilities.setAlertMessage(
                        `${reason.status} - ${reason.statusText}`,
                        "danger",
                        true,
                        showErrorDetail ? errorMessage : undefined
                    )

                    if (onError) {
                        onError(errorMessage, reason)
                    }
                })
            }
            throw reason
        })
}

export default Utilities
