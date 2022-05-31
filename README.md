![Links Logo](https://github.com/defispartan/aave-links/blob/master/public/urls.png)

# Aave Links
 
 The [Aave Interface](https://github.com/aave/interface) repo deploys directly to IPFS, and upon deployment, the DNS record of [app.aave.com](https://app.aave.com) is updated to point to a Cloudflare hosting of the latest IPFS hash. By deploying to IPFS, users can always access the current and previous versions of the Aave frontend through any IPFS gateway. 

 This repo queries the [GitHub Releases API](https://docs.github.com/en/rest/releases/releases) to fetch the latest releases of the interface repo. It then displays links to view source code and access the releases from a variety of IPFS gateways.
