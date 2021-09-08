// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let idx = -1
  let data = []
  while(++idx < 400) {
    data.push({
      name: 'Item ' + idx,
      id: idx + 1000
    })
  }
  res.status(200).json({data})
}
