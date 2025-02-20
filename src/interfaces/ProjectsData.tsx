export interface ProjectsData {
    projects: ProjectData[]
}

export interface ProjectData {
    active: boolean
    author: string
    date: string
    description: string
    heightPosition: number
    heightPositionMobile: number
    name: string
    promoImg : string
    url: string
    steam: boolean
    itch: boolean
    ggj: boolean
}
