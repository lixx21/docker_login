# docker_login

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This project I built login page using 
1. node.js, 
2. ejs, 
3. docker, 
4. docker compose
5. railway
6. vercel
7. bootstrap

# Login Page Overview

![image](https://user-images.githubusercontent.com/91602612/215380464-d7b3454c-6d6a-49b3-ae4d-2adee0e0c3dd.png)

![image](https://user-images.githubusercontent.com/91602612/215380504-eaa1884e-678a-42ae-ba15-bc0cf1bdc82c.png)

![image](https://user-images.githubusercontent.com/91602612/215380484-f4ff1491-d049-4739-82fb-bc76fa9c2461.png)

# How I Build

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; How I built this project is:

1. I created ejs file which is file that is combined **html and js**, this file is used to show interface of the login page, I also used existing template bootstrap to help me designed the login page
2. I Installed npm to built my node.js and installed my packages
3. I created **databasepg.js** as a connector from postgresql to my login page
4. I created **server.js** to built the endpoint and server for my login page
5. **CreateDB.sql** is a file that will create table and insert first data to the table
6. **dockerfile** to build ubuntu + apache and nodejs images
7. **docker-compose** to handle multi container because I am using 4 container **postgresql, pgadmin, apache, node.js**
8. Because postgre is on local, then I deploy my postgre in railway, and using connection string to connect my login page to railway postgres that I have deployed
9. Then I created vercel.json as configuration to deploy my web in vercel.
10. Finally, you can access my login page app through my vercel domain [docker-login.vercel.app](docker-login.vercel.app)

# How to Setup

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; After Created all needed files:

1. Build apache images from dockerfile,
2. After that command the apache command and uncommand nodejs to build node.js image
3. pull postgre image and pgadmin image from pgadmin
4. after that I already created docker-compose.yaml therefore you only need to run ```docker-compose up``` and the docker compose
