export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

export type ModelCardProps = {
  model: Model
}

export type PillProps = {
  children: React.ReactNode
  className?: string
  role?: string
  "aria-label"?: string
}

export type ModelDetailPageProps = {
  params: Promise<{ id: string }>
}
