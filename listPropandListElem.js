let user = {
    professor: 'Samuel And',
    curso: 'Choque',
    disciplina: 'Praças desportivas'
};

function listaPropriedades(){
    for (const user1 in user){
        console.log(`#{user1}:${user[user1]}`);
    };
};

listaPropriedades();

let array = [
    'Colete',
    'Cinto',
    'Tonfa'
];

function listaElementos(){
    for(const test of array){
        console.log(test);
    };
};

listaElementos();