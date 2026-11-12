import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Telescope, Sun, Moon, Rocket, BookOpen, Drama, Users, Presentation, Sparkles,
  Phone, Mail, Instagram, MessageCircle, X, GraduationCap, Building2,
  School, Landmark, Menu, MapPin, CalendarDays, ExternalLink, Microscope,
  Camera, Compass, Globe, FlaskConical, ArrowUpRight, BookMarked, Handshake,
} from "lucide-react";
import f1 from "@/assets/drive/f1.webp";
import f2 from "@/assets/drive/f2.webp";
import f3 from "@/assets/drive/f3.webp";
import f4 from "@/assets/drive/f4.webp";
import f5 from "@/assets/drive/f5.webp";
import f6 from "@/assets/drive/f6.webp";
import f7 from "@/assets/drive/f7.webp";
import f8 from "@/assets/drive/f8.webp";
import f9 from "@/assets/drive/f9.webp";
import f10 from "@/assets/drive/f10.webp";
import f11 from "@/assets/drive/f11.webp";
import f12 from "@/assets/drive/f12.webp";
import f13 from "@/assets/drive/f13.webp";
import f14 from "@/assets/drive/f14.webp";
import f15 from "@/assets/drive/f15.webp";
import f16 from "@/assets/drive/f16.webp";
import oasiTeam from "@/assets/oasi-equipe.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Desvendando o Céu Austral | Museu de Ciências da UFRPE" },
      { name: "description", content: "Conheça o Museu de Ciências Desvendando o Céu Austral, da UFRPE: astronomia para todos, oficinas, observações, foguetes educativos, parcerias com o OASI e ações de popularização da ciência." },
      { property: "og:title", content: "Desvendando o Céu Austral | Museu de Ciências da UFRPE" },
      { property: "og:description", content: "Popularizar a ciência, conectar pessoas e aproximar o Sertão do Universo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const INSTAGRAM = "https://www.instagram.com/desvendandoceuaustral?obrf=am80NDhvcHRkZ2U1";
const EMAIL = "desvendandooceuaustral.df@ufrpe.br";
const DRIVE = "https://drive.google.com/drive/folders/1LGv4pSrye9NgpvY-9K5fTtsJt1vxiGj4?usp=sharing";
const OASI = "https://www.gov.br/observatorio/pt-br/assuntos/areas-de-atuacao/astronomia-e-astrofisica/oasi";
const UFRPE_POP = "https://ufrpe.br/not%C3%ADcias/semana-de-populariza%C3%A7%C3%A3o-da-ci%C3%AAncia-no-semi%C3%A1rido-chega-%C3%A0-d%C3%A9cima-edi%C3%A7%C3%A3o/";
const UFRPE_MUSEUM = "https://www.ufrpe.br/es/not%C3%ADcias/ufrpe-inaugura-museu-de-ci%C3%AAncias-desvendando-o-c%C3%A9u-austral/";
const MOTION_GRAPHICS_UFRPE = "https://sigs.ufrpe.br/sigaa/public/programa/noticias_desc.jsf?id=400&lc=pt_BR&noticia=42351205";
const ON_VISIT = "https://www.gov.br/observatorio/pt-br/assuntos/areas-de-atuacao/astronomia-e-astrofisica/oasi/impacton/noticias/visita-tecnica-ao-oasi-2013-27-de-maio-de-2022/";
const ON_VISIT_2021 = "https://www.gov.br/observatorio/pt-br/assuntos/areas-de-atuacao/astronomia-e-astrofisica/oasi/impacton/noticias/oasi-recebe-visitantes-na-semana-nacional-de-ciencia-e-tecnologia-2021";
const ON_2022 = "https://www.gov.br/observatorio/pt-br/assuntos/noticias/observatorio-astronomico-do-sertao-de-itaparica-oasi-on-de-portas-abertas-na-snct-2022";
const ALEPE = "https://www.alepe.pe.gov.br/2023/09/20/comissao-de-ciencia-e-tecnologia-realiza-acao-para-popularizar-a-astronomia/";
const CULTURA_PE = "https://www.cultura.pe.gov.br/canal/espacosculturais/programacao-no-observatorio-da-torre-malakoff-convida-interessados-em-astronomia/";
const MOSTRA_2014 = "https://desvendandoufrpe.blogspot.com/2014/05/o-que-aconteceu-iv-mostra-de-astronomia.html";
const SERRA_TALHADA_2014 = "https://desvendandoufrpe.blogspot.com/2014/09/desvendando-o-ceu-austral-participa-de.html";
const IFPE_2014 = "https://desvendandoufrpe.blogspot.com/2014/09/desvendando-o-ceu-austral-participa-de_16.html";
const SANTA_FILOMENA = "https://sectipe.blogspot.com/2020/10/clipmail-secti-08102020.html";
const SERRA_MAGE = "https://www.museuitinerante.com/serra-do-mag%C3%A9";
const ALAGOINHA_EVENT = "https://www.globgov.com/BR/Alagoinha/542516145768365/Prefeitura-Municipal-de-Alagoinha-PE";
const PROJECT_ARCHIVE = "https://astronomiaufrpe.wixsite.com/desvendando";
const SAMYR_RECORD = "https://astronomiaufrpe.wixsite.com/desvendando/single-post/2017/05/29/iii-semana-da-populariza%C3%A7%C3%A3o-da-ci%C3%AAncia-no-semi%C3%A1rido-monteiro";
const SAMYR_UFRPE_POST = "https://www.facebook.com/UFRPEoficial/posts/samyr-pessoa-da-silva-esse-foi-o-nome-escolhido-por-71-dos-estudantes-da-ufrpe-p/3466004156789113/";

const timeline = [
  {
    year: "mai. 2014",
    title: "IV Mostra de Astronomia: extensão em ação",
    text: "Um dos primeiros registros públicos do arquivo do projeto documenta a IV Mostra de Astronomia, realizada na UFRPE em parceria com o PIBID-Física e o Espaço Ciência. A programação reuniu estudantes e professores de diferentes escolas, a peça ‘O julgamento de Galileu’, palestras, exposições explicativas e oficinas com telescópios. A iniciativa também buscava incentivar a participação na Olimpíada Brasileira de Astronomia (OBA). Esse marco revela a vocação que acompanha o projeto até hoje: aprender ciência por meio da experiência, da conversa e da participação cultural.",
    source: MOSTRA_2014,
    sourceLabel: "Relato da IV Mostra · arquivo histórico",
    icon: Presentation,
  },
  {
    year: "set. 2014",
    title: "A astronomia sai do campus",
    text: "Ainda em 2014, os registros do projeto mostram atividades em espaços parceiros, incluindo ações em Serra Talhada e no IFPE de Belo Jardim. O formato combinava conversa sobre astronomia, experimentos, construção e lançamento de foguetes e observação do céu. A itinerância ampliou o alcance da extensão: em vez de esperar que o público chegasse à universidade, a equipe passou a levar experiências científicas a diferentes cidades e comunidades.",
    source: SERRA_TALHADA_2014,
    sourceLabel: "Registro de atividade em Serra Talhada",
    icon: Rocket,
  },
  {
    year: "2015",
    title: "Astronomia em espaços públicos do Recife",
    text: "A parceria com a Torre Malakoff levou observação da Lua, de Júpiter e de constelações, além de conversas sobre meteoros, cometas e asteroides, a uma programação gratuita e aberta ao público.",
    source: CULTURA_PE,
    sourceLabel: "Registro da Secretaria de Cultura de PE",
    icon: Telescope,
  },
  {
    year: "2017",
    title: "Ciência também se conta e se encena",
    text: "Na III Semana de Popularização da Ciência no Semiárido, em Monteiro (PB), o arquivo do projeto registra uma palestra de Samyr Pessoa da Silva sobre astrobiologia e sua participação no teatro científico.",
    source: SAMYR_RECORD,
    sourceLabel: "Arquivo histórico do projeto",
    icon: Drama,
  },
  {
    year: "2021",
    title: "Visita técnica ao OASI",
    text: "A colaboração com o Observatório Nacional aproximou estudantes e professores da instrumentação do observatório, da pesquisa em andamento e de oficinas de foguetes e observação do céu.",
    source: ON_VISIT_2021,
    sourceLabel: "Registro do Observatório Nacional",
    icon: Microscope,
  },
  {
    year: "2022",
    title: "O OASI recebe mais de 200 visitantes",
    text: "Durante a Semana Nacional de Ciência e Tecnologia, o OASI e o Desvendando participaram de ações com telescópios, observação solar e noturna e lançamento de foguetes, com público de escolas e instituições de diversas cidades.",
    source: ON_2022,
    sourceLabel: "Registro do Observatório Nacional",
    icon: Users,
  },
  {
    year: "2023",
    title: "Dia Estadual da Astronomia na ALEPE",
    text: "O projeto integrou uma ação pública de observação do céu com telescópios, aproximando estudantes, servidores e visitantes da astronomia em parceria com a Comissão de Ciência e Tecnologia da Assembleia Legislativa.",
    source: ALEPE,
    sourceLabel: "Notícia da ALEPE",
    icon: Globe,
  },
  {
    year: "mar. 2026",
    title: "Pesquisa e audiovisual como ferramentas de divulgação",
    text: "Uma dissertação de mestrado da UFRPE estudou o uso de motion graphics no ensino de Física e incluiu um estudo de caso ligado ao Desvendando. Como produto aplicado, foi desenvolvido um vídeo para o projeto, com linguagem visual pensada para a aprendizagem e conteúdo científico validado por docente da área. O registro mostra uma nova frente de trabalho: produzir e avaliar materiais digitais que complementem as oficinas, visitas e mediações presenciais.",
    source: MOTION_GRAPHICS_UFRPE,
    sourceLabel: "Registro acadêmico da UFRPE · março de 2026",
    icon: Presentation,
  },
  {
    year: "18 de maio de 2026",
    title: "Inauguração do Museu de Ciências",
    text: "O projeto ganhou um espaço de visitação no térreo do Cegen, na UFRPE. A inauguração foi anunciada com ações de observação solar, foguetes educativos e atividades de divulgação científica.",
    source: UFRPE_MUSEUM,
    sourceLabel: "Notícia da UFRPE",
    icon: Landmark,
  },
  {
    year: "27–29 mai. 2026",
    title: "10ª Semana POP e 15 anos do OASI",
    text: "Em Itacuruba, a Semana POP reuniu UFRPE, Observatório Nacional, INSA e parceiros locais. A equipe do Desvendando contribuiu com dinâmicas interativas, em uma programação ligada à ciência, cultura e futuro do Semiárido.",
    source: UFRPE_POP,
    sourceLabel: "Notícia da UFRPE",
    icon: Rocket,
  },
];

const activities = [
  { icon: Telescope, img: f4, title: "Observação astronômica noturna", category: "observacao", text: "Com telescópios e lunetas, o público observa a Lua, planetas e outros alvos disponíveis no céu. Os monitores orientam o olhar, explicam o funcionamento dos instrumentos e ajudam a transformar a observação em perguntas científicas.", materials: "Telescópios ou lunetas, tripés, cartas celestes ou aplicativo de identificação do céu e lanternas de luz vermelha."},
  { icon: Sun, img: f15, title: "Observação do Sol", category: "observacao", text: "Em sessões diurnas, instrumentos e filtros adequados permitem abordar manchas solares e características da nossa estrela. A mediação inclui orientações de segurança: nunca se deve olhar diretamente para o Sol sem equipamento apropriado.", materials: "Instrumento solar apropriado ou telescópio com filtro solar frontal certificado e íntegro, tripé e material de mediação. Nunca se deve olhar diretamente para o Sol nem usar filtros improvisados."},
  { icon: Compass, img: f6, title: "Reconhecimento do céu", category: "observacao", text: "Cartas celestes, referências do horizonte e observação a olho nu ajudam a localizar estrelas e constelações, reconhecer o Cruzeiro do Sul e compreender como o céu aparente muda ao longo do ano.", materials: "Cartas celestes ou planisfério, bússola, lanterna de luz vermelha e imagens de apoio."},
  { icon: Rocket, img: f3, title: "Montagem e lançamento de foguetes", category: "oficinas", text: "As oficinas convidam os participantes a construir e lançar foguetes educativos. A atividade torna visíveis conceitos de força, pressão, ação e reação, estabilidade, experimentação e comparação de resultados.", materials: "Duas garrafas PET lisas de 2 L por foguete, papelão firme, fita adesiva larga ou silver tape, tesoura, estilete, régua, caneta, cola quente (opcional, com manuseio adulto), pequenos pesos para o contrapeso, base de lançamento própria e bomba de bicicleta. A operação deve ser organizada pelos monitores, em área isolada e com supervisão."},
  { icon: Drama, img: f1, title: "Teatro e personagens científicos", category: "mediacao", text: "A linguagem teatral, os figurinos e personagens aproximam o público de temas astronômicos com humor e imaginação. É uma forma de acolher perguntas, quebrar a formalidade e falar de ciência em diferentes idades.", materials: "Roteiro, figurinos ou adereços, objetos de cena e, quando necessário, caixa de som e microfone."},
  { icon: BookOpen, img: f8, title: "Histórias, narrativas e mitos do céu", category: "mediacao", text: "Rodas de histórias conectam planetas, estrelas, exploração espacial e narrativas culturais. Os monitores usam a curiosidade e a participação do grupo para criar pontes entre imaginação, cultura e conhecimento científico.", materials: "Livros ou textos de apoio, imagens de estrelas e constelações, cartas celestes e, se disponível, projetor e caixa de som."},
  { icon: Presentation, img: f12, title: "Palestras e rodas de conversa", category: "mediacao", text: "Encontros sobre Sistema Solar, astrobiologia, meteoros, cometas, história da astronomia em Pernambuco e temas atuais. O conteúdo é ajustado ao nível da turma, à faixa etária e ao contexto de cada comunidade.", materials: "Computador, projetor ou tela, caixa de som e microfone, conforme o tema e o espaço. A realização não é fixa: depende da disponibilidade dos monitores, de convidados e da programação de eventos."},
  { icon: FlaskConical, img: f2, title: "Oficinas e experimentos", category: "oficinas", text: "Modelos, maquetes, materiais didáticos e pequenas experiências permitem investigar fenômenos por meio da observação e da construção. A proposta é que o visitante participe, teste ideias e converse sobre o que percebeu.", materials: "Materiais definidos pelo tema da oficina, como papel, papelão, cartolina, canetas, fita adesiva, tesoura, modelos didáticos e kits experimentais preparados pela equipe."},
  { icon: Landmark, img: f11, title: "Museu de Ciências e acervo", category: "mediacao", text: "No espaço do Museu, visitas mediadas podem apresentar instrumentos, modelos e histórias que ajudam a contar como a ciência é construída. O acervo funciona como ponto de partida para atividades com escolas e famílias.", materials: "Peças e modelos do acervo, roteiro de mediação e materiais didáticos complementares definidos pela equipe para cada grupo."},
  { icon: Camera, img: f7, title: "Astrofotografia e registros do céu", category: "observacao", text: "Fotografias do céu e registros das atividades ajudam a observar detalhes, documentar experiências e compartilhar descobertas. Os monitores explicam que cada imagem depende de condições de céu, instrumento e tempo de exposição.", materials: "Celular ou câmera, tripé, mapa ou aplicativo celeste e, quando disponível, adaptador para acoplar a câmera ao telescópio."},
  { icon: MapPin, img: f5, title: "Visitas técnicas e turismo astronômico", category: "externas", text: "Roteiros em espaços científicos e lugares ligados à história da astronomia aproximam o público do patrimônio cultural e científico de Pernambuco, incluindo observatórios e pontos históricos de Recife e Olinda.", materials: "Agendamento e autorização prévios, relação de participantes, transporte organizado pelo grupo, calçados fechados e água. Os requisitos específicos dependem do local visitado."},
  { icon: Users, img: f13, title: "Ações itinerantes com escolas e comunidades", category: "externas", text: "O projeto leva atividades para escolas, praças, eventos públicos e iniciativas de divulgação científica. O planejamento é adaptado à infraestrutura disponível e construído em diálogo com docentes, monitores e parceiros locais.", materials: "Materiais definidos conforme a ação: modelos, kits experimentais, computador, projetor, extensão elétrica, mesas e cadeiras, quando necessários."},
];

const gallery = [
  { img: oasiTeam, caption: "Equipe reunida diante de uma cúpula observacional" },
  { img: f5, caption: "Instrumentos e atividade externa de astronomia" },
  { img: f6, caption: "Via Láctea registrada sob um céu escuro" },
  { img: f15, caption: "Mediação com telescópio durante o dia" },
  { img: f1, caption: "Personagens e teatro científico" },
  { img: f3, caption: "Experimentos e atividades ao ar livre" },
  { img: f11, caption: "Atividade educativa com instrumentos" },
  { img: f8, caption: "Histórias e conversa com o público infantil" },
  { img: f7, caption: "Equipamento apontado para o céu noturno" },
  { img: f10, caption: "Monitores em atividade de divulgação" },
  { img: f14, caption: "Mediação científica com estudantes" },
  { img: f16, caption: "Observação guiada por monitores" },
  { img: f9, caption: "Aprendendo a utilizar os telescópios" },
  { img: f12, caption: "Apresentação sobre astronomia" },
  { img: f13, caption: "Encontro educativo com crianças" },
  { img: f4, caption: "Observação noturna" },
];

const partners = [
  { icon: GraduationCap, name: "UFRPE", text: "Universidade sede do projeto e do Museu de Ciências. Reúne docentes, estudantes e licenciandos em ações de extensão, ensino e divulgação científica." },
  { icon: Telescope, name: "OASI · Observatório Nacional", text: "Localizado em Itacuruba (PE), participa de visitas técnicas e atividades educativas. Sua infraestrutura robótica também sustenta pesquisas sobre pequenos corpos do Sistema Solar." },
  { icon: Microscope, name: "INSA e Semana POP", text: "A Semana de Popularização da Ciência no Semiárido articula pesquisa, educação, cultura e saberes locais, com atividades em escolas e comunidades do Sertão." },
  { icon: Landmark, name: "Espaço Ciência e SECTI-PE", text: "Parceiros em programações de divulgação científica, oficinas, exposições e ações que aproximam ciência e população." },
  { icon: School, name: "Escolas e redes de ensino", text: "Professores, gestores e estudantes ajudam a construir visitas, oficinas, rodas de conversa e experiências adequadas a cada comunidade escolar." },
  { icon: Building2, name: "Prefeituras e comunidades", text: "A parceria local pode envolver apoio à logística, mobilização do público, espaços de atividades e valorização da história científica do município." },
];

const contacts = [
  { name: "Stephanie de Lima Gomes Rodrigues", role: "Monitora responsável pela organização", phone: "81 98654-5345", wa: "5581986545345", icon: Users },
];

const sources = [
  { title: "Motion graphics · pesquisa da UFRPE", text: "Dissertação sobre materiais didáticos digitais e vídeo produzido para o Desvendando, com validação do conteúdo científico.", url: MOTION_GRAPHICS_UFRPE },
  { title: "IV Mostra de Astronomia · 2014", text: "Registro da programação com escolas, PIBID-Física, Espaço Ciência, teatro, palestras e oficinas de telescópios.", url: MOSTRA_2014 },
  { title: "Atividades de extensão em 2014", text: "Relato de uma das ações em Serra Talhada, com astronomia, experimentos e foguetes educativos.", url: SERRA_TALHADA_2014 },
  { title: "Atividade no IFPE de Belo Jardim · 2014", text: "Registro histórico de ação de divulgação científica em parceria com instituição de ensino.", url: IFPE_2014 },
  { title: "Museu de Ciências · UFRPE", text: "Anúncio institucional da inauguração do Museu, em maio de 2026.", url: UFRPE_MUSEUM },
  { title: "OASI · Observatório Nacional", text: "Informações sobre o observatório, a pesquisa astronômica e a operação robótica.", url: OASI },
  { title: "10ª Semana POP · UFRPE", text: "Parcerias e programação da Semana POP em Itacuruba, em maio de 2026.", url: UFRPE_POP },
  { title: "Visita técnica ao OASI · ON", text: "Registro de visita do Desvendando e de instituições de ensino ao observatório.", url: ON_VISIT },
  { title: "OASI de portas abertas · ON", text: "Registro das atividades educativas e do público recebido na SNCT de 2022.", url: ON_2022 },
  { title: "Astronomia na ALEPE", text: "Ação pública do projeto no Dia Estadual da Astronomia, em 2023.", url: ALEPE },
  { title: "Torre Malakoff · Cultura PE", text: "Registro de uma programação pública de astronomia em Recife, em 2015.", url: CULTURA_PE },
  { title: "Santa Filomena · articulação científica", text: "Registro de propostas de divulgação e preservação após a queda de meteoritos em 2020.", url: SANTA_FILOMENA },
  { title: "Meteorito Serra do Magé", text: "Referência histórica sobre a queda observada em 1923 na região de Alagoinha.", url: SERRA_MAGE },
  { title: "Arquivo do projeto", text: "Publicações e registros históricos do Desvendando o Céu Austral.", url: PROJECT_ARCHIVE },
  { title: "Samyr Pessoa · publicação da UFRPE", text: "Postagem institucional que registra uma votação em que o nome Samyr Pessoa da Silva recebeu 71% dos votos; consulte a publicação para ver o contexto completo.", url: SAMYR_UFRPE_POST },
];

function Logo() {
  return (
    <a href="#museu" className="flex min-w-0 items-center gap-2 font-display text-sm font-semibold text-white sm:gap-3 sm:text-base md:text-lg" aria-label="Desvendando o Céu Austral — início">
      <img src="/favicon.png?v=20261112d" alt="" aria-hidden="true" className="h-9 w-9 shrink-0 rounded-xl sm:h-10 sm:w-10" />
      <span className="max-w-[154px] leading-tight sm:max-w-none">Desvendando o<br className="sm:hidden" /> Céu Austral</span>
    </a>
  );
}

function SectionTitle({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold sm:text-sm">{kicker}</p>
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-gold underline-offset-4 hover:underline">{children}<ExternalLink className="h-3.5 w-3.5" /></a>;
}

function Index() {
  const [open, setOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("museu");
  const [activityFilter, setActivityFilter] = useState("all");
  const [historyOpen, setHistoryOpen] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    let initial: "light" | "dark" = "light";
    try {
      const stored = localStorage.getItem("desvendando-theme");
      if (stored === "light" || stored === "dark") initial = stored;
      else if (window.matchMedia("(prefers-color-scheme: dark)").matches) initial = "dark";
    } catch {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) initial = "dark";
    }
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next: "light" | "dark" = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("desvendando-theme", next); } catch { /* A troca funciona mesmo sem armazenamento. */ }
  };

  useEffect(() => {
    if (!menuOpen) return;
    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleMenuKeyDown);
    return () => window.removeEventListener("keydown", handleMenuKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);
  const visibleActivities = activities.filter((activity) => activityFilter === "all" || activity.category === activityFilter);

  const navItems = [
    { page: "museu", href: "#museu", label: "O Museu", description: "Proposta, espaço e experiências" },
    { page: "historia", href: "#historia", label: "História do Museu", description: "Da extensão universitária ao Museu" },
    { page: "atividades", href: "#atividades", label: "Atividades", description: "Oficinas, observações e experiências" },
    { page: "visita", href: "#visita", label: "Visitação", description: "Planeje e solicite sua visita" },
    { page: "equipe", href: "#equipe", label: "Equipe", description: "Professores e monitores" },
    { page: "contato", href: "#contato", label: "Contato", description: "Telefone, Instagram e e-mail" },
    { page: "parcerias", href: "#parcerias", label: "Parcerias", description: "Instituições e ações colaborativas" },
    { page: "oasi", href: "#oasi", label: "OASI", description: "Observatório e pesquisa astronômica" },
    { page: "galeria", href: "#galeria", label: "Galeria", description: "Registros de atividades e eventos" },
  ];

  const navigateToPage = (page: string, href: string) => {
    setActivePage(page);
    setMenuOpen(false);
    if (page !== "historia") setHistoryOpen(false);
    try { window.history.pushState({ page }, "", href); } catch { /* A navegação permanece funcional sem histórico. */ }
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  useEffect(() => {
    const activateFromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      const page = target?.closest<HTMLElement>("[data-page-panel]")?.dataset.pagePanel;
      if (page) setActivePage(page);
    };
    const handleInPageLink = (event: MouseEvent) => {
      const targetElement = event.target instanceof Element ? event.target : null;
      const link = targetElement?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.length < 2) return;
      const target = document.getElementById(decodeURIComponent(href.slice(1)));
      const page = target?.closest<HTMLElement>("[data-page-panel]")?.dataset.pagePanel;
      if (!target || !page || page === activePage) return;
      event.preventDefault();
      setActivePage(page);
      setMenuOpen(false);
      try { window.history.pushState({ page }, "", href); } catch { /* Ignora restrições do histórico. */ }
      window.requestAnimationFrame(() => target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }));
    };
    activateFromHash();
    document.addEventListener("click", handleInPageLink);
    window.addEventListener("popstate", activateFromHash);
    return () => {
      document.removeEventListener("click", handleInPageLink);
      window.removeEventListener("popstate", activateFromHash);
    };
  }, [activePage]);

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo principal</a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-night/95 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3">
          <Logo />
          <div className="flex shrink-0 items-center gap-2">
            <button type="button" onClick={() => setMenuOpen((current) => !current)} className="side-menu-toggle" aria-label={menuOpen ? "Fechar menu de páginas" : "Abrir menu de páginas"} title={menuOpen ? "Fechar menu de páginas" : "Abrir menu de páginas"} aria-expanded={menuOpen} aria-controls="site-pages-menu">
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={toggleTheme} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white/10 touch-manipulation" aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"} aria-pressed={theme === "dark"} title={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>
      <button type="button" aria-label="Fechar menu de páginas" aria-hidden={!menuOpen} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)} className={`side-menu-backdrop ${menuOpen ? "is-open" : ""}`} />
      <aside id="site-pages-menu" aria-label="Menu lateral de páginas" aria-hidden={!menuOpen} inert={!menuOpen} className={`side-pages-panel ${menuOpen ? "is-open" : ""}`}>
        <div className="side-menu-header">
          <div><p className="eyebrow">Desvendando o Céu Austral</p><h2>Conheça mais o Museu</h2></div>
          <button type="button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} className="side-menu-close"><X className="h-5 w-5" /></button>
        </div>
        <nav aria-label="Páginas do site" className="side-pages-nav">
          {navItems.map((item) => <button key={item.page} type="button" onClick={() => navigateToPage(item.page, item.href)} aria-current={activePage === item.page ? "page" : undefined} className={`page-nav-card ${activePage === item.page ? "is-active" : ""}`}>
            <span className="font-bold">{item.label}</span><span className="mt-1 text-xs leading-relaxed text-white/65">{item.description}</span>
          </button>)}
        </nav>
      </aside>

      <main id="conteudo">
