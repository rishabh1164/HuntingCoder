import type { NextApiRequest, NextApiResponse } from 'next'
 import * as fs from 'fs';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    let data = await fs.promises.readdir('contactdata');
    fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body));
    res.status(200).json({
      success : true,
      message : 'Succesfully added contact deatils'
    })
  } else {
    res.status(200).json({
      success: true,
      message : 'this is get request'
    })
  }
}