import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Privacy from './pages/Privacy'
import Support from './pages/Support'
import Terms from './pages/Terms'

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">CierraBot México - Guía .env</h1>
        <p className="mt-2 text-zinc-400">Claves necesarias para que funcione tu bot de WhatsApp</p>
        
        <div className="mt-8 bg-zinc-900 rounded-xl p-5 border border-zinc-800">
          <h2 className="font-mono text-sm text-green-400">.env.example</h2>
          <pre className="mt-3 text-sm overflow-auto">
{`# Supabase (opcional para sincronización en la nube)
VITE_SUPABASE_URL="https://tu-proyecto.supabase.co"
VITE_SUPABASE_ANON_KEY="tu-anon-key-aqui"

# Meta Cloud API / WhatsApp Business API
META_PHONE_ID="108392019482910"
META_TOKEN="EAAD...wXZB9K21"
WHATSAPP_VERIFY_TOKEN=cierrabot_verify_2026`}
          </pre>
        </div>

        <div className="mt-6 flex gap-4 text-sm">
          <Link className="underline" to="/privacy">Privacy</Link>
          <Link className="underline" to="/support">Support</Link>
          <Link className="underline" to="/terms">Terms</Link>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}