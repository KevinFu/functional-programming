// 这行
ajaxCall(json => callback(json))

// 等价于这行
ajaxCall(callback)

// 那么，重构下 getServerStuff
const getServerStuff = callback => ajaxCall(callback)

// ...就等于
const getServerStuff = ajaxCall // <-- 看，没有括号哦