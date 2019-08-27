#   this is the docker file for nodejs computer jobs 


# Dockerfile
FROM node:alpine

ENV  jobid="testing" \
     logdburl="mongodb://localhost:27017/" 

 
WORKDIR /usr/function

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./





COPY package*.json ./


RUN npm install
# If you are building your code for production
# RUN npm ci --only=production



COPY . .


# no need to expose since i dont have any control thing 


#   this will run the node app 
CMD [ "node", "." ]