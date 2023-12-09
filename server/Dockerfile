# using node image
FROM node:lts-alpine
# make a directory for the app server
RUN mkdir -p /usr/src/app/server
# set the working directory
WORKDIR /usr/src/app/server
# copy the package.json file to the working directory
COPY package.json /usr/src/app/server

# install the dependencies
RUN yarn install
# copy the rest of the files to the working directory
COPY . /usr/src/app/server
# expose the port 8080 to the host
EXPOSE 8080
# run the command to start the server
CMD ["yarn", "start"]