// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable no-console */

/*
 * Environment:
 *   AUTOMATION_DASHBOARD_URL=[url]
 *   AUTOMATION_DASHBOARD_TOKEN=[token]
 */

const axios = require('axios');
const axiosRetry = require('axios-retry');
const chalk = require('chalk');

require('dotenv').config();
axiosRetry(axios, {
    retries: 5,
    retryDelay: axiosRetry.exponentialDelay,
});

const {
    AUTOMATION_DASHBOARD_URL,
    AUTOMATION_DASHBOARD_TOKEN,
} = process.env;

const connectionErrors = ['ECONNABORTED', 'ECONNREFUSED'];

async function createAndStartCycle(data) {
    const response = await axios({
        url: `${AUTOMATION_DASHBOARD_URL}/cycles/start`,
        headers: {
            Authorization: `Bearer ${AUTOMATION_DASHBOARD_TOKEN}`,
        },
        method: 'post',
        timeout: 10000,
        data,
    });

    return response.data;
}

async function getSpecToTest({repo, branch, build, server}) {
    try {
        const response = await axios({
            url: `${AUTOMATION_DASHBOARD_URL}/executions/specs/start?repo=${repo}&branch=${branch}&build=${build}`,
            headers: {
                Authorization: `Bearer ${AUTOMATION_DASHBOARD_TOKEN}`,
            },
            method: 'post',
            timeout: 10000,
            data: {server},
        });

        return response.data;
    } catch (err) {
        console.log(chalk.red('Failed to get spec to test'));
        if (connectionErrors.includes(err.code) || !err.response) {
            console.log(chalk.red(`Error code: ${err.code}`));
            return {code: err.code};
        }

        return err.response && err.response.data;
    }
}

async function recordSpecResult(specId, spec, tests) {
    try {
        const response = await axios({
            url: `${AUTOMATION_DASHBOARD_URL}/executions/specs/end?id=${specId}`,
            headers: {
                Authorization: `Bearer ${AUTOMATION_DASHBOARD_TOKEN}`,
            },
            method: 'post',
            timeout: 10000,
            data: {spec, tests},
        });

        console.log(chalk.green('Successfully recorded!'));
        return response.data;
    } catch (err) {
        console.log(chalk.red('Failed to record spec result'));
        if (connectionErrors.includes(err.code) || !err.response) {
            console.log(chalk.red(`Error code: ${err.code}`));
            return {code: err.code};
        }

        return err.response && err.response.data;
    }
}

async function updateCycle(id, cyclePatch) {
    try {
        const response = await axios({
            url: `${AUTOMATION_DASHBOARD_URL}/cycles/${id}`,
            headers: {
                Authorization: `Bearer ${AUTOMATION_DASHBOARD_TOKEN}`,
            },
            method: 'put',
            timeout: 10000,
            data: cyclePatch,
        });

        console.log(chalk.green('Successfully updated the cycle with test environment data!'));
        return response.data;
    } catch (err) {
        console.log(chalk.red('Failed to update cycle'));
        if (connectionErrors.includes(err.code) || !err.response) {
            console.log(chalk.red(`Error code: ${err.code}`));
            return {code: err.code};
        }

        return err.response && err.response.data;
    }
}

module.exports = {
    createAndStartCycle,
    getSpecToTest,
    recordSpecResult,
    updateCycle,
};