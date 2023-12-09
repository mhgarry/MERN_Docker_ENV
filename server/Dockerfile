# using node image
FROM node:lts-alpine
# make a directory for the app server
# set the working directory
WORKDIR /app/server
# copy the package.json file to the working directory
COPY package.json /app/server
# install the dependencies
RUN yarn install
# copy the rest of the files to the working directory
COPY . /app/server/
# expose the port 8080 to the host
EXPOSE 8080 27017
# run the command to start the server
CMD ["yarn", "start"]