docker cp ./testdata.sql app-db:/testdata.sql
docker exec -it app-db psql -U postgres -d management-app -f ./testdata.sql