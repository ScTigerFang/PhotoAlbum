//Under Construction. Having issues importing in the Jest call.
//But should be albe to get an idea from this on goals.

import fetch from 'node-fetch';

describe('Test photo album display', () => {
    it('should display the correct photo IDs and titles', async () => {
        // setup
        const albumId = 3;
        const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
        const expected = [
            { id: 101, title: 'accusamus beatae ad facilis cum similique qui sunt' },
            { id: 102, title: 'reprehenderit est deserunt velit ipsam' },
            //...
        ];

        //mock the fetch function
        jestTest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(expected)
            })
        );

        // action
        const response = await fetch(url);
        const data = await response.json();

        // assert
        data.forEach((photo, index) => {
            expect(photo.id).toEqual(expected[index].id);
            expect(photo.title).toEqual(expected[index].title);
        });
    });
});