<div id="page-museu" data-page-panel="museu" className="site-page" hidden={activePage !== "museu"}>
      {/* MISSÃO */}
      <section id="apresentacao" className="relative flex min-h-[90svh] items-center overflow-hidden pt-20 sm:min-h-[92vh] md:min-h-screen">
        <img src={f6} alt="Céu escuro com a faixa da Via Láctea" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-night/50 via-night/65 to-background" />
        <div className="absolute inset-0 hero-vignette" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-8 sm:py-24 md:py-32">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-night/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-gold backdrop-blur sm:text-sm">
            <img src="/favicon.svg?v=20261112d" alt="" aria-hidden="true" className="h-5 w-5 rounded-md" /> Museu de Ciências · UFRPE
          </div>
          <div aria-hidden="true" className="mx-auto mb-6 w-fit"><img src="/favicon.svg?v=20261112d" alt="" aria-hidden="true" className="h-16 w-16 rounded-xl sm:h-20 sm:w-20" /></div>
          <h1 className="mx-auto max-w-5xl text-3xl font-bold leading-[1.08] tracking-tight min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl">O Museu de Ciências<br /><span className="text-gold">Desvendando o Céu Austral</span></h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/85 min-[380px]:text-base sm:mt-6 sm:text-lg md:text-xl">Ciência para todos — do céu de Pernambuco ao Sertão, das escolas aos observatórios, da curiosidade à descoberta.</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">Um projeto de extensão e Museu de Ciências da Universidade Federal Rural de Pernambuco dedicado à popularização da astronomia e à inclusão por meio do conhecimento.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row sm:mt-9 sm:gap-4">
            <a href="#visita" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:opacity-90 sm:px-7">Planeje sua visita <ArrowUpRight className="h-4 w-4" /></a>
            <a href="#atividades" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-night/30 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:px-7"><Telescope className="h-4 w-4" /> Ver atividades</a>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 min-[520px]:grid-cols-3 sm:mt-14">
            <div className="rounded-2xl border border-white/15 bg-night/45 px-4 py-4 backdrop-blur"><p className="font-display text-3xl font-bold text-gold">Desde 2014</p><p className="mt-1 text-sm text-white/75">Projeto de extensão e divulgação científica</p></div>
            <div className="rounded-2xl border border-white/15 bg-night/45 px-4 py-4 backdrop-blur"><p className="font-display text-3xl font-bold text-gold">1 m</p><p className="mt-1 text-sm text-white/75">Espelho primário do telescópio do OASI</p></div>
            <div className="rounded-2xl border border-white/15 bg-night/45 px-4 py-4 backdrop-blur"><p className="font-display text-3xl font-bold text-gold">18 de maio</p><p className="mt-1 text-sm text-white/75">Inauguração do Museu de Ciências na UFRPE · 2026</p></div>
          </div>
        </div>
      </section>
