import React from 'react'
import { MainPage } from './'
import renderer from 'react-test-renderer';

it('it renders correctly', () => {
    const listMockData = [{
        userId: 6,
        id: 102,
        title: "sed ab consequatur",
        completed: false
    }, {
        userId: 6,
        id: 103,
        title: "sed ab consequatur",
        completed: false
    }, {
        userId: 6,
        id: 104,
        title: "sed ab consequatur",
        completed: false
    }, {
        userId: 6,
        id: 105,
        title: "sed ab consequatur",
        completed: false
    }]
    const MainSnap = renderer.create(<MainPage listData={listMockData} />).toJSON();
    expect(MainSnap).toMatchSnapshot();
})