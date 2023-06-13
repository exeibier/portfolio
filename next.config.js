/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'user-images.githubusercontent.com',
                port: '',
                pathname: '/54521023/**',
            },
        ],
    },
}

module.exports = nextConfig

