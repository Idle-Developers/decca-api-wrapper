import * as dotenv from "dotenv";
import fetch from "node-fetch";
import * as path from "path";

dotenv.config({ path: path.join(__dirname, "..", "/.env") });

const baseURL = "https://api.decc00n.tk";

class DeccaApiError extends Error {  
    constructor (message: string) {
      super(message)
  
      this.name = "DeccaApiError"
  
      Error.captureStackTrace(this, this.constructor);
    }
}

export default class Api {

    protected key: string;

    constructor(key: string){

        this.key = key;

        if (!key) {
            throw new DeccaApiError("Missing Api key!");
        }else if (key !== process.env.API_KEY) {
            throw new DeccaApiError("Invalid API key! Please visit https://api.decc00n.tk to see how you can get your API key.");
        }
    }

    async drip(imageUrl: string){
        const res = await fetch(`${baseURL}/canvas/drip?key=${this.key}&imgUrl=${imageUrl}`);
        if (!res.ok) {
            throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
        }else {
            return res.url;
        }
    }
}