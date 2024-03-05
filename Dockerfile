# First choose a pre existing image
FROM node:18-alpine 

# Select the folder where all our files will be present and commands will run
WORKDIR /app

# Copy all files from locak to /app
COPY . .

# Run "npm install" to install all libs in /app
# Runs when we build the docker image
RUN npm install

# Runs when we trigger docker image
# This prevents, building again and again
CMD ["npm", "start"]

# Exposing the port at which the product is running
EXPOSE 5000
