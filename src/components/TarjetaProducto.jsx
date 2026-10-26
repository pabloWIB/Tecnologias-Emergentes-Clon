import './TarjetaProducto.css';

const formatearPrecio = (valor) => '$' + valor.toLocaleString('es-CO');

export default function TarjetaProducto({ nombre, descripcion, imagen, precio, precioDescuento, colores, stock }) {
  const agotado = stock === 0;

  return (
    <article className={agotado ? 'tarjeta agotado' : 'tarjeta'}>
      <div className="tarjeta-imagen">
        <img src={imagen} alt={nombre} />

        {agotado && <span className="etiqueta-agotado">Agotado</span>}

        <p className="precios">
          {precioDescuento ? (
            <>
              <span className="precio-original">{formatearPrecio(precio)}</span>
              <span className="precio-descuento">{formatearPrecio(precioDescuento)}</span>
            </>
          ) : (
            <span className="precio">{formatearPrecio(precio)}</span>
          )}
        </p>
      </div>

      <div className="tarjeta-info">
        <h2>{nombre}</h2>
        <p className="descripcion">{descripcion}</p>
        <p className="colores">
          {colores} {colores === 1 ? 'color' : 'colores'}
        </p>
      </div>
    </article>
  );
}
