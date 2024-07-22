import { Petition } from '../Petition.js';

describe('Petition', () => {
    it('has a title', () => {
        const petition = new Petition({ title: 'We need this' });
        expect(petition.title).toEqual('We need this');
    });

    it('has a body', () => {
        const petition = new Petition({
            body: 'We need it now'
        });
        expect(petition.body).toEqual('We need it now');
    });
    it('defaults body to empty', () => {
        const petition = new Petition({});
        expect(petition.body).toEqual('');
    });

    it('has a creation timestamp', () => {
        const petition = new Petition({
            created_at: 'yesterday'
        });
        expect(petition.created_at).toEqual('yesterday');
    });
    it('defaults creation timestamp to now', () => {
        const petition = new Petition({});
        expect(
            new Date().getTime() - new Date(petition.created_at).getTime()
        ).toBeLessThan(10);
    });

    it('has a updated timestamp', () => {
        const petition = new Petition({
            updated_at: 'today'
        });
        expect(petition.updated_at).toEqual('today');
    });
    it('defaults updated timestamp to now', () => {
        const petition = new Petition({});
        expect(
            new Date().getTime() - new Date(petition.updated_at).getTime()
        ).toBeLessThan(10);
    });

    it('is created by someone', () => {
        const petition = new Petition({ title: 'We need this' }).startedBy(
            'Bob'
        );
        expect(petition.starter_name).toEqual('Bob');
    });
});
