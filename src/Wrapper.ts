import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import * as path from 'path';
import DeccaApiError from './Error';

dotenv.config({ path: path.join(__dirname, '..', '/.env') });

const baseURL = 'https://api.decc00n.tk';

export default class Api {
  protected key: string;

  constructor(key: string) {
    this.key = key;

    if (!key) {
      throw new DeccaApiError('Missing Api key!');
    } else if (key !== process.env.API_KEY) {
      throw new DeccaApiError(
        'Invalid API key! Please visit https://api.decc00n.tk to see how you can get your API key.',
      );
    }
  }

  async drip(imageUrl: string) {
    const res = await fetch(`${baseURL}/canvas/drip?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async bonk(imageUrl: string) {
    const res = await fetch(`${baseURL}/canvas/bonk?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async brain(imageUrl: string) {
    const res = await fetch(`${baseURL}/canvas/brain?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async makeMeme(imageUrl: string, topTxt: string, botTxt: string, type: number) {
    const res = await fetch(
      `${baseURL}/canvas/makememe?key=${
        this.key
      }&imgUrl=${imageUrl}&type=${type.toString()}&topTxt=${topTxt}&botTxt=${botTxt}`,
    );
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async bright(imageUrl: string, val: number) {
    const res = await fetch(`${baseURL}/canvas/bright?key=${this.key}&imgUrl=${imageUrl}&val=${val.toString()}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async contrast(imageUrl: string, val: number) {
    const res = await fetch(`${baseURL}/canvas/contrast?key=${this.key}&imgUrl=${imageUrl}&val=${val.toString()}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async invert(imageUrl: string) {
    const res = await fetch(`${baseURL}/canvas/invert?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async circle(imageUrl: string) {
    const res = await fetch(`${baseURL}/canvas/circle?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async yankee(imageUrl: string) {
    const res = await fetch(`${baseURL}/canvas/yankee?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async sus(imageUrl: string) {
    const res = await fetch(`${baseURL}/canvas/sus?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async pixel(imageUrl: string) {
    const res = await fetch(`${baseURL}/canvas/pixel?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async ping(imageUrl: string) {
    const res = await fetch(`${baseURL}/canvas/ping?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async gun(imageUrl: string) {
    const res = await fetch(`${baseURL}/canvas/gun?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async afvsae(f1: string, f2: string) {
    const res = await fetch(`${baseURL}/canvas/afvsae?key=${this.key}&f1=${f1}&f2=${f2}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async reverse(text: string) {
    const res = await fetch(`${baseURL}/string/reverse?key=${this.key}&string=${text}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      const resp = await res.json();
      return resp.response;
    }
  }

  async mock(text: string) {
    const res = await fetch(`${baseURL}/string/mock?key=${this.key}&string=${text}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      const resp = await res.json();
      return resp.response;
    }
  }

  async randomID() {
    const res = await fetch(`${baseURL}/string/randomid?key=${this.key}`);
    return await res.json();
  }

  async trivia() {
    const res = await fetch(`${baseURL}/extra/trivia?key=${this.key}`);
    return await res.json();
  }

  async ftl() {
    const res = await fetch(`${baseURL}/extra/ftl?key=${this.key}`);
    return await res.json();
  }

  async welcome(bgImg: string, topTxt: string, botTxt: string, avatar: string, username: string, txtColor: string) {
    const res = await fetch(
      `${baseURL}/discord/welcome?key=${this.key}&bgImg=${bgImg}&topTxt=${topTxt}&botTxt=${botTxt}&avatar=${avatar}&username=${username}&txtColor=${txtColor}`,
    );
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async xpCard(
    bgImg: string,
    avatar: string,
    rank: number,
    level: number,
    username: string,
    discriminator: string,
    xp: number,
    xpNeeded: number,
  ) {
    const res = await fetch(
      `${baseURL}/discord/xp?key=${
        this.key
      }&bgImg=${bgImg}&rank=${rank.toString()}&level=${level.toString()}&username=${username}&discriminator=${discriminator}&xp=${xp.toString()}&xpNeeded=${xpNeeded.toString()}`,
    );
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }
}
