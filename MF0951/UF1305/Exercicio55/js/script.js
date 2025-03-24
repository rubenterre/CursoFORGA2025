// Lista de nomes de estudantes
const estudantes = ["Juan", "María", "Pedro", "Ana", "Luis", "Elena", "Carlos", "Laura"];

// Seleccionamos o contedor onde se amosarán os resultados
const container = document.getElementById('container');

// Amosar a lista orixinal
container.innerHTML = "<p><strong>Lista orixinal de estudantes:</strong> " + estudantes.join(", ") + "</p>";

// Actividade 1: Filtrar estudantes que teñen máis de 4 letras no seu nome
const estudantesFiltrados = estudantes.filter(nome => nome.length > 4);
container.innerHTML += "<p><strong>Estudantes con máis de 4 letras no seu nome:</strong> " + estudantesFiltrados.join(", ") + "</p>";

// Actividade 2: Transformar todos os nomes a maiúsculas
const estudantesMaiusculas = estudantes.map(nome => nome.toUpperCase());
container.innerHTML += "<p><strong>Estudantes en maiúsculas:</strong> " + estudantesMaiusculas.join(", ") + "</p>";

// Actividade 3: Elimina o último estudante da lista
const estudanteEliminado = estudantes.pop();
container.innerHTML += "<p><strong>Lista co estudante eliminado:</strong> " + estudantes.join(", ") + "</p>";
container.innerHTML += "<p><strong>Estudante eliminado:</strong> " + estudanteEliminado + "</p>";

// Actividade 4: Engadir un novo estudante usando push
const novoEstudante = "Francisco";
estudantes.push(novoEstudante);
container.innerHTML += "<p><strong>Lista con novo estudante (usando push):</strong> " + estudantes.join(", ") + "</p>";

// Actividade 5: Obter unha porción da lista usando slice
const estudantesSlice = estudantes.slice(2, 5);
container.innerHTML += "<p><strong>Porción da lista (índices 2 a 4 usando slice):</strong> " + estudantesSlice.join(", ") + "</p>";

// Actividade 6: Engade un novo estudante usando Unshift
estudantes.unshift("Irene");
container.innerHTML += "<p><strong>Lista con novo estudante (usando unshift):</strong>" + estudantes.join(", ") + "</p>";

// Actividade 7: Concatena outra lista de estudantes
const estudantesNovos = ["Paula", "Raúl"];
const estudantesConc = estudantes.concat(estudantesNovos);
container.innerHTML += "<p><strong>Lista concatenada con novos estudantes:</strong>" + estudantesConc.join(", ") + "</p>";
