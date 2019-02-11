docker exec -it app-db dropdb -U postgres management-app
docker exec app-db createdb -U postgres management-app