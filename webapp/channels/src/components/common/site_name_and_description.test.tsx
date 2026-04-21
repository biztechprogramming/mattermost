// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import SiteNameAndDescription from 'components/common/site_name_and_description';

import {renderWithContext, screen} from 'tests/react_testing_utils';

describe('/components/common/SiteNameAndDescription', () => {
    const baseProps = {
        customDescriptionText: '',
        siteName: 'The Alley',
    };

    test('should match snapshot, default', () => {
        const {container} = renderWithContext(<SiteNameAndDescription {...baseProps}/>);
        expect(container).toMatchSnapshot();
        expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(baseProps.siteName);
        expect(screen.getByText('Where tennis players rally — conversation, strategy, and community all in one court')).toBeInTheDocument();
    });

    test('should match snapshot, with custom site name and description', () => {
        const props = {...baseProps, customDescriptionText: 'custom_description_text', siteName: 'other_site'};
        const {container} = renderWithContext(<SiteNameAndDescription {...props}/>);

        expect(container).toMatchSnapshot();
        expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(props.siteName);
        expect(screen.getByRole('heading', {level: 3})).toHaveTextContent(props.customDescriptionText);
    });
});
