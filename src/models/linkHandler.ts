import axios, { AxiosResponse } from 'axios';

/**
 * Represents a class for making multiple HTTP requests and processing the responses.
 */
export class HttpMultiRequest {
  private urlArrays: { [key: string]: string[] };
  private subcommands: string[];

  /**
   * Creates an instance of HttpMultiRequest.
   * @param {object} urlArrays - An object containing arrays of URLs to fetch data from.
   * @param {string[]} subcommands - An optional array of category names to fetch.
   */
  constructor(urlArrays: { [key: string]: string[] }, subcommands: string[] = []) {
    this.urlArrays = urlArrays;
    this.subcommands = subcommands;
  }

  /**
   * Sends HTTP requests to specified categories of URLs and processes the responses.
   * @returns {Promise<void>} A Promise that resolves when all requests are completed.
   */
  public async sendRequests(): Promise<void> {
    const promises: Promise<void>[] = [];

    for (const category in this.urlArrays) {
      if (this.subcommands.length === 0 || this.subcommands.includes(category)) {
        const urls: string[] = this.urlArrays[category];
        const promise = this.sendCategoryRequests(category, urls);
        promises.push(promise);
      }
    }

    await Promise.all(promises);
  }

  /**
   * Sends HTTP requests for a specific category of URLs and processes the responses.
   * @param {string} category - The category name.
   * @param {string[]} urls - An array of URLs to fetch data from for the category.
   * @returns {Promise<void>} A Promise that resolves when all requests for the category are completed.
   */
  private async sendCategoryRequests(category: string, urls: string[]): Promise<void> {
    const responses: AxiosResponse[] = await Promise.all(
      urls.map((url) => axios.get(url))
    );

    for (let i = 0; i < urls.length; i++) {
      const url: string = urls[i];
      const response: AxiosResponse = responses[i];

      if (response.status === 200) {
        const parsedData: any = this.parseResponse(response.data);
        console.log(`Data from ${category} - ${url}:`, parsedData);
      } else {
        console.error(`Error while fetching data from ${category} - ${url}`);
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
