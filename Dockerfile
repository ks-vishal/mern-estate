# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY client/package*.json ./client/
COPY api/package*.json ./api/

# Install dependencies
RUN npm install
WORKDIR /app/client
RUN npm install
WORKDIR /app/api
RUN npm install
WORKDIR /app

# Copy the rest of the code
COPY . .

# Add these environment variables to make Vite work in Docker
ENV HOST=0.0.0.0
ENV PORT=5173

# Expose necessary ports
EXPOSE 5173 3001

# Start the application
CMD ["npm", "start"]

# Build stage for React frontend
FROM node:18 AS frontend-build
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Production stage
FROM node:18-slim
WORKDIR /app
COPY api/package*.json ./
RUN npm install --production
COPY api/ ./
COPY --from=frontend-build /app/client/dist ./client/dist

# Set environment variables
ENV PORT=3001
ENV NODE_ENV=production

EXPOSE 3001
CMD ["node", "index.js"] 