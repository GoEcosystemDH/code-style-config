<?php

declare(strict_types=1);

namespace GoEcosystemDH\CodeStyle;

use PhpCsFixer\Config as PhpCsFixerConfig;

/**
 * Shared PHP-CS-Fixer config for GoEcosystemDH.
 *
 * Based on PSR-12 plus a curated subset of Symfony rules.
 * Risky rules are DISABLED by default to avoid changing behavior in legacy CodeIgniter code.
 *
 * Usage in .php-cs-fixer.dist.php:
 *
 *   <?php
 *   require_once __DIR__ . '/vendor/autoload.php';
 *   use GoEcosystemDH\CodeStyle\Config;
 *
 *   return (new Config())
 *     ->setFinder(
 *       PhpCsFixer\Finder::create()
 *         ->in(__DIR__)
 *         ->exclude(['vendor', 'node_modules'])
 *     );
 */
class Config extends PhpCsFixerConfig
{
    public function __construct(string $name = 'GoEcosystemDH')
    {
        parent::__construct($name);

        $this->setRiskyAllowed(false);

        $this->setRules([
            // Base: PSR-12
            '@PSR12' => true,

            // Curated Symfony rules (safe, non-behavioral)
            'array_syntax' => ['syntax' => 'short'],
            'ordered_imports' => ['sort_algorithm' => 'alpha'],
            'no_unused_imports' => true,
            'single_quote' => true,
            'trailing_comma_in_multiline' => ['elements' => ['arrays']],
            'blank_line_after_opening_tag' => true,
            'blank_line_before_statement' => [
                'statements' => ['return'],
            ],
            'cast_spaces' => ['space' => 'single'],
            'concat_space' => ['spacing' => 'one'],
            'method_argument_space' => ['on_multiline' => 'ensure_fully_multiline'],
            'no_empty_comment' => true,
            'no_empty_phpdoc' => true,
            'no_empty_statement' => true,
            'no_extra_blank_lines' => [
                'tokens' => ['extra', 'throw', 'use'],
            ],
            'no_leading_import_slash' => true,
            'no_leading_namespace_whitespace' => true,
            'no_multiline_whitespace_around_double_arrow' => true,
            'no_singleline_whitespace_before_semicolons' => true,
            'no_spaces_around_offset' => true,
            'no_trailing_comma_in_singleline' => true,
            'no_whitespace_before_comma_in_array' => true,
            'no_whitespace_in_blank_line' => true,
            'normalize_index_brace' => true,
            'object_operator_without_whitespace' => true,
            'single_blank_line_before_namespace' => true,
            'single_line_comment_style' => ['comment_types' => ['hash']],
            'space_after_semicolon' => true,
            'standardize_not_equals' => true,
            'ternary_operator_spaces' => true,
            'unary_operator_spaces' => true,
            'whitespace_after_comma_in_array' => true,
        ]);
    }
}
