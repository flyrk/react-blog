import React, { Component } from 'react';
import PageForm from './PageForm';

class PageList extends Component {
  constructor() {
    super();
    this.state = {
      pages: [
        {
          title: 'New Article',
          content: 'afweofijewiofjowjfeijafpoijsiadofajewafxnafljawehfufewafij'
        },
        {
          title: 'New Article',
          content: 'afweofijewiofjowjfeijafpoijsiadofajewafxnafljawehfufewafij'
        },
        {
          title: 'New Article',
          content: 'afweofijewiofjowjfeijafpoijsiadofajewafxnafljawehfufewafij'
        },
        {
          title: 'New Article',
          content: 'afweofijewiofjowjfeijafpoijsiadofajewafxnafljawehfufewafij'
        }
      ]
    };
  }

  render() {
    const page = this.state.pages.map((page, id) => <PageForm key={id} page={page} />);
    return (
      <div className='col-md-8'>
        { page }
      </div>

    );
  }
}

export default PageList;
