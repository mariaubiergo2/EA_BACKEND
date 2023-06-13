FROM node:14.21.3
RUN npm install -g ts-node typescript
RUN npm install -g nodemon
RUN npm install -g ts-node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3002 4000
CMD ["npm", "run", "dev"]