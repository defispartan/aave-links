// Array of gateways with pre or post link construction
const gateways: string[][] = [
  ['dweb.link', 'post', 'dweb'],
  ['cf-ipfs.com', 'post', 'cloudflare'],
  ['infura-ipfs.io', 'post', 'infura'],
  ['ipfs.io', 'pre', 'ipfs.io'],
  ['gateway.ipfs.io', 'pre', 'gateway.ipfs.io'],
  ['ipfs.fleek.co', 'pre', 'fleek'],
];

// Extract the ipfs hash from the first first link in the release body
export const extractIpfsHash = (body: string) => {
  const url = body.split('https://');
  const hash = url[2].split('.')[0];
  return hash;
};

// Generate array ipfs links for a given hash
export const formatIpfsLinks = (ipfsHash: string) => {
  const links: string[][] = [];
  gateways.forEach((gateway: string[]) => {
    if (gateway[1] === 'post') {
      links.push(['https://' + ipfsHash + '.ipfs.' + gateway[0], gateway[2]]);
    } else {
      links.push(['https://' + gateway[0] + '/ipfs/' + ipfsHash, gateway[2]]);
    }
  });
  return links;
};
