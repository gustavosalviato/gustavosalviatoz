import Image from 'next/image'
export function SelfPresentation() {
  return (
    <div className="flex justify-between" data-cy="self-presentation">
      <div>
        <h2 className="font-bold text-3xl leading-tight tracking-tighter">
          Gustavo Salviato
        </h2>
        <p>front-end javascript developer</p>
      </div>

      <div>
        <Image
          src="https://github.com/gustavosalviato.png"
          className="h-24 w-24 rounded-full"
          width={96}
          height={96}
          alt=""
          quality={100}
        />
      </div>
    </div>
  )
}
