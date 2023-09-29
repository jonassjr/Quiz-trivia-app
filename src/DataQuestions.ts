import { DataQuestions } from "../types";

export const MyDataQuestions: DataQuestions = {
  'historia-mundial': [
    {
      question: 'Quem foi o primeiro presidente dos Estados Unidos?',
      options: ['George Washington', 'Thomas Jefferson', 'John Adams'],
      answer: 'George Washington',
      hint: 'Ele é conhecido como o "Pai da Pátria".',
    },
    {
      question: 'Qual evento histórico marcou o início da Primeira Guerra Mundial?',
      options: ['O assassinato do Arquiduque Franz Ferdinand', 'A Revolução Russa', 'O Tratado de Versalhes'],
      answer: 'O assassinato do Arquiduque Franz Ferdinand',
      hint: 'Ocorreu em Sarajevo em 1914.',
    },
    {
      question: 'Quem foi a rainha da Inglaterra durante o período da Revolução Industrial?',
      options: ['Rainha Elizabeth I', 'Rainha Vitória', 'Rainha Maria'],
      answer: 'Rainha Vitória',
      hint: 'Ela reinou por mais de 63 anos, um período conhecido como a "Era Vitoriana".',
    },
    {
      question: 'Qual foi a principal causa da queda do Império Romano?',
      options: ['Invasões bárbaras', 'Epidemias', 'Corrupção política'],
      answer: 'Invasões bárbaras',
      hint: 'Os visigodos saquearam Roma em 410 d.C.',
    },
    {
      question: 'Quem liderou a Revolução Francesa e foi posteriormente guilhotinado?',
      options: ['Napoleão Bonaparte', 'Luís XVI', 'Robespierre'],
      answer: 'Robespierre',
      hint: 'Ele era um dos líderes do Comitê de Salvação Pública.',
    },
  ],
  'mitologia-e-folclore': [
    {
      question: 'Quem era o deus do trovão na mitologia nórdica?',
      options: ['Thor', 'Zeus', 'Poseidon'],
      answer: 'Thor',
      hint: 'Ele empunhava um martelo mágico chamado Mjölnir.',
    },
    {
      question: 'Qual criatura mítica grega tinha a cabeça de leão, corpo de cabra e cauda de serpente?',
      options: ['Quimera', 'Hidra', 'Esfinge'],
      answer: 'Quimera',
      hint: 'Ela era filha de Tifão e Equidna.',
    },
    {
      question: 'Quem foi o herói grego que derrotou o Minotauro no labirinto de Creta?',
      options: ['Teseu', 'Perseu', 'Hércules'],
      answer: 'Teseu',
      hint: 'Ele usou um novelo de lã para encontrar o caminho de volta no labirinto.',
    },
    {
      question: 'Qual é o nome do cavalo alado da mitologia grega?',
      options: ['Pégaso', 'Fenix', 'Cérbero'],
      answer: 'Pégaso',
      hint: 'Ele nasceu da cabeça de Medusa quando Perseu a decapitou.',
    },
    {
      question: 'Quem é a figura lendária que procurava pelo Santo Graal na lenda arturiana?',
      options: ['Merlin', 'Lancelot', 'Perceval'],
      answer: 'Perceval',
      hint: 'Ele era um dos cavaleiros da Távola Redonda.',
    },
  ],
  'geografia-mundial': [
    {
      question: 'Qual é a capital do Brasil?',
      options: ['Rio de Janeiro', 'São Paulo', 'Brasília'],
      answer: 'Brasília',
      hint: 'Foi projetada pelo arquiteto Oscar Niemeyer.',
    },
    {
      question: 'Qual é o rio mais longo do mundo?',
      options: ['Rio Amazonas', 'Rio Nilo', 'Rio Mississipi'],
      answer: 'Rio Amazonas',
      hint: 'Flui através da América do Sul.',
    },
    {
      question: 'Quais são os cinco grandes lagos da América do Norte?',
      options: ['Superior, Michigan, Huron, Erie e Ontário', 'Baikal, Vitória, Tanganica, Malauí e Titicaca', 'Caspiano, Aral, Bálfia, Ural e Onega'],
      answer: 'Superior, Michigan, Huron, Erie e Ontário',
      hint: 'Eles formam a maior concentração de água doce na Terra.',
    },
    {
      question: 'Qual é o país mais populoso do mundo?',
      options: ['China', 'Índia', 'Estados Unidos'],
      answer: 'China',
      hint: 'Com mais de 1,4 bilhão de habitantes.',
    },
    {
      question: 'Qual é o ponto mais alto da Terra?',
      options: ['Monte Everest', 'K2', 'Monte Kilimanjaro'],
      answer: 'Monte Everest',
      hint: 'Localizado na cordilheira do Himalaia.',
    },
  ],

  'literatura-mundial': [
    {
      question: 'Quem escreveu "Romeu e Julieta"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen'],
      answer: 'William Shakespeare',
      hint: 'Ele também é conhecido por suas tragédias.',
    },
    {
      question: 'Qual é o romance de F. Scott Fitzgerald que se passa na década de 1920 e é um retrato da era do jazz nos Estados Unidos?',
      options: ['O Grande Gatsby', 'Moby Dick', '1984'],
      answer: 'O Grande Gatsby',
      hint: 'Foi publicado em 1925.',
    },
    {
      question: 'Quem é o autor de "Dom Quixote", uma das obras mais importantes da literatura espanhola?',
      options: ['Miguel de Cervantes', 'Gabriel García Márquez', 'Pablo Neruda'],
      answer: 'Miguel de Cervantes',
      hint: 'Esta obra é uma sátira aos romances de cavalaria.',
    },
    {
      question: 'Qual autor é conhecido por escrever "1984", um livro distópico que descreve um estado totalitário?',
      options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury'],
      answer: 'George Orwell',
      hint: 'O livro introduziu o termo "Big Brother" na cultura popular.',
    },
    {
      question: 'Qual escritor russo é famoso por obras como "Crime e Castigo" e "Os Irmãos Karamazov"?',
      options: ['Fyodor Dostoevsky', 'Leo Tolstoy', 'Anton Chekhov'],
      answer: 'Fyodor Dostoevsky',
      hint: 'Ele é conhecido por explorar temas psicológicos em suas obras.',
    },
  ],
  'ciencia-e-tecnologia': [
    {
      question: 'Quem é conhecido como o pai da física moderna?',
      options: ['Isaac Newton', 'Albert Einstein', 'Niels Bohr'],
      answer: 'Albert Einstein',
      hint: 'Ele formulou a teoria da relatividade.',
    },
    {
      question: 'Qual é o elemento químico mais abundante no universo?',
      options: ['Hidrogênio', 'Oxigênio', 'Carbono'],
      answer: 'Hidrogênio',
      hint: 'É o elemento primordial nas estrelas.',
    },
    {
      question: 'Qual é o nome do primeiro satélite artificial lançado no espaço?',
      options: ['Apollo 11', 'Sputnik 1', 'Hubble'],
      answer: 'Sputnik 1',
      hint: 'Foi lançado pela União Soviética em 1957.',
    },
    {
      question: 'Quem é creditado com a invenção do telefone?',
      options: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla'],
      answer: 'Alexander Graham Bell',
      hint: 'Ele é conhecido por sua invenção em 1876.',
    },
    {
      question: 'Qual é a unidade básica de processamento em um computador?',
      options: ['Bit', 'Byte', 'Megabyte'],
      answer: 'Bit',
      hint: 'É a menor unidade de informação digital.',
    },
  ],
}
