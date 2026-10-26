import { useEffect, useState } from 'react';
import TarjetaProducto from './components/TarjetaProducto.jsx';

export default function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const respuesta = await fetch('/data/productos.json');
        const datos = await respuesta.json();
        setProductos(datos);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  return (
    <main className="contenedor">
      <h1 className="titulo">
        Camisetas Niño <span>[{productos.length}]</span>
      </h1>

      {cargando && <p>Cargando productos...</p>}
      {error && <p>No se pudieron cargar los productos.</p>}

      <section className="grilla">
        {productos.map((producto) => (
          <TarjetaProducto key={producto.id} {...producto} />
        ))}
      </section>
    </main>
  );
}
