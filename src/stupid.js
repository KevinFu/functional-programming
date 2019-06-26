// 太傻了
const getServerStuff = callback => ajaxCall(json => callback(json))

// 这才像样
const getServerStuff = ajaxCall
