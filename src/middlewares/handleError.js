export default (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({ message: 'An unexpected error occurred!', error: err.message })
}