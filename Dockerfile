# Use Node.js as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json files first for better layer caching
COPY package*.json ./
COPY api/package*.json ./api/
COPY client/package*.json ./client/

# Install dependencies
RUN npm install \
    && cd api && npm install \
    && cd ../client && npm install

# Copy the rest of the application
COPY . .

# Build the client application for production
RUN cd client && npm run build

# Set environment variables
ENV PORT=3001
ENV NODE_ENV=production
ENV JWT_SECRET=your_jwt_secret_key

# Note: MongoDB connection string should be provided at runtime using:
# docker run -e MONGO=mongodb+srv://user:password@cluster0.dsm1fkk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ...

# Expose ports for both backend and frontend
EXPOSE 3001 5173

# Start the application
# In production, we serve the frontend from the backend
CMD ["npm", "start"]
