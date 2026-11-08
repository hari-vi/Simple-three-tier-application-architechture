FROM node:18-alpine
WORKDIR /app
RUN npm install express mongodb cors
COPY server.js .
EXPOSE 5001
CMD ["node", "server.js"]