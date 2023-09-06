import { urlData, UrlData } from './urlData.js';


/**
 * Represents a LinkBuilder class for building links from URL data.
 */
class LinkBuilder {
  private data: UrlData;
  private links: string[] = [];

  /**
   * Creates an instance of LinkBuilder.
   * @param {UrlData} data - The URL data to build links from.
   */

  constructor(data: UrlData) {
    this.data = data;
  }

  /**
   * Builds an array of links based on the provided URL data.
   * @returns {string[]} An array of generated links.
   */

  buildLinks(): string[] {
    for (const category in this.data) {
      if (this.data.hasOwnProperty(category)) {
        const categoryData = this.data[category];
        const baseUrl: string = categoryData.base_url;
        const assets: { [assetType: string]: string[] } = categoryData.assets;
        const urlEnding: string = categoryData.url_ending || '';

        for (const assetType in assets) {
          if (assets.hasOwnProperty(assetType)) {
            const assetList: string[] = assets[assetType];

            for (const asset of assetList) {
              const fullUrl: string = baseUrl + asset + urlEnding;
              //this.links.push(`${asset}: ${fullUrl}`);
              this.links.push(fullUrl);
            }
          }
        }
      }
    }

    return this.links;
  }
}

const linkBuilder = new LinkBuilder(urlData);
const links = linkBuilder.buildLinks();
console.log(links);