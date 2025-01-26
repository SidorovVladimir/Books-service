setup: prepare-env build

build:
	docker compose build

prepare-env:
	cp -n .env.example .env

start:
	docker compose up -d