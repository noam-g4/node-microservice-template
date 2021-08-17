# node-microservice-template

this repo serves as a base tamplate to spawn a new node.js based microservice

## how to use?

- copy the files of this repo to a new folder and name the folder by the service name you're building
- in `package.json`, change the `name` key to your service name and the `author` key to your company/name
- to build a docker image out of this, user `docker build -t <name> .`
- **recomended** when running the container, you can set the **PORT** env variable and expose it to the same port over the host side, this will allow you to easily register services to a registry-service
