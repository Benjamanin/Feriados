import './App.css';
import React, {useState} from 'react';

function App() {
    const[mes, setMes] = useState(''); 

    //Esta funcion Actualiza el mes cada vez que se cambia de opcion en el la barra despegable de opciones
    const pepe = (event) => {
      setMes(event.target.value);
    };

  return (   
    <div2>
        <h1>Feriados</h1>
        <p>Seleccione un mes para mostrar el feriado mas importante</p>
        <div1 className="select-button-container">
          <select onChange={pepe}>
            <option value="">Selecciona</option>
            <option value="Año Nuevo  (1 de Enero)">Enero</option>
            <option value="Día de San Valentín  (14 de Febrero)">Febrero</option>
            <option value="Día Internacional de la Mujer  (8 de Marzo)">Marzo</option>
            <option value="Dia de Resurrecion   (9 de Abril)">Abril</option>
            <option value="Día del Trabajador   (1 de mayo)">Mayo</option>
            <option value="Dia Nacional Pueblos Indiginas   (20 de Junio)">Junio</option>
            <option value="Dia de la Virgen del Carmen  (16 de Julio)">Julio</option>
            <option value="Ascuncion de la Virgen   (15 de Agosto)">Agosto</option>
            <option value="Independencia Nacional   (18 de Septiembre)">Septiembre</option>
            <option value="Dia nacional de las Iglesias Evangelicas y Protestantes  (31 de Octubre)">Octubre</option>
            <option value="Dia de Todos Los Santos  (1 de Noviembre)">Noviembre</option>
            <option value="Navidad  (25 de Diciembre)">Diciembre</option>
          </select>
        </div1>
        <p1>{mes}</p1>
    </div2>
  );
}
export default App;