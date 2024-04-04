//libs
import React from 'react';

const Link = ({ href, className, children }) => {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    const { pushState } = window.history;
    pushState({}, '', href);

    //create a new pop state event instance
    const navEvent = new PopStateEvent('popstate');
    const { dispatchEvent } = window;
    dispatchEvent(navEvent);
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
