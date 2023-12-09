# use react/vite image
FROM node:lts-alpine
# make a directory for the app client
RUN mkdir -p /app/client
# set the working directory
WORKDIR /app/client

# copy the package.json file to the working directory and install dependencies
COPY package.json /app/client
RUN yarn install

# copy the rest of the files to the working directory
COPY . /app/client/

# expose the port 3000 to the host
EXPOSE 8080

# run the command to start the client
CMD ["yarn", "dev"]