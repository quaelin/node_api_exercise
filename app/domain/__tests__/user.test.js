import { User } from '../User.js';

describe('user', () => {
    it('has a name', () => {
        const user = new User('Leo');
        expect(user.user_name).toEqual('Leo');
    });
});
