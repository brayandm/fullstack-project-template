## How to run (Docker)

1 - Install the dependencies:

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    brayand/fullstack-project-template-composer:1.0.0 \
    composer install --ignore-platform-reqs
```

2 - Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

3 - Create Docker Network:

```bash
docker network create xprojectname-local
```

4 - Start the containers:

```bash
docker compose up -d
```

5 - Generate the application key:

```bash
docker compose exec laravel.test php artisan key:generate
```

6 - Run the migrations:

```bash
docker compose exec laravel.test php artisan migrate
```

## How to build (Docker)

1 - Build the Docker image:

```bash
docker compose -f docker-compose.build.yml build --compress --force-rm --no-cache --parallel --pull
```
