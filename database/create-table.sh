docker cp ./table.sql app-db:/table.sql
docker exec -it app-db psql -U postgres -d management-app -f ./table.sql