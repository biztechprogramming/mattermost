// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {renderWithContext, screen} from 'tests/react_testing_utils';
import {TestHelper} from 'utils/test_helper';

import ProductBrandingFreeEdition from './product_branding_free_edition';

describe('ProductBrandingFreeEdition', () => {
    const baseProps = {};

    test('should show ENTRY EDITION for Entry license', () => {
        const state = {
            entities: {
                general: {
                    license: TestHelper.getLicenseMock({
                        IsLicensed: 'true',
                        SkuShortName: 'entry',
                    }),
                },
            },
        };

        renderWithContext(
            <ProductBrandingFreeEdition {...baseProps}/>,
            state,
        );

        expect(screen.getByText('ENTRY EDITION')).toBeInTheDocument();
        expect(screen.getByText('The Alley')).toBeInTheDocument();
    });

    test('should show CLUB EDITION for unlicensed', () => {
        const state = {
            entities: {
                general: {
                    license: TestHelper.getLicenseMock({
                        IsLicensed: 'false',
                        SkuShortName: '',
                    }),
                },
            },
        };

        renderWithContext(
            <ProductBrandingFreeEdition {...baseProps}/>,
            state,
        );

        expect(screen.getByText('CLUB EDITION')).toBeInTheDocument();
        expect(screen.getByText('The Alley')).toBeInTheDocument();
    });

    test('should show empty badge for Professional license', () => {
        const state = {
            entities: {
                general: {
                    license: TestHelper.getLicenseMock({
                        IsLicensed: 'true',
                        SkuShortName: 'professional',
                    }),
                },
            },
        };

        renderWithContext(
            <ProductBrandingFreeEdition {...baseProps}/>,
            state,
        );

        // Should not show any edition badge
        expect(screen.queryByText('ENTRY EDITION')).not.toBeInTheDocument();
        expect(screen.queryByText('CLUB EDITION')).not.toBeInTheDocument();
        expect(screen.queryByText('PROFESSIONAL EDITION')).not.toBeInTheDocument();
    });

    test('should show empty badge for Enterprise license', () => {
        const state = {
            entities: {
                general: {
                    license: TestHelper.getLicenseMock({
                        IsLicensed: 'true',
                        SkuShortName: 'enterprise',
                    }),
                },
            },
        };

        renderWithContext(
            <ProductBrandingFreeEdition {...baseProps}/>,
            state,
        );

        // Should not show any edition badge
        expect(screen.queryByText('ENTRY EDITION')).not.toBeInTheDocument();
        expect(screen.queryByText('CLUB EDITION')).not.toBeInTheDocument();
        expect(screen.queryByText('ENTERPRISE EDITION')).not.toBeInTheDocument();
    });

    test('should show empty badge when no license object', () => {
        const state = {
            entities: {
                general: {
                    license: {},
                },
            },
        };

        renderWithContext(
            <ProductBrandingFreeEdition {...baseProps}/>,
            state,
        );

        // Should not show any edition badge when license object is empty
        expect(screen.queryByText('ENTRY EDITION')).not.toBeInTheDocument();
        expect(screen.queryByText('CLUB EDITION')).not.toBeInTheDocument();
    });
});
