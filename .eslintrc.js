module.exports = {
    "parser": "babel-eslint",
    "globals": {
        "document": true,
        "window": true,
        "localStorage": true
    },
    "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": false,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "forOf": true,
        "generators": true,
        "modules": false,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": false,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "octalLiterals": false,
        "regexUFlag": false,
        "regexYFlag": false,
        "restParams": true,
        "spread": true,
        "superInFunctions": true,
        "templateStrings": true,
        "unicodePointEscapes": true,
        "globalReturn": false
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": 0,
        "semi": ["error", "never"],
        "no-console": "off",
        "arrow-parens": [2, "as-needed", { "requireForBlockBody": false }],
        "max-len": ["error", 500],
        "no-param-reassign": "off",
        "no-undef": "off",
        "arrow-body-style": "off",
        "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
        "linebreak-style": "off",
        "newline-per-chained-call": "off",
        "prefer-stateless-function": [0, { "ignorePureComponents": true }],
        "no-underscore-dangle": ["error", { "allowAfterThis": true }],
        "no-unneeded-ternary": "off",
        "no-plusplus": "off",
        "class-methods-use-this": ["error", { "exceptMethods": ["setToken", "getProfile", "getToken", "logout"] }],
        "prefer-destructuring": [  "warn",
            {
                "VariableDeclarator": {
                    "array": false,
                    "object": true
                },
                "AssignmentExpression": {
                    "array": true,
                    "object": true
                }
            },
            {
                "enforceForRenamedProperties": false
            }
        ]
    },
    "extends": ["airbnb"],
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
    ]
};