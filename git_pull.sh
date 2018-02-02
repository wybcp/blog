#!/usr/bin/env bash
git pull
php artisan optimize
php artisan route:cache
php artisan config:cache
