build:
	docker-compose build

run:
	docker-compose up

console_client:
	docker-compose run client bash

console_server:
	docker-compose run server bash