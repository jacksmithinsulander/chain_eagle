import { UrlData } from '../data/urlData.js';

/**
 * Represents a LinkBuilder class for building links from URL data.
 */
export class LinkBuilder {
  private data: UrlData;
  private links: { [key: string]: string[] } = {};

  /**
   * Creates an instance of LinkBuilder.
   * @param {UrlData} data - The URL data to build links from.
   */
  constructor(data: UrlData) {
    this.data = data;
  }

  /**
   * Builds an object of arrays of links based on the provided URL data.
   * @returns {Object} An object of generated links, named after the asset titles.
   */
  buildLinks(): { [key: string]: string[] } {
    for (const category in this.data) {
      if (this.data.hasOwnProperty(category)) {
        const categoryData = this.data[category];
        const assets: { [assetType: string]: string[] } = categoryData.assets;

        for (const assetType in assets) {
          if (assets.hasOwnProperty(assetType)) {
            const assetList: string[] = assets[assetType];

            if (!this.links[assetType]) {
              this.links[assetType] = []; 
            }

            for (const asset of assetList) {
              const baseUrl: string = categoryData.base_url;
              const urlEnding: string = categoryData.url_ending || '';
              const fullUrl: string = baseUrl + asset + urlEnding;

              this.links[assetType].push(fullUrl);
            }
          }
        }
      }
    }

    return this.links;
  }
}
