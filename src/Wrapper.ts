import fetch from 'node-fetch';
import DeccaApiError from './Error';

const baseURL = 'https://api.decc00n.tk';

export default class Api {
  protected key: string;

  constructor(key: string) {
    this.key = key;

    if (!key) {
      throw new DeccaApiError('Missing API key!');
    }
  }

  async drip(imageUrl: string) {
    fetchForErr(`${baseURL}/canvas/drip?key=${this.key}&imgUrl=${imageUrl}`);
    const res = await fetch(`${baseURL}/canvas/drip?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async bonk(imageUrl: string) {
    fetchForErr(`${baseURL}/canvas/bonk?key=${this.key}&imgUrl=${imageUrl}`);
    const res = await fetch(`${baseURL}/canvas/bonk?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async brain(imageUrl: string) {
    fetchForErr(`${baseURL}/canvas/brain?key=${this.key}&imgUrl=${imageUrl}`);
    const res = await fetch(`${baseURL}/canvas/brain?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async makeMeme(imageUrl: string, topTxt: string, botTxt: string, type: number) {
    fetchForErr(
      `${baseURL}/canvas/makememe?key=${
        this.key
      }&imgUrl=${imageUrl}&type=${type.toString()}&topTxt=${topTxt}&botTxt=${botTxt}`,
    );
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
    fetchForErr(`${baseURL}/canvas/bright?key=${this.key}&imgUrl=${imageUrl}&val=${val.toString()}`);
    const res = await fetch(`${baseURL}/canvas/bright?key=${this.key}&imgUrl=${imageUrl}&val=${val.toString()}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async contrast(imageUrl: string, val: number) {
    fetchForErr(`${baseURL}/canvas/contrast?key=${this.key}&imgUrl=${imageUrl}&val=${val.toString()}`);
    const res = await fetch(`${baseURL}/canvas/contrast?key=${this.key}&imgUrl=${imageUrl}&val=${val.toString()}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async invert(imageUrl: string) {
    fetchForErr(`${baseURL}/canvas/invert?key=${this.key}&imgUrl=${imageUrl}`);
    const res = await fetch(`${baseURL}/canvas/invert?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async circle(imageUrl: string) {
    fetchForErr(`${baseURL}/canvas/circle?key=${this.key}&imgUrl=${imageUrl}`);
    const res = await fetch(`${baseURL}/canvas/circle?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async yankee(imageUrl: string) {
    fetchForErr(`${baseURL}/canvas/yankee?key=${this.key}&imgUrl=${imageUrl}`);
    const res = await fetch(`${baseURL}/canvas/yankee?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async sus(imageUrl: string) {
    fetchForErr(`${baseURL}/canvas/sus?key=${this.key}&imgUrl=${imageUrl}`);
    const res = await fetch(`${baseURL}/canvas/sus?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async pixel(imageUrl: string) {
    fetchForErr(`${baseURL}/canvas/pixel?key=${this.key}&imgUrl=${imageUrl}`);
    const res = await fetch(`${baseURL}/canvas/pixel?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async ping(imageUrl: string) {
    fetchForErr(`${baseURL}/canvas/ping?key=${this.key}&imgUrl=${imageUrl}`);
    const res = await fetch(`${baseURL}/canvas/ping?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async gun(imageUrl: string) {
    fetchForErr(`${baseURL}/canvas/gun?key=${this.key}&imgUrl=${imageUrl}`);
    const res = await fetch(`${baseURL}/canvas/gun?key=${this.key}&imgUrl=${imageUrl}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async afvsae(f1: string, f2: string) {
    fetchForErr(`${baseURL}/canvas/afvsae?key=${this.key}&f1=${f1}&f2=${f2}`);
    const res = await fetch(`${baseURL}/canvas/afvsae?key=${this.key}&f1=${f1}&f2=${f2}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      return res.url;
    }
  }

  async reverse(text: string) {
    fetchForErr(`${baseURL}/string/reverse?key=${this.key}&string=${text}`);
    const res = await fetch(`${baseURL}/string/reverse?key=${this.key}&string=${text}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      const resp = await res.json();
      return resp.response;
    }
  }

  async mock(text: string) {
    fetchForErr(`${baseURL}/string/mock?key=${this.key}&string=${text}`);
    const res = await fetch(`${baseURL}/string/mock?key=${this.key}&string=${text}`);
    if (!res.ok) {
      throw new DeccaApiError(`An error occured during fetch!\nError: ${JSON.stringify(await res.json())}`);
    } else {
      const resp = await res.json();
      return resp.response;
    }
  }

  async randomID() {
    fetchForErr(`${baseURL}/string/randomid?key=${this.key}`);
    const res = await fetch(`${baseURL}/string/randomid?key=${this.key}`);
    return await res.json();
  }

  async trivia() {
    fetchForErr(`${baseURL}/extra/trivia?key=${this.key}`);
    const res = await fetch(`${baseURL}/extra/trivia?key=${this.key}`);
    return await res.json();
  }

  async ftl() {
    fetchForErr(`${baseURL}/extra/ftl?key=${this.key}`);
    const res = await fetch(`${baseURL}/extra/ftl?key=${this.key}`);
    return await res.json();
  }

  async welcome(bgImg: string, topTxt: string, botTxt: string, avatar: string, username: string, txtColor: string) {
    fetchForErr(
      `${baseURL}/discord/welcome?key=${this.key}&bgImg=${bgImg}&topTxt=${topTxt}&botTxt=${botTxt}&avatar=${avatar}&username=${username}&txtColor=${txtColor}`,
    );
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
    fetchForErr(
      `${baseURL}/discord/xp?key=${
        this.key
      }&bgImg=${bgImg}&rank=${rank.toString()}&level=${level.toString()}&username=${username}&discriminator=${discriminator}&xp=${xp.toString()}&xpNeeded=${xpNeeded.toString()}`,
    );
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

const fetchForErr = (url: string) => {
  fetch(url).then(async (res) => {
    if (!res.ok) {
      throw new DeccaApiError(
        `An error occured regarding authentication.\nStatus: ${res.status}\nError: ${JSON.stringify(await res.json())}`,
      );
    }
  });
};
