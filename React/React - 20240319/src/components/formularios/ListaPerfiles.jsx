const ListaPerfiles = ({ listaPerfiles }) => {
  return (
    <>
      <ul>
        {listaPerfiles.map((perfil) => (
          <div key={perfil.nombre}>
            <h2>{perfil.nombre}</h2>
            <img src={perfil.imagen} alt="" />
            <p>{perfil.edad}</p>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ListaPerfiles;
