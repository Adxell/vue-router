const isAuthenticatedGuard = (to, from, next) => {
  //console.log({ to, from, next });
  return new Promise(() => {
    const random = Math.random() * 100;
    if (random > 50) {
      console.log("Authenticado");
      next();
    } else {
      console.log("bloqueado por el guard");
      next({ name: "pokemon-home" });
    }
  });
};

export default isAuthenticatedGuard;
