export function Timeline() {
  const timelineItems = [
    {
      year: '2021',
      title: 'Suporte Técnico',
      description: 'Início da carreira em tecnologia',
      type: 'work',
    },
    {
      year: '2022',
      title: 'Formação Acadêmica',
      description:
        'Concluí o curso superior em Análise e Desenvolvimento de Sistemas.',
      type: 'education',
    },
    {
      year: '2023',
      title: 'Desenvolvedor Front-end',
      description:
        'Atuando como desenvolvedor front-end especializado em React e JavaScript.',
      type: 'work',
    },
    {
      year: '2025 - Presente',
      title: 'Desenvolvedor Full Stack',
      description:
        'Atuando como desenvolvedor Full Stack JavaScript/TypeScript ',
      type: 'work',
    },
  ]

  return (
    <div className="mt-2">
      <div className="space-y-4">
        {timelineItems.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-indigo-500" />
              {index < timelineItems.length - 1 && (
                <div className="w-0.5 h-16 bg-gray-700 mt-2" />
              )}
            </div>

            <div className="flex-1 pb-8">
              <div className="flex items-center gap-3 mb-2">
                <strong>{item.year}</strong>
                <h3 className="text-base">{item.title}</h3>
              </div>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
