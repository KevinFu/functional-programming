// bad
const hi = name => `Hi ${name}`
const greeting = name => hi(name)

// good
const hi = name => `Hi ${name}`
const greeting = hi
