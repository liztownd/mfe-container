const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const marketingDomain = process.env.PRODUCTION_MARKETING_DOMAIN;
const authDomain = process.env.PRODUCTION_AUTH_DOMAIN;
const dashboardDomain = process.env.PRODUCTION_DASHBOARD_DOMAIN;


const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${marketingDomain}/marketing/latest/remoteEntry.js`,
                auth: `auth@${authDomain}/auth/latest/remoteEntry.js`,
                dashboard: `dashboard@${dashboardDomain}/dashboard/latest/remoteEntry.js`
            },
            shared: packageJson.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);