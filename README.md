<p align="left">
<img src="https://avatars.githubusercontent.com/u/87447898?s=200&v=4">
</p>

# WARNING
Vimcord is nowhere *near* finished ~~and will most likely never be~~. Expect bugs.

# Vimcord Server 
It's server that makes vimcord work. Powered by mongodb, nodejs, expressjs and mongoose.

# Dependencies
* [NodeJS](https://nodejs.org/en/)

# Usage
Run `npm i` to install dependencies, then add your mongodb database url at `config.json` with this format;
```
{
    "dbURI": "the url from ur mongodb database"
}
```
Then run `npm run startdev` to start the server at port 3000.
