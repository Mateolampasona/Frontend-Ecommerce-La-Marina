import { Facebook,Instagram,Twitter } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"

export function Footer() {
  return (
    <footer className="bg-[#edede9] text-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#ef233c]">Nuestra Tienda</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#ef233c] transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-[#ef233c] transition-colors">Nuestras Tiendas</a></li>
              <li><a href="#" className="hover:text-[#ef233c] transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-[#ef233c] transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#ef233c]">Atención al Cliente</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#ef233c] transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-[#ef233c] transition-colors">Devoluciones</a></li>
              <li><a href="#" className="hover:text-[#ef233c] transition-colors">Mapa del Sitio</a></li>
              <li><a href="#" className="hover:text-[#ef233c] transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#ef233c]">Mis Pedidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#ef233c] transition-colors">Estado del Pedido</a></li>
              <li><a href="#" className="hover:text-[#ef233c] transition-colors">Seguimiento de Envío</a></li>
              <li><a href="#" className="hover:text-[#ef233c] transition-colors">Historial de Compras</a></li>
              <li><a href="#" className="hover:text-[#ef233c] transition-colors">Lista de Deseos</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#ef233c]">Suscríbete</h3>
            <p className="text-sm">Recibe nuestras últimas ofertas y novedades.</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Tu email" className="bg-white" />
              <Button className="bg-[#ef233c] hover:bg-[#d90429] text-white transition-colors">
                Suscribir
              </Button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-[#ef233c] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#ef233c] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#ef233c] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-sm">
          <p>&copy; 2024 La Marina. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
