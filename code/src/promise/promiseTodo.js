function retardedBonjour() {
  setTimeout(() => {
    console.log("Bonjour");
  }, 1000);
}

retardedBonjour();
console.log("Au revoir");
