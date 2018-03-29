ngrok test
====

### run local server

#### http-server

[indexzero/http-server](https://github.com/indexzero/http-server)

install http-server

```shellscript
  $ npm i -g http-server
  $ http-server
  $ open localhost:8080
```

---

case use superstatic

#### superstatic

[firebase/superstatic: Superstatic: a static file server for fancy apps.](https://github.com/firebase/superstatic)

install superstatic(globally)

```shellscript
  $ npm i -g superstatic
  $ superstatic
  $ open localhost:3474
```

---

### ngrok

[ngrok - download](https://ngrok.com/download)

[ngrok - documentation](https://ngrok.com/docs/2)

install ngrok

```shellscript
  $ npm i -g ngrok
```

run ngrok

```shellscript
  $ ngrok http 8080
  or
  $ ngrok http 3474
```

