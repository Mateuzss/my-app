import React from "react";
import Button from "react-bootstrap/esm/Button";

export const Painel = (props) => {

    return (

        <div>
            <div className="caixa1" style={{
                width: '50vw',
                height: '50vh',
                backgroundColor:''


            }} >
                
                <div style={{
                    marginTop: '35px',
                    marginLeft: '10px',

                }}>
                    <h2>Descrição</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adip  Lorem ipsum dolor sit amet, consectetur adip   Lorem ipsum dolor sit amet, consectetur adip
                    </p>
                </div>
                <div style={{
                    marginTop: '35px',
                    marginLeft: '10px',

                }}>
                    <h2>Visão de negócio</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis et ullam, facilis autem quia expedita necessitatibus
                        animi vero quibusdam, voluptates inventore ab nulla a nobis. Enim quas quos maiores et.</p>
                </div>

            </div>

            <div className="caixa2" style={{
                backgroundColor: '#0dcaf0',
                alignContent: 'left'
            }} >
             

            </div>

        </div>


    );


}