
import Swal from "sweetalert2";

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {


  const mostrarAlertaEliminar = ()=>{
    Swal.fire({
      title: "Estas Seguro?",
      text: "No podras revertir este cambio!",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "rgb(27, 20, 127)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminarlo!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "Se ha Eliminado Satisfactoriamente.",
          icon: "success",
          eliminado: true,
        });
        eliminarPaciente(id)
      }
    });
  }

  const {nombre,propietario,fecha,email,sintomas,id} = paciente
  return (
    <div className="mx-5 my-4 px-5 py-10 rounded-xl bg-white shadow-md">
    <p className="font-bold mb-3 text-gray-700">Nombre: {""}<span className="font-normal normal-case">{nombre}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700">Propietario: {""}<span className="font-normal normal-case">{propietario}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700">Email: {""}<span className="font-normal normal-case">{email}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700">Fecha alta: {""}<span className="font-normal normal-case">{fecha}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700">Sintomas: {""}<span className="font-normal normal-case">{sintomas}</span>
    </p>

    <div className="flex justify-center mt-10">
      <button type="button" className="py-2 px-10 me-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg" onClick={()=> setPaciente(paciente)}>
        
        Editar
      </button>
      <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold 
      rounded-lg" onClick={mostrarAlertaEliminar}>
        
        Eliminar
      </button>
    </div>
  </div>
  )
}

export default Paciente