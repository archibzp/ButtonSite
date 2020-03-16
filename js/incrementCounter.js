function incrementCounter() {
  count = document.getElementById("main-counter").innerHTML
  count++
  document.getElementById("main-counter").innerHTML = count 
  console.log(count)
}
