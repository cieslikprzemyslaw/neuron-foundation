module.exports = {
    pathPrefix: '/LP',
    siteMetadata: {
        title: 'neuron-foundation-home-page',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sharp',
        `gatsby-plugin-react-helmet`,
        'gatsby-transformer-sharp',
        `gatsby-plugin-layout`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assests/images/',
            },
            __key: 'images',
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/intl`,
                languages: [`pl`, `en`],
                defaultLanguage: `pl`,
                redirect: true,
                // redirectComponent: require.resolve(
                //     `./src/components/Redirect/redirect.js`
                // ),
            },
        },
    ],
};
