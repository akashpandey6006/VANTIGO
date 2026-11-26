# Use an official lightweight Node.js runtime as the base image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy package manifests first for efficient layer caching
COPY package*.json ./

# Install dependencies cleanly for production
RUN npm ci --omit=dev

# Copy application source code
COPY . .

# Change ownership to the non-root 'node' user
RUN chown -R node:node /app

# Switch to non-root user for security
USER node

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]
