#FROM ubuntu:20.04

##install apache server
#RUN apt-get update
#ENV TZ=Asia
#RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

#RUN apt install -y apache2
#RUN apt install -y apache2-utils
#RUN apt clean

#EXPOSE 80
#CMD ["apache2ctl", "-D", "FOREGROUND"]

#RUN apt-get install --yes curl
#RUN apt-get update && apt-get upgrade -y && \
#    apt-get install -y nodejs \
#    npm
#RUN apt-get install --yes nodejs
#RUN apt-get install --yes build-essential

## setup nodejs
FROM node:latest

#working directory
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

#RUN apt-get update

RUN npm install --production  
#copy all node js files into wrkdir
COPY . .

EXPOSE 3100

# environment for postgresql
#RUN apt-get update

#RUN apt install postgresql postgresql-contrib

#ENV POSTGRES_USER postgres
#ENV POSTGRES_PASSWORD 123456
#ENV POSTGRES_DB postgres postgres

#ADD CreateDB.sql /docker-entrypoint-initdb.d/

CMD ["node", "server.js"]
