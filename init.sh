#!/bin/bash

if lsof -i :8701; then
    echo "Stopping server which works on 8701"
    fuser -k 8701/tcp
else
    echo "Nothing is working on port"
fi

echo "Starting front-end application..."
npm install

# Uruchomienie aplikacji w tle
npm start &

# Opcjonalnie, możesz dodać identyfikator procesu do pliku, aby łatwiej było go zidentyfikować
echo $! > frontend_app_pid.txt

echo "Front-end application is running in the background with PID: $!"
