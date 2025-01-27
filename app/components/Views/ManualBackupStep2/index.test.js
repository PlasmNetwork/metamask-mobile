import React from 'react';
import { shallow } from 'enzyme';
import ManualBackupStep2 from './';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('ManualBackupStep2', () => {
	it('should render correctly', () => {
		const initialState = {
			user: {
				passwordSet: true,
				seedphraseBackedUp: false,
			},
		};

		const wrapper = shallow(
			<ManualBackupStep2
				route={{
					params: {
						words: [
							'abstract',
							'accident',
							'acoustic',
							'announce',
							'artefact',
							'attitude',
							'bachelor',
							'broccoli',
							'business',
							'category',
							'champion',
							'cinnamon',
						],
						steps: ['one', 'two', 'three'],
					},
				}}
			/>,
			{
				context: { store: mockStore(initialState) },
			}
		);
		expect(wrapper.dive()).toMatchSnapshot();
	});
});
