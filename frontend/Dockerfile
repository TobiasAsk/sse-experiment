FROM node:14.1.0-buster-slim

COPY package.json /sse-frontend/
WORKDIR /sse-frontend
RUN npm install
COPY . /sse-frontend
ENTRYPOINT ["npm", "run", "start"]
