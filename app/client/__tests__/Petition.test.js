/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Petition from '../Petition';

describe('Petition component', () => {
    beforeEach(async () => {
        render(
            Petition({
                petition: { title: 'amazing title', body: 'crazy body' }
            })
        );
    });
    it('displays petition title', async () => {
        expect(await screen.findByText('amazing title')).toBeDefined();
    });

    it('displays petition body', async () => {
        expect(await screen.findByText('crazy body')).toBeDefined();
    });
});
