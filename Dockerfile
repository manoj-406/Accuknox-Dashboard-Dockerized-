FROM node:lts-iron AS builder
LABEL Author="Manoj"
WORKDIR /tmp/Accuknox-Task
COPY . .
RUN apt update && apt install nginx -y
RUN apt install npm -y
RUN npm install

FROM node:lts-alpine3.20
COPY --from=builder /tmp/Accuknox-Task /Accuknox-Task
WORKDIR /Accuknox-Task
EXPOSE 5174
CMD ["npm", "run", "dev", "--", "--host"]