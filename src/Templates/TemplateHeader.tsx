function TemplateHeader(){
    return (
        <>
        <header className="bg-red-800 text-white p-4">
          <div className="bg-red-700 text-center mx-auto w-full text-white">
            <div className="flex">
            <div className="col w-1/6">
            <img 
                src='./src/assets/R-kANmC2_400x400.jpg'
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div className="col w-5/6">
            <h1 className="text-3xl font-bold">
               Montevideo BBC
            </h1>
            <h2>
               Sistema de gestión de socios
            </h2>
            </div>
            </div>

          </div>
        </header>
        </>
    )
}

export default TemplateHeader