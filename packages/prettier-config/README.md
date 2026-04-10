# @goecosystemdh/prettier-config

Shared Prettier configuration for GoEcosystemDH repositories.

## Instalacion

### Opcion 1: Setup automatico (recomendado)

```bash
bash <(curl -s https://raw.githubusercontent.com/GoEcosystemDH/code-style-config/main/scripts/setup-prettier.sh)
```

### Opcion 2: Manual

```bash
npm install --save-dev @goecosystemdh/prettier-config prettier
```

## Uso

### Opcion A: En package.json (recomendado)

```json
{
  "prettier": "@goecosystemdh/prettier-config"
}
```

### Opcion B: Archivo prettier.config.js

```js
import goecosystemConfig from '@goecosystemdh/prettier-config';
export default goecosystemConfig;
```

### Opcion C: Override parcial

```js
import goecosystemConfig from '@goecosystemdh/prettier-config';

export default {
  ...goecosystemConfig,
  printWidth: 120,  // override el default de 100
};
```

## Reglas incluidas

| Regla | Valor | Por que |
| --- | --- | --- |
| `printWidth` | `100` | Balance entre pantallas modernas y legibilidad |
| `tabWidth` | `2` | Estandar en JS/TS/HTML |
| `useTabs` | `false` | Spaces consistentes |
| `semi` | `true` | Semicolons explicitos (evita ambiguedades) |
| `singleQuote` | `true` | Consistencia visual |
| `quoteProps` | `'as-needed'` | Comillas solo cuando son necesarias en keys de objeto |
| `trailingComma` | `'all'` | Diffs mas limpios al agregar items |
| `bracketSpacing` | `true` | `{ foo }` mas legible que `{foo}` |
| `bracketSameLine` | `false` | `>` en linea nueva en JSX |
| `arrowParens` | `'always'` | `(x) =>` en lugar de `x =>` (consistencia) |
| `endOfLine` | `'lf'` | Unix line endings (evita problemas cross-OS) |

## Overrides por tipo de archivo

| Archivo | Override | Por que |
| --- | --- | --- |
| `*.md` | `proseWrap: 'preserve'` | No quebrar parrafos existentes |
| `*.yml`, `*.yaml` | `singleQuote: false` | YAML tradicionalmente usa double quotes |
| `*.json` | `printWidth: 120` | JSON se ve mejor con lineas mas largas |

## Scripts sugeridos en package.json

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

## Integracion con VS Code

Instalar la extension `esbenp.prettier-vscode` y agregar en `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Referencia

- [Documentacion Prettier](https://prettier.io/)
- [Options](https://prettier.io/docs/en/options.html)
- Task AzDO: [#4097](https://dev.azure.com/goecosystem/Go-Devops/_workitems/edit/4097)
