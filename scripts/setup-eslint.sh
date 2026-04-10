#!/usr/bin/env bash
set -euo pipefail

echo "Configurando @goecosystemdh/eslint-config..."
echo ""

# Verify node/npm
if ! command -v node &>/dev/null; then
  echo "ERROR: Node.js no encontrado. Instala Node.js 18+ antes de continuar."
  exit 1
fi

# Verify git repo
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
  echo "ERROR: No estas dentro de un repositorio git."
  exit 1
fi

REPO_ROOT=$(git rev-parse --show-toplevel)
cd "$REPO_ROOT"

# Ensure .npmrc for GitHub Packages
if ! grep -q "@goecosystemdh" .npmrc 2>/dev/null; then
  echo "@goecosystemdh:registry=https://npm.pkg.github.com" >> .npmrc
  echo "OK: .npmrc configurado para GitHub Packages"
fi

# Ensure package.json exists
if [ ! -f package.json ]; then
  echo '{ "private": true, "description": "Tooling only - linting" }' > package.json
  echo "OK: package.json creado"
fi

# Install ESLint + config
echo "Instalando ESLint + @goecosystemdh/eslint-config..."
npm install --save-dev eslint @goecosystemdh/eslint-config

# Backup existing eslint config if present
if [ -f eslint.config.js ]; then
  cp eslint.config.js eslint.config.js.backup
  echo "WARN: eslint.config.js existente respaldado como eslint.config.js.backup"
fi

# Create flat config
cat > eslint.config.js << 'EOF'
import goecosystemConfig from '@goecosystemdh/eslint-config';
export default goecosystemConfig;
EOF
echo "OK: eslint.config.js creado (flat config)"

# Add scripts to package.json
if ! grep -q '"lint"' package.json 2>/dev/null; then
  npm pkg set scripts.lint="eslint ."
  npm pkg set scripts."lint:fix"="eslint . --fix"
  echo "OK: scripts lint y lint:fix agregados a package.json"
fi

# Ensure node_modules in .gitignore
if [ -f .gitignore ] && ! grep -q "node_modules" .gitignore; then
  echo "node_modules/" >> .gitignore
fi

echo ""
echo "Listo. Prueba con:"
echo "  npm run lint           # Ver warnings"
echo "  npm run lint:fix       # Autofix"
