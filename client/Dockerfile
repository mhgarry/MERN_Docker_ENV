# use react/vite image
FROM reactjs/vite:latest

# make a directory for the app client
RUN mkdir -p /usr/src/app/client
# set the working directory
WORKDIR /usr/src/app/client
# copy the package.json file to the working directory
COPY package.json /usr/src/app/client

# install the dependencies
RUN yarn install
# copy the rest of the files to the working directory
COPY . /usr/src/app/client
# expose the port 3000 to the host
EXPOSE 3000
# run the command to start the client
CMD ["yarn", "dev"]