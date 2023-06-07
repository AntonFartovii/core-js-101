Array.prototype.cube = function() {
   return this.map((number) => number*number*number)
}

Array.prototype.sum = function() {
  return this.reduce((acc, current) => acc + current, 0)
}


Array.prototype.even = function() {
  return this.filter((number) => number%2 === 0)
}



Array.prototype.odd = function() {
  return this.every((number) => number%2 === 1)
}

Array.prototype.average = function() {
  return this.sum()/2
}


var numbers = [1, 2, 4, 5 , 8, 9]


console.log(numbers.average());
