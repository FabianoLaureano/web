import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import propTypes from 'prop-types';

import TalentsTooltip from '../TalentsTooltip';
import constants from '../constants';

const Wrapper = styled.div`
  background: linear-gradient(to bottom, ${constants.colorBlueMuted}, ${constants.primarySurfaceColor});
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
  position: relative;
`;

const Icon = styled.img`
  border-radius: 4px;
  display: block;
  height: auto;
  opacity: .7;
  overflow: hidden;
  transition: opacity .2s;
  width: 100%;

  &:hover {
    opacity: 1;
  }
`;

const Talents = ({ talents }) => {
  const ttId = uuid.v4();

  return (
    <Wrapper data-tip data-for={ttId}>
      <Icon src="/assets/images/dota2/talent_tree.svg" alt="Talents" />
      <TalentsTooltip talents={talents} ttId={ttId} />
    </Wrapper>
  );
};

Talents.propTypes = {
  talents: propTypes.shape({}).isRequired,
};

export default Talents;
