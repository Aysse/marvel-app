export function params2str (params) {
    return Object.keys(params).reduce((acc, key) => {
        const previous = acc ? `${acc}&` : '';
        return `${previous}${key}=${params[key]}`;
    }, '');
}