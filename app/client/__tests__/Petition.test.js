/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import Petition from '../Petition';

describe('Petition component', () => {
    let textContent;

    beforeEach(async () => {
        const { findByTestId } = render(
            Petition({
                petition: { title: 'amazing title', body: 'crazy body' }
            })
        );
        textContent = (await findByTestId('amazing-title')).textContent;
    });
    it('displays petition title', () => {
        expect(textContent).toContain('amazing title');
    });

    it('displays petition body', () => {
        expect(textContent).toContain('crazy body');
    });
});
