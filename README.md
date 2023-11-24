## Rick And Morty API


## Technologies

1. Type Script
2. ExpressJs
3. Graphql
4. Jest

## Setup

### Install dependencies
Run the following command from root directory to install and libraries and dependencies

```
npm install
```

### Enviroment variables
Before run this project, you will need to make sure to create a `.env` file in the root directory with the following content.

```
PORT=3000 // this i'ts the port where your api will be listening, by default it's 3000
API_BASE_URL=https://rickandmortyapi.com/api/ // this it's the base api url where you are going to fetch the rick and morty data
```

Note: You can set these enviroment variables manually



### Deploy
To deploy this project to production enviroment, you need to correctly sect enviroment variables and run the following command on root directory

```
npm start
```

### Development
To deploy this porject on development enviroment, you need to check enviroment variables are correctly set in the `.env` file and run the following command on bash script in the root directory

```
npm run dev
```