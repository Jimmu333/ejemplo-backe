import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {

    private products = [
        {
            id:1,
            nombre: 'leche',
            descripcion: 'caja de 1L',
            precio: '10.5'
    
        },
    
        {
            id:2,
            nombre: 'papas',
            descripcion: 'papas medianas',
            precio: '25.5'
    
        }
    
    ]
    
    findAll(){
    
        return this.products;
    
    } 
    
    findById(id:number){
    
        const product = this.products.find(c => c.id === id);
    if (!product){
    throw new NotFoundException('Product with id $(id) does not exists');
    
    }
    return product;
    
    }
    
    updateProduct(productBody, id){
        //validaciones
    
        const product = this.products.find(c => c.id === id);
        
    
        if (!product){
        throw new NotFoundException('Product with id $(id) does not exist');
        
        }
    
      //logica
        return {status:'producto actualizado'}
    
    }
    
    deleteProduct( id){
        //validaciones
    
        const product = this.products.find(c => c.id === id);
        
    
        if (!product){
        throw new NotFoundException('Product with id $(id) does not exist');
        
        }
    //logica
      
        return {status:'producto eliminado'}
    
    }
    
    createProduct(ProductBody){
        //validaciones
    
        const product = this.products.find(c => c.id === ProductBody.id);
        
    
        if (!product){
        throw new NotFoundException('Product with id $(id) already exists');
        
        }
    
      //logica
        return {status:'producto actualizado'}
    
    }

}
