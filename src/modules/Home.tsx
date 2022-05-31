import React from 'react';
import '../App.css';
import { ReleasePanel } from '../components/ReleasePanel';
import Spinner from '../components/Spinner';
import { FormattedRelease, useDeploymentContext } from '../libs/deploymentsProvider';

export const Home = () => {
  const { data, error, loading } = useDeploymentContext();

  const currentRelease: FormattedRelease = data[0];
  const previousReleases: FormattedRelease[] = data.slice(1);
  return (
    <div>
      <div className="topline">
        <h2 className="subheader" style={{ color: 'white' }}>
          Aave Links
        </h2>
        <a
          href="https://github.com/defispartan/aave-urls"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github.png"
            height="25px"
            width="25px"
            style={{ paddingRight: '40px', marginLeft: '10px' }}
            alt="GitHub logo"
          />
        </a>
      </div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="error-container">
          <h3 style={{ color: 'red' }}>Error fetching data from GitHub Releases API :(</h3>
          <p>{error}</p>
        </div>
      ) : (
        <div>
          <h1 className="header">Current Release</h1>
          <ReleasePanel release={currentRelease} current={true} />
          <h1 className="header">Previous Releases</h1>
          {previousReleases.length > 0 &&
            previousReleases.map((release: FormattedRelease) => (
              <ReleasePanel release={release} key={release.publishedAt} />
            ))}
        </div>
      )}
    </div>
  );
};