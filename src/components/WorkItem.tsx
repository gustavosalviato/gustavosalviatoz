interface WorkItemProps {
  url: string
  title: string
  description: string
}

export function WorkItem({ title, url, description }: WorkItemProps) {
  return (
    <div className="flex flex-col">
      <div className="h-32 w-60">
        <img src={url} alt="" className="w-full h-full rounded-md" />
      </div>

      <h3 className="font-bold text-lg text-center mt-2 leading-tight">
        {title}
      </h3>

      <p className="text-zinc-300 leading-relaxed text-center mt-2">
        {description}
      </p>
    </div>
  )
}
