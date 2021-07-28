"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Utilities = {};

Utilities.hasClass = function (el, className) {
  if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

Utilities.addClass = function (el, className) {
  if (el.classList) el.classList.add(className);else if (!Utilities.hasClass(el, className)) el.className += " " + className;
};

Utilities.removeClass = function (el, className) {
  if (el.classList) el.classList.remove(className);else if (Utilities.hasClass(el, className)) el.className = el.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
};

Utilities.toggleClass = function (element, className) {
  if (!element || !className) {
    return;
  }

  var classString = element.className,
      nameIndex = classString.indexOf(className);

  if (nameIndex === -1) {
    classString += ' ' + className;
  } else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
  }

  element.className = classString;
};

Utilities.startLoading = function () {
  document.querySelectorAll(".blue-app-loading")[0].style.display = "block";
};

Utilities.finishLoading = function () {
  document.querySelectorAll(".blue-app-loading")[0].style.display = "";
};

Utilities.showSuccess = function () {
  document.querySelectorAll(".blue-app-status-success")[0].style.display = "flex";
};

Utilities.hideSuccess = function () {
  document.querySelectorAll(".blue-app-status-success")[0].style.display = "";
};

Utilities.toggleActions = function () {
  this.toggleClass(document.querySelector(".blue-app-wrapper"), "active");
  this.toggleClass(document.querySelector(".blue-app-grid"), "wrapper-in");
  var els = document.querySelectorAll(".blue-app-actions");

  for (var i = 0; i < els.length; i++) {
    this.toggleClass(els[i], "open");
  }
};

Utilities.resetAlertMessage = function () {
  var alertClassName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "info";
  var alertElement = document.querySelectorAll(".blue-app-status-alert")[0];
  document.querySelectorAll(".blue-app-status-" + alertClassName)[0].style.display = "";
  alertElement.style.display = "";
  this.removeClass(alertElement, "alert-" + (alertClassName === "loading" ? "info" : alertClassName));
};

Utilities.setAlertMessage = function (message) {
  var _this = this;

  var alertClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
  var close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var detailText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var alertElement = document.querySelectorAll(".blue-app-status-alert")[0];

  if (alertClassName.indexOf("alert-") > -1) {
    alertClassName = alertClassName.replace("alert-", "");
  }

  document.querySelectorAll(".blue-app-status-" + alertClassName)[0].style.display = "flex";
  alertElement.style.display = "block";
  this.addClass(alertElement, "alert-" + (alertClassName === "loading" ? "info" : alertClassName));
  alertElement.querySelector(".alert-body").innerHTML = "<h2>" + message + "</h2>";

  if (detailText) {
    alertElement.querySelector(".alert-body").innerHTML += "<span>" + detailText + "</span>";
  }

  if (close) {
    alertElement.querySelector(".btn-close").style.display = "inline-block";

    alertElement.querySelector(".btn-close").onclick = function () {
      _this.resetAlertMessage(alertClassName);
    };
  } else {
    alertElement.querySelector(".btn-close").style.display = "none";
  }
};

Utilities.guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

Utilities.scrollToTop = function () {
  var routerPage = document.querySelector(".router-page.active");
  routerPage.scroll({
    behavior: "smooth",
    left: 0,
    top: 0
  });
};

Utilities.fluentBtnsListener = function (event, btn) {
  var btnBall = btn.querySelector(".fluent-btn-ball");
  var el = btn.getBoundingClientRect();
  var offset = {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY
  };
  var x = event.pageX - offset.left;
  var y = event.pageY - offset.top;
  btnBall.style.left = x + "px";
  btnBall.style.top = y + "px";
};

Utilities.unregisterFluentBtns = function () {
  var btns = document.querySelectorAll(".fluent-btn");
  btns.forEach(function (btn) {
    btn.removeEventListener("mousemove", function (event) {
      return Utilities.fluentBtnsListener(event, btn);
    });
  });
};

Utilities.registerFluentBtns = function () {
  Utilities.unregisterFluentBtns();
  var btns = document.querySelectorAll(".fluent-btn");
  btns.forEach(function (btn) {
    btn.addEventListener("mousemove", function (event) {
      return Utilities.fluentBtnsListener(event, btn);
    });
  });
};

Utilities.fetchData = function (input) {
  var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var showErrorDetail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var onError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  return fetch(input, init).then(function (response) {
    if (!response.ok) throw response;
    return response;
  }).catch(function (reason) {
    reason.text().then(function (errorMessage) {
      Utilities.setAlertMessage("".concat(reason.status, " - ").concat(reason.statusText), "danger", true, showErrorDetail ? errorMessage : undefined);

      if (onError) {
        onError(errorMessage, reason);
      }
    });
    throw reason;
  });
};

var _default = Utilities;
exports.default = _default;