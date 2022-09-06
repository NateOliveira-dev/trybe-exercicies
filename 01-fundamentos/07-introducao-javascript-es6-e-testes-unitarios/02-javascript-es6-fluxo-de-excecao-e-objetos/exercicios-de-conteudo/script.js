const mae = {
    firstName: 'Laura',
    lastName: 'Alconche',
    job: 'Professora',
};

const addKeyWithValue = (objeto, chave, valor) => {
     const novaChave = chave;
     const novoValor = valor;
     return objeto[novaChave] = novoValor;
};

addKeyWithValue(mae, 'status', 'aposentada');
addKeyWithValue(mae, 'task', 'Fazendo Café');
addKeyWithValue(mae, 'language', 'Português / Francês');
console.log(mae);

//===================================================================================//

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  console.log(Object.keys(student1));
  console.log(Object.keys(student2));
  console.log(Object.values(student1));
  console.log(Object.values(student2));

  //===================================================================================//

  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };

  //===================================================================================//


const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({}, person, lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);