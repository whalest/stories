export const users = [
  { id: '1', name: 'Ramina Luto', avatar: 'https://i.pravatar.cc/88?u=1' },
  { id: '2', name: 'Ragesh Kaash', avatar: 'https://i.pravatar.cc/88?u=2' },
  { id: '3', name: 'Bena Asken', avatar: 'https://i.pravatar.cc/88?u=3' },
  {
    id: '4',
    name: 'Дарья Иванка',
    avatar: 'https://i.pravatar.cc/88?u=4',
  },
  {
    id: '5',
    name: 'Gerhard Müller',
    avatar: 'https://i.pravatar.cc/88?u=5',
  },
]

type TPageDataImage = {
  type: 'image'
  src: string
}

type TPageDataText = {
  type: 'text'
  value: string
}

type TPageData = TPageDataImage | TPageDataText

export interface IPage {
  id: string
  name: string
  createdAt: string
  data: TPageData[]
}

export const pages: IPage[] = [
  {
    id: '133',
    name: 'page1',
    createdAt: '16.02.2020',
    data: [
      {
        type: 'image',
        src:
          'https://i.pinimg.com/736x/8d/86/e5/8d86e5846b6df49710b2b7214e7dc5e8.jpg',
      },
      { type: 'text', value: 'Title' },
    ],
  },
  {
    id: '233',
    name: 'page2',
    createdAt: '16.02.2020',
    data: [
      {
        type: 'image',
        src:
          'https://previews.123rf.com/images/mangatalab/mangatalab1909/mangatalab190900039/129900912-abstract-floral-vector-modern-stories-background-hand-drawn-leaves-template-.jpg',
      },
      { type: 'text', value: 'Заголовок' },
    ],
  },

  {
    id: '333',
    name: 'page3',
    createdAt: '16.02.2020',
    data: [
      {
        type: 'image',
        src:
          'https://i.pinimg.com/736x/8d/86/e5/8d86e5846b6df49710b2b7214e7dc5e8.jpg',
      },
      { type: 'text', value: 'custom title' },
    ],
  },
]
