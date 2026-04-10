# goecosystemdh/php-cs-fixer-config

Shared PHP-CS-Fixer configuration for GoEcosystemDH PHP repositories.

**Soporta:** PHP 7.4+ y PHP 8.x (compatible con CodeIgniter 3 legacy y Laravel moderno)

## Instalacion

### Opcion 1: Setup automatico (recomendado)

```bash
bash <(curl -s https://raw.githubusercontent.com/GoEcosystemDH/code-style-config/main/scripts/setup-php-cs-fixer.sh)
```

### Opcion 2: Manual

Agregar a `composer.json` del repo:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GoEcosystemDH/code-style-config"
    }
  ],
  "require-dev": {
    "goecosystemdh/php-cs-fixer-config": "^1.0",
    "friendsofphp/php-cs-fixer": "^3.0"
  }
}
```

Luego:

```bash
composer update
```

## Uso

Crear `.php-cs-fixer.dist.php` en la raiz del repo:

```php
<?php

require_once __DIR__ . '/vendor/autoload.php';

use GoEcosystemDH\CodeStyle\Config;
use PhpCsFixer\Finder;

$finder = Finder::create()
    ->in(__DIR__)
    ->exclude(['vendor', 'node_modules', 'storage', 'bootstrap/cache'])
    ->name('*.php')
    ->notName('*.blade.php');

return (new Config())->setFinder($finder);
```

## Reglas incluidas

**Base:** `@PSR12` (el estandar PHP oficial)

**Curated Symfony rules** (solo safe, non-behavioral):

| Regla | Efecto |
| --- | --- |
| `array_syntax: short` | `[]` en lugar de `array()` |
| `ordered_imports` | Imports ordenados alfabeticamente |
| `no_unused_imports` | Elimina `use` statements sin usar |
| `single_quote` | Prefiere `'foo'` en lugar de `"foo"` cuando no hay interpolacion |
| `trailing_comma_in_multiline` | Coma final en arrays multilinea |
| `blank_line_before_statement` | Linea en blanco antes de `return` |
| `cast_spaces` | `(int) $x` con espacio |
| `concat_space` | `.` con espacios: `'a' . 'b'` |
| `method_argument_space` | Argumentos multilinea bien formateados |
| `no_empty_comment`, `no_empty_phpdoc` | Limpia comentarios vacios |
| `no_extra_blank_lines` | Maximo una linea en blanco consecutiva |
| `normalize_index_brace` | `$arr[0]` en lugar de `$arr{0}` |
| `space_after_semicolon` | Espacio despues de `;` en `for` |
| `standardize_not_equals` | `!=` en lugar de `<>` |

## Risky rules

**Desactivadas** (`setRiskyAllowed(false)`) por defecto para no cambiar comportamiento en codigo legacy.

Si quieres habilitarlas en tu repo:

```php
return (new Config())
    ->setRiskyAllowed(true)
    ->setFinder($finder);
```

## Scripts sugeridos en composer.json

```json
{
  "scripts": {
    "lint": "php-cs-fixer fix --dry-run --diff",
    "lint:fix": "php-cs-fixer fix"
  }
}
```

## Integracion con VS Code

Instalar la extension `junstyle.php-cs-fixer` y configurar:

```json
{
  "php-cs-fixer.executablePath": "${workspaceFolder}/vendor/bin/php-cs-fixer",
  "php-cs-fixer.config": ".php-cs-fixer.dist.php",
  "php-cs-fixer.onsave": true
}
```

## Referencia

- [PHP-CS-Fixer](https://cs.symfony.com/)
- [PSR-12](https://www.php-fig.org/psr/psr-12/)
- Task AzDO: [#4097](https://dev.azure.com/goecosystem/Go-Devops/_workitems/edit/4097)
