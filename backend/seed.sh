#!/bin/bash

docker compose exec laravel.test php artisan migrate:fresh

docker compose exec laravel.test php artisan db:seed
