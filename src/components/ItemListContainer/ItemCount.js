import React, {useState} from 'react';
import './ItemCount.css';

const ItemCount =({stock, initial}) =>{
const [contador, setcontador] = useState(initial);

const increment =(n) =>{
    if (contador >= stock){
        return
    }
    setcontador(contador + n)
}
const decrement =(n) =>{
    if (contador <= 1){
        return
    }

    setcontador(contador - n)
}

return <div className='container border border-2 rounded-2 anchoContador'>
            
            <div className='row'> 
                <label className='colorFondo'>stock:{stock}</label>
                <div className= 'd-flex justify-content-between my-2'>
                    <button onClick={() => decrement(1)} className = 'btn-primary px3'>-</button>
                    <p>{contador}</p>
                    <button onClick={() => increment(1)} className = 'btn-primary px3'>+</button>
                </div>
                <button className='btn-primary btn-large my 2'>agregar al carrito</button>
            </div>
        </div>
};
   export default ItemCount;