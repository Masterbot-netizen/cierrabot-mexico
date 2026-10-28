// src/pages/Privacy.tsx
export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto p-8 prose">
      <h1>Política de Privacidad - CierraBot Mexico</h1>
      <p><strong>Última actualización:</strong> 26 de octubre de 2026</p>
      <p><strong>Empresa:</strong> CierraBot Mexico</p>
      <p><strong>Contacto:</strong> sonyx75@hotmail.com (usa tu mail real)</p>

      <h2>1. Qué datos guardamos</h2>
      <p>Guardamos nombre, teléfono y mensajes de WhatsApp de los leads que tu negocio recibe, solo para agendar citas. No vendemos datos.</p>

      <h2>2. Para qué los usamos</h2>
      <ul>
        <li>Responder automáticamente por WhatsApp</li>
        <li>Agendar citas en tu calendario</li>
        <li>Mostrarte el dashboard de leads</li>
      </ul>

      <h2>3. WhatsApp</h2>
      <p>Usamos la API oficial de WhatsApp Cloud. No guardamos tu token de WhatsApp en texto plano. Cada cliente ve solo sus propios datos (multi-tenant).</p>

      <h2>4. Tus derechos (LFPDPPP México)</h2>
      <p>Puedes pedir acceso, rectificación o eliminación de tus datos escribiendo a nuestro email de soporte. Respondemos en 72h.</p>

      <h2>5. Eliminación</h2>
      <p>Si quieres borrar todo, escribe a soporte con asunto "Borrar mis datos CierraBot Mexico".</p>
    </div>
  )
}
