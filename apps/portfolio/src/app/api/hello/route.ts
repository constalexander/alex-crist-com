import type { NextApiRequest, NextApiResponse } from 'next';
import { HelloDTO } from '@alex/models/lib/dto/hello.dto';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloDTO>
) {
  const theHello: HelloDTO = { msg: 'Hello, from API as JSON!' };
  res.status(200).json(theHello);
}
