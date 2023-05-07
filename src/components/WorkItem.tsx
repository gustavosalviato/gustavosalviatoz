import Link from 'next/link'

interface WorkItemProps {
  slug: string
  url: string | undefined
  title: string
  description: string
}

export function WorkItem({ title, url, description, slug }: WorkItemProps) {
  return (
    <Link
      href={`/works/${slug}`}
      className="group bg-transparent p-4 rounded-lg transition-colors duration-300 hover:bg-zinc-500/10"
    >
      <div className="flex flex-col">
        <div className="h-32 w-full">
          <img
            src={url}
            alt=""
            className="w-full h-full rounded-md object-cover"
          />
        </div>

        <h3 className="font-bold text-lg  mt-3 leading-tight">{title}</h3>

        <p className="text-zinc-300 leading-relaxed mt-2">
          {`${description.substring(0, 140)}...`}
        </p>
      </div>
    </Link>
  )
}
