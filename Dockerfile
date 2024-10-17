FROM node:18 AS builder
LABEL Author="Manoj"
WORKDIR /tmp/Accuknox-Task
COPY . .
RUN apt update && apt install nginx -y
RUN apt install npm -y
RUN npm install

FROM node:18-alpine
COPY --from=builder /tmp/Accuknox-Task /Accuknox-Task
WORKDIR /Accuknox-Task
EXPOSE 5173 5174
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]