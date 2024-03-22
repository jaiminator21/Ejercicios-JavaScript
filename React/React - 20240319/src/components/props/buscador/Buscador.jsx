const Buscador = ({setFiltro}) => {
  const muestrasTexto = (ev) => {
    setFiltro(ev.target.value);
  };
  return (
    <>
      <input onInput={muestrasTexto} type="text" />
    </>
  );
};

export default Buscador;
