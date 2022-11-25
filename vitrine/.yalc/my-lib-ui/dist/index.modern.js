import React from 'react';

var InputTextComponent = function InputTextComponent() {
  console.log("HERE");
  return /*#__PURE__*/React.createElement("input", {
    type: "text"
  });
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var _btn;
var style = {
  btn: (_btn = {
    padding: "15px 32px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }, _btn["padding"] = "12px 16px", _btn.gap = "8px", _btn.position = "absolute", _btn.width = "150px", _btn.right = "9px", _btn),
  danger: {
    background: "#C00000",
    color: "white"
  }
};

var ButtonComponent = function ButtonComponent(props) {
  var button = _extends({}, style.btn, style[props.color]);
  return /*#__PURE__*/React.createElement("button", {
    style: button
  }, props.text);
};

var CheckBoxComponent = function CheckBoxComponent() {
  return /*#__PURE__*/React.createElement("div", null, "checkbox");
};

var RadioButtonComponent = function RadioButtonComponent() {
  return /*#__PURE__*/React.createElement("div", null, "radiobutton");
};

var SelectComponent = function SelectComponent() {
  return /*#__PURE__*/React.createElement("div", null, "select");
};

export { ButtonComponent, CheckBoxComponent, InputTextComponent, RadioButtonComponent, SelectComponent };
//# sourceMappingURL=index.modern.js.map
