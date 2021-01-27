import cors from '../../../lib/cors'

export default async function handler(req, res) {
  await cors(req, res)
  res.json({ message: 'Cors Works!' })
}
