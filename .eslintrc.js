module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended", 
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
    "semi": ["error", "always"],
    "react/prop-types": 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  }
};
