function TemplateMenu(){

  const estadoLogin = localStorage.getItem("estadoLogin"); 


    return (
    <>
    <div className="w-full flex flex-1">
        {/* Menu (Sidebar) */}
        <aside className="bg-red-500 text-black p-4 h-screen w-full">
          <nav>
            <ul>
            {estadoLogin && estadoLogin == "LOGIN CORRECTO" ? 
              (
              <li className="mb-4">
                <a href="/logout" className="text-gray-100 hover:text-black">Cerrar Sesion</a>
              </li>
            ):(
              <li className="mb-4">
                <a href="/login" className="text-gray-100 hover:text-black">Login</a>
              </li>
            )}
              <li className="mb-4">
                <a href="/buscar" className="text-gray-100 hover:text-black">Buscar socio</a>
              </li>
              <li className="mb-4">
                <a href="/detaleUsr" className="text-gray-100 hover:text-black">Detalle Usuario</a>
              </li>
              <li className="mb-4">
                <a href="/historicoUsr" className="text-gray-100 hover:text-black">Histórico Usuario</a>
              </li>
            </ul>
          </nav>
        </aside>           

    </div>
</>
    )
}

export default TemplateMenu