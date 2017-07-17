import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageForm extends Component {
  static propTypes = {
    page: PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { page } = this.props;
    return (
      <div>
        <h2>{page.title}</h2>
        <p>{page.content}</p>
        <hr />
      </div>
    );
  }
}

export default PageForm;
