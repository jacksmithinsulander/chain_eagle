import { urlData } from './urlData.js';
/**
 * Represents a LinkBuilder class for building links from URL data.
 */
class LinkBuilder {
    /**
     * Creates an instance of LinkBuilder.
     * @param {UrlData} data - The URL data to build links from.
     */
    constructor(data) {
        this.links = [];
        this.data = data;
    }
    /**
     * Builds an array of links based on the provided URL data.
     * @returns {string[]} An array of generated links.
     */
    buildLinks() {
        for (const category in this.data) {
            if (this.data.hasOwnProperty(category)) {
                const categoryData = this.data[category];
                const baseUrl = categoryData.base_url;
                const assets = categoryData.assets;
                const urlEnding = categoryData.url_ending || '';
                for (const assetType in assets) {
                    if (assets.hasOwnProperty(assetType)) {
                        const assetList = assets[assetType];
                        for (const asset of assetList) {
                            const fullUrl = baseUrl + asset + urlEnding;
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
//# sourceMappingURL=index.js.map