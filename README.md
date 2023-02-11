# e-Plus Agency ESLint config

ESLint config based on Rocketseat's.

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies

```sh
npm i -D eslint @rocketseat/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:

```json
{
  "extends": "@rocketseat/eslint-config/react"
  // "extends": "@rocketseat/eslint-config/node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
