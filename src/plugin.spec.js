import React from 'react';
import { mount } from 'enzyme';
import { StoreConnector } from 'hadron-react-components';
import QualityPlugin from './plugin';

describe('Quality [Plugin]', () => {
  let component;

  beforeEach((done) => {
    component = mount(<QualityPlugin />);
    done();
  });

  afterEach((done) => {
    component = null;
    done();
  });

  it('should contain a <StoreConnector /> with a store prop', () => {
    expect(component.find(StoreConnector).first().props('store')).to.be.an('object');
  });
});