<section id="museu" className="starfield py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle kicker="O Museu" title="Ciência, astronomia e descoberta para todos" sub="Astronomia acessível, experiência prática e participação de estudantes e comunidades." />
          <div className="grid items-center gap-10 md:grid-cols-[1.02fr_.98fr] md:gap-14">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p><strong className="text-foreground">O Museu de Ciências Desvendando o Céu Austral</strong> é um espaço de divulgação científica da Universidade Federal Rural de Pernambuco (UFRPE), dedicado a aproximar a astronomia e outras áreas do conhecimento de estudantes, professores, famílias e visitantes.</p>
              <p>Sua proposta é transformar a curiosidade em experiência: o público pode conhecer instrumentos e modelos, participar de mediações, observar fenômenos quando as condições permitem e dialogar com monitores sobre perguntas científicas. O Museu valoriza a aprendizagem pela experimentação, pela conversa e pelo contato com o patrimônio científico.</p>
              <p>Localizado no térreo do Cegen, na UFRPE, o espaço oferece um ponto de encontro entre universidade e sociedade. As ações podem ser adaptadas a diferentes idades e necessidades, incluindo visitas escolares, grupos e atividades educativas planejadas em parceria.</p>
              <p>O Museu também mantém a dimensão itinerante do projeto: oficinas e ações de divulgação podem ser propostas para escolas, eventos e comunidades, conforme disponibilidade da equipe, planejamento e infraestrutura. Assim, o espaço físico e as ações externas se complementam.</p>
              <div className="rounded-2xl border border-gold/25 bg-card/75 p-4 sm:p-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Planeje sua visita</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">O atendimento é organizado mediante solicitação prévia. Datas, horários e atividades são confirmados pela equipe, de acordo com a programação e as condições de realização.</p><a href="#visita" className="mt-3 inline-flex items-center gap-2 font-semibold text-gold hover:underline">Ver informações de visitação <ArrowUpRight className="h-4 w-4" /></a></div>
            </div>
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4"><img src={f10} alt="Monitores do projeto em uma atividade externa" loading="lazy" className="h-52 w-full rounded-2xl object-cover sm:h-64" /><img src={f8} alt="Atividade educativa com crianças" loading="lazy" className="h-40 w-full rounded-2xl object-cover sm:h-52" /></div>
              <div className="space-y-3 pt-8 sm:space-y-4 sm:pt-12"><img src={f9} alt="Monitor durante uma observação astronômica" loading="lazy" className="h-40 w-full rounded-2xl object-cover sm:h-52" /><img src={oasiTeam} alt="Equipe reunida diante de uma cúpula observacional" loading="lazy" className="h-52 w-full rounded-2xl object-cover sm:h-64" /></div>
              <div className="pointer-events-none absolute -bottom-4 -left-4 -z-0 h-24 w-24 rounded-full border border-gold/35" />
            </div>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, title: "Curiosidade", text: "Despertar perguntas e o prazer de descobrir." },
              { icon: BookOpen, title: "Aprendizagem", text: "Conectar conceitos científicos a experiências reais." },
              { icon: Handshake, title: "Inclusão", text: "Criar espaços de participação e pertencimento." },
              { icon: GraduationCap, title: "Formação", text: "Aproximar os licenciandos da mediação científica." },
            ].map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-border bg-card/60 p-5 sm:p-6"><Icon className="h-7 w-7 text-gold" /><h3 className="mt-4 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
          </div>
        </div>
      </section>

