import { WorkItem } from '@/components/WorkItem'
import { GetWorksQuery } from '@/graphql/generated'

interface ListWorksProps {
  works: GetWorksQuery | undefined
}

export function ListWorks({ works }: ListWorksProps) {
  return (
    <div className="grid grid-cols-2 mt-4 gap-4">
      {works?.works.map((work) => (
        <WorkItem
          slug={work.slug}
          key={work.id}
          url={work?.url?.url}
          description={work.description}
          title={work.title}
        />
      ))}
    </div>
  )
}
