import Cita from './cita'

const Listado = ({listado}) => {
    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>

            {listado.map(item=>(
                <Cita cita={item} />
            ))}            
        </div>
    );
};

export default Listado;