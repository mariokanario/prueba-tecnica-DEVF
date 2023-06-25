import React, { useEffect, useState } from 'react'
import Picture from './Picture';

const Planets = () => {

    const [planets, setPlanets] = useState()

    const cargaDatos = async () => {
        try {
            const url = await fetch('https://api.nasa.gov/planetary/apod?api_key=pATQVZ35Geo5xyNTX1e5GKlL3qKRj3YrX3EaZfOh&count=20');
            const datos = await url.json();
            setPlanets(datos)
        } catch (error) {
            console.log('Error:', error);
        }
    }

    useEffect(() => {
        cargaDatos()
    }, []);

    console.log(planets);
    return (
        <div className='container mt-5'>
            <div className="row">

                {
                    planets == undefined ?
                        <>
                            <h4 className='text-light'>Viajando por el espacio para encontrar las mejores 20 imágenes. <br />Por favor espera, el viaje puede tardar un poco.</h4>
                            <span className="loader mx-auto mt-4"></span>
                        </>
                        :
                        planets?.map((planet, i) => (
                            <Picture
                                key={i}
                                id={i}
                                title={planet?.title}
                                picture={planet?.url}
                                explanation={planet?.explanation}
                            />
                        ))
                }

            </div>
        </div>
    )
}

export default Planets