</div>

<div id="page-historia" data-page-panel="historia" className="site-page" hidden={activePage !== "historia"}>
      {/* HISTÓRIA: só é exibida após o clique no botão. */}
      <section id="historia" className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setHistoryOpen((current) => !current)}
                aria-expanded={historyOpen}
                aria-controls="historia-conteudo"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-sm font-bold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold touch-manipulation sm:text-base"
              >
                {historyOpen ? "Ocultar a História do Desvendando" : "Conhecer a História do Desvendando"}
              </button>
            </div>
            {historyOpen && (
              <div id="historia-conteudo" className="mt-10 rounded-3xl border border-border bg-card/70 p-5 sm:p-7">
                <SectionTitle kicker="História do Museu" title="Da iniciativa de extensão ao Museu de Ciências" sub="Dos registros de extensão em 2014 à inauguração do Museu em 2026: uma trajetória de oficinas, ações itinerantes, pesquisa e divulgação científica. O primeiro marco abaixo é o registro público consultado, não uma afirmação de data formal de fundação." />
                <div className="relative mx-auto max-w-5xl">
                  <div className="absolute bottom-3 left-[15px] top-3 w-px bg-gold/40 sm:left-1/2" />
                  <div className="space-y-5 sm:space-y-7">
                    {timeline.map((item, i) => {
                      const Icon = item.icon;
                      return <article key={item.year + item.title} className={`relative pl-12 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? "sm:pr-10" : "sm:ml-auto sm:pl-10"}`}>
                        <span className={`absolute left-[4px] top-6 z-10 grid h-6 w-6 place-items-center rounded-full border border-gold/60 bg-background text-gold sm:left-auto ${i % 2 === 0 ? "sm:-right-[13px]" : "sm:-left-[13px]"}`}><Icon className="h-3.5 w-3.5" /></span>
                        <div className="rounded-2xl border border-border bg-card/80 p-5 transition hover:border-gold/45 sm:p-6">
                          <div className="flex flex-wrap items-center justify-between gap-2"><span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{item.year}</span><CalendarDays className="h-4 w-4 text-muted-foreground" /></div>
                          <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{item.title}</h3>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{item.text}</p>
                          <div className="mt-4"><SourceLink href={item.source}>{item.sourceLabel}</SourceLink></div>
                        </div>
                      </article>;
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

</div>

<div id="page-atividades" data-page-panel="atividades" className="site-page" hidden={activePage !== "atividades"}>
      {/* ATIVIDADES */}
      <section id="atividades" className="starfield py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle kicker="Catálogo de atividades" title="Atividades que colocam a ciência em movimento" sub="Conheça as experiências que podem compor uma visita. O formato, os materiais e a disponibilidade são ajustados ao público, ao espaço e à programação da equipe." />
          <p className="mb-7 rounded-xl border-l-4 border-gold bg-secondary/60 p-4 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Sobre as palestras:</strong> elas não têm calendário fixo. Os temas e a realização dependem da disponibilidade dos monitores, de convidados e dos eventos em que a equipe participa.</p>
          <div className="mb-6 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrar atividades">
            {[{id:"all",label:"Todas"},{id:"observacao",label:"Observação do céu"},{id:"oficinas",label:"Oficinas e experimentos"},{id:"mediacao",label:"Mediação e cultura"},{id:"externas",label:"Visitas e ações externas"}].map((filter) => <button key={filter.id} type="button" onClick={() => setActivityFilter(filter.id)} aria-pressed={activityFilter === filter.id} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${activityFilter === filter.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:border-gold/60 hover:text-foreground"}`}>{filter.label}</button>)}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleActivities.map(({ icon: Icon, img, title, text, materials }, i) => <article key={title} className="group overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-black/20">
              <div className="relative h-52 overflow-hidden sm:h-56"><img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" /><span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-night/80 text-gold backdrop-blur"><Icon className="h-5 w-5" /></span><span className="absolute bottom-3 right-4 text-xs font-semibold tracking-widest text-white/75">{String(i + 1).padStart(2, "0")}</span></div>
              <div className="p-5 sm:p-6"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p><div className="mt-4 rounded-xl bg-secondary/70 p-3 text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Materiais necessários:</strong> {materials}</div><a href={`https://wa.me/5581986545345?text=${encodeURIComponent(`Olá! Vim através do site do Desvendando o Céu Austral e tenho interesse em agendar a atividade “${title}”. Gostaria de verificar a possibilidade de levar minha escola ao Museu, solicitar uma visita do Desvendando à minha escola/comunidade ou participar como visitante. Poderiam me orientar sobre a disponibilidade e as condições? Nome: ___. Escola/instituição: ___. Município: ___. Quantidade de participantes: ___.`)}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground transition hover:opacity-90"><MessageCircle className="h-4 w-4 shrink-0" /> Agendar com o Museu <ArrowUpRight className="h-4 w-4 shrink-0" /></a></div>
            </article>)}
          </div>
          <div className="mt-12 grid gap-6 rounded-3xl border border-gold/25 bg-secondary/55 p-6 sm:p-8 md:grid-cols-[.9fr_1.1fr] md:items-center md:p-10">
            <div className="relative overflow-hidden rounded-2xl"><img src={f14} alt="Monitor conduzindo uma atividade com crianças" loading="lazy" className="h-64 w-full object-cover sm:h-80" /><span className="absolute bottom-3 left-3 rounded-full bg-night/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">Educação não formal</span></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-gold sm:text-sm">O coração das ações</p><h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">Monitores que conectam universidade e comunidade</h3><p className="mt-4 text-base leading-relaxed text-muted-foreground">Os monitores ajudam a planejar os encontros, preparar materiais e instrumentos, acolher perguntas e apresentar conceitos de forma acessível. Essa experiência também é formativa: estudantes universitários exercitam a comunicação pública da ciência e a mediação de aprendizagem com públicos diversos.</p><a href="#contato" className="mt-6 inline-flex items-center gap-2 font-semibold text-gold hover:underline">Converse sobre uma atividade <ArrowUpRight className="h-4 w-4" /></a></div>
          </div>

        </div>
      </section>


</div>

<div id="page-visita" data-page-panel="visita" className="site-page" hidden={activePage !== "visita"}>
      <section id="visita" className="bg-secondary/35 pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle kicker="Planeje sua visita" title="Venha conhecer o Museu" sub="O Desvendando recebe solicitações de escolas, grupos e visitantes. Conte como gostaria de participar para que a equipe possa orientar os próximos passos." />
          <div className="grid gap-5 md:grid-cols-2">
            <article className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <School className="h-10 w-10 text-gold" />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-gold">Escolas e instituições</p>
              <h3 className="mt-2 text-2xl font-semibold">Visita ao Museu com sua turma</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">Solicite uma visita mediada para estudantes, professores ou grupos organizados. Informe o perfil da turma e as atividades de interesse.</p>
              <a href="#formulario-visita" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground hover:opacity-90">Solicitar visita <ArrowUpRight className="ml-2 h-4 w-4" /></a>
            </article>
            <article className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <Telescope className="h-10 w-10 text-gold" />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-gold">Escolas, grupos e comunidades</p>
              <h3 className="mt-2 text-2xl font-semibold">Solicitar uma ação externa</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">Também é possível consultar a disponibilidade da equipe para uma atividade em escola, evento ou comunidade, conforme o planejamento e os recursos necessários.</p>
              <a href="#formulario-visita" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-gold/60 px-5 py-3 font-bold text-gold transition hover:bg-gold/10">Conversar sobre uma ação <ArrowUpRight className="ml-2 h-4 w-4" /></a>
            </article>
          </div>
        </div>
      </section>

      <section id="planejamento-visita" className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Antes de vir</p>
            <h2 className="mt-2 text-3xl font-semibold">Como organizar a visita</h2>
            <ol className="mt-6 grid gap-4">
              <li className="flex gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/15 font-bold text-gold">1</span><span className="text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Envie a solicitação.</strong> Informe o tipo de grupo, a quantidade de participantes e os interesses.</span></li>
              <li className="flex gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/15 font-bold text-gold">2</span><span className="text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Aguarde o retorno.</strong> A equipe verificará disponibilidade, formato, acessibilidade e necessidades do grupo.</span></li>
              <li className="flex gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/15 font-bold text-gold">3</span><span className="text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Confirme os detalhes.</strong> Data, horário e atividades só ficam definidos após a confirmação da equipe.</span></li>
            </ol>
          </div>
          <div className="rounded-3xl border border-gold/25 bg-secondary/50 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Programação e novidades</p>
            <h3 className="mt-2 text-2xl font-semibold">Acompanhe o Museu</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">As atividades e palestras dependem da disponibilidade dos monitores, convidados, eventos e condições de realização. Acompanhe os registros e comunicados do projeto no Instagram ou consulte a equipe antes de se deslocar.</p>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"><Instagram className="h-4 w-4" /> @desvendandoceuaustral <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section id="perguntas-frequentes" className="bg-secondary/25 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionTitle kicker="Informações úteis" title="Perguntas frequentes" sub="Algumas respostas para ajudar a planejar sua visita." />
          <div className="grid gap-3">
            <details className="rounded-2xl border border-border bg-card p-5"><summary className="cursor-pointer font-semibold">É necessário agendar?</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Sim. Envie uma solicitação pelo formulário e aguarde a equipe confirmar a possibilidade, a data e os detalhes do atendimento.</p></details>
            <details className="rounded-2xl border border-border bg-card p-5"><summary className="cursor-pointer font-semibold">Posso solicitar uma atividade na minha escola ou comunidade?</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Sim. Selecione a opção de ação externa no formulário. A realização depende da disponibilidade da equipe, do planejamento e da infraestrutura necessária.</p></details>
            <details className="rounded-2xl border border-border bg-card p-5"><summary className="cursor-pointer font-semibold">As palestras acontecem em dias fixos?</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Não há calendário fixo de palestras. Os temas e a realização dependem dos monitores, convidados e eventos.</p></details>
            <details className="rounded-2xl border border-border bg-card p-5"><summary className="cursor-pointer font-semibold">Como recebo a resposta?</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">O formulário encaminha uma cópia integral da solicitação ao e-mail informado. A equipe utiliza esse endereço para conversar sobre o pedido. A cópia não significa que a visita já está agendada; na primeira utilização, o endereço institucional também precisa ser ativado no serviço de formulários.</p></details>
          </div>
        </div>
      </section>

      <section id="formulario-visita" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionTitle kicker="Solicitação de visita" title="Conte como gostaria de participar" sub="Preencha o formulário. As informações serão encaminhadas ao e-mail institucional do Desvendando e uma confirmação será enviada ao endereço eletrônico informado." />
          <div className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8">
            <form action={`https://formsubmit.co/ajax/${EMAIL}`} method="POST" acceptCharset="UTF-8" className="grid gap-4 sm:grid-cols-2" onReset={() => setFormStatus(null)} onSubmit={async (event) => {
              event.preventDefault();
              if (formSubmitting) return;
              const form = event.currentTarget;
              const formData = new FormData(form);
              const visitorEmail = String(formData.get("email") || "").trim();
              if (!visitorEmail) return;
              formData.set("_cc", visitorEmail);
              formData.set("_replyto", visitorEmail);
              formData.set("_url", window.location.href.split("#")[0]);
              const payload: Record<string, string | string[]> = {};
              formData.forEach((value, key) => {
                const fieldValue = String(value);
                if (Object.prototype.hasOwnProperty.call(payload, key)) {
                  const previous = payload[key];
                  payload[key] = Array.isArray(previous) ? [...previous, fieldValue] : [previous, fieldValue];
                } else payload[key] = fieldValue;
              });
              setFormSubmitting(true); setFormStatus(null);
              try {
                const response = await fetch(form.action, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
                const result = await response.json().catch(() => null) as { success?: string | boolean; message?: string } | null;
                if (!response.ok || !result?.success) throw new Error(result?.message || "O serviço não confirmou o recebimento.");
                setFormStatus("success");
              } catch (error) {
                console.error("Falha no envio da solicitação:", error);
                setFormStatus("error");
              } finally { setFormSubmitting(false); }
            }}>
              <input type="hidden" name="_subject" value="Nova solicitação de visita — Museu Desvendando o Céu Austral" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_cc" value="" />
              <input type="hidden" name="_replyto" value="" />
              <input type="hidden" name="_url" value="" />
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <label className="grid gap-2 text-sm font-semibold">Como deseja participar? *<select required name="Tipo de solicitação" defaultValue="" className="min-h-12 rounded-xl border border-border bg-background px-4 font-normal"><option value="" disabled>Selecione uma opção</option><option>Levar minha escola ou grupo ao Museu</option><option>Solicitar uma visita do Desvendando à minha escola/comunidade</option><option>Visitar o Museu como visitante ou família</option><option>Outra proposta / parceria</option></select></label>
              <label className="grid gap-2 text-sm font-semibold">Nome da escola, instituição ou grupo<input required name="Escola, instituição ou grupo" placeholder="Nome (ou informe que é visitante individual)" className="min-h-12 rounded-xl border border-border bg-background px-4 font-normal" /></label>
              <label className="grid gap-2 text-sm font-semibold">Nome do(a) responsável *<input required name="Responsável" autoComplete="name" className="min-h-12 rounded-xl border border-border bg-background px-4 font-normal" /></label>
              <label className="grid gap-2 text-sm font-semibold">E-mail para retorno *<input required type="email" name="email" autoComplete="email" placeholder="voce@exemplo.com" className="min-h-12 rounded-xl border border-border bg-background px-4 font-normal" /></label>
              <label className="grid gap-2 text-sm font-semibold">Telefone / WhatsApp *<input required type="tel" name="Telefone para contato" autoComplete="tel" placeholder="(00) 00000-0000" className="min-h-12 rounded-xl border border-border bg-background px-4 font-normal" /></label>
              <label className="grid gap-2 text-sm font-semibold">Município / cidade *<input required name="Município" placeholder="Cidade e estado" className="min-h-12 rounded-xl border border-border bg-background px-4 font-normal" /></label>
              <label className="grid gap-2 text-sm font-semibold">Quantidade aproximada de participantes<input type="number" min={1} max={500} name="Quantidade de participantes" placeholder="Ex.: 35" className="min-h-12 rounded-xl border border-border bg-background px-4 font-normal" /></label>
              <label className="grid gap-2 text-sm font-semibold">Etapa / faixa etária<input name="Etapa ou faixa etária" placeholder="Ex.: Ensino Fundamental — anos finais" className="min-h-12 rounded-xl border border-border bg-background px-4 font-normal" /></label>
              <label className="grid gap-2 text-sm font-semibold">Data ou período de preferência<input name="Data ou período de preferência" placeholder="Ex.: primeira quinzena de dezembro" className="min-h-12 rounded-xl border border-border bg-background px-4 font-normal" /></label>
              <label className="grid gap-2 text-sm font-semibold">Atividades de interesse<input name="Atividades de interesse" placeholder="Ex.: observação, foguetes, oficina..." className="min-h-12 rounded-xl border border-border bg-background px-4 font-normal" /></label>
              <label className="grid gap-2 text-sm font-semibold sm:col-span-2">Informações adicionais / acessibilidade<textarea name="Informações adicionais" rows={4} placeholder="Conte algo importante sobre o grupo, acessibilidade, estrutura disponível ou expectativas para a visita." className="rounded-xl border border-border bg-background px-4 py-3 font-normal" /></label>
              <label className="flex items-start gap-3 text-sm text-muted-foreground sm:col-span-2"><input required type="checkbox" name="Consentimento para contato" value="Autorizado" className="mt-1 h-4 w-4 accent-primary" />Autorizo o envio dessas informações ao Museu para análise da solicitação e contato sobre a visita.</label>
              <div className="sm:col-span-2"><div className="flex flex-wrap items-center gap-3"><button type="submit" disabled={formSubmitting} className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:opacity-90 disabled:cursor-wait disabled:opacity-60">{formSubmitting ? "Enviando…" : "Enviar solicitação"} <ArrowUpRight className="ml-2 h-4 w-4" /></button><button type="reset" disabled={formSubmitting} className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 py-3 font-bold text-foreground transition hover:border-primary hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60">Limpar formulário</button></div><p className="mt-3 text-xs leading-relaxed text-muted-foreground">O formulário encaminha a solicitação ao e-mail institucional e solicita uma cópia integral para o endereço informado. O envio não confirma a data da visita. Na primeira utilização, o endereço institucional precisa ser ativado no FormSubmit para que as mensagens sejam entregues.</p>
              {formStatus === "success" && <p role="status" aria-live="polite" className="mt-4 rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-sm font-semibold leading-relaxed text-emerald-900">O serviço de formulários aceitou sua solicitação. A cópia integral será encaminhada ao e-mail informado. Isso ainda não confirma a data da visita. Na primeira ativação, a equipe do Museu precisa confirmar o endereço institucional no e-mail enviado pelo FormSubmit; enquanto essa confirmação não for feita, a entrega final pode ficar pendente.</p>}
              {formStatus === "error" && <div role="alert" aria-live="assertive" className="mt-4 rounded-xl border border-red-300 bg-red-50 p-4 text-sm leading-relaxed text-red-900">Não foi possível confirmar o envio pelo formulário. Seus dados continuam preenchidos. Tente novamente ou <a className="font-bold underline" href={`mailto:${EMAIL}?subject=${encodeURIComponent("Solicitação de visita ao Museu")}`}>envie a solicitação diretamente pelo e-mail institucional</a>.</div>}</div>
            </form>
          </div>
        </div>
      </section>
      </div>

<div id="page-equipe" data-page-panel="equipe" className="site-page" hidden={activePage !== "equipe"}>
      {/* EQUIPE */}
      <section id="equipe" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle kicker="Equipe do Museu" title="Monitores e professores envolvidos na organização" sub="A organização do Desvendando reúne docentes e estudantes que colaboram com o planejamento, a mediação e as atividades de divulgação científica." />
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 sm:p-8"><div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold"><Landmark className="h-6 w-6" /></div><p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Professor responsável / idealizador</p><h3 className="mt-2 text-2xl font-semibold">Prof. Dr. Antônio Carlos da Silva Miranda</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Participação na orientação institucional e na articulação das ações do projeto.</p></article>
            <article className="rounded-2xl border border-border bg-card p-6 sm:p-8"><div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold"><Users className="h-6 w-6" /></div><p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Monitora responsável pela organização</p><h3 className="mt-2 text-2xl font-semibold">Stephanie de Lima Gomes Rodrigues</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Atuação na organização das visitas, no encaminhamento das atividades e no apoio à mediação.</p></article>
          </div>
          <p className="mx-auto mt-5 max-w-5xl border-l-2 border-gold/50 pl-4 text-sm leading-relaxed text-muted-foreground">A composição de monitores pode variar conforme o período letivo e a programação de eventos. As informações da equipe podem ser atualizadas pela organização do projeto.</p>
        </div>
      </section>

</div>

<div id="page-contato" data-page-panel="contato" className="site-page" hidden={activePage !== "contato"}>
      {/* CONTATO */}
      <section id="contato" className="py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionTitle kicker="Contato" title="Vamos levar a ciência até mais pessoas?" sub="Para dúvidas e encaminhamentos, utilize o e-mail institucional ou o contato de organização apresentado abaixo." />
          <div className="grid gap-5 md:grid-cols-2">
            {contacts.map(({ name, role, phone, wa, icon: Icon }) => <article key={name} className="rounded-2xl border border-border bg-card p-6 sm:p-8"><div className="flex items-start gap-4"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold"><Icon className="h-6 w-6" /></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{role}</p><h3 className="mt-2 text-2xl font-semibold">{name}</h3><p className="mt-2 flex min-h-11 items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4 shrink-0" /> {phone}</p></div></div><a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground transition hover:opacity-90"><MessageCircle className="h-4 w-4" /> Conversar pelo WhatsApp <ArrowUpRight className="h-4 w-4" /></a></article>)}
          </div>
          <div className="mt-7 rounded-3xl border border-gold/25 bg-secondary/45 p-6 text-center sm:p-9"><img src="/favicon.svg?v=20261112d" alt="" aria-hidden="true" className="mx-auto h-10 w-10 rounded-xl" /><h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Acompanhe e escreva para o Desvendando</h3><p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">Veja registros de atividades, acompanhe os comunicados e envie sua mensagem pelos canais oficiais do projeto.</p><div className="mt-6 flex flex-wrap justify-center gap-3"><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold/10"><Instagram className="h-4 w-4" /> @desvendandoceuaustral</a><a href={`mailto:${EMAIL}`} className="inline-flex max-w-full items-center gap-2 rounded-full border border-border px-4 py-3 text-left text-sm font-semibold transition hover:border-gold/50"><Mail className="h-4 w-4 shrink-0" /> <span className="break-all">{EMAIL}</span></a></div></div>
        </div>
      </section>
      </div>

<div id="page-parcerias" data-page-panel="parcerias" className="site-page" hidden={activePage !== "parcerias"}>
      {/* PARCERIAS */}
      <section id="parcerias" className="starfield py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle kicker="05 · Parcerias, cooperações e convênios" title="Ciência é uma construção coletiva" sub="O projeto se fortalece quando universidades, observatórios, escolas, instituições públicas e comunidades compartilham espaços e saberes." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map(({ icon: Icon, name, text }) => <article key={name} className="rounded-2xl border border-border bg-card/70 p-6 transition hover:border-gold/50 sm:p-7"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold"><Icon className="h-6 w-6" /></div><h3 className="mt-4 text-xl font-semibold">{name}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
            <div className="relative overflow-hidden rounded-3xl"><img src={f5} alt="Atividade de observação com instrumentos em ambiente aberto" loading="lazy" className="h-72 w-full object-cover sm:h-96" /><div className="absolute inset-0 bg-gradient-to-t from-night/85 to-transparent" /><p className="absolute bottom-5 left-5 right-5 text-2xl font-semibold text-white sm:text-3xl">Parcerias que saem do campus e chegam às comunidades</p></div>
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">Territórios, meteoritos e memória científica</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">A divulgação científica também ajuda uma comunidade a compreender e valorizar sua própria história. Em <strong className="text-foreground">Santa Filomena</strong>, a queda de meteoritos em agosto de 2020 motivou ações de articulação entre universidade, órgãos de ciência e gestores, com propostas de preservação da memória, educação astronômica e atividades para escolas e moradores.</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">Na região da <strong className="text-foreground">Serra do Magé, em Alagoinha</strong>, a queda observada em 1923 é uma referência histórica local. Registros recentes de atividades municipais relacionam esse patrimônio a observações com telescópios, foguetes educativos e planetário móvel. Essas ações mostram como o céu pode aproximar ciência, turismo, cultura e identidade local.</p>
              <div className="mt-5 flex flex-wrap gap-4"><SourceLink href={SANTA_FILOMENA}>Santa Filomena · articulação científica</SourceLink><SourceLink href={SERRA_MAGE}>História do Meteorito Serra do Magé</SourceLink><SourceLink href={ALAGOINHA_EVENT}>Ações em Alagoinha</SourceLink></div>
              <p className="mt-5 border-l-2 border-gold/50 pl-4 text-sm leading-relaxed text-muted-foreground">As parcerias e os formatos de cooperação podem variar conforme o evento. Esta página reúne registros públicos de atividades e cooperações; ela não presume que toda iniciativa corresponda a um convênio jurídico permanente.</p>
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-border bg-card/70 p-6 sm:p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Registros e transparência</p><h3 className="mt-2 text-2xl font-semibold sm:text-3xl">Conheça as fontes e os eventos documentados</h3><p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">Os links abaixo ajudam a acompanhar notícias institucionais, registros de visitas e atividades públicas. A seleção não substitui os relatórios internos ou instrumentos formais de parceria.</p></div><a href={PROJECT_ARCHIVE} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 px-5 py-3 text-sm font-semibold text-gold hover:bg-gold/10">Arquivo do projeto <ExternalLink className="h-4 w-4" /></a></div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sources.map((s) => <a key={s.title} href={s.url} target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-border bg-background/60 p-4 transition hover:border-gold/50"><span className="flex items-start justify-between gap-3"><span className="font-semibold leading-snug group-hover:text-gold">{s.title}</span><ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-gold" /></span><span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{s.text}</span></a>)}
            </div>
          </div>
        </div>
      </section>


</div>

<div id="page-oasi" data-page-panel="oasi" className="site-page" hidden={activePage !== "oasi"}>
      {/* OASI */}
      <section id="oasi" className="py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle kicker="04 · Ciência no Sertão" title="OASI: do céu de Itacuruba à pesquisa astronômica" sub="A aproximação entre divulgação científica e pesquisa profissional é uma das dimensões mais importantes da trajetória do Desvendando." />
          <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:items-stretch lg:gap-10">
            <div className="relative min-w-0 min-h-[320px] overflow-hidden rounded-3xl border border-border sm:min-h-[440px]">
              <img src={oasiTeam} alt="Equipe reunida diante de uma cúpula observacional durante uma atividade de astronomia" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/15 to-night/5" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-night/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold backdrop-blur"><MapPin className="h-3.5 w-3.5" /> Itacuruba · Sertão de Pernambuco</span><h3 className="mt-4 max-w-lg text-3xl font-semibold leading-tight text-white sm:text-4xl">Um observatório, muitas portas para a ciência</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">Visitas técnicas e encontros educativos conectam estudantes, pesquisadores, escolas e comunidades à investigação do Sistema Solar.</p></div>
            </div>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg"><strong className="text-foreground">O Observatório Astronômico do Sertão de Itaparica (OASI)</strong> está instalado em Itacuruba (PE) e é operado pelo Observatório Nacional no contexto do projeto IMPACTON. Seu telescópio robótico, com espelho primário de um metro, é dedicado a observações de pequenos corpos do Sistema Solar, como asteroides e cometas. O trabalho científico do observatório contribui para publicações e formação de pesquisadores.</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">Para o Desvendando, a relação com o OASI amplia a possibilidade de apresentar a astronomia como ciência viva: estudantes e docentes conhecem a infraestrutura, conversam sobre instrumentos e projetos em andamento e participam de visitas técnicas e ações públicas de observação e experimentação. A dimensão robótica do observatório permite que programas de pesquisa usem observações realizadas remotamente, conforme os procedimentos do Observatório Nacional. É importante distinguir esse potencial científico de uma atividade aberta e permanente para qualquer turma: o acesso de estudantes a dados ou observações de pesquisa depende de projetos, orientação e autorização institucional.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card/70 p-5"><Telescope className="h-7 w-7 text-gold" /><h4 className="mt-3 font-semibold">Pesquisa robótica</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Investigações sobre asteroides e cometas com observações instrumentais realizadas a distância por equipes autorizadas.</p></div>
                <div className="rounded-2xl border border-border bg-card/70 p-5"><GraduationCap className="h-7 w-7 text-gold" /><h4 className="mt-3 font-semibold">Formação científica</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Visitas, demonstrações, oficinas e diálogo entre universidade, observatório e comunidade escolar.</p></div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4"><SourceLink href={OASI}>Página oficial do OASI</SourceLink><SourceLink href={ON_VISIT}>Registro de visita técnica</SourceLink><SourceLink href={UFRPE_POP}>10ª Semana POP · UFRPE</SourceLink></div>
            </div>
          </div>
          <div className="mt-10 grid gap-4 rounded-3xl border border-gold/25 bg-secondary/45 p-6 sm:grid-cols-3 sm:p-8">
            <div><p className="font-display text-3xl font-bold text-gold">15 anos</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">de funcionamento do OASI, celebrados em março de 2026.</p></div>
            <div><p className="font-display text-3xl font-bold text-gold">10ª edição</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">da Semana POP, realizada em Itacuruba entre 27 e 29 de maio de 2026.</p></div>
            <div><p className="font-display text-3xl font-bold text-gold">1 metro</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">de diâmetro do espelho primário do telescópio do OASI, segundo o Observatório Nacional.</p></div>
          </div>
        </div>
      </section>

</div>

<div id="page-galeria" data-page-panel="galeria" className="site-page" hidden={activePage !== "galeria"}>
      <section id="galeria" className="py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mt-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-gold sm:text-sm">Registros de campo</p><h2 className="mt-2 text-3xl font-semibold">Galeria de atividades</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">Fotografias do acervo disponibilizado para este site e registros de atividades do projeto. Selecione uma imagem para ampliar.</p></div><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"><Instagram className="h-4 w-4" /> @desvendandoceuaustral <ArrowUpRight className="h-4 w-4" /></a></div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
            {gallery.map((item, i) => <button key={item.caption} type="button" onClick={() => setOpen(item.img)} className={`group relative overflow-hidden rounded-xl bg-card text-left focus:outline-none focus:ring-2 focus:ring-gold ${i % 6 === 0 ? "sm:row-span-2" : ""}`} aria-label={`Ampliar foto: ${item.caption}`}><img src={item.img} alt={item.caption} loading="lazy" className={`h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48 ${i % 6 === 0 ? "sm:h-full sm:min-h-[390px]" : ""}`} /><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/95 to-transparent px-3 pb-3 pt-8 text-left text-xs font-medium text-white sm:text-sm">{item.caption}</span><span className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-night/75 text-white opacity-0 transition group-hover:opacity-100"><Camera className="h-4 w-4" /></span></button>)}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><a href={DRIVE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-gold/60"><BookMarked className="h-4 w-4 text-gold" /> Pasta de fotos compartilhada <ExternalLink className="h-3.5 w-3.5" /></a><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold hover:bg-gold/10"><Instagram className="h-4 w-4" /> Mais registros no Instagram</a></div>
        </div>
      </section>
      </div>

      </main>
      <footer className="border-t border-border bg-night py-9 text-center">
        <img src="/favicon.svg?v=20261112d" alt="" aria-hidden="true" className="mx-auto h-8 w-8 rounded-lg" />
        <p className="mt-3 font-display text-lg font-semibold">Desvendando o Céu Austral</p>
        <p className="mt-1 text-sm text-white/75">Museu de Ciências · Universidade Federal Rural de Pernambuco</p>
        <p className="mt-4 text-xs text-white/70">Popularizar a ciência, valorizar a história e aproximar pessoas do Universo.</p>
      </footer>

      {open && <div className="fixed inset-0 z-50 grid place-items-center bg-night/95 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Foto ampliada" onClick={() => setOpen(null)}><button type="button" className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-night/80 text-white" aria-label="Fechar foto"><X className="h-6 w-6" /></button><img src={open} alt="Foto ampliada do acervo do Desvendando o Céu Austral" className="max-h-[calc(100dvh-5.5rem)] max-w-full rounded-xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} /></div>}
    </div>
  );
}
