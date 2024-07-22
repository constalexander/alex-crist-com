import type { NextApiRequest, NextApiResponse } from 'next';
import { HelloDTO } from '@alex/models/lib/dto/hello.dto';

export function GET(req: NextApiRequest, res: NextApiResponse<HelloDTO>) {
  if (req.method === 'GET') {
    const theHello: HelloDTO = { msg: 'Hello, from API as JSON!' };
    res.status(200).json(theHello);
  }
}
