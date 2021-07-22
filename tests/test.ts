import Api from "../src/Wrapper";
import * as Jimp from 'jimp';
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "..", "/.env")});

const api = new Api(process.env.API_KEY as string);

api.drip("https://www.decc00n.tk/images/pfp.png").then((res) => {
    Jimp.read(res, (err, img) => {
        if (err) throw err;
        img.write('drip.png');
    });
}).catch((err) => console.error(err));