import React from 'react';

export default ({ lastUpdate, light }) => {
  const format = t => t.toJSON().slice(11, 19); // cut off except hh:mm:ss

  return <div className={light ? 'light' : ''}>{format(new Date(lastUpdate))}</div>;
};
