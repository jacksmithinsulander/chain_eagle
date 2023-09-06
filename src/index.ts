import { LinkBuilder } from './models/linkBuilder.js';
import { HttpMultiRequest } from './models/linkHandler.js';
import { urlData } from './data/urlData.js';

const linkBuilder = new LinkBuilder(urlData);
const links = linkBuilder.buildLinks();
console.log(links);

const httpMultiRequest: HttpMultiRequest = new HttpMultiRequest(links);

httpMultiRequest.sendRequests();