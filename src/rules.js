export const name = [
    v => !!v || "Votre nom est requis!",
];
export const society = [
    v => !!v || "Votre entreprise est requis!",
];
export const email = [
    v => !!v || "Votre email est requis!",
    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "email invalid!",
];
export const phone = [
    v => !!v || "Votre téléphone est requis!",
    v => /^((\+33[1-9]{9})|(0[1-9]{9}))$/.test(v) || "Téléphone invalide!",
];
export const message = [
    v => !!v || "Votre message est requis!",
];
