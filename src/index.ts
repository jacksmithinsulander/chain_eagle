import { LinkBuilder } from './models/linkBuilder.js';
import { HttpMultiRequest } from './models/linkHandler.js';
import { urlData } from './data/urlData.js';

const linkBuilder: LinkBuilder = new LinkBuilder(urlData);
const links = linkBuilder.buildLinks();
console.log(links)
const httpMultiRequest: HttpMultiRequest =  new HttpMultiRequest(links, ['sneakers']);

httpMultiRequest.sendRequests()
  .then(() => {
    console.log('All requests completed successfully');
  })
  .catch((error) => {
    console.error('Error sending requests:', error);
  });