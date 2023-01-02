FROM node:latest

#working directory
WORKDIR /app

RUN npm install --production --silent 
# copy all node js files into wrkdir
COPY . ./

EXPOSE 3100

CMD ["node", "server.js"]