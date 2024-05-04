/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/users/list',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;
