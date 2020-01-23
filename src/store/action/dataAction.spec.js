import { getDataSuccess } from './dataAction'

test('getDataSuccess test', () => {
    const mockData = [
        {
            userId: 1,
            id: 8,
            title: "quo adipisci enim quam ut ab",
            completed: true
        },
        {
            userId: 1,
            id: 9,
            title: "quo adipisci enim quam ut ab",
            completed: true
        },
    ];
    const result = getDataSuccess(mockData);
    expect(result.type).toEqual('FETCHING_DATA_SUCCESS');
    expect(result.data.length).toEqual(2);
})