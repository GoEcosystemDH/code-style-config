# @goecosystemdh/eslint-config

Shared ESLint configuration for GoEcosystemDH repositories.

## Instalacion

### Opcion 1: Setup automatico (recomendado)

```bash
bash <(curl -s https://raw.githubusercontent.com/GoEcosystemDH/code-style-config/main/scripts/setup-eslint.sh)
```

### Opcion 2: Manual

```bash
npm install --save-dev @goecosystemdh/eslint-config eslint
```

## Uso

### Flat config (ESLint 9+, recomendado)

Crea `eslint.config.js` en la raiz de tu repo:

```js
import goecosystemConfig from '@goecosystemdh/eslint-config';
export default goecosystemConfig;
```

### Legacy config (ESLint 7/8)

Crea `.eslintrc.js`:

```js
module.exports = {
  extends: ['@goecosystemdh/eslint-config/legacy']
};
```

### Con React

```js
import base from '@goecosystemdh/eslint-config';
import react from '@goecosystemdh/eslint-config/react';
export default [...base, ...react];
```

### Con Angular

```js
import base from '@goecosystemdh/eslint-config';
import angular from '@goecosystemdh/eslint-config/angular';
export default [...base, ...angular];
```

## Reglas incluidas

Todas las reglas estan en nivel `warn` (no `error`) para no romper codigo legacy.

| Regla | Nivel | Por que |
| --- | --- | --- |
| `no-unused-vars` | warn | Detecta variables/parametros sin usar. Excluye `_` prefijado. |
| `no-console` | warn | Permite `warn`, `error`, `info`. Bloquea `log`, `debug` en produccion. |
| `prefer-const` | warn | `let` que nunca se reasigna debe ser `const` |
| `eqeqeq` | warn | Usar `===` en lugar de `==` (permite `== null` check) |
| `no-var` | warn | Usar `let`/`const` en lugar de `var` |
| `no-unreachable` | warn | Codigo despues de `return`/`throw` |
| `@typescript-eslint/no-explicit-any` | warn | Evitar `any`, preferir tipos especificos |
| `require-await` | warn | Funcion `async` sin `await` (probable bug) |
| `no-duplicate-imports` | warn | Multiples imports del mismo modulo |
| `no-useless-catch` | warn | `try/catch` que solo re-lanza el error |

## Overrides locales

Si necesitas desactivar una regla en un archivo especifico:

```js
// eslint-disable-next-line no-console
console.log('debug');
```

Para desactivar en todo un archivo:

```js
/* eslint-disable no-console */
```

En `eslint.config.js` del repo:

```js
import goecosystemConfig from '@goecosystemdh/eslint-config';

export default [
  ...goecosystemConfig,
  {
    rules: {
      'no-console': 'off',  // override global
    }
  }
];
```

## Scripts sugeridos en package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Referencia

- [Documentacion ESLint](https://eslint.org/)
- [Flat config guide](https://eslint.org/docs/latest/use/configure/configuration-files)
- [typescript-eslint](https://typescript-eslint.io/)
- Task AzDO: [#4097](https://dev.azure.com/goecosystem/Go-Devops/_workitems/edit/4097)
