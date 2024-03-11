const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

function createCard(taskInfo) { 

  // Criando elementos necessários
  const li = document.createElement("li");
  const div = document.createElement("div"); 
  const span = document.createElement("span");
  const p = document.createElement("p");
   // Criando botão para deletar tarefa
  const button = document.createElement("button"); 


 //Adicionando as classes correspondente ao span e fazendo as condicionais
  if(taskInfo.tipo === "Urgente"){
    span.classList.add("span-urgent");

  }else if (taskInfo.tipo === "Prioritário"){
    span.classList.add("span-priority");
    
  }else {
    span.classList.add("span-normal");
  }


  // Adicionando o titulo da tarefa como texto do paragrafo
  p.innerText = taskInfo.titulo;

  // Cria um elemento HTML para o botao remover
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  // Adicionando o titulo da tarefa como texto do paragrafo.
  button.addEventListener('click', function(){

  const searchIndex = tasks.indexOf(taskInfo);

  if(searchIndex > -1){
    tasks.splice(searchIndex, 1);
  }
    renderElements(tasks);
  });

  // Adicionando span e paragrafo a div
  div.appendChild(span);
  div.appendChild(p);
  

  /// Adicionando a div e o botão de deletar ao list item
  li.appendChild(div);
  li.appendChild(button);
  
  return li;
}
// Refatorar a funcao para usar o laco de repeticao invez de acessar os itens manualmente.
function renderElements(taskList){ 
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  // Ajuste da logica

  for (let i = 0; i < taskList.length; i++){
    let card = createCard(taskList[i]);
    htmlList.appendChild(card);

  }
  return
}
renderElements(tasks);

  // Adicionando um evento a lista de tarefas.
  
  const btn = document.querySelector("#btnSubmit")
  btn.addEventListener("click", function(e){
    e.preventDefault(); 

    let inputTitle = document.querySelector("#input_title")
    let inputPriority = document.querySelector("#input_priority")

    let taskNew = {
      titulo: inputTitle.value,
      tipo: inputPriority.value,
    };

    tasks.push(taskNew);
      // Funcao e chamada para atualizar minha lista de tarefas ja com as novas. 
  renderElements(tasks);
  });