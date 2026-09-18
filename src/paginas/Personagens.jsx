import Membros from "../componentes/Membros"

const personagens = [
    {
        nome:"Makoto Yuki/Protagonista",
        persona:"Orpheus",
        descrição:"Makoto é um jovem reservado que retorna para a cidade de Iwatodai após anos afastado, passando a viver no dormitório próximo ao Colégio Gekkoukan. Durante uma noite, ele presencia a Dark Hour e é atacado por Sombras, despertando seu Persona para proteger seus novos companheiros. Foi o quinto a despertar esse poder e possui uma habilidade única conhecida como Wild Card, que permite utilizar diferentes Personas. Conforme se envolve cada vez mais com os acontecimentos da Dark Hour, Makoto cria laços com as pessoas ao seu redor e começa a encontrar um novo propósito para sua vida.",
        imagem: `${import.meta.env.BASE_URL}Personagens/Makoto Yuki.webp`,
    },
    {
        nome:"Yukari Takeba",
        persona:"Io",
        descrição:"Yukari é filha de Eiichiro Takeba, um antigo funcionário do Grupo Kirijo que investigava os fenômenos relacionados à Dark Hour. Ela desperta seu Persona antes dos acontecimentos principais da história e passa a fazer parte do grupo durante a investigação do Tartarus. Apesar de inicialmente demonstrar insegurança em relação ao seu próprio passado e às ações de seu pai, Yukari se torna uma importante integrante do grupo e uma das principais aliadas do protagonista. Foi a quarta integrante do grupo a despertar seu Persona.",
        imagem: `${import.meta.env.BASE_URL}Personagens/Yukari Takeba.webp`,
    },
    {
        nome:"Junpei Iori",
        persona:"Hermes",
        descrição:"Junpei é um dos amigos mais próximos do protagonista e conhecido por seu jeito descontraído e impulsivo. Ele desperta seu Persona pouco depois da chegada do protagonista ao Colégio Gekkoukan e passa a enfrentar as Sombras ao lado dos outros. Apesar de suas inseguranças e de se comparar frequentemente ao protagonista, Junpei desenvolve uma forte amizade com ele e amadurece conforme enfrenta os desafios da Dark Hour, tornando-se uma importante presença dentro do grupo. Foi o sexto membro do grupo a despertar seu Persona.",
        imagem: `${import.meta.env.BASE_URL}Personagens/Junpei Iori.webp`,
    },
    {
        nome:"Akihiko Sanada",
        persona:"Polydeuces",
        descrição:"Akihiko é um dos membros mais antigos do S.E.E.S. e um dos principais combatentes do grupo. Ele cresceu junto de sua irmã Miki e de Shinjiro, formando com eles uma forte amizade desde a infância. Após um acontecimento envolvendo sua irmã, Akihiko passou a se dedicar intensamente ao treinamento e às artes marciais. Foi o segundo membro do grupo a despertar seu Persona e, desde então, utiliza suas habilidades para combater as Sombras e proteger seus companheiros. Mesmo sendo conhecido por sua confiança e determinação, Akihiko também demonstra grande preocupação com aqueles que considera importantes.",
        imagem: `${import.meta.env.BASE_URL}Personagens/Akihiko Sanada.webp`,
    },
    {
        nome:"Fuuka Yamagishi",
        persona:"Lucia",
        descrição:"Fuuka é uma das integrantes do S.E.E.S. e responsável por atuar como a navegadora do grupo. Ela despertou seu Persona enquanto estava presa dentro do Tartarus durante a Dark Hour, tornando-se a sétima integrante do grupo a despertar esse poder. Diferente dos outros membros, Fuuka não participa diretamente dos combates, utilizando suas habilidades para analisar as Sombras, identificar suas características e auxiliar o grupo durante as explorações do Tartarus. Apesar de ser tímida e insegura no início, ela encontra seu lugar dentro do S.E.E.S. e passa a desempenhar um papel essencial nas operações do grupo.",
        imagem: `${import.meta.env.BASE_URL}Personagens/Fuuka Yamagishi.webp`,
    },
    {
        nome:"Mitsuru Kirijo",
        persona:"Penthesilea",
        descrição:"Mitsuru serve como a líder do S.E.E.S. e mentora do grupo. Filha de Takeharu Kirijo, o líder do Grupo Kirijo, uma empresa que investiga os fenômenos envolvendo o Tartarus e a Dark Hour. Foi a primeira do grupo a despertar seu Persona. Antes da chegada da Fuuka, ela cumpria a função de Navegadora utilizando-se de seu Persona",
        imagem: `${import.meta.env.BASE_URL}Personagens/Mitsuru Kirijo.webp`,
    },
    {
        nome:"Aigis",
        persona:"Athena",
        descrição:"Aigis é uma Arma de Supressão Anti-Sombra criada pelo Grupo Kirijo. Essas armas foram desenvolvidas com a capacidade de invocar Personas para enfrentar as Sombras. Aigis é a última unidade de sua geração ainda em funcionamento. Ela se junta ao S.E.E.S. após ser encontrada durante a viagem do grupo para Yakushima, passando a frequentar o Colégio Gekkoukan. Sua principal função é combater as Sombras e proteger o protagonista, por quem demonstra uma ligação especial desde o início. Ao longo da história, Aigis começa a desenvolver emoções humanas e passa a questionar seu propósito e seu lugar entre as pessoas.",
        imagem: `${import.meta.env.BASE_URL}Personagens/Aigis.webp`,
    },
    {
        nome:"Koromaru",
        persona:"Cerberus",
        descrição:"Koromaru é um cão da raça Shiba Inu que passa a fazer parte do S.E.E.S. após perder seu antigo dono, o sacerdote responsável pelo santuário próximo ao dormitório. Mesmo após a morte de seu dono, Koromaru continua protegendo o santuário e enfrenta as Sombras durante a Dark Hour. Foi o oitavo membro do grupo a despertar um Persona e, após ser acolhido pelo S.E.E.S., passa a viver junto dos outros integrantes. Extremamente inteligente e leal, Koromaru rapidamente cria laços com seus companheiros.",
        imagem: `${import.meta.env.BASE_URL}Personagens/Koromaru.webp`,
    },
    {
        nome:"Ken Amada",
        persona:"Nemesis",
        descrição:"Ken é o membro mais jovem do grupo e, mesmo com sua pouca idade, procura sempre agir de forma madura e independente. Após perder sua mãe, ele passa a viver no dormitório e acaba descobrindo seu potencial para utilizar um Persona. Foi o nono a despertar seu Persona e decide enfrentar as Sombras ao lado dos outros. Apesar de tentar parecer mais velho, Ken ainda mantém seu lado infantil e gosta de coisas como programas de super-heróis. Ao longo da história, ele precisa enfrentar os sentimentos relacionados ao seu passado e amadurecer com as experiências que vive ao lado de seus companheiros.",
        imagem: `${import.meta.env.BASE_URL}Personagens/Ken Amada.webp`,
    },
    {
        nome:"Shinjiro Aragaki",
        persona:"Castor",
        descrição:"Shinjiro é um dos integrantes mais antigos do grupo e possui uma forte amizade com Akihiko, com quem cresceu desde a infância. Conhecido por seu jeito reservado e aparentemente indiferente, ele se afastou do grupo após um acontecimento envolvendo uma Sombra e passou a viver de forma mais isolada. Mesmo mantendo uma postura distante, Shinjiro ainda se preocupa profundamente com seus antigos companheiros e acaba retornando para ajudá-los durante a luta contra as Sombras. Foi o terceiro a despertar seu Persona e, ao longo da história, precisa lidar com as consequências de suas escolhas e com seu passado.",
        imagem: `${import.meta.env.BASE_URL}Personagens/Shinjiro Aragaki.webp`,
    },
]


function Personagens() {

  return (
    <>
    <section className="personagens">
        <h2>Membros do S.E.E.S:</h2>
        <div className="lista-membros">
            {personagens.map((personagem) => (
                <Membros
                imagem={personagem.imagem}
                nome={personagem.nome}
                persona={personagem.persona}
                descrição={personagem.descrição}
                />
            ))}

        </div>
    </section>
      
    </>
  )
}

export default Personagens
