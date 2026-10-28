// api/webhook/whatsapp.ts - Endpoint que pide Meta para aprobarte
// Funciona en Vercel sin instalar nada más

export default async function handler(req: any, res: any) {
  const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'cierrabot_verify_2026'

  // 1. Verificación que hace Meta cuando pegas tu URL
  if (req.method === 'GET') {
    const mode = req.query['hub.mode']
    const token = req.query['hub.verify_token']
    const challenge = req.query['hub.challenge']

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('Webhook verificado OK')
      return res.status(200).send(challenge)
    } else {
      return res.status(403).send('Token no coincide')
    }
  }

  // 2. Cuando llega un mensaje real de WhatsApp
  if (req.method === 'POST') {
    try {
      const body = req.body
      console.log('Mensaje recibido:', JSON.stringify(body).slice(0, 500))

      // Aquí tu n8n o tu Supabase haría el trabajo
      // Por ahora solo respondemos OK para que Meta no reintente

      return res.status(200).send('EVENT_RECEIVED')
    } catch (e) {
      console.error(e)
      return res.status(500).send('Error')
    }
  }

  return res.status(405).send('Método no permitido')
}
