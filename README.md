# Global-to-Local Proxy
Proxies the global web address into your localhost domain on a specified port.

This is super useful if youre trying to share access to your Canva App development server for example.

## How to use
Run this command with your own domain that you want proxy to `localhost:9000`:
```sh
TARGET=https://www.my-awesome.app LOCAL_PORT=9000 npm start
```

Open `http://localhost:9000` and there's your app.

## Why?! 🤦🏻‍♂️
I was working on a Canva App, and I needed to share it with designer. Canva doesn't allow anything like this because it runs only with backends on `localhost` domain.

With this tool I am able to put my backend (development app server) online with Ngrok, run this tool on the designer's machine, which will make my Ngrok domain available on `localhost`, allowing the Canva App to run on her machine with my remote backend.

I am sure there are no other uses for this tool. 🤣