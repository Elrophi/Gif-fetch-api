# Find trending gifs and search for thousands of them 
>## Author: [El-rophi Skwaila](https://github.com/Elrophi/Gif-fetch-api)
---

>Description
### THis is a simple app to look up thousands of gifs and see trending gifs
---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Technology Used: 
>HTML

>CSS

>Typescript

>Fetch-API (Giphy)
---

## Installation and setup locally
1. Clone to Local Machine by downloading zip file from github or copy the link from github and add to terminal then hit enter to clone.
1. Use any compiler for Angular(HTML, CSS and typescript)
1. Run the dev server for angular
1. Done!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

```typescript
typescript code sample:
 trendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.gifyApiKey}&limit=50&rating=g`);
  }

  getGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${this.query}&api_key=${this.gifyApiKey}&limit=50&rating=g`);
   
  }

```
### Email: Elrophi@gmail.com
### Contact: 0700 000 000

---

### Copyright and License
[MIT License](https://github.com/Elrophi/Gif-fetch-api/blob/master/LICENSE)  
