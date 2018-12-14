import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HeaderComponent from '../components/header'
import App from '../components/app/app';

Enzyme.configure({ adapter: new Adapter() });

describe('<app/>', function () {
    it('should have a HeaderComponent', function () {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(HeaderComponent)).toBeDefined()
    });
});