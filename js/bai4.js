var isPrime = function (n) {
    if (n<2) {
      return false
    }else if (n = 2) {
      return true
    }
    for (var i = 2; i < n; i++) {
      if (n%i === 0) {
        return false
      }else if (i === n-1) {
        return true
      }
    }
  }
  console.log(isPrime(7));



