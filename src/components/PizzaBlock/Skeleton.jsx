import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={490}
    viewBox="0 0 280 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="140" cy="120" r="120" />
    <rect x="5" y="260" rx="10" ry="10" width="270" height="25" />
    <rect x="5" y="310" rx="10" ry="10" width="270" height="75" />
    <rect x="10" y="415" rx="10" ry="10" width="90" height="25" />
    <rect x="150" y="405" rx="10" ry="10" width="110" height="50" />
  </ContentLoader>
);

export default Skeleton;
