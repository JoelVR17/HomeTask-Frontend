import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Recupera tu acceso y no pierdas tus{" "}
        <span className="text-slate-700">Proyectos</span>
      </h1>

      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="email"
          />
        </div>

        <input
          type="submit"
          value="Enviar"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded-md hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/register"
        >
          ¿No tienes cuenta? <span className="ml-1 font-bold">Registrate</span>
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          ¿Ya tienes cuenta?{" "}
          <span className="ml-1 font-bold">Inicia Sesión</span>
        </Link>
      </nav>
    </>
  );
};

export default ForgotPassword;
