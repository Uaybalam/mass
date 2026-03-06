import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import massLogo from "figma:asset/a5cdbf80b4294cc9c4722a81cc6aa6971d360ff0.png";
import {
  Car,
  Heart,
  Home,
  Building,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Users,
  Clock,
  Award,
  Menu,
  X,
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWhatsAppBubble, setShowWhatsAppBubble] = useState(true);

  const insuranceTypes = [
    {
      icon: Car,
      title: "Seguro de Auto",
      description:
        "Protección completa para tu vehículo con cobertura amplia y asistencia 24/7",
      features: [
        "Responsabilidad civil",
        "Daños propios",
        "Robo total",
        "Asistencia vial",
      ],
    },
    {
      icon: Heart,
      title: "Seguro de Vida",
      description:
        "Tranquilidad para ti y tu familia con coberturas flexibles y accesibles",
      features: [
        "Muerte natural",
        "Muerte accidental",
        "Invalidez total",
        "Gastos funerarios",
      ],
    },
    {
      icon: Home,
      title: "Seguro de Hogar",
      description:
        "Protege tu patrimonio más importante contra incendios, robos y desastres",
      features: [
        "Estructura",
        "Contenidos",
        "Responsabilidad civil",
        "Gastos adicionales",
      ],
    },
    {
      icon: Building,
      title: "Seguro Empresarial",
      description:
        "Soluciones integrales para proteger tu negocio y asegurar su continuidad",
      features: [
        "Responsabilidad civil",
        "Equipos",
        "Pérdida de beneficios",
        "Cyber riesgos",
      ],
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Más de 20 años de experiencia",
      description:
        "Expertos en seguros con décadas de experiencia en el mercado",
    },
    {
      icon: Clock,
      title: "Atención 24/7",
      description:
        "Estamos disponibles cuando nos necesites, todos los días del año",
    },
    {
      icon: Award,
      title: "Mejores tarifas del mercado",
      description:
        "Comparamos múltiples aseguradoras para ofrecerte la mejor opción",
    },
    {
      icon: CheckCircle,
      title: "Trámites simplificados",
      description:
        "Procesos ágiles y digitales para tu comodidad",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={massLogo}
                alt="MASS Seguros y Servicios"
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </a>
              <a
                href="#seguros"
                className="text-foreground hover:text-primary transition-colors"
              >
                Seguros
              </a>
              <a
                href="#nosotros"
                className="text-foreground hover:text-primary transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </a>
              <Button>Cotizar Ahora</Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#inicio"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Inicio
                </a>
                <a
                  href="#seguros"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Seguros
                </a>
                <a
                  href="#nosotros"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Nosotros
                </a>
                <a
                  href="#contacto"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </a>
                <Button className="w-full background:#d4183d ">
                  Cotizar Ahora
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative py-20 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="secondary"
                className="w-fit bg-accent text-accent-foreground"
              >
                ¡Más de 20 años protegiendo familias!
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl">
                  Tu{" "}
                  <span className="text-primary">
                    seguridad
                  </span>{" "}
                  es nuestra prioridad
                </h1>
                <p className="text-xl text-muted-foreground">
                  Protege lo que más amas con nuestros seguros
                  integrales. Desde autos hasta vida, tenemos la
                  cobertura perfecta para ti.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Cotizar Gratis
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8"
                >
                  Llamar Ahora
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Sin compromiso</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Respuesta inmediata</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
                alt="Familia protegida con seguros"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section id="seguros" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="mx-auto bg-accent text-accent-foreground"
            >
              Nuestros Seguros
            </Badge>
            <h2 className="text-3xl lg:text-5xl">
              Cobertura completa para cada aspecto de tu vida
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una amplia gama de seguros diseñados
              para proteger lo que más valoras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceTypes.map((insurance, index) => {
              const IconComponent = insurance.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/20"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl">
                        {insurance.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {insurance.description}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {insurance.features.map(
                        (feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ),
                      )}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      Más información
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="nosotros" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Equipo profesional de seguros"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-accent text-accent-foreground"
                >
                  ¿Por qué elegirnos?
                </Badge>
                <h2 className="text-3xl lg:text-4xl">
                  La confianza que necesitas, la experiencia que
                  mereces
                </h2>
                <p className="text-xl text-muted-foreground">
                  Somos líderes en el mercado de seguros con un
                  compromiso inquebrantable hacia la
                  satisfacción y protección de nuestros
                  clientes.
                </p>
              </div>

              <div className="grid gap-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button size="lg" className="w-full sm:w-auto">
                Conocer más sobre nosotros
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge
                variant="secondary"
                className="bg-accent text-accent-foreground"
              >
                Contacto
              </Badge>
              <h2 className="text-3xl lg:text-4xl">
                ¿Listo para proteger tu futuro?
              </h2>
              <p className="text-xl text-muted-foreground">
                Obtén una cotización personalizada sin
                compromiso. Nuestros expertos te ayudarán a
                encontrar el seguro perfecto.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 border-2 hover:border-primary/20 transition-colors">
                <div className="space-y-6">
                  <h3 className="text-2xl">
                    Solicita tu cotización
                  </h3>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name">
                          Nombre completo
                        </label>
                        <Input
                          id="name"
                          placeholder="Tu nombre"
                          className="focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email">
                          Correo electrónico
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          className="focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone">Teléfono</label>
                      <Input
                        id="phone"
                        placeholder="Tu número de teléfono"
                        className="focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="insurance">
                        Tipo de seguro
                      </label>
                      <select className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary">
                        <option>
                          Selecciona un tipo de seguro
                        </option>
                        <option>Seguro de Auto</option>
                        <option>Seguro de Vida</option>
                        <option>Seguro de Hogar</option>
                        <option>Seguro Empresarial</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message">
                        Mensaje adicional
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Cuéntanos más sobre tus necesidades..."
                        rows={4}
                        className="focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      Enviar solicitud
                    </Button>
                  </form>
                </div>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl">
                    Información de contacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <p className="text-muted-foreground">
                          +52 (55) 1234-5678
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">
                          contacto@massseguros.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Dirección</p>
                        <p className="text-muted-foreground">
                          Av. Insurgentes Sur 123, Ciudad de
                          México
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent p-6 rounded-xl border">
                  <h4 className="font-medium mb-2">
                    Horarios de atención
                  </h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                    <p>Sábados: 9:00 AM - 2:00 PM</p>
                    <p>Emergencias: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src={massLogo}
                  alt="MASS Seguros y Servicios"
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-primary-foreground/80">
                Protegiendo familias y empresas por más de 20
                años con la mejor cobertura del mercado.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="font-medium">Seguros</h5>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Seguro de Auto</li>
                <li>Seguro de Vida</li>
                <li>Seguro de Hogar</li>
                <li>Seguro Empresarial</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-medium">Empresa</h5>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Nosotros</li>
                <li>Sucursales</li>
                <li>Carreras</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-medium">Legal</h5>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Términos y condiciones</li>
                <li>Política de privacidad</li>
                <li>Aviso de privacidad</li>
                <li>Condiciones generales</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>
              &copy; 2024 MASS Seguros y Servicios. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Speech bubble */}
        {showWhatsAppBubble && (
          <div className="relative bg-white rounded-2xl rounded-br-sm shadow-2xl p-4 max-w-[220px] border border-gray-100 animate-[fadeIn_0.3s_ease-in-out]">
            <button
              onClick={() => setShowWhatsAppBubble(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-400 hover:bg-gray-500 text-white rounded-full flex items-center justify-center transition-colors"
              style={{ fontSize: "10px", lineHeight: 1 }}
              aria-label="Cerrar"
            >
              ✕
            </button>
            <p className="text-gray-800" style={{ fontSize: "13px", lineHeight: "1.4" }}>
              👋 ¡Hola! ¿Quieres{" "}
              <span className="text-[#25D366] font-semibold">cotizar tu seguro</span>{" "}
              al instante? ¡Escríbenos ahora!
            </p>
          </div>
        )}

        {/* WhatsApp button */}
        <a
          href="https://wa.me/5215512345678?text=¡Hola!%20Me%20interesa%20cotizar%20un%20seguro%20con%20MASS%20Seguros.%20¿Me%20pueden%20ayudar?"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowWhatsAppBubble(true)}
          aria-label="Contactar por WhatsApp"
          className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
          style={{ backgroundColor: "#25D366" }}
        >
          {/* Pulse rings */}
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ backgroundColor: "#25D366" }}
          />
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ backgroundColor: "#25D366", animationDelay: "0.4s" }}
          />
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-9 h-9 relative z-10"
            fill="white"
          >
            <path d="M24 4C12.954 4 4 12.954 4 24c0 3.552.928 6.883 2.544 9.77L4 44l10.512-2.512A19.86 19.86 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4zm0 36a15.87 15.87 0 0 1-8.47-2.44l-.607-.37-6.24 1.49 1.52-6.09-.4-.63A15.93 15.93 0 0 1 8 24c0-8.822 7.178-16 16-16s16 7.178 16 16-7.178 16-16 16zm8.71-11.71c-.48-.24-2.83-1.396-3.27-1.556-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.556-1.52 1.876-.28.32-.56.36-1.04.12-.48-.24-2.028-.748-3.862-2.384-1.428-1.272-2.392-2.844-2.672-3.324-.28-.48-.03-.74.21-.98.216-.214.48-.558.72-.837.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.604-1.48-3.564-.39-.936-.787-.808-1.08-.824-.28-.013-.6-.016-.92-.016-.32 0-.84.12-1.28.6-.44.48-1.68 1.64-1.68 4.004s1.72 4.645 1.96 4.965c.24.32 3.388 5.176 8.208 7.256 1.148.496 2.044.792 2.742 1.013 1.152.366 2.2.314 3.03.19.924-.138 2.83-1.157 3.23-2.274.4-1.117.4-2.074.28-2.274-.12-.2-.44-.32-.92-.56z" />
          </svg>
        </a>
      </div>
    </div>
  );
}