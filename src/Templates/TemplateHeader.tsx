function TemplateHeader() {
  return (
    <>
      <header className="bg-red-800 text-white p-4">
        <div className="bg-red-700 text-center mx-auto w-full text-white">
          <div className="flex">

            <div className="col w-full">
              <div className="flex justify-center items-center p-2">
                <div className="bg-red-800 p-2 rounded-full">
                  <img
                    src='./src/assets/R-kANmC2_400x400.jpg'
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
              </div>
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
