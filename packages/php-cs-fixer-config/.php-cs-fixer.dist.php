<?php

/**
 * Example .php-cs-fixer.dist.php for GoEcosystemDH repos.
 *
 * Copy this file to the root of your PHP repo and customize the Finder
 * paths to match your project structure.
 */

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
        'public/build',
    ])
    ->name('*.php')
    ->notName('*.blade.php');

return (new Config())->setFinder($finder);
