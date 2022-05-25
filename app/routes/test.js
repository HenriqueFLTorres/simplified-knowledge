const anna = {
  nome: "Bia",
  idade: 28,
};

const patricia = anna;

console.log(anna.nome); // Bia

patricia.nome = "Patricia";

console.log(anna.nome); // Patricia
console.log(patricia.nome); // Patricia
