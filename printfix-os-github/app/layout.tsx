import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"PrintFix OS — Sistema para Assistências Técnicas",description:"Gerencie clientes, ordens de serviço, impressoras, estoque, vendas e financeiro em um único sistema.",openGraph:{title:"PrintFix OS",description:"A operação da sua assistência, organizada."}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
