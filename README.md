# CierraBot Mexico - Paquete sin código

## Qué es esto?
Es tu app lista para ser "app normal" y pasar la revisión de Meta.

## Qué tiene este paquete?
- vite.config.ts -> Le dice a Vercel cómo construir tu app
- .env.example -> Donde pegas tus claves (Supabase, WhatsApp)
- src/lib/supabaseClient.ts -> Conexión lista
- src/pages/Privacy.tsx, Terms.tsx, Support.tsx -> Las 3 páginas que exige Meta
- api/webhook/whatsapp.ts -> La dirección que le das a Meta para que te mande mensajes
- package.json mejorado -> Con descripción y autor para el directorio

## Pasos sin código (30 min):
1. Copia todos estos archivos a tu carpeta de CierraBot (reemplaza los que ya tienes)
2. Crea archivo .env pegando lo de .env.example y poniendo tus claves
3. Sube todo a GitHub (arrastra la carpeta a github.com/new)
4. Entra a vercel.com, dale Import y elige tu repo -> Deploy
5. Te dará una URL tipo cierrabot-mexico.vercel.app
6. Esa URL + /api/webhook/whatsapp es la que pegas en Meta Developers

## Email
Con 1 solo email basta. Usa el que revisas diario. Ejemplo: sonyx75@hotmail.com
Pon el mismo en Privacy, Terms y Support.

## Siguiente paso: Meta App Directory
Cuando tengas la URL de Vercel, dime y te armo el texto exacto para pegar en el directorio.
