To bring the project up first [install Docker](https://www.docker.com/), then run:

```
docker-compose up
```

The docker-compose.yml file routes port 80 on your host to the React app running on 3000 on the Docker environment, so once the system is up just go to http://localhost:3000.

To bring it down:

```
docker-compose down
```

If you change your Dockerfile and must rebuild the Node.js or React images, run:

```
docker-compose up --build
```
