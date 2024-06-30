FROM ubuntu:20.04

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y curl git vim python3 

RUN echo "PS1='\n\[\e[32m\]\u \[\e[33m\]in \w\[\e[0m\] \n> '" >> /root/.bashrc
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . /root/.nvm/nvm.sh

WORKDIR /root/code