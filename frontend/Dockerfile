# Base image: node:alpine
FROM node:alpine

# Working directory
WORKDIR /usr/app

#  Copy package.json
COPY package.json .

# Install dependencies
RUN npm install

# Copy code to /usr/app
COPY . .

# serve the app
CMD ["npm", "start"]