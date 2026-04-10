# @goecosystemdh/code-style-config

Configuraciones compartidas de estilo de codigo para los repositorios de GoEcosystemDH.

## Paquetes incluidos

| Paquete | Descripcion | Instalacion |
| --- | --- | --- |
| [`@goecosystemdh/eslint-config`](./packages/eslint-config) | Reglas de ESLint (flat config + legacy) para JS/TS/React/Angular | `bash <(curl -s https://raw.githubusercontent.com/GoEcosystemDH/code-style-config/main/scripts/setup-eslint.sh)` |
| [`@goecosystemdh/prettier-config`](./packages/prettier-config) | Reglas de formato Prettier para todos los archivos de texto | `bash <(curl -s https://raw.githubusercontent.com/GoEcosystemDH/code-style-config/main/scripts/setup-prettier.sh)` |
| [`goecosystemdh/php-cs-fixer-config`](./packages/php-cs-fixer-config) | Reglas PSR-12 + subset de Symfony para PHP | `bash <(curl -s https://raw.githubusercontent.com/GoEcosystemDH/code-style-config/main/scripts/setup-php-cs-fixer.sh)` |

## Proposito

- **Unificar el estilo** de codigo en los 37 repos de la org (PHP, JS/TS, React, Angular, Go)
- **Reducir friccion** en code reviews eliminando nitpicks de estilo
- **Prevenir bugs** con reglas de linting que atrapan errores comunes
- **Acelerar onboarding** — un solo estilo que aprender para toda la org

## Filosofia

**Minimamente opinionado.** Las reglas estan en nivel `warn` (no `error`) para no romper repos legacy. El autofix resuelve la mayoria de warnings. Las excepciones se manejan con overrides locales.

## Capas de proteccion relacionadas

| Capa | Herramienta | Task AzDO |
| --- | --- | --- |
| Formato del mensaje de commit | [commitlint](https://github.com/GoEcosystemDH/commitlint-config) | [#4084](https://dev.azure.com/goecosystem/Go-Devops/_workitems/edit/4084) |
| Secrets en commits | gitleaks | [#4107](https://dev.azure.com/goecosystem/Go-Devops/_workitems/edit/4107) |
| Estilo de codigo | **este repo** | [#4097](https://dev.azure.com/goecosystem/Go-Devops/_workitems/edit/4097) |

## Documentacion completa

Ver: [Guia de Linting por Stack](https://wiki.goecosystemdh.com/s/onboarding) en la wiki.

## Contribuir

Para proponer cambios a las reglas:

1. Abrir un issue en este repo describiendo la regla y por que deberia cambiar
2. Discutir con el equipo de DevOps + Tech Leads afectados
3. PR con el cambio
4. Bump de version (semver) y release
5. Comunicar a los equipos el cambio

## Referencia

- Task AzDO: [#4097](https://dev.azure.com/goecosystem/Go-Devops/_workitems/edit/4097) (crear) / [#4098](https://dev.azure.com/goecosystem/Go-Devops/_workitems/edit/4098) (distribuir) / [#4099](https://dev.azure.com/goecosystem/Go-Devops/_workitems/edit/4099) (documentar)
- Wiki: [Guia de Linting por Stack](https://wiki.goecosystemdh.com/s/onboarding)
