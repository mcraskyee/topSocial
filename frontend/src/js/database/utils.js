import path from 'path-browserify'

export function getPath(...info) {
    const protocol = import.meta.env.VITE_DB_PATH?.includes('localhost') ? 'http://' : 'https://';
    // http:// + localhost:8000 + / + cards 
    const endpoint = protocol + path.join(import.meta.env.VITE_DB_PATH, ...info);

    return endpoint;
}