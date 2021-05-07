"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Tries to display content in an iframe. When the content can't displayed in an iframe, it will show a download button instead.
 */
var DocumentView = /*#__PURE__*/function (_React$Component) {
  _inherits(DocumentView, _React$Component);

  var _super = _createSuper(DocumentView);

  function DocumentView() {
    var _this;

    _classCallCheck(this, DocumentView);

    _this = _super.call(this);
    _this.uniqueId = "document-view-" + _Utilities.default.guid();
    return _this;
  }

  _createClass(DocumentView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.supportsIframe()) {
        _Utilities.default.startLoading();

        if (this.props.content) {
          var iframe = document.getElementById(this.uniqueId);
          iframe.contentWindow.document.open();
          iframe.contentWindow.document.write(this.props.content);
          iframe.contentWindow.document.close();
        }
      }
    }
  }, {
    key: "supportsIframe",
    value: function supportsIframe() {
      return this.props.mimeType === "application/pdf" || this.props.mimeType === "image/png" || this.props.mimeType === "image/jpeg" || this.props.mimeType === "image/gif" || this.props.mimeType === "image/tiff" || this.props.mimeType === "text/plain" || this.props.mimeType === "text/html";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement("div", null, this.supportsIframe() ? /*#__PURE__*/_react.default.createElement("iframe", {
        id: this.uniqueId,
        className: "document-view-iframe",
        src: this.props.src,
        onLoad: function onLoad(_ref) {
          var target = _ref.target;

          _Utilities.default.finishLoading();

          var iframeContent = target.contentDocument || target.contentWindow.document;

          if (_this2.props.mimeType.indexOf("image/") > -1) {
            var image = iframeContent.querySelector("img");

            if (image) {
              if (image.offsetWidth > image.offsetHeight) {
                image.style.width = "100%";
              } else {
                image.style.height = "100%";
              }
            }
          }
        }
      }) : /*#__PURE__*/_react.default.createElement("a", {
        href: this.props.src,
        className: "btn btn-secondary btn-lg btn-block"
      }, this.props.showDocumentLabel));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        src: "about:blank",
        showDocumentLabel: "Show document"
      };
    }
  }]);

  return DocumentView;
}(_react.default.Component);

