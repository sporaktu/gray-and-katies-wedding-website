import express from 'express';
import path from 'path';
import fs from 'fs';
import {upload, errorHandler} from './upload';
const app = express();

app.post('/upload',
  upload.single(`file`),
  (req,res) => {
  console.log('/upload')
    console.log(req.file)
      const tempPath = req.file.path;
      const targetPath = path.join(__dirname,`./assets/uploads/file-${new Date().getTime()}`);
      console.log(tempPath,targetPath)
      // if (path.extname(req.file.originalname).toLowerCase() === '.png') {
        fs.rename(tempPath, targetPath, err => {
          if (err) return errorHandler(err, res);
          res
            .status(200)
            .contentType('text/plain')
            .end('File Uploaded');
        });
      // }
      // else {
      //   fs.unlink(tempPath, err => {
      //     if (err) return errorHandler(err, res);
      //   })
      // }
})

export default {
  path: '/api',
  handler: app
}
