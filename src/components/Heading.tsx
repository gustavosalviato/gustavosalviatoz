interface HeadingProps {
  title: string
}
export function Heading({ title }: HeadingProps) {
  return (
    <h3 className="text-xl leading-tight font-bold border-b-2 border-zinc-700 w-fit">
      {title}
    </h3>
  )
}
