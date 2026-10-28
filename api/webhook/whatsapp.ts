// api/webhook/whatsapp.ts - Endpoint seguro para Vercel
export default async function handler(req: any, res: any) {
  const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'cierrabot_verify_2026';
  const META_TOKEN = process.env.META_TOKEN;
  const PHONE_ID = process.env.META_PHONE_ID;

  // 1. Verificacion de Meta (GET)
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('Webhook verificado OK');
      return res.status(200).send(challenge);
    } else {
      return res.status(403).send('Token no coincide');
    }
  }

  // 2. Mensajes reales (POST)
  if (req.method === 'POST') {
    try {
      const body = req.body;
      console.log('Mensaje recibido:', JSON.stringify(body).slice(0,500));
      return res.status(200).send('EVENT_RECEIVED');
    } catch (e) {
      console.error(e);
      return res.status(500).send('Error');
    }
  }

  return res.status(405).send('Metodo no permitido');
}
