import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./UserSlider.css";

// Configuración de cuántos elementos mostrar por página del slider en función del tamaño de la pantalla

export default function UserSlider() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Se obtiene la información de los usuarios y se guarda en el Array Users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      {/* Componente principal, en el se pueden establecer las distintas configuraciones que desees, estas configuracion son las necesarias para un Slider sencillo */}
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        centerMode={false}
        className=""
        containerClass="container-padding-bottom"
        draggable
        focusOnSelect
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={
          {
            desktop: {
              breakpoint: {
                max: 3000, min: 1024
              },
              items: 4,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 50, min: 20
              },
              itemWidth: 50,
              itemHeight: 50,
              items: 4,
              partialVisibilityGutter: 10
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 4,
              partialVisibilityGutter: 30
            }
          }
        }
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        >
        {/* Del contenido leído desde el API de jsonplaceholder.com renderizamos el nombre de los usuarios, solo con la finalidad de notar la diferencia al desplazar el slider. */}
        {users &&
          users.map((user) => (
            <div key={user.id} className="card">
              <img
                src={
                  `https://source.unsplash.com/random/1280x720?random=` +
                  user.id
                }
                alt=""
              />
              {/* Pretende ser la imagen de perfil del usuario, esta URL genera una imagen random */}
              <div className="content">
                <p>
                  {user.id} - {user.name}
                </p>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
}
