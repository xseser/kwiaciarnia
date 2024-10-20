#!/bin/bash

if lsof -i :8701; then
    echo "Stopping server which works on 8701"
    fuser -k 8701/tcp
else
    echo "Nothing is working on port"
fi

echo "starting front end application"
npm install
npm start