DocumentView.propTypes = {
  /**
   * Source of the content (URL)
   */
  src: _propTypes.default.string,

  /**
   * Instead of a source, you can also set the content directly (HTML)
   */
  content: _propTypes.default.any,

  /**
   * MIME type of the content (e.g. "application/pdf")
   */
  mimeType: _propTypes.default.string.isRequired,

  /**
   * Label for the button to display
   */
  showDocumentLabel: _propTypes.default.string
};
var _default = DocumentView;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0RvY3VtZW50Vmlldy5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudFZpZXciLCJ1bmlxdWVJZCIsIlV0aWxpdGllcyIsImd1aWQiLCJzdXBwb3J0c0lmcmFtZSIsInN0YXJ0TG9hZGluZyIsInByb3BzIiwiY29udGVudCIsImlmcmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJtaW1lVHlwZSIsInNyYyIsInRhcmdldCIsImZpbmlzaExvYWRpbmciLCJpZnJhbWVDb250ZW50IiwiY29udGVudERvY3VtZW50IiwiaW5kZXhPZiIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInNob3dEb2N1bWVudExhYmVsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0lBQ01BLFk7Ozs7O0FBQ0YsMEJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUVBLFVBQUtDLFFBQUwsR0FBZ0IsbUJBQW1CQyxtQkFBVUMsSUFBVixFQUFuQztBQUhVO0FBSWI7Ozs7V0FTRCw2QkFBb0I7QUFDaEIsVUFBSSxLQUFLQyxjQUFMLEVBQUosRUFBMkI7QUFDdkJGLDJCQUFVRyxZQUFWOztBQUVBLFlBQUksS0FBS0MsS0FBTCxDQUFXQyxPQUFmLEVBQXdCO0FBQ3BCLGNBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQUtULFFBQTdCLENBQWI7QUFFQU8sVUFBQUEsTUFBTSxDQUFDRyxhQUFQLENBQXFCRixRQUFyQixDQUE4QkcsSUFBOUI7QUFDQUosVUFBQUEsTUFBTSxDQUFDRyxhQUFQLENBQXFCRixRQUFyQixDQUE4QkksS0FBOUIsQ0FBb0MsS0FBS1AsS0FBTCxDQUFXQyxPQUEvQztBQUNBQyxVQUFBQSxNQUFNLENBQUNHLGFBQVAsQ0FBcUJGLFFBQXJCLENBQThCSyxLQUE5QjtBQUNIO0FBQ0o7QUFDSjs7O1dBRUQsMEJBQWlCO0FBQ2IsYUFBTyxLQUFLUixLQUFMLENBQVdTLFFBQVgsS0FBd0IsaUJBQXhCLElBQ0gsS0FBS1QsS0FBTCxDQUFXUyxRQUFYLEtBQXdCLFdBRHJCLElBRUgsS0FBS1QsS0FBTCxDQUFXUyxRQUFYLEtBQXdCLFlBRnJCLElBR0gsS0FBS1QsS0FBTCxDQUFXUyxRQUFYLEtBQXdCLFdBSHJCLElBSUgsS0FBS1QsS0FBTCxDQUFXUyxRQUFYLEtBQXdCLFlBSnJCLElBS0gsS0FBS1QsS0FBTCxDQUFXUyxRQUFYLEtBQXdCLFlBTHJCLElBTUgsS0FBS1QsS0FBTCxDQUFXUyxRQUFYLEtBQXdCLFdBTjVCO0FBT0g7OztXQUVELGtCQUFTO0FBQUE7O0FBQ0wsMEJBQ0ksMENBQ0ssS0FBS1gsY0FBTCxrQkFDRztBQUNJLFFBQUEsRUFBRSxFQUFFLEtBQUtILFFBRGI7QUFFSSxRQUFBLFNBQVMsRUFBQyxzQkFGZDtBQUdJLFFBQUEsR0FBRyxFQUFFLEtBQUtLLEtBQUwsQ0FBV1UsR0FIcEI7QUFJSSxRQUFBLE1BQU0sRUFBRSxzQkFBZ0I7QUFBQSxjQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQ3BCZiw2QkFBVWdCLGFBQVY7O0FBRUEsY0FBTUMsYUFBYSxHQUFHRixNQUFNLENBQUNHLGVBQVAsSUFBMEJILE1BQU0sQ0FBQ04sYUFBUCxDQUFxQkYsUUFBckU7O0FBRUEsY0FBSSxNQUFJLENBQUNILEtBQUwsQ0FBV1MsUUFBWCxDQUFvQk0sT0FBcEIsQ0FBNEIsUUFBNUIsSUFBd0MsQ0FBQyxDQUE3QyxFQUFnRDtBQUM1QyxnQkFBSUMsS0FBSyxHQUFHSCxhQUFhLENBQUNJLGFBQWQsQ0FBNEIsS0FBNUIsQ0FBWjs7QUFFQSxnQkFBSUQsS0FBSixFQUFXO0FBQ1Asa0JBQUlBLEtBQUssQ0FBQ0UsV0FBTixHQUFvQkYsS0FBSyxDQUFDRyxZQUE5QixFQUE0QztBQUN4Q0gsZ0JBQUFBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxLQUFaLEdBQW9CLE1BQXBCO0FBQ0gsZUFGRCxNQUdLO0FBQ0RMLGdCQUFBQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUUsTUFBWixHQUFxQixNQUFyQjtBQUNIO0FBQ0o7QUFDSjtBQUVKO0FBdEJMLFFBREgsZ0JBMEJHO0FBQUcsUUFBQSxJQUFJLEVBQUUsS0FBS3RCLEtBQUwsQ0FBV1UsR0FBcEI7QUFBeUIsUUFBQSxTQUFTLEVBQUM7QUFBbkMsU0FDSyxLQUFLVixLQUFMLENBQVd1QixpQkFEaEIsQ0EzQlIsQ0FESjtBQW1DSDs7O1NBbkVELGVBQTBCO0FBQ3RCLGFBQU87QUFDSGIsUUFBQUEsR0FBRyxFQUFFLGFBREY7QUFFSGEsUUFBQUEsaUJBQWlCLEVBQUU7QUFGaEIsT0FBUDtBQUlIOzs7O0VBWnNCQyxlQUFNQyxTOztBQTZFakMvQixZQUFZLENBQUNnQyxTQUFiLEdBQXlCO0FBQ3JCO0FBQ0o7QUFDQTtBQUNJaEIsRUFBQUEsR0FBRyxFQUFFaUIsbUJBQVVDLE1BSk07O0FBTXJCO0FBQ0o7QUFDQTtBQUNJM0IsRUFBQUEsT0FBTyxFQUFFMEIsbUJBQVVFLEdBVEU7O0FBV3JCO0FBQ0o7QUFDQTtBQUNJcEIsRUFBQUEsUUFBUSxFQUFFa0IsbUJBQVVDLE1BQVYsQ0FBaUJFLFVBZE47O0FBZ0JyQjtBQUNKO0FBQ0E7QUFDSVAsRUFBQUEsaUJBQWlCLEVBQUVJLG1CQUFVQztBQW5CUixDQUF6QjtlQXNCZWxDLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzXCI7XHJcblxyXG4vKipcclxuICogVHJpZXMgdG8gZGlzcGxheSBjb250ZW50IGluIGFuIGlmcmFtZS4gV2hlbiB0aGUgY29udGVudCBjYW4ndCBkaXNwbGF5ZWQgaW4gYW4gaWZyYW1lLCBpdCB3aWxsIHNob3cgYSBkb3dubG9hZCBidXR0b24gaW5zdGVhZC5cclxuICovXHJcbmNsYXNzIERvY3VtZW50VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnVuaXF1ZUlkID0gXCJkb2N1bWVudC12aWV3LVwiICsgVXRpbGl0aWVzLmd1aWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzcmM6IFwiYWJvdXQ6YmxhbmtcIixcclxuICAgICAgICAgICAgc2hvd0RvY3VtZW50TGFiZWw6IFwiU2hvdyBkb2N1bWVudFwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdXBwb3J0c0lmcmFtZSgpKSB7XHJcbiAgICAgICAgICAgIFV0aWxpdGllcy5zdGFydExvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnVuaXF1ZUlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC53cml0ZSh0aGlzLnByb3BzLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdXBwb3J0c0lmcmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5taW1lVHlwZSA9PT0gXCJhcHBsaWNhdGlvbi9wZGZcIiB8fFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1pbWVUeXBlID09PSBcImltYWdlL3BuZ1wiIHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWltZVR5cGUgPT09IFwiaW1hZ2UvanBlZ1wiIHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWltZVR5cGUgPT09IFwiaW1hZ2UvZ2lmXCIgfHxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5taW1lVHlwZSA9PT0gXCJpbWFnZS90aWZmXCIgfHxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5taW1lVHlwZSA9PT0gXCJ0ZXh0L3BsYWluXCIgfHxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5taW1lVHlwZSA9PT0gXCJ0ZXh0L2h0bWxcIjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN1cHBvcnRzSWZyYW1lKCkgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMudW5pcXVlSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvY3VtZW50LXZpZXctaWZyYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkPXsoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXRpbGl0aWVzLmZpbmlzaExvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZnJhbWVDb250ZW50ID0gdGFyZ2V0LmNvbnRlbnREb2N1bWVudCB8fCB0YXJnZXQuY29udGVudFdpbmRvdy5kb2N1bWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5taW1lVHlwZS5pbmRleE9mKFwiaW1hZ2UvXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2UgPSBpZnJhbWVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2Uub2Zmc2V0V2lkdGggPiBpbWFnZS5vZmZzZXRIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy5zcmN9IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyBidG4tYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0RvY3VtZW50TGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuRG9jdW1lbnRWaWV3LnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogU291cmNlIG9mIHRoZSBjb250ZW50IChVUkwpXHJcbiAgICAgKi9cclxuICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc3RlYWQgb2YgYSBzb3VyY2UsIHlvdSBjYW4gYWxzbyBzZXQgdGhlIGNvbnRlbnQgZGlyZWN0bHkgKEhUTUwpXHJcbiAgICAgKi9cclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5hbnksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNSU1FIHR5cGUgb2YgdGhlIGNvbnRlbnQgKGUuZy4gXCJhcHBsaWNhdGlvbi9wZGZcIilcclxuICAgICAqL1xyXG4gICAgbWltZVR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExhYmVsIGZvciB0aGUgYnV0dG9uIHRvIGRpc3BsYXlcclxuICAgICAqL1xyXG4gICAgc2hvd0RvY3VtZW50TGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50VmlldzsiXX0=