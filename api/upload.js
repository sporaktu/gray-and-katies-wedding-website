import multer from 'multer';

export const errorHandler = (err, res) => {
  res.status(500)
    .contentType('text/plain')
    .end('Something went wrong with the image upload.')
}

export const upload = multer({
  dest: '/assets/uploads'
})

