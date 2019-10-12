FROM node:10.15.3
WORKDIR /code
COPY ./package*.json /code/
COPY ./yarn.lock /code/
RUN yarn
