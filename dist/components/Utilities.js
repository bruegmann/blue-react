"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClass = addClass;
exports.default = void 0;
exports.fetchData = fetchData;
exports.finishLoading = finishLoading;
exports.guid = void 0;
exports.hasClass = hasClass;
exports.hideSuccess = hideSuccess;
exports.removeClass = removeClass;
exports.resetAlertMessage = resetAlertMessage;
exports.scrollToTop = scrollToTop;
exports.setAlertMessage = setAlertMessage;
exports.showSuccess = showSuccess;
exports.startLoading = startLoading;
exports.toggleActions = toggleActions;
exports.toggleClass = toggleClass;

function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += " " + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);else if (hasClass(el, className)) el.className = el.className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)"), " ");
}
/**
 * @deprecated Use (el as HTMLElement).classList.toggle("my-class") instead.
 */


function toggleClass(element, className) {
  if (!element || !className) {
    return;
  }

  var classString = element.className,
      nameIndex = classString.indexOf(className);

  if (nameIndex === -1) {
    classString += " " + className;
  } else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
  }

  element.className = classString;
}

function startLoading() {
  ;
  document.querySelector(".blue-loading").style.display = "block";
}

function finishLoading() {
  ;
  document.querySelector(".blue-loading").style.display = "";
}

function showSuccess() {
  ;
  document.querySelector(".blue-status-success").style.display = "flex";
}

function hideSuccess() {
  ;
  document.querySelector(".blue-status-success").style.display = "";
}

function toggleActions() {
  toggleClass(document.querySelector(".blue-wrapper"), "active");
  toggleClass(document.querySelector(".blue-layout"), "wrapper-in");
  var els = document.querySelectorAll(".blue-actions");

  for (var i = 0; i < els.length; i++) {
    toggleClass(els[i], "open");
  }
}
/**
 * Resets alert messages that was set with `setAlertMessage`.
 * @param alertClassName Leave empty to reset messages of any status type
 */


function resetAlertMessage(alertClassName) {
  if (!alertClassName) {
    ;
    ["loading", "success", "info", "warning", "danger"].forEach(function (status) {
      resetAlertMessage(status);
    });
  } else {
    var alertElement = document.querySelector(".blue-status-alert");
    document.querySelector(".blue-status-" + alertClassName).style.display = "";
    alertElement.style.display = "";
    removeClass(alertElement, "alert-" + (alertClassName === "loading" ? "info" : alertClassName));
  }
}

function setAlertMessage(message) {
  var alertClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
  var close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var detailText = arguments.length > 3 ? arguments[3] : undefined;
  var alertElement = document.querySelector(".blue-status-alert");
  document.querySelector(".blue-status-" + alertClassName).style.display = "flex";
  alertElement.style.display = "block";
  addClass(alertElement, "alert-" + (alertClassName === "loading" ? "info" : alertClassName));
  alertElement.querySelector(".alert-body").innerHTML = "<h2>" + message + "</h2>";

  if (detailText) {
    alertElement.querySelector(".alert-body").innerHTML += "<span>" + detailText + "</span>";
  }

  var btnCloseElement = alertElement.querySelector(".btn-close");

  if (close) {
    btnCloseElement.style.display = "inline-block";

    btnCloseElement.onclick = function () {
      resetAlertMessage(alertClassName);
    };
  } else {
    btnCloseElement.style.display = "none";
  }
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var guid = function guid() {
  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
};

exports.guid = guid;

function scrollToTop() {
  var routerPage = document.querySelector(".router-page.active");
  routerPage.scroll({
    behavior: "smooth",
    left: 0,
    top: 0
  });
}

function fetchData(input, init) {
  var showErrorDetail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var onError = arguments.length > 3 ? arguments[3] : undefined;
  return fetch(input, init).then(function (response) {
    if (!response.ok) throw response;
    return response;
  }).catch(function (reason) {
    if (reason.text) {
      reason.text().then(function (errorMessage) {
        setAlertMessage("".concat(reason.status, " - ").concat(reason.statusText), "danger", true, showErrorDetail ? errorMessage : undefined);

        if (onError) {
          onError(errorMessage, reason);
        }
      });
    }

    throw reason;
  });
}

var _default = {
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  startLoading: startLoading,
  finishLoading: finishLoading,
  showSuccess: showSuccess,
  hideSuccess: hideSuccess,
  toggleActions: toggleActions,
  resetAlertMessage: resetAlertMessage,
  setAlertMessage: setAlertMessage,
  guid: guid,
  scrollToTop: scrollToTop,
  fetchData: fetchData
};
exports.default = _default;