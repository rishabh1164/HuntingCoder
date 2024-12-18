// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from 'fs';
type Data = {
  name?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: any,
) {
  let data = await fs.promises.readdir("blogdata");
  let allBlogs = [];
  let myFile;
  for(let index = 0; index < data.length ; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(('blogdata/' + item),'utf-8');
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs);
}
