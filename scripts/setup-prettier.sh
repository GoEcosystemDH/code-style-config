#!/usr/bin/env bash
set -euo pipefail

echo "Configurando @goecosystemdh/prettier-config..."
echo ""

# Verify node/npm
if ! command -v node &>/dev/null; then
  echo "ERROR: Node.js no encontrado."
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
  echo "OK: .npmrc configurado"
fi

# Ensure package.json
if [ ! -f package.json ]; then
  echo '{ "private": true, "description": "Tooling only - formatting" }' > package.json
  echo "OK: package.json creado"
fi

# Install prettier + config
echo "Instalando Prettier + @goecosystemdh/prettier-config..."
npm install --save-dev prettier @goecosystemdh/prettier-config

# Add prettier field to package.json
npm pkg set prettier="@goecosystemdh/prettier-config"
echo "OK: prettier config referenciado en package.json"

# Add scripts
if ! grep -q '"format"' package.json 2>/dev/null; then
  npm pkg set scripts.format="prettier --write ."
  npm pkg set scripts."format:check"="prettier --check ."
  echo "OK: scripts format y format:check agregados"
fi

# Create .prettierignore if not exists
if [ ! -f .prettierignore ]; then
  cat > .prettierignore << 'EOF'
node_modules/
vendor/
dist/
build/
coverage/
.next/
.nuxt/
*.min.js
*.min.css
package-lock.json
composer.lock
EOF
  echo "OK: .prettierignore creado"
fi

echo ""
echo "Listo. Prueba con:"
echo "  npm run format:check   # Ver archivos mal formateados"
echo "  npm run format         # Formatear todo"
