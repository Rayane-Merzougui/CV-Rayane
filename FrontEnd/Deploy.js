async function main() {
  // Obtenir l'instance du contrat à déployer (assure-toi que le contrat est bien compilé)
  const Guestbook = await ethers.getContractFactory("Guestbook");

  // Déployer le contrat
  const guestbook = await Guestbook.deploy();

  // Attendre que le contrat soit déployé (que la transaction soit minée)
  await guestbook.deployed();

  // Afficher l'adresse du contrat déployé
  console.log("Guestbook deployed to:", guestbook.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
