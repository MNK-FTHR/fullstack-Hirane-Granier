import React from 'react';

var style = {
  wrapper: {
    position: "relative",
    width: "100%"
  },
  textInput: {
    border: "none",
    color: "red",
    borderBottom: "0.125rem solid black",
    backgroundColor: "#F9F9F9",
    width: "100%",
    height: "2rem",
    fontSize: "1rem",
    lineHeight: "147.6%",
    padding: "18px 12px 18px 16px",
    textDecoration: "none",
    outline: "none"
  },
  subText: {
    position: "absolute",
    top: "-1rem",
    left: "0.875rem",
    lineHeight: "147.6%",
    color: "rgba(19, 19, 21, 0.6)",
    transition: "top .2s"
  }
};

var InputTextComponent = function InputTextComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: style.wrapper
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    style: style.textInput
  }), /*#__PURE__*/React.createElement("span", {
    style: style.subText
  }, props.fieldName)));
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

var style$1 = {
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 16px",
    gap: "8px",
    width: "150px",
    right: "9px",
    border: "none",
    cursor: "pointer"
  },
  danger: {
    background: "#C00000",
    color: "white"
  }
};

var ButtonComponent = function ButtonComponent(props) {
  var button = _extends({}, style$1.btn, style$1[props.color]);
  props.maxWidth ? button.width = "100%" : "";
  return /*#__PURE__*/React.createElement("button", {
    style: button,
    onClick: function onClick(event) {
      return props.handleSubmit(event, []);
    }
  }, props.text);
};

var CheckBoxComponent = function CheckBoxComponent(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("span", null, props.text)));
};

var RadioButtonComponent = function RadioButtonComponent(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    id: props.text,
    name: props.text,
    value: props.text
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "huey"
  }, props.text));
};

var style$2 = {
  select: {
    border: "none",
    borderBottom: "0.125rem solid black",
    backgroundColor: "#F9F9F9",
    width: "100%",
    fontSize: "1rem",
    padding: "18px 12px 18px 16px",
    color: "rgba(19, 19, 21, 0.6)"
  },
  subText: {
    top: "0.5rem",
    left: "0.875rem",
    lineHeight: "147.6%",
    zIndex: "0",
    color: "rgba(19, 19, 21, 0.6)",
    transition: "top .2s"
  }
};

var SelectComponent = function SelectComponent(props) {
  var customSelectedOption = "";
  var parsedCustomSelectedOption = props.nationalities.filter(function (nationality) {
    return nationality.value === customSelectedOption;
  });
  var handleChange = function handleChange(event) {
    var val = event.target.value;
    customSelectedOption = val;
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: style$2.subText
  }, "Nationalit\xE9"), /*#__PURE__*/React.createElement("select", {
    style: style$2.select,
    onChange: function onChange(e) {
      return handleChange(e);
    },
    value: parsedCustomSelectedOption.label
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true,
    disabled: true
  }, "S\xE9lectinnez une valeur"), props.nationalities.map(function (nationality) {
    return /*#__PURE__*/React.createElement("option", {
      value: nationality.value,
      key: nationality.value
    }, nationality.label);
  })));
};

export { ButtonComponent, CheckBoxComponent, InputTextComponent, RadioButtonComponent, SelectComponent };
//# sourceMappingURL=index.modern.js.map
