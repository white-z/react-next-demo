// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let data = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: 2,
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 31,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: 2,
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 31,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: 2,
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 31,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: 2,
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 31,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 31,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 31,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 31,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 31,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 31,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 31,
      address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 31,
      address: 'Sidney No. 1 Lake ParkSidney No. 1 Lake ParkSidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 31,
      address: 'Sidney No. 1 Lake ParkSidney No. 1 Lake ParkSidney No. 1 Lake ParkSidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    }
  ]
  data.map((el, index) => {
    el.id = index + 1
  })
  res.status(200).json({data})
}
