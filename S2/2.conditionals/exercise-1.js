//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]



for(let i = 0; i<alumns.length; i++){
    let pupil = alumns[i];     //Asigno pupil el valor del array actual
    if(alumns[i].T1 ==true && alumns[i].T2 == true){   //Compruebo si T1 y T2 son verdad y le añado el valor isApproved = true
        pupil.isApproved = true;
    }else if(alumns[i].T1 ==true && alumns[i].T3 == true){
        pupil.isApproved = true;
    }else if(alumns[i].T2 ==true && alumns[i].T1 == true){
        pupil.isApproved = true;
    }else if(alumns[i].T2 ==true && alumns[i].T3 == true){
        pupil.isApproved = true;
    }else if(alumns[i].T3 ==true && alumns[i].T1 == true){
        pupil.isApproved = true;
    }else if(alumns[i].T3 ==true && alumns[i].T2 == true){
        pupil.isApproved = true;
    }else if(alumns[i].T1 ==true && alumns[i].T2 == true && alumns[i].T3 == true){
        pupil.isApproved = true;
    }else{
        pupil.isApproved = false;  //Si ninguna se cumple se asigna isApproved = false
    }
}








console.log(alumns)

