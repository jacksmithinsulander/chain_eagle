import axios, { AxiosResponse } from 'axios';

export class HttpMultiRequest {
  private urls: string[];

  constructor(urls: string[]) {
    this.urls = urls;
  }

  public async sendRequests(): Promise<void> {
    const responses: AxiosResponse[] = await Promise.all(
      this.urls.map((url) => axios.get(url))
    );

    for (let i = 0; i < this.urls.length; i++) {
      const url: string = this.urls[i];
      const response: AxiosResponse = responses[i];

      if (response.status === 200) {
        const parsedData: any = this.parseResponse(response.data);
        console.log(`Data from ${url}:`, parsedData);
      } else {
        console.error(`Error while fetching data from ${url}`);
      }
    }
  }

  private parseResponse(data: any): any {
    return data;
  }
}

const urlsToFetch: string[] = ['https://api.example.com/data1', 'https://api.example.com/data2'];
const httpMultiRequest: HttpMultiRequest = new HttpMultiRequest(urlsToFetch);

httpMultiRequest.sendRequests();