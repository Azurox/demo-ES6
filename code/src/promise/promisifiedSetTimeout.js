function retardedBonjour() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bonjour");
      resolve();
    }, 1000);
  });
}

retardedBonjour().then(() => {
  console.log("Au revoir");
});
