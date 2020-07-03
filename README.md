# Eslint config next app

Shareable configs for Next.js and typescript apps.

## Install

- Create a `.npmrc` file and add this line:

```
registry=https://npm.pkg.github.com/OWNER
```

and replace `OWNER` with your Github's username.

- Run

```bash
npm i -D @lednhatkhanh/eslint-config-next-app
```

- Add a `.eslintrc.js` file and add:

```javascript
'use strict';

module.exports = {
  extends: '@lednhatkhanh/eslint-config-next-app',
};
```
