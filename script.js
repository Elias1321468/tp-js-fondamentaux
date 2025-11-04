console.log("Laboratoire prêt !");
const nom = "Leroy";
let age = 18;
console.log(nom);
console.log(age); 

const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "secret123";
if (motDePasseUtilisateur === motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
    }
else if (motDePasseUtilisateur<8) {
    console.log(motDePasseUtilisateur>8);
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}

const moi = {
    prenom: "Elias",
    nom: "Leroy",
    age: 18,
    competences: ["HTML", "CSS"]
};
 console.log(moi.prenom);
moi.age = 19;
moi.ville = "Lyon";
console.log(moi)

const notes = [12, 15, 9, 18];
console.log(notes[0]);
console.log(notes[1]);
console.log(notes.length);
for (let i = 0; i < notes.length; i++) {
    console.log("La note à l'indice " + i + " est " + notes[i]);
}
const classe = [
    { prenom: 'Alice', age: 18 },
    { prenom: 'Bob', age: 17 }
];
for (let i = 0; i < classe.length; i++) {
    if (classe[i].age>=18)
console.log(classe[i].prenom);
}