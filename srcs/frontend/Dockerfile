FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build the app
RUN npm run build

# Copy build output to shared volume
CMD ["sh", "-c", "cp -r dist/* /shared && tail -f /dev/null"]