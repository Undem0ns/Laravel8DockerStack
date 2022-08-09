# # Base image: node:alpine
# FROM node:alpine

# # Working directory
# WORKDIR /usr/app

# #  Copy package.json
# COPY package.json .

# # Install dependencies
# RUN npm install

# # Copy code to /usr/app
# COPY . .

# # serve the app
# CMD ["npm", "start"]

# Base image: node:alpine
FROM node:alpine as build

# Working directory
WORKDIR /usr/app

# Copy package.json
COPY package.json .

# Install dependencies
RUN npm install

# Copy code to /usr/app
COPY . .

# build the app
RUN npm run build

# serve the app
CMD ["npm", "start"]

# Base image: nginx
FROM nginx
EXPOSE 80
COPY --from=build /usr/app/build /usr/share/nginx/html