import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitResult, setSubmitResult] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    setSubmitResult('Formulario enviado con éxito!');
  };

  return (
    <div className="container">
      <h1>Formulario de Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="dni">DNI:</label>
          <input
            id="dni"
            {...register('dni', { 
              required: 'El DNI es obligatorio',
              pattern: {
                value: /^[0-9]{8}[A-Z]$/,
                message: 'El DNI debe tener 8 números seguidos de una letra mayúscula'
              }
            })}
          />
          {errors.dni && <span className="error">{errors.dni.message}</span>}
        </div>

        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            {...register('nombre', { 
              required: 'El nombre es obligatorio',
              minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres' }
            })}
          />
          {errors.nombre && <span className="error">{errors.nombre.message}</span>}
        </div>

        <div>
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            id="apellidos"
            {...register('apellidos', { 
              required: 'Los apellidos son obligatorios',
              minLength: { value: 2, message: 'Los apellidos deben tener al menos 2 caracteres' }
            })}
          />
          {errors.apellidos && <span className="error">{errors.apellidos.message}</span>}
        </div>

        <button type="submit">Enviar</button>
      </form>

      {submitResult && <p className="success">{submitResult}</p>}

      <style jsx>{`
        .container {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        div {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
        }
        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .error {
          color: red;
          font-size: 0.8em;
        }
        .success {
          color: green;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
