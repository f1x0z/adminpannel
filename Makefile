up-dev: docker/docker-compose-prod.yml
	docker-compose -f docker/docker-compose-dev.yml up -d --build
up-prod: docker/docker-compose-dev.yml
	docker-compose -f docker/docker-compose-prod.yml up -d --build
down-dev:
	docker-compose -f docker/docker-compose-dev.yml down
down-prod:
	docker-compose -f docker/docker-compose-prod.yml down