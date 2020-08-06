export default function getConfig () {
    const { env } = process;

    return {
        port: env.PORT || 7000
    };
}
