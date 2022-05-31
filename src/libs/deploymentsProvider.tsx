import React, { useContext } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { extractIpfsHash, formatIpfsLinks } from './helpers/ipfsFormatters';

export interface DeploymentProviderData {
  error: string;
  loading: boolean;
  data: FormattedRelease[];
}

interface DeploymentProviderProps {
  children?: React.ReactNode;
}

interface GithubRelease {
  body: string;
  html_url: string;
  published_at: string;
  target_commitish: string;
}

export interface FormattedRelease {
  ipfsLinks: string[][];
  githubUrl: string;
  publishedAt: string;
  commitLink: string;
}

const DEPLOYMENTS_API_URL: string = 'https://api.github.com/repos/aave/interface/releases';
const COMMIT_URL: string = 'https://github.com/aave/interface/commit/';

const DeploymentDataContext = React.createContext({} as DeploymentProviderData);

// Context to fetch and format data from GitHub Release API
export const DeploymentProvider: React.FC<DeploymentProviderProps> = ({ children }) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data as GithubRelease[]);

  const { data, error } = useSWR(DEPLOYMENTS_API_URL, fetcher, {
    refreshInterval: 120000, // 2 minutes
  });
  const formattedReleases: FormattedRelease[] = [];

  if (data) {
    data.forEach((release: GithubRelease) => {
      formattedReleases.push({
        ipfsLinks: formatIpfsLinks(extractIpfsHash(release.body)),
        githubUrl: release.html_url,
        publishedAt: new Date(release.published_at).toString(),
        commitLink: COMMIT_URL + release.target_commitish,
      });
    });
  }

  return (
    <DeploymentDataContext.Provider
      value={{
        error: error,
        data: formattedReleases,
        loading: formattedReleases.length === 0,
      }}
    >
      {children}
    </DeploymentDataContext.Provider>
  );
};

export const useDeploymentContext = () => useContext(DeploymentDataContext);
