#   this is the docker file for nodejs computer jobs 


# Dockerfile
FROM node:10

ENV  

WORKDIR /usr/function

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./





RUN npm install
# If you are building your code for production
# RUN npm ci --only=production



COPY . .

#   expose any nessisary parts here
EXPOSE 8080



#   this will run the node app 
CMD [ "node", "." ]