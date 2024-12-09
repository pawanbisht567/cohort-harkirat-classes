# Use an official Node.js image as the base
FROM node:20

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]
