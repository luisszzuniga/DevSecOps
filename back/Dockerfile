# Step 1: Use an official Node.js runtime as a parent image
FROM node:16-alpine

RUN npm install -g pnpm

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json and package-lock.json (if available)
COPY package*.json pnpm-lock.yaml ./

COPY .env.example .env
ENV NODE_ENV=production
ENV PORT=3000
ENV DB_HOST=localhost
ENV DB_PORT=3306
ENV DB_USERNAME=YOUR_MYSQL_USER_HERE
ENV DB_PASSWORD=YOUR_USER_PW_HERE
ENV DB_DATABASE=nest

# Step 4: Install dependencies
RUN pnpm install

# Step 5: Copy the rest of your application's source code
COPY . .

# Step 6: Build the NestJS application
RUN pnpm run build

# Step 7: Expose port 3000 to the outside world
EXPOSE 3000

# Step 8: Define the command to run the app
CMD ["pnpm", "run", "start:prod"]
