export function SelfPresentation() {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="font-bold text-3xl leading-tight">Gustavo Salviato</h2>
        <p>full stack javascript developer</p>
      </div>

      <div>
        <img
          src="https://github.com/gustavosalviato.png"
          className="h-24 w-24 rounded-full"
          alt=""
        />
      </div>
    </div>
  )
}
