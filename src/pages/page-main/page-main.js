import React from 'react';
import { Link } from 'react-router';

export default class PageMain extends React.Component {
  render() {
    return (
        <div>
          <Link to="inner" className="btn btn--default">Go to inner page</Link>
        </div>
    )
  }
}