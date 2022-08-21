import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{color: match ? 'red' : 'white',/*borderBottom: match ? '2px solid red' : '' ,*/ fontSize: match ? '20px' : '18px', fontWeight: match ? 'bold' : '', }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
};

export default CustomLink;
