import crypto from 'crypto';

export function buildAuthEndpointParams () {
    const apiKey = process.env.PUBLIC_KEY;
    const ts = new Date().getTime();
    const dataToHash = `${ts}${process.env.PRIVATE_KEY}${apiKey}`;
    const hash = crypto.createHash('md5');
    hash.update(dataToHash);
    const hashedData = hash.digest('hex');

    return `ts=${ts}&apikey=${apiKey}&hash=${hashedData}`;
}