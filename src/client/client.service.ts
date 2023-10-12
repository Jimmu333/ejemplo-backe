import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ClientService {

    private clients = [
    {
        id:1,
        nombre: 'cliente 1',
        direccion: 'direccion 1'

    },

    {
        id:2,
        nombre: 'cliente 2',
        direccion: 'direccion 2'

    }

]

findAll(){

    return this.clients;

} 

findById(id:number){

    const client = this.clients.find(c => c.id === id);
if (!client){
throw new NotFoundException('Client with id $(id) does not exists');

}
return client;

}

updateClient(clientBody, id){
    //validaciones

    const client = this.clients.find(c => c.id === id);
    

    if (!client){
    throw new NotFoundException('Client with id $(id) does not exist');
    
    }

  //logica
    return {status:'cliente actualizado'}

}

deleteClient( id){
    //validaciones

    const client = this.clients.find(c => c.id === id);
    

    if (!client){
    throw new NotFoundException('Client with id $(id) does not exist');
    
    }
//logica
  
    return {status:'cliente eliminado'}

}

createClient(clientBody){
    //validaciones

    const client = this.clients.find(c => c.id === clientBody.id);
    

    if (!client){
    throw new NotFoundException('Client with id $(id) already exists');
    
    }

  //logica
    return {status:'cliente actualizado'}

}

}
