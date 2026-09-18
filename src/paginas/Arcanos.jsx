import Cards from "../componentes/Cards"

const arcanos = [
    {
        nome:"Tolo",
        numero:"0",
        descrição:"O Arcano do Tolo representa o início de uma jornada e as infinitas possibilidades que surgem quando alguém começa um novo caminho. Seu número é o zero, que representa tanto o vazio quanto algo que ainda não possui limites ou uma forma definida. Ele simboliza liberdade, espontaneidade, curiosidade e a disposição para explorar o desconhecido, sem saber exatamente onde o caminho irá levar. Também representa o potencial de crescimento e as inúmeras possibilidades que existem antes de uma escolha ser feita.",
        personagem:"S.E.E.S",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Fool.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Sees.jpg"
    },
    {
        nome:"Mago",
        numero:"I",
        descrição:"O Arcano do Mago representa ação, iniciativa, autoconfiança, poder e criatividade. É o primeiro Arcano numerado e simboliza o momento em que uma pessoa começa a transformar suas intenções em ações. Também está relacionado à capacidade de utilizar os próprios talentos e habilidades para alcançar seus objetivos. Personagens associados a esse Arcano costumam ser extrovertidos, confiantes e cheios de energia, tomando a iniciativa diante das situações. Porém, também podem demonstrar imaturidade, impulsividade e uma tendência à manipulação ou ao uso inadequado de suas habilidades.",
        personagem:"Kenji Tomochika",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Magician.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Kenji Tomochika.webp"
    },
    {
        nome:"Sacerdotisa",
        numero:"II",
        descrição:"O Arcano da Sacerdotisa representa conhecimento oculto, sabedoria, poder ainda não explorado, mistério e paciência. Está ligado à intuição e ao subconsciente, valorizando aquilo que uma pessoa consegue compreender por meio de seus sentimentos, mesmo quando não possui uma explicação concreta para isso. Personagens associados a esse Arcano costumam ser quietos, reservados, inteligentes, diligentes e tímidos, podendo apresentar inseguranças ou dificuldade para se abrir com outras pessoas.",
        personagem:"Fuuka Yamagishi",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Priestess.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Fuuka.webp"
    },
    {
        nome:"Imperatriz",
        numero:"III",
        descrição:"O Arcano da Imperatriz representa maternidade, prosperidade, criatividade, fertilidade, abundância, proteção e conforto. Está associado à capacidade de cuidar dos outros e proporcionar segurança, além de representar crescimento e valorização da vida. Personagens associados a esse Arcano costumam apresentar uma personalidade madura e elegante, muitas vezes ocupando posições de autoridade e responsabilidade. Apesar de poderem parecer frios ou severos, geralmente demonstram grande preocupação e cuidado com as pessoas ao seu redor.",
        personagem:"Mitsuru Kirijo",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Empress.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Mitsuru.webp"
    },
    {
        nome:"Imperador",
        numero:"IV",
        descrição:"O Arcano do Imperador representa autoridade, controle, liderança e força de vontade. Está relacionado ao desejo de organizar e controlar aquilo que está ao seu redor, buscando estabelecer ordem e estabilidade. Personagens associados a esse Arcano costumam ser líderes fortes, determinados e lógicos, possuindo confiança em suas próprias capacidades e procurando proteger ou orientar aqueles ao seu redor. Entretanto, também podem se tornar rígidos, obsessivos ou inflexíveis quando suas convicções entram em conflito com outras pessoas.",
        personagem:"Hidetoshi Odagiri",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Emperor.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Hidetoshi Odagiri.webp"
        
    },
    {
        nome:"Hierofante",
        numero:"V",
        descrição:"O Arcano do Hierofante representa educação, autoridade, tradição, obediência às regras e conhecimento transmitido através das gerações. Está relacionado à ideia de aprender com as experiências do passado e utilizar esse conhecimento para orientar outras pessoas. Personagens associados a esse Arcano geralmente são mais velhos que o protagonista, sábios, lógicos e ligados a posições de orientação ou autoridade. Muitos possuem uma forte ligação com o passado e podem ter dificuldade para superar acontecimentos que os marcaram, aprendendo ao longo de suas histórias a aceitar o presente e transformar suas experiências em ensinamentos para os outros.",
        personagem:"Bunkichi e Mitsuko",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Hierophant.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Bunkichi e Mitsuko Kitamura.webp"
        
    },
    {
        nome:"Enamorados",
        numero:"VI",
        descrição:"O Arcano dos Enamorados representa amor, relacionamentos, união e escolhas. Está ligado à formação de vínculos entre pessoas e às decisões que precisam ser tomadas quando diferentes caminhos se apresentam. Personagens associados a esse Arcano costumam ser sociáveis, carismáticos e preocupados com seus relacionamentos, mas também podem ter dificuldades para tomar decisões ou lidar com conflitos envolvendo seus sentimentos e vínculos com outras pessoas.",
        personagem:"Yukari Takeba",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Lovers.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Yukari.webp"
    },
    {
        nome:"Carruagem",
        numero:"VII",
        descrição:"O Arcano da Carruagem representa vitória, determinação, autoconfiança, controle e conquista. Está relacionado à força necessária para superar obstáculos e continuar avançando em direção a um objetivo, mesmo diante das dificuldades. Personagens associados a esse Arcano costumam ser determinados, atléticos e competitivos, possuindo um objetivo pessoal que desejam alcançar. Apesar de sua aparência confiante e, às vezes, impulsiva, geralmente possuem um bom coração e escondem inseguranças ou fraquezas que precisam aprender a enfrentar.",
        personagem:"Kazushi Miyamoto",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Chariot.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Kazushi Miyamoto.webp"
        
    },
    {
        nome:"Justiça",
        numero:"VIII",
        descrição:"O Arcano da Justiça representa equilíbrio, verdade, responsabilidade e julgamento. Está relacionado à ideia de distinguir o certo do errado e aceitar as consequências das próprias escolhas, buscando agir de maneira justa e equilibrada. Personagens associados a esse Arcano costumam ser responsáveis, disciplinados e guiados por fortes princípios morais, procurando fazer aquilo que consideram correto. Entretanto, podem se tornar rígidos ou severos quando acreditam que seus próprios valores são os únicos corretos.",
        personagem:"Chihiro Fushimi",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Justice.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Chihiro Fushimi.webp"
        
    },
    {
        nome:"Eremita",
        numero:"IX",
        descrição:"O Arcano do Eremita representa introspecção, solidão, sabedoria e busca por conhecimento. Está relacionado ao afastamento do mundo exterior para refletir, compreender melhor a si mesmo e encontrar respostas através da própria experiência. Personagens associados a esse Arcano costumam ser reservados, independentes e introspectivos, preferindo passar tempo sozinhos ou em seus próprios interesses. Apesar de sua distância em relação aos outros, geralmente possuem grande curiosidade e conhecimento, podendo desenvolver novas formas de se relacionar com o mundo ao seu redor.",
        personagem:"Maya",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Hermit.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Maya.webp"
        
    },
    {
        nome:"Fortuna",
        numero:"X",
        descrição:"O Arcano da Fortuna representa destino, mudança, oportunidade e os acontecimentos que estão além do controle de uma pessoa. Está relacionado aos altos e baixos da vida e à ideia de que a sorte pode mudar a qualquer momento, trazendo novas oportunidades ou dificuldades. Personagens associados a esse Arcano costumam estar ligados a mudanças importantes em suas vidas e a situações que fogem do seu controle. Eles podem enfrentar momentos de sorte ou azar e precisam aprender a lidar com as mudanças e aproveitar as oportunidades que aparecem em seu caminho.",
        personagem:"Keisuke Hiraga",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Fortune.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Keisuke Hiraga.webp"
        
    },
    {
        nome:"Força",
        numero:"XI",
        descrição:"O Arcano da Força representa coragem, determinação, força interior e domínio sobre os próprios impulsos. Sua ideia não está relacionada apenas à força física, mas também à capacidade de enfrentar dificuldades e controlar os próprios sentimentos e instintos. Personagens associados a esse Arcano costumam ser corajosos, determinados e capazes de enfrentar situações difíceis sem desistir. Ao mesmo tempo, podem precisar aprender a controlar sua força e compreender que verdadeira força também envolve paciência, autocontrole e compreensão.",
        personagem:"Yuko Nishiwaki",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Strenght.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Yuko Nishiwaki.webp"
        
    },
    {
        nome:"O Enforcado",
        numero:"XII",
        descrição:"O Arcano do Enforcado representa sacrifício, contemplação, altruísmo e iluminação. Está relacionado à necessidade de parar, observar uma situação de outra perspectiva e, algumas vezes, abrir mão de algo para alcançar uma compreensão maior. Também simboliza pessoas presas entre diferentes situações ou forças, incapazes de tomar uma decisão ou avançar. Personagens associados a esse Arcano costumam enfrentar dilemas difíceis que os deixam em uma situação de estagnação, precisando refletir profundamente antes de conseguir agir e encontrar uma nova maneira de enxergar seus problemas.",
        personagem:"Maiko Oohashi",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Hanged.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Maiko Oohashi.webp"
        
    },
    {
        nome:"Morte",
        numero:"XIII",
        descrição:"O Arcano da Morte representa o fim de um ciclo e o início de uma transformação, simbolizando mudanças profundas, renovação e a passagem de uma fase para outra. Apesar de estar associado à morte, seu significado está mais relacionado à transformação e à regeneração do que à morte física. Personagens associados a esse Arcano costumam passar por grandes mudanças em suas vidas, deixando para trás aspectos de quem eram para construir uma nova identidade, muitas vezes precisando enfrentar seus próprios medos antes de conseguirem seguir em frente.",
        personagem:"Pharos",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Death.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Pharos.webp"
        
    },
    {
        nome:"Temperança",
        numero:"XIV",
        descrição:"O Arcano da Temperança representa equilíbrio, moderação, harmonia e a união de elementos opostos. Está relacionado à capacidade de encontrar um ponto de equilíbrio entre diferentes aspectos da vida, evitando excessos e aprendendo a lidar com situações difíceis de maneira equilibrada. Personagens associados a esse Arcano costumam enfrentar dificuldades para encontrar esse equilíbrio, carregando grande estresse enquanto tentam conciliar diferentes responsabilidades ou interesses. Muitas vezes, seus conflitos estão ligados à ausência ou perda de alguém importante em suas vidas.",
        personagem:"Andre Laurent Jean Geraux",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Temperance.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Bebe.webp"
        
    },
    {
        nome:"Diabo",
        numero:"XV",
        descrição:"O Arcano do Diabo representa tentação, impulsos, egoísmo e a dificuldade de controlar os próprios desejos. Também pode representar vínculos e compromissos, mostrando que nem sempre aquilo que parece negativo possui apenas um significado ruim. Personagens associados a esse Arcano costumam ser impulsivos, ambiciosos e ligados aos próprios desejos, podendo tomar decisões egoístas ou se deixar controlar por suas vontades. Ao mesmo tempo, podem desenvolver vínculos fortes e demonstrar qualidades positivas quando aprendem a controlar seus impulsos.",
        personagem:"Presidente Tanaka",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Devil.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/President Tanaka.webp"
        
    },
    {
        nome:"Torre",
        numero:"XVI",
        descrição:"O Arcano da Torre representa isolamento, pessimismo, negação, destruição e a queda causada pelo orgulho. Está associado a situações em que algo que parecia sólido é destruído, obrigando uma pessoa a reconhecer uma realidade que vinha tentando evitar. Personagens associados a esse Arcano costumam ser arrogantes, autoritários ou isolados, muitas vezes tendo passado por uma grande queda ou perda. Eles podem ter dificuldade em aceitar seus próprios erros e acabam precisando reconhecer sua realidade e compreender que tudo está sujeito a mudanças.",
        personagem:"Mutatsu",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Tower.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Mutatsu.webp"
        
    },
    {
        nome:"Estrela",
        numero:"XVII",
        descrição:"O Arcano da Estrela representa esperança, autoconfiança, fé, generosidade, paz, alegria e a possibilidade de encontrar um caminho depois de momentos difíceis. Por aparecer após a Torre, está associado à recuperação e à esperança que surge depois de uma grande destruição. Personagens associados a esse Arcano costumam carregar uma visão esperançosa mesmo quando enfrentam dificuldades pessoais, embora possam ser mais reservados ou antissociais. Muitas vezes passam por conflitos internos ou externos enquanto tentam encontrar motivos para continuar acreditando em um futuro melhor.",
        personagem:"Mamoru Hayase",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Star.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Mamoru Hayase.webp"
        
    },
    {
        nome:"Lua",
        numero:"XVIII",
        descrição:"O Arcano da Lua representa ilusões, medo, fantasia, criatividade, sonhos, subconsciente e incerteza. Está relacionado às coisas que podem esconder a realidade ou distorcer a maneira como uma pessoa enxerga o mundo, além de representar sentimentos e pensamentos que permanecem ocultos. Personagens associados a esse Arcano costumam enfrentar inseguranças, medos e dificuldades para distinguir aquilo que desejam acreditar daquilo que realmente acontece. Também podem projetar seus próprios defeitos e preocupações nos outros, precisando confrontar suas ilusões para compreender melhor a si mesmos.",
        personagem:"Nozomi Suemitsu",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Moon.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Nozomi Suemitsu.webp"
        
    },
    {
        nome:"Sol",
        numero:"XIX",
        descrição:"O Arcano do Sol representa felicidade, alegria, energia, otimismo e realização. Está associado à luz, à esperança e à conquista de algo que traz significado para a vida. Personagens associados a esse Arcano costumam enfrentar situações difíceis e solitárias, muitas vezes acreditando que seus objetivos são impossíveis de alcançar. Essas dificuldades os levam a questionar seus próprios valores e a procurar um novo significado para suas vidas, permitindo que encontrem felicidade e aceitem aquilo que não podem mudar.",
        personagem:"Akinari Kamiki",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Sun.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Akinari Kamiki.webp"
        
    },
    {
        nome:"Éon",
        numero:"XX",
        descrição:"O Arcano do Éon representa a busca por compreender a própria existência, o mundo ao redor e o lugar que cada indivíduo ocupa nele. Diferente dos Arcanos tradicionais do Tarô, o Aeon pertence ao Tarô de Thoth, onde substitui o Arcano do Julgamento. Personagens associados a esse Arcano geralmente não são completamente humanos e possuem dificuldade para compreender o mundo e as emoções humanas. Suas histórias estão ligadas à descoberta de sua própria identidade, à compreensão da vida e à busca por um propósito dentro de um mundo que ainda lhes é desconhecido.",
        personagem:"Aigis",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Aeon.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Aigis.webp"
        
    },
    {
        nome:"Universo",
        numero:"XXI",
        descrição:"O Arcano do Universo representa a conclusão de uma jornada e a compreensão de tudo aquilo que foi aprendido ao longo dela. Ele está relacionado à realização, à totalidade e à compreensão do lugar de cada indivíduo dentro de algo maior. Diferente dos outros Arcanos, o Universo está ligado ao encerramento da jornada do protagonista e à capacidade de reunir todas as experiências adquiridas ao longo do caminho. Seu significado representa alcançar uma compreensão mais profunda da existência e aceitar tanto os acontecimentos vividos quanto o futuro que ainda está por vir.",
        personagem:"Protagonista/Makoto Yuki",
        imagem:"{`${import.meta.env.BASE_URL}Arcanos/Universe.jpg",
        foto:"{`${import.meta.env.BASE_URL}Vinculos Sociais/Makoto.webp"
        
    },
    
    
]

function Arcanos() {

  return (
    <>
      <section>
        <h2>Os Arcanos</h2>
        <div className="Arcanos">
            {arcanos.map((arcano) => (
                <Cards 
                imagem={arcano.imagem}
                nome={arcano.nome}
                numero={arcano.numero}
                descrição={arcano.descrição}
                personagem={arcano.personagem}
                foto={arcano.foto}
                />
        ))}

        </div>

      </section>
    </>
  )
}

export default Arcanos