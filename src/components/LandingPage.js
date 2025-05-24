import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LucideCheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-900 to-green-700 p-8 text-white">
        <motion.h1 className="text-5xl font-bold mb-4 text-center">
          Transforme seu atendimento na saúde com o Projeto Salus
        </motion.h1>
        <p className="text-xl mb-6 text-center max-w-2xl">
          Automatize orçamentos, integre processos e escale seu atendimento em laboratórios, clínicas, consultórios e farmácias de manipulação.
        </p>
        <Button className="text-lg px-6 py-3">Quero Agendar uma Demonstração</Button>
        <div className="mt-8">
          <img src="/images/hero-image.png" alt="Ilustração Hero" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-20 px-8 bg-green-50" id="sobre">
        <h2 className="text-4xl font-bold mb-8 text-center">O que é o Projeto Salus?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <p className="text-lg">
            O Projeto Salus é uma solução desenvolvida para modernizar o atendimento de laboratórios, clínicas, consultórios e farmácias de manipulação. Composto pela SalusAPI e pelo Salus Agent, conecta, automatiza e agiliza seu negócio, reduzindo custos e aumentando a produtividade.
          </p>
          <img src="/images/sobre-image.png" alt="Ilustração Sobre" className="rounded-lg shadow-md" />
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20 px-8 bg-white" id="funciona">
        <h2 className="text-4xl font-bold mb-8 text-center">Como Funciona?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">SalusAPI</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><LucideCheckCircle className="text-green-500" /> Integre orçamentos digitais rapidamente.</li>
                <li className="flex items-center gap-2"><LucideCheckCircle className="text-green-500" /> Facilite a comunicação entre plataformas, ERP, CRM ou WhatsApp.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Salus Agent</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><LucideCheckCircle className="text-green-500" /> Atendimento automatizado e inteligente via WhatsApp e outros canais.</li>
                <li className="flex items-center gap-2"><LucideCheckCircle className="text-green-500" /> Reduza custos e aumente a disponibilidade 24/7.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 px-8 bg-green-50" id="beneficios">
        <h2 className="text-4xl font-bold mb-8 text-center">Benefícios</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {['Agilidade no atendimento', 'Escalabilidade sem aumentar equipe', 'Redução de custos operacionais', 'Integração simples e rápida', 'Atendimento 24/7 com inteligência'].map((benefit) => (
            <div key={benefit} className="flex items-center gap-4">
              <LucideCheckCircle className="text-green-600 w-6 h-6" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-8 bg-white" id="contato">
        <h2 className="text-4xl font-bold mb-4 text-center">Pronto para escalar seu atendimento?</h2>
        <p className="text-xl mb-6 text-center max-w-2xl mx-auto">
          Transforme a experiência dos seus clientes com o Projeto Salus.
        </p>
        <div className="flex justify-center">
          <Button className="text-lg px-6 py-3">Quero uma Demonstração Gratuita</Button>
        </div>
      </section>

      <footer className="bg-green-900 text-white text-center py-4">
        <p>&copy; 2025 DKdevs - Projeto Salus</p>
      </footer>
    </div>
  );
}
