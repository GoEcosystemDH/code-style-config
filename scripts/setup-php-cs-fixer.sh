#!/usr/bin/env bash
set -euo pipefail

echo "Configurando goecosystemdh/php-cs-fixer-config..."
echo ""

# Verify composer
if ! command -v composer &>/dev/null; then
  echo "ERROR: Composer no encontrado. Instala Composer antes de continuar."
  echo "  https://getcomposer.org/"
  exit 1
fi

# Verify git repo
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
  echo "ERROR: No estas dentro de un repositorio git."
  exit 1
fi

REPO_ROOT=$(git rev-parse --show-toplevel)
cd "$REPO_ROOT"

# Ensure composer.json exists
if [ ! -f composer.json ]; then
  echo "ERROR: composer.json no encontrado. Este repo no parece ser PHP."
  exit 1
fi

# Add VCS repository entry and require-dev entries via composer
echo "Configurando composer.json..."
composer config repositories.goecosystemdh-code-style vcs https://github.com/GoEcosystemDH/code-style-config
composer require --dev goecosystemdh/php-cs-fixer-config:^1.0 friendsofphp/php-cs-fixer:^3.0

# Create .php-cs-fixer.dist.php if not exists
if [ -f .php-cs-fixer.dist.php ]; then
  cp .php-cs-fixer.dist.php .php-cs-fixer.dist.php.backup
  echo "WARN: .php-cs-fixer.dist.php existente respaldado"
fi

cat > .php-cs-fixer.dist.php << 'EOF'
<?php

require_once __DIR__ . '/vendor/autoload.php';

use GoEcosystemDH\CodeStyle\Config;
use PhpCsFixer\Finder;

$finder = Finder::create()
    ->in(__DIR__)
    ->exclude([
        'vendor',
        'node_modules',
        'storage',
        'bootstrap/cache',
    ])
    ->name('*.php')
    ->notName('*.blade.php');

return (new Config())->setFinder($finder);
EOF
echo "OK: .php-cs-fixer.dist.php creado"

# Add scripts to composer.json via jq if available
if command -v jq &>/dev/null; then
  tmp=$(mktemp)
  jq '.scripts.lint = "php-cs-fixer fix --dry-run --diff" | .scripts["lint:fix"] = "php-cs-fixer fix"' composer.json > "$tmp" && mv "$tmp" composer.json
  echo "OK: scripts lint y lint:fix agregados a composer.json"
fi

# Add cache file to .gitignore
if [ -f .gitignore ] && ! grep -q "\.php-cs-fixer.cache" .gitignore; then
  echo ".php-cs-fixer.cache" >> .gitignore
fi

echo ""
echo "Listo. Prueba con:"
echo "  composer lint          # Ver archivos mal formateados"
echo "  composer lint:fix      # Autofix"
echo "  vendor/bin/php-cs-fixer fix --dry-run --diff   # Manualmente"
