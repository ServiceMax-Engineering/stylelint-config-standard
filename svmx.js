{
  "extends": ["stylelint-config-standard"],
  "rules": {
    // to support BEM
    "selector-class-pattern": "^([\\.\\%]?[a-z]*[-]?[a-z0-9\\-]*)(\\.[a-z0-9\\-]*)?(__[a-z0-9]*[-]?[a-z0-9\\-]*)?(--[a-z0-9]*[-]?[a-z0-9\\-]*)?(\\:[a-z]*)*$",
    // to support BEM
    "selector-id-pattern": "^([\\.\\%]?[a-z]*[-]?[a-z0-9\\-]*)(\\.[a-z0-9\\-]*)?(__[a-z0-9]*[-]?[a-z0-9\\-]*)?(--[a-z0-9]*[-]?[a-z0-9\\-]*)?(\\:[a-z]*)*$",
    // ignore custom element that is used for polymer element.
    "selector-type-no-unknown": [true, {"ignore": ["custom-elements"]}],
    // To support prettier.
    "at-rule-empty-line-before": null,
    // not our taste
    "rule-empty-line-before": null,
    // to support sass control directives
    "at-rule-no-unknown": null,
    // not our taste
    "order/properties-alphabetical-order": null,
    // no newline for if/else, to support prettier.
    "block-closing-brace-newline-after": ["always", {"ignoreAtRules": ["if", "else"]}]
  }
}
