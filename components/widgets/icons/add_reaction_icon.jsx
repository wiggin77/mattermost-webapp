// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class AddReactionIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <FormattedMessage
                    id='generic_icons.add-reaction'
                    defaultMessage='Add Reaction Icon'
                >
                    {(ariaLabel) => (
                        <svg
                            width='16px'
                            height='16px'
                            viewBox='0 0 16 16'
                            role='img'
                            aria-label={ariaLabel}
                        >
                            <path d='M10 8.00001C10.32 8.00001 10.5973 7.88267 10.832 7.64801C11.0773 7.40267 11.2 7.12001 11.2 6.80001C11.2 6.48001 11.0773 6.20267 10.832 5.96801C10.5973 5.72267 10.32 5.60001 10 5.60001C9.68 5.60001 9.39733 5.72267 9.152 5.96801C8.91733 6.20267 8.8 6.48001 8.8 6.80001C8.8 7.12001 8.91733 7.40267 9.152 7.64801C9.39733 7.88267 9.68 8.00001 10 8.00001ZM5.2 8.00001C5.52 8.00001 5.79733 7.88267 6.032 7.64801C6.27733 7.40267 6.4 7.12001 6.4 6.80001C6.4 6.48001 6.27733 6.20267 6.032 5.96801C5.79733 5.72267 5.52 5.60001 5.2 5.60001C4.88 5.60001 4.59733 5.72267 4.352 5.96801C4.11733 6.20267 4 6.48001 4 6.80001C4 7.12001 4.11733 7.40267 4.352 7.64801C4.59733 7.88267 4.88 8.00001 5.2 8.00001ZM13.584 7.93601C13.584 7.97867 13.584 8.05334 13.584 8.16001L13.6 8.40001C13.6 9.48801 13.328 10.496 12.784 11.424C12.2507 12.3307 11.5307 13.0507 10.624 13.584C9.696 14.128 8.688 14.4 7.6 14.4C6.512 14.4 5.504 14.128 4.576 13.584C3.66933 13.0507 2.94933 12.3307 2.416 11.424C1.872 10.496 1.6 9.48801 1.6 8.40001C1.6 7.31201 1.872 6.30401 2.416 5.37601C2.94933 4.46934 3.66933 3.74934 4.576 3.21601C5.504 2.67201 6.512 2.40001 7.6 2.40001L8.064 2.41601C8.17067 1.84001 8.352 1.32801 8.608 0.880006C8.23467 0.826673 7.89867 0.800006 7.6 0.800006C6.224 0.800006 4.944 1.14667 3.76 1.84001C2.61867 2.51201 1.712 3.41867 1.04 4.56001C0.346667 5.74401 0 7.02401 0 8.40001C0 9.77601 0.346667 11.056 1.04 12.24C1.712 13.3813 2.61867 14.288 3.76 14.96C4.944 15.6533 6.224 16 7.6 16C8.976 16 10.256 15.6533 11.44 14.96C12.5813 14.288 13.488 13.3813 14.16 12.24C14.8533 11.056 15.2 9.77601 15.2 8.40001C15.2 8.10134 15.1733 7.76534 15.12 7.39201C14.672 7.64801 14.16 7.82934 13.584 7.93601ZM12 5.72205e-06H13.6V2.40001H16V4.00001H13.6V6.40001H12V4.00001H9.6V2.40001H12V5.72205e-06ZM3.504 10C3.83467 10.832 4.36267 11.504 5.088 12.016C5.84533 12.5387 6.68267 12.8 7.6 12.8C8.51733 12.8 9.35467 12.5387 10.112 12.016C10.8373 11.504 11.3653 10.832 11.696 10H3.504Z'/>
                        </svg>

                    )}
                </FormattedMessage>
            </span>
        );
    }
}
