import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
class Player extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  componentDidMount()
  {
  }
  render()
  {
    //sections
    return <pre>{JSON.stringify(this.props, null, 2)}</pre>;
  }
}

function mapStateToProps(data)
{
  return {
    data
  };
}
export default connect(mapStateToProps)(Player);
