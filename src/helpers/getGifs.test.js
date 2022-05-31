import { getGifs } from "./getGifs";

describe('Testing getGifs helper', () => {

    it('should retrieve 10 elements', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });

    it('should retrieve 10 elements', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });

});