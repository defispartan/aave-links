import React from 'react';
import '../App.css';
import { FormattedRelease } from '../libs/deploymentsProvider';

interface ReleasePanelProps {
  release: FormattedRelease;
  current?: boolean;
}

export const ReleasePanel = ({ release, current }: ReleasePanelProps) => {
  return (
    <div className="box">
      <h4 className="subheader" style={{ marginBottom: '0px' }}>
        {release.publishedAt}
      </h4>
      <div className="links">
        <form action={release.githubUrl} target="_blank">
          <input type="submit" value="Verify Release" className="verify" />
        </form>

        <form action={release.commitLink} target="_blank">
          <input type="submit" value="View Changes" className="verify" />
        </form>
      </div>

      <h3 className="subheader" style={{ marginBottom: '0px' }}>
        Links
      </h3>
      <div className="links">
        {current && (
          <form action="https://app.aave.com" target="_blank">
            <input type="submit" value="app.aave.com" className="linkBox" />
          </form>
        )}
        {release.ipfsLinks.map((link, index) => {
          return (
            <form action={link[0]} target="_blank" key={index}>
              <input type="submit" value={link[1]} className="linkBox" />
            </form>
          );
        })}
      </div>
    </div>
  );
};
