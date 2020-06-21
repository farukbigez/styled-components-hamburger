

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var StyledBurger = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n\n  li {\n    padding: 18px 10px;\n  }\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: #090909;\n    position: fixed;\n    transform: ", ";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 100%;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n\n    li {\n      color: #fff;\n      font-size: 24px;\n      text-align: center;\n    }\n  }\n"], ["\n list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n\n  li {\n    padding: 18px 10px;\n  }\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: #090909;\n    position: fixed;\n    transform: ", ";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 100%;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n\n    li {\n      color: #fff;\n      font-size: 24px;\n      text-align: center;\n    }\n  }\n"])), function (_a) {
    var open = _a.open;
    return open ? 'translateX(0)' : 'translateX(100%)';
});
var templateObject_1;

var Burger = function (_a) {
    var setOpen = _a.setOpen, open = _a.open;
    return (React.createElement(StyledBurger, { open: open, onClick: function () { return setOpen(!open); } },
        React.createElement("div", null),
        React.createElement("div", null),
        React.createElement("div", null)));
};

var StyledMenu = styled.nav(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n\n  li {\n    padding: 18px 10px;\n  }\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: #090909;\n    position: fixed;\n    transform: ", ";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 100%;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n\n    li {\n      color: #fff;\n      font-size: 24px;\n      text-align: center;\n    }\n  }\n"], ["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n\n  li {\n    padding: 18px 10px;\n  }\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: #090909;\n    position: fixed;\n    transform: ", ";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 100%;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n\n    li {\n      color: #fff;\n      font-size: 24px;\n      text-align: center;\n    }\n  }\n"])), function (_a) {
    var open = _a.open;
    return open ? 'translateX(0)' : 'translateX(100%)';
});
var templateObject_1$1;

var linkNames = "{linkNames}".trim();
var Menu = function (_a) {
    var open = _a.open;
    return (React.createElement(StyledMenu, { open: open },
        React.createElement("a", { href: "/" }, linkNames),
        React.createElement("a", { href: "/" }, linkNames),
        React.createElement("a", { href: "/" }, linkNames)));
};

var App = function () {
    var _a = React.useState(false), open = _a[0], setOpen = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(Burger, { open: open, setOpen: setOpen }),
        React.createElement(Menu, { open: open })));
};

exports.App = App;
exports.default = App;
//# sourceMappingURL=index.tsx.map
