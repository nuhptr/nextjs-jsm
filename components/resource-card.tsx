interface IResourceCardProps {
  id: string
  title: string
  image: string
  downloadNumber: number
  slug: string
}

export default function ResourceCard({
  id,
  title,
  image,
  downloadNumber,
  slug,
}: IResourceCardProps) {
  return <div>ResourceCard</div>
}
