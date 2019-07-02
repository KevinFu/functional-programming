// 不纯的
var minimum = 21

var checkAge = function (age) {
  return age >= minimum
}

// 纯的
var checkAge = function (age) {
  var minimum = 21
  return age >= minimum
}
