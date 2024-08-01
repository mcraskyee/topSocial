//用于构建数据库连接字符串的工具函数

import path from 'path-browserify'

export function getPath(...info) {
    // 获取当前环境中的数据库路径
    // 如果数据库路径包含'localhost'，则使用'http://'作为协议，否则使用'https://'
    // 例如，如果VITE_DB_PATH是'http://localhost:8000',则protocol将是'http://'
    // 否则，如果VITE_DB_PATH是'https://example.com',则protocol将是'https://'
    const protocol = import.meta.env.VITE_DB_PATH?.includes('localhost') ? 'http://' : 'https://';
    
    // 使用path.join来构建完整的数据库连接字符串
    // path.join会将所有的info参数组合成一个路径，并添加到VITE_DB_PATH前面
    // 例如，如果info是['/cards'],那么endpoint将是'http://localhost:8000/cards'
    const endpoint = protocol + path.join(import.meta.env.VITE_DB_PATH, ...info);

    return endpoint;
}