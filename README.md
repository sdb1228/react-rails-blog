Couple options to run this project

#Local

You will need to have a ruby version above 2.2 and a rails version above 5.
You will also need to have a postgres installed.

After all that is done run a
```
rake db:create
rake db:migrate
```

After that you will need to run

```
npm install
npm run build
```
That will get all your assets built and all your database schemes migrated

#Docker

Ensure you have docker and docker-compose installed
run
```
docker-compose build
docker-compose rake db:create
docker-compose rake db:migrate
docker-compose npm run build
docker-compose up
```
and you will be set.  Check Virtual host in the docker-compose.yml
for examples
