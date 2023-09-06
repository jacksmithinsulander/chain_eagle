import axios, { AxiosResponse } from 'axios';

/**
 * Represents a class for making multiple HTTP requests and processing the responses.
 */
export class HttpMultiRequest {
  private urls: string[];

  /**
   * Creates an instance of HttpMultiRequest.
   * @param {string[]} urls - An array of URLs to fetch data from.
   */
  constructor(urls: string[]) {
    this.urls = urls;
  }

  /**
   * Sends HTTP requests to all specified URLs and processes the responses.
   * @returns {Promise<void>} A Promise that resolves when all requests are completed.
   */
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

  /**
   * Parses the response data (no actual parsing is done in this example).
   * @param {any} data - The response data to be parsed.
   * @returns {any} The parsed data.
   */
  private parseResponse(data: any): any {
    return data;
  }
}
