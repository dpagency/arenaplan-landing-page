/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  CreditCard, ExternalLink, Menu, X, Check, CheckCircle2, 
  Smartphone, BarChart4, Receipt, FileText, Settings, Shield,
  ArrowRight, Users, PlayCircle, Zap
} from 'lucide-react';
import { useState, useRef } from 'react';
import logo from '../arenaplan-logo.png';
import machine1 from '../machine1.png';
import machine2 from '../machine2.png';
import machine3 from '../machine3.png';
import machine4 from '../machine4.png';

const WHATSAPP_NUMBER = '5511982915313';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20da%20ArenaPlan%20Smart%20PDV.`;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white overflow-hidden font-sans selection:bg-emerald/30">
      {/* Background Mesh */}
      <div className="fixed inset-0 bg-geometric-pattern z-0 pointer-events-none opacity-20"></div>
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0B]/80 backdrop-blur-md rounded-none border-t-0 border-x-0 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ArenaPlan Logo" className="h-12 w-12 object-contain hover:scale-110 transition-transform" />
            <span className="font-display font-bold text-xl tracking-tight">ArenaPlan</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Recursos</a>
            <a href="#benefits" className="hover:text-white transition-colors">Vantagens</a>
            <a href="#experience" className="hover:text-white transition-colors">Experiência</a>
            <a href="#video" className="hover:text-white transition-colors">Vídeo</a>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <a href="https://arenaplan.com.br" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/5 transition-all text-white">
              Website Oficial
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-sm font-semibold bg-emerald text-black hover:bg-emerald shadow-[0_0_20px_rgba(0,255,0,0.3)] flex items-center gap-2"
            >
              Falar no WhatsApp
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <MachineGallerySection />
        <SmartExperienceSection />
        <BenefitsSection />
        <DashboardSection />
        <VideoSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

// Sub-components will be implemented below
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-12 pb-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald animate-pulse"></span>
            Uma das 5 menores taxas do Brasil
          </div>
          
          <h1 className="text-5xl md:text-[64px] font-display font-bold leading-[1.05] tracking-tight text-white mb-6">
            A máquina <span className="text-emerald">SMART</span> que faz você crescer.
          </h1>
          
          <p className="text-lg text-white/50 leading-relaxed max-w-md mb-8">
            Receba em todos os cartões, emita cupom fiscal e gerencie todo o seu negócio em uma única solução profissional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2"
            >
              Solicitar Orçamento <ArrowRight size={18} />
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/5 text-lg font-bold transition-colors flex items-center justify-center gap-2"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {[
              "Aluguel grátis*", 
              "Emissão de cupom fiscal", 
              "Baixas taxas", 
              "Gestão completa"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                <CheckCircle2 size={16} className="text-emerald" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative max-w-[520px] w-full mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/20 to-emerald/20 rounded-full blur-[80px]"></div>
            <img
              src={machine1}
              alt="ArenaPlan Smart PDV"
              className="relative z-10 w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
            {/* Floating Badges */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -right-8 top-1/4 p-6 bg-[#0D0D0E] border border-white/10 rounded-2xl shadow-2xl flex flex-col gap-1 z-20"
            >
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Destaque</span>
              <span className="font-bold text-sm">NFe Integrada</span>
            </motion.div>
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -left-12 bottom-1/3 p-6 bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col gap-1 z-20"
            >
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Taxas</span>
              <span className="font-bold text-sm text-emerald">5 Menores do BR</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="py-12 border-y border-white/10 bg-black/40 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-bold text-white/40 uppercase tracking-widest mb-8">Solução confiável para centenas de negócios</p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          {/* Logo placeholders - in a real scenario we'd use SVG icons of card brands */}
          <div className="flex items-center gap-2 font-display font-bold text-xl"><CreditCard/> Mastercard</div>
          <div className="flex items-center gap-2 font-display font-bold text-xl"><CreditCard/> Visa</div>
          <div className="flex items-center gap-2 font-display font-bold text-xl"><CreditCard/> Elo</div>
          <div className="flex items-center gap-2 font-display font-bold text-xl"><CreditCard/> Pix</div>
          <div className="flex items-center gap-2 font-display font-bold text-xl"><CreditCard/> Amex</div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: <CreditCard size={24} />, title: "Todos os Cartões", desc: "Recebimento ágil com crédito, débito, aproximação e Pix." },
    { icon: <Receipt size={24} />, title: "Cupom Fiscal", desc: "Emissão rápida integrada com a legislação (NFC-e/SAT)." },
    { icon: <FileText size={24} />, title: "NF-e Integrada", desc: "Gere e gerencie notas fiscais eletrônicas direto da máquina." },
    { icon: <Users size={24} />, title: "Gestor de Mesas", desc: "Controle de comandas, mesas e divisão de contas nativo." },
    { icon: <Settings size={24} />, title: "Impressão Produção", desc: "Envio automático de pedidos para a cozinha e bar." },
    { icon: <Smartphone size={24} />, title: "Backoffice Mobile", desc: "Acompanhe e gerencie seu negócio de qualquer lugar no app." },
    { icon: <BarChart4 size={24} />, title: "Relatórios Gerenciais", desc: "Métricas detalhadas para controle financeiro preciso." },
    { icon: <Zap size={24} />, title: "Integração Completa", desc: "Estoque, clientes e AP/AR em um único ecossistema." }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            Poder de um ERP,<br/><span className="text-white/40">simplicidade de uma maquininha.</span>
          </h2>
          <p className="text-white/50 text-lg">
            Tudo que o seu negócio precisa para operar rápido e com segurança está no ArenaPlan Smart PDV.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900 border border-white/10 shadow-2xl p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0D0D0E] border border-white/5 flex items-center justify-center mb-6 text-white/60 group-hover:text-emerald group-hover:bg-emerald/10 transition-all">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmartExperienceSection() { 
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/40">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric-blue/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-emerald text-[10px] font-bold tracking-widest uppercase mb-4">Experiência Fluida</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] mb-6">
            O fluxo perfeito para o seu restaurante ou loja.
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Do momento em que o cliente faz o pedido até o pagamento e a emissão do cupom fiscal. Tudo acontece no mesmo dispositivo, sem travamentos.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "Atendimento Rápido", desc: "Garçom lança o pedido na mesa direto na máquina." },
              { title: "Produção Automática", desc: "Impressão simultânea enviada para a cozinha." },
              { title: "Checkout Transparente", desc: "Fechamento de conta com divisão e gorjeta na tela." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center font-display text-sm font-bold text-white z-10">
                    {idx + 1}
                  </div>
                  {idx !== 2 && <div className="w-px h-12 bg-zinc-800 my-1"></div>}
                </div>
                <div className="pt-1">
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-sm text-zinc-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative max-w-[480px] w-full mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald/10 to-electric-blue/10 rounded-full blur-[60px]"></div>
            <img
              src={machine2}
              alt="ArenaPlan Smart PDV em uso"
              className="relative z-10 w-full object-contain drop-shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-[#0D0D0E] border border-white/10 shadow-2xl p-5 rounded-2xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
               <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                 <Receipt size={20} />
               </div>
               <div>
                 <p className="text-sm font-bold">Cupom Fiscal</p>
                 <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mt-0.5">Gerado em 1.2s</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function BenefitsSection() {
  const benefits = [
    { title: "Menores Taxas", desc: "Economize milhares de reais por ano com condições exclusivas.", icon: <BarChart4 size={20} /> },
    { title: "Aluguel Grátis*", desc: "Isenção baseada no seu volume de vendas. Mais lucro para você.", icon: <CheckCircle2 size={20} /> },
    { title: "Sistema Incluso", desc: "Esqueça de pagar por softwares separados. Tudo em um só plano.", icon: <Shield size={20} /> },
    { title: "Mobilidade", desc: "Leve o caixa até a mesa do cliente com total segurança.", icon: <Smartphone size={20} /> },
  ];

  return (
    <section id="benefits" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">Por que escolher a ArenaPlan?</h2>
          <p className="text-white/50 text-lg">Substitua soluções antigas e custosas por um dispositivo premium all-in-one.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Comparison Cards */}
          <div className="p-8 rounded-[2rem] border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-red-500/20 font-bold text-7xl font-display">X</div>
            <h3 className="text-xl font-medium text-red-400 mb-6 flex items-center gap-2">
              <X size={20}/> Sistemas Tradicionais
            </h3>
            <ul className="space-y-4">
               {["Taxas abusivas de cartão", "Mensalidade de software cara", "Precisa de computador e impressora", "Suporte lento e burocrático"].map((item, i) => (
                 <li key={i} className="flex gap-3 text-zinc-400 text-sm">
                   <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-red-900 flex items-center justify-center">
                     <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                   </div>
                   {item}
                 </li>
               ))}
            </ul>
          </div>

          <div className="p-8 rounded-[2rem] border border-emerald/20 bg-gradient-to-b from-emerald/10 to-black relative overflow-hidden ring-1 ring-emerald/20 shadow-[0_0_40px_rgba(0,255,0,0.1)]">
            <div className="absolute top-0 right-0 p-4 text-emerald/10 font-bold text-7xl font-display">✓</div>
            <h3 className="text-xl font-medium text-emerald pb-6 mb-6 flex items-center gap-2 border-b border-emerald/10">
              <Check size={20}/> ArenaPlan Smart PDV
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 text-white font-medium mb-1">
                    <span className="text-emerald">{benefit.icon}</span>
                    {benefit.title}
                  </div>
                  <p className="text-zinc-400 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-emerald/10">
               <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center gap-2 py-3 bg-emerald hover:bg-emerald font-bold text-black rounded-xl transition-colors shadow-[0_0_20px_rgba(0,255,0,0.3)]"
               >
                 Quero esta solução <ArrowRight size={18} />
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            Controle total na palma da mão
          </h2>
          <p className="text-white/50 text-lg">
            Tenha acesso a um portal de vendas completo no seu celular ou computador. Relatórios gerenciais, controle de estoque e mais.
          </p>
        </div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Dashboard Premium Mockup */}
          <div className="rounded-[2.5rem] p-2 bg-zinc-900 border border-white/10 shadow-2xl relative overflow-hidden ring-1 ring-white/10">
            <div className="bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-zinc-800">
               {/* Dashboard Header */}
               <div className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-950/50">
                 <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded overflow-hidden bg-gradient-to-br from-electric-blue to-emerald flex items-center justify-center font-bold text-xs">
                     <img src={logo} alt="ArenaPlan" className="h-full w-full object-cover" />
                   </div>
                   <span className="font-medium text-sm">Dashboard</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="hidden sm:flex text-xs text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">Hoje, 10 de Maio</div>
                   <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700"></div>
                 </div>
               </div>

               {/* Dashboard Content */}
               <div className="p-6 md:p-10 grid gap-6">
                 {/* Top Stats */}
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {[
                     { label: "Vendas Totais", value: "R$ 12.450", trend: "+14%", color: "text-emerald" },
                     { label: "Transações", value: "342", trend: "+5%", color: "text-emerald" },
                     { label: "Ticket Médio", value: "R$ 36,40", trend: "-2%", color: "text-red-400" },
                     { label: "Clientes Novos", value: "28", trend: "+12%", color: "text-emerald" }
                   ].map((stat, i) => (
                     <div key={i} className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-5 hover:bg-zinc-800/50 transition-colors">
                        <div className="text-zinc-500 text-xs mb-2 uppercase tracking-wider">{stat.label}</div>
                        <div className="text-2xl font-display font-medium text-white mb-2">{stat.value}</div>
                        <div className={`text-xs font-medium ${stat.color}`}>{stat.trend} em relação a ontem</div>
                     </div>
                   ))}
                 </div>

                 <div className="grid md:grid-cols-3 gap-6">
                    {/* Fake Chart Area */}
                    <div className="md:col-span-2 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 h-64 flex flex-col relative overflow-hidden">
                      <h4 className="text-sm text-zinc-400 mb-6 relative z-10">Faturamento Diário (R$)</h4>
                      <div className="flex-1 flex items-end gap-2 relative z-10">
                        {[40, 60, 45, 80, 50, 90, 70, 85, 100, 75, 95].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-electric-blue/40 to-emerald/80 rounded-t-sm" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
                    </div>
                    
                    {/* Activity Feed */}
                    <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 h-64 overflow-hidden flex flex-col">
                      <h4 className="text-sm text-zinc-400 mb-4">Últimas Transações</h4>
                      <div className="flex-1 overflow-hidden space-y-4">
                        {[
                          { time: "12:45", amount: "R$ 145,90", type: "Crédito" },
                          { time: "12:42", amount: "R$ 32,00", type: "Pix" },
                          { time: "12:38", amount: "R$ 89,50", type: "Débito" },
                          { time: "12:35", amount: "R$ 210,00", type: "Crédito" },
                        ].map((tx, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                                <CreditCard size={14} className="text-zinc-400" />
                              </div>
                              <div>
                                <div className="text-white font-medium">{tx.amount}</div>
                                <div className="text-xs text-zinc-500">{tx.type}</div>
                              </div>
                            </div>
                            <div className="text-xs text-zinc-500">{tx.time}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function VideoSection() {
  return (
    <section id="video" className="py-24 bg-black/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Veja a ArenaPlan Smart PDV em ação
            </h2>
            <p className="text-white/50 text-lg mb-8">
              Confira os vídeos no nosso canal oficial e entenda por que milhares de empreendedores já mudaram para a melhor solução do mercado.
            </p>
            
            <a 
              href="http://www.youtube.com/@cupomfiscalmaquininhaarena3759" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
            >
              <PlayCircle size={20} /> Acessar Canal no YouTube
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 relative group cursor-pointer flex items-center justify-center">
              {/* Fake video thumbnail, in real life we could use an image or iframe */}
              <div className="absolute inset-0 bg-zinc-900 object-cover opacity-80 group-hover:opacity-60 transition-opacity flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-tr from-black to-zinc-800"></div>
              </div>
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                <PlayCircle size={40} className="text-white ml-2" />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-48 p-4 bg-[#0D0D0E] border border-white/10 shadow-2xl rounded-2xl flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                <PlayCircle size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">Canal Oficial</p>
                <p className="text-xs text-zinc-400">Inscreva-se</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-electric-blue/10"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
            <div className="w-48 mx-auto mb-8">
              <img src={machine4} alt="ArenaPlan Smart PDV" className="w-full object-contain drop-shadow-[0_0_40px_rgba(0,255,0,0.25)] hover:scale-105 transition-transform duration-500" />
            </div>
          
          <h2 className="text-4xl md:text-[64px] font-display font-bold leading-[1.05] mb-6 tracking-tight">
            Transforme sua operação com uma solução profissional completa.
          </h2>
          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">
            Junte-se à nova era de gestão e pagamentos. Simples, rápida e sem taxas abusivas.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 text-lg shadow-xl"
            >
              Solicitar Orçamento
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-emerald text-black font-bold hover:bg-emerald hover:scale-105 transition-all flex items-center justify-center gap-2 text-lg shadow-[0_0_20px_rgba(0,255,0,0.3)]"
            >
              Falar no WhatsApp Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function MachineGallerySection() {
  const machines = [
    { img: machine1, name: "Smart PDV Pro", desc: "Alta performance para alto volume de vendas." },
    { img: machine2, name: "Smart PDV Compact", desc: "Mobilidade para atendimento direto na mesa." },
    { img: machine3, name: "Smart PDV Plus", desc: "Impressora integrada e conectividade total." },
    { img: machine4, name: "Smart PDV Ultra", desc: "Tela dupla para uma experiência premium." },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            Linha completa de <span className="text-emerald">máquinas</span>
          </h2>
          <p className="text-white/50 text-lg">Escolha o modelo ideal para o seu negócio.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {machines.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-zinc-900 border border-white/10 rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="aspect-square bg-zinc-800/30 flex items-center justify-center p-8">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{m.name}</h3>
                <p className="text-sm text-white/50">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md py-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="ArenaPlan Logo" className="h-10 w-10 rounded-xl object-contain" />
            <span className="font-display font-bold text-xl tracking-tight">ArenaPlan</span>
          </div>
          <p className="text-white/40 max-w-sm text-sm font-medium">
            Tecnologia premium em pagamentos e gestão para o seu negócio.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Links</h4>
          <ul className="space-y-2 text-sm text-white/50 font-medium">
            <li><a href="https://arenaplan.com.br" className="hover:text-white">Site Oficial</a></li>
            <li><a href={WHATSAPP_LINK} className="hover:text-white">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-white/50 font-medium">
            <li>Termos de Uso</li>
            <li>Privacidade</li>
            <li className="text-xs pt-4 text-white/30">*Aluguel grátis sujeito a análise de faturamento mínimo.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

