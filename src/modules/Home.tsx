import React from 'react';
import '../App.css';
import { ReleasePanel } from '../components/ReleasePanel';
import Spinner from '../components/Spinner';
import { VerifyWarning } from '../components/VerifyWarning';
import { FormattedRelease, useDeploymentContext } from '../libs/deploymentsProvider';

export const Home = () => {
  const { data, error, loading } = useDeploymentContext();

  const currentRelease: FormattedRelease = data[0];
  const previousReleases: FormattedRelease[] = data.slice(1);
  return (
    <div>
      <div className="topline">
        <h2 className="subheader" style={{ color: 'white', paddingLeft: '20px' }}>
          Aave Links
        </h2>
        <div style={{ alignItems: 'center' }}>
          <a
            href="https://github.com/defispartan/aave-links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.png"
              height="25px"
              width="25px"
              style={{ paddingRight: '40px', marginLeft: '10px', paddingTop: '3px' }}
              alt="GitHub logo"
            />
          </a>
        </div>

        <div className="subheader" style={{ top: '0px', right: '0px', paddingRight: '20px', position: 'absolute', display: 'flex', height: '100%', alignItems: 'center' }}>
          <a href="https://github.com/defispartan/aave-links/blob/master/README.md" target="_blank" style={{ textDecoration: 'none', marginRight: '20px' }} rel="noreferrer">
            ABOUT
          </a>
          <a href="https://github.com/defispartan/aave-links/blob/master/LICENSE.md" target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
            LICENSE
          </a>
        </div>

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
          <VerifyWarning />
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
