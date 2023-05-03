import { WorkItem } from '@/components/WorkItem'

interface ListWorksProps {
  data: Array<{
    url: string
    title: string
    description: string
  }>
}

export function ListWorks({ data }: ListWorksProps) {
  return (
    <div className="grid grid-cols-2 mt-4 gap-4">
      {data.map((item) => (
        <WorkItem
          key={item.url}
          url={item.url}
          description={item.description}
          title={item.title}
        />
      ))}
    </div>
  )
}
