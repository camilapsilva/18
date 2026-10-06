(() => {
  const PEOPLE = ["Bela","Ca","Falconi","Gabi","Gi","Isadora","Lau","Raquel","Tati"];

  const descriptions = {
    Bela: "Você tem energia de luz do sol. É calorosa, espontânea, alegre e tem um jeito de deixar o ambiente mais leve. Você vive com intensidade boa: gosta de gente, de histórias, de experiências e provavelmente é lembrada pelo quanto faz os outros se sentirem bem.",
    Ca: "Você é energia de movimento. Topa, tenta, muda de rota quando precisa e não tem muito medo de começar de novo. É ambiciosa, independente e vive com a sensação de que sempre existe alguma próxima experiência esperando.",
    Falconi: "Você é dedicação com curiosidade. Gosta de entender como as coisas funcionam, leva projetos a sério e passa a impressão de que ainda vai acumular histórias profissionais muito improváveis e muito boas.",
    Gabi: "Você tem uma doçura muito natural. É acolhedora, gentil e boa de ter por perto, mas também tem coragem para mudar de caminho quando percebe que algo não combina mais com você.",
    Gi: "Você é lealdade e esforço. Leva sonhos, estudos, trabalho e relações a sério. Quando ama alguma coisa, se compromete de verdade — e as pessoas sabem que podem contar com você.",
    Isadora: "Você é cuidado em forma de amizade. É atenta, presente, carinhosa e valoriza vínculos de verdade. Tem aquele tipo de energia que faz as pessoas se sentirem lembradas mesmo quando a rotina está corrida.",
    Lau: "Você é personalidade, humor e presença. Tem opiniões, sabe contar histórias como ninguém e consegue transformar situações comuns em memórias engraçadas que ficam anos sendo recontadas.",
    Raquel: "Você tem olhar de quem observa o mundo e percebe histórias. É comunicativa, curiosa e sensível ao que acontece ao redor — o tipo de pessoa que conecta gente, memória e narrativa.",
    Tati: "Você vive com trilha sonora própria. É intensa, divertida, afetuosa, romântica e cheia de referências. Tem energia de quem transforma trabalho, cultura, amor e amizade em uma vida cheia de capítulos."
  };

  const personalityQuestions = [
    {q:"Seu grupo decidiu viajar em 48 horas. Você é a pessoa que…", a:[
      ["responde 'bora' antes mesmo de perguntarem o destino.", {Ca:4,Bela:1}],
      ["já quer saber quem vai, onde fica e como todo mundo vai se organizar.", {Gi:3,Isadora:2}],
      ["manda um áudio de quatro minutos transformando a ideia num evento.", {Lau:3,Tati:2}],
      ["pesquisa uma coisa muito específica sobre o lugar e aparece com uma curiosidade aleatória.", {Falconi:3,Raquel:2}],
      ["fica animada principalmente porque vai estar todo mundo junto.", {Gabi:2,Bela:3}]
    ]},
    {q:"Quando você entra numa fase difícil, qual reação mais parece com você?", a:[
      ["recalculo a rota e começo de novo se for preciso.", {Ca:4,Gabi:1}],
      ["me esforço ainda mais até sentir que dei tudo de mim.", {Gi:3,Falconi:3}],
      ["procuro as pessoas que amo e tento manter todo mundo por perto.", {Isadora:4,Gabi:1}],
      ["faço piada porque sofrer sem gerar uma boa história seria desperdício.", {Lau:4,Tati:1}],
      ["me agarro nas coisas que me dão alegria e energia.", {Bela:3,Tati:2}]
    ]},
    {q:"Em uma mesa com nove amigas, você costuma ser…", a:[
      ["a que puxa um plano novo.", {Ca:3}],
      ["a que muda a energia da mesa só de chegar.", {Bela:3}],
      ["a que escuta e percebe quando alguém não está 100%.", {Isadora:3,Gabi:2}],
      ["a que conta uma história com começo, meio, plot twist e elenco completo.", {Lau:4}],
      ["a que lembra uma informação aleatória que resolve a discussão.", {Falconi:2,Raquel:2,Tati:1}]
    ]},
    {q:"Qual dessas frases parece mais uma filosofia de vida sua?", a:[
      ["se eu quero muito, eu dou um jeito.", {Ca:3,Gi:2}],
      ["quero construir alguma coisa de que eu realmente me orgulhe.", {Falconi:3,Gi:2}],
      ["não adianta conquistar tudo e esquecer das pessoas.", {Isadora:3,Gabi:2}],
      ["a vida fica melhor quando a gente sabe rir dela.", {Lau:3,Bela:2}],
      ["quero viver histórias que valham a pena ser lembradas.", {Tati:2,Raquel:2,Bela:1}]
    ]},
    {q:"Você ganhou uma oportunidade inesperada fora do país. O que mais pesa na decisão?", a:[
      ["o tamanho da experiência — eu provavelmente iria.", {Ca:4}],
      ["o quanto isso pode mudar minha carreira.", {Falconi:4,Gi:1}],
      ["se vou conseguir aproveitar sem perder conexão com quem amo.", {Isadora:3,Gabi:1}],
      ["as histórias que vou viver e contar depois.", {Lau:2,Raquel:2,Tati:2}],
      ["a sensação de estar vivendo algo muito especial.", {Bela:3,Tati:1}]
    ]},
    {q:"Qual elogio mais mexeria com você?", a:[
      ["'você é muito corajosa para tentar coisas novas.'", {Ca:4}],
      ["'você deixa qualquer lugar mais feliz.'", {Bela:4}],
      ["'eu sempre sei que posso contar com você.'", {Gi:4,Isadora:2}],
      ["'você é absurdamente dedicada.'", {Falconi:3,Gi:3}],
      ["'você faz as pessoas se sentirem muito queridas.'", {Gabi:3,Isadora:3}]
    ]},
    {q:"Numa discussão em grupo, você tende a…", a:[
      ["falar logo o que pensa e defender seu ponto.", {Lau:3,Ca:2}],
      ["ouvir bastante antes de se posicionar.", {Gabi:3,Isadora:2}],
      ["tentar chegar numa solução prática.", {Gi:3,Falconi:2}],
      ["fazer uma observação que ninguém tinha pensado.", {Raquel:3,Falconi:2}],
      ["quebrar o clima pesado com humor.", {Bela:2,Tati:2,Lau:1}]
    ]},
    {q:"Se sua vida virasse uma série, qual seria o gênero principal?", a:[
      ["drama com reviravoltas acadêmicas e profissionais.", {Ca:3,Gabi:2}],
      ["comédia de personagem forte e histórias absurdamente bem contadas.", {Lau:4}],
      ["feel-good sobre amizade, família e pessoas que cuidam umas das outras.", {Isadora:3,Bela:2}],
      ["coming-of-age de alguém construindo uma carreira muito grande.", {Falconi:3,Gi:2}],
      ["musical romântico com temporadas internacionais.", {Tati:4,Bela:1}]
    ]},
    {q:"Qual dessas situações te deixaria mais feliz?", a:[
      ["perceber que um sonho antigo finalmente está acontecendo.", {Gi:4}],
      ["ver uma pessoa que amo conquistando algo enorme.", {Isadora:3,Gabi:2}],
      ["receber uma oportunidade profissional inesperada.", {Falconi:3,Tati:2}],
      ["ser chamada de última hora para uma aventura.", {Ca:3,Bela:2}],
      ["ter uma noite que rende história por anos.", {Lau:3,Raquel:1,Tati:1}]
    ]},
    {q:"No caos coletivo, você normalmente vira…", a:[
      ["a prática: 'gente, vamos fazer assim'.", {Gi:3,Ca:2}],
      ["a cuidadora: 'todo mundo está bem?'.", {Isadora:4,Gabi:1}],
      ["a comentarista oficial do desastre.", {Lau:3,Raquel:1,Tati:1}],
      ["a que pesquisa e entende o problema.", {Falconi:3}],
      ["a otimista que convence todo mundo de que vai ficar tudo bem.", {Bela:4}]
    ]},
    {q:"Você precisa escolher um presente para uma amiga. Você provavelmente…", a:[
      ["pensa em algo que tenha muito significado para ela.", {Isadora:3,Gabi:2}],
      ["procura algo que gere uma experiência ou memória.", {Ca:2,Bela:2}],
      ["quer algo criativo e com referência interna.", {Tati:3,Lau:2}],
      ["faz uma pesquisa quase científica para acertar.", {Falconi:3,Gi:1}],
      ["escolhe algo que tenha uma história boa por trás.", {Raquel:3,Lau:1}]
    ]},
    {q:"Qual dessas versões de você aparece quando está apaixonada por alguma coisa?", a:[
      ["eu falo disso o tempo inteiro e tento levar todo mundo junto.", {Bela:3,Tati:2}],
      ["eu estudo, pratico e fico cada vez melhor.", {Falconi:3,Gi:3}],
      ["eu reorganizo minha vida inteira para caber aquilo.", {Ca:3}],
      ["eu viro a maior apoiadora possível.", {Isadora:3,Gabi:2}],
      ["eu acumulo histórias e detalhes suficientes para uma palestra.", {Lau:3,Raquel:2}]
    ]},
    {q:"Quando você olha para o futuro, o que mais te anima?", a:[
      ["todas as possibilidades que ainda posso viver.", {Ca:3,Bela:2}],
      ["ser muito boa no que escolhi fazer.", {Falconi:3,Gi:2}],
      ["ter uma vida cheia de pessoas queridas por perto.", {Isadora:3,Gabi:2}],
      ["ter histórias incríveis para contar.", {Lau:3,Tati:2}],
      ["fazer algo que tenha impacto e também me represente.", {Raquel:3,Tati:1}]
    ]},
    {q:"Sua amiga manda 'preciso conversar'. Sua primeira reação é…", a:[
      ["'onde você está?'", {Isadora:4,Gi:2}],
      ["'me liga agora.'", {Gabi:2,Bela:2}],
      ["já começo a pensar em solução.", {Ca:2,Falconi:2}],
      ["entro na conversa preparada para ouvir absolutamente tudo.", {Raquel:2,Lau:2}],
      ["apareço com apoio emocional e alguma referência de filme no meio.", {Tati:4}]
    ]},
    {q:"Qual dessas características você mais reconhece em si?", a:[
      ["independência.", {Ca:4}],
      ["alegria.", {Bela:4}],
      ["dedicação.", {Falconi:2,Gi:3}],
      ["doçura.", {Gabi:4}],
      ["presença.", {Isadora:3,Raquel:1}]
    ]},
    {q:"Qual cenário parece mais 'você'?", a:[
      ["aeroporto com uma oportunidade nova pela frente.", {Ca:3,Tati:2}],
      ["um lugar cheio de gente querida e risada alta.", {Bela:3,Gabi:1}],
      ["uma apresentação importante de algo em que você trabalhou muito.", {Falconi:3,Gi:2}],
      ["um almoço em família que se estende por horas.", {Isadora:3,Gabi:2}],
      ["uma mesa em que você está contando uma história e todo mundo está chorando de rir.", {Lau:4}]
    ]},
    {q:"Se suas amigas tivessem que te definir por uma coisa, você gostaria que fosse…", a:[
      ["'ela vive de verdade.'", {Ca:3,Bela:2}],
      ["'ela sempre esteve comigo.'", {Gi:3,Isadora:3}],
      ["'ela é muito boa no que faz.'", {Falconi:3}],
      ["'ela é uma pessoa muito boa.'", {Gabi:4}],
      ["'com ela nunca falta assunto nem história.'", {Lau:3,Raquel:2,Tati:1}]
    ]},
    {q:"Escolha uma energia para levar para os próximos anos:", a:[
      ["mais aventuras.", {Ca:3,Bela:2}],
      ["mais coragem para construir algo grande.", {Falconi:3,Gi:2}],
      ["mais tempo de qualidade com quem eu amo.", {Isadora:3,Gabi:2}],
      ["mais histórias inesquecíveis.", {Lau:3,Tati:2}],
      ["mais curiosidade sobre o mundo.", {Raquel:3,Falconi:1}]
    ]}
  ];

  const likelyQuestions = [
    "Quem é mais provável de topar uma viagem amanhã sem saber direito o plano?",
    "Quem é mais provável de mandar mensagem depois de semanas só para saber se você está bem?",
    "Quem é mais provável de ter uma carreira internacional muito impressionante?",
    "Quem é mais provável de transformar uma situação banal na melhor história da noite?",
    "Quem é mais provável de dizer 'vai dar certo' e realmente fazer todo mundo acreditar?",
    "Quem é mais provável de lembrar exatamente de uma história do Arbos que ninguém mais lembrava?",
    "Quem é mais provável de ser chamada para trabalhar em outro país e aceitar?",
    "Quem é mais provável de montar um plano completo quando todo mundo está perdido?",
    "Quem é mais provável de descobrir uma informação aleatória e virar a especialista oficial do assunto?",
    "Quem é mais provável de começar uma tradição nova no grupo?",
    "Quem é mais provável de chorar de felicidade com uma conquista de outra amiga?",
    "Quem é mais provável de fazer amizade em uma fila de aeroporto?",
    "Quem é mais provável de mandar um áudio enorme começando com 'gente, vocês não vão acreditar'?",
    "Quem é mais provável de ser a última pessoa a abandonar uma amiga numa crise?",
    "Quem é mais provável de mudar completamente de rota e ainda assim fazer dar muito certo?",
    "Quem é mais provável de virar referência na própria profissão?",
    "Quem é mais provável de puxar uma fantasia temática para um evento?",
    "Quem é mais provável de saber exatamente qual filme ou série combina com o momento?",
    "Quem é mais provável de organizar uma viagem com planilha?",
    "Quem é mais provável de organizar uma viagem sem planilha nenhuma?",
    "Quem é mais provável de aparecer em uma matéria, palestra ou evento importante daqui a alguns anos?",
    "Quem é mais provável de fazer um discurso emocionante num casamento do grupo?",
    "Quem é mais provável de lembrar de um aniversário, prova, entrevista ou data importante sem ninguém pedir?",
    "Quem é mais provável de sobreviver melhor a um perrengue internacional?",
    "Quem é mais provável de manter o 18 é par unido daqui a vinte anos?"
  ];

  const knowledgeQuestions = [
    {q:"Quem saiu das memórias de infância com chocolate da Turma da Mônica para trabalhar em uma das maiores empresas de mídia do Brasil?", opts:["Raquel","Tati","Lau","Gabi"], correct:"Raquel", note:"A Raquel e a Ca têm essa memória de infância — e hoje a Raquel trabalha na Globo."},
    {q:"Quem tem uma trajetória acadêmica/profissional que já rendeu apresentação internacional e também convite para voltar à antiga escola como referência para alunos?", opts:["Falconi","Gi","Raquel","Tati"], correct:"Falconi", note:"A Falconi já apresentou o projeto dela fora do Brasil e depois voltou ao Arbos para falar sobre a trajetória."},
    {q:"Qual dupla já teve a experiência de voltar ao Arbos, anos depois, em um papel completamente diferente do de aluna?", opts:["Falconi e Lau","Gi e Raquel","Bela e Isadora","Tati e Gabi"], correct:"Falconi e Lau", note:"Falconi e Lau já voltaram ao Arbos em contextos diferentes da época de alunas."},
    {q:"Quem está prestes a realizar um sonho antigo, atravessar um oceano e ainda criou um Instagram só para acompanhar essa nova fase?", opts:["Gi","Tati","Bela","Raquel"], correct:"Gi", note:"A Gi vai trabalhar na Disney e criou um Instagram dedicado a essa experiência."},
    {q:"Quem entrou no grupo por um caminho um pouco diferente das amizades de escola e acabou se tornando parte essencial dele?", opts:["Bela","Falconi","Raquel","Gabi"], correct:"Bela", note:"A Bela entrou no grupo por conexões de amizade e religião, e virou parte central da turma."},
    {q:"A casa de quem virou praticamente um patrimônio histórico do grupo depois de tantas viagens, histórias e memórias juntas?", opts:["Isadora","Gabi","Bela","Gi"], correct:"Isadora", note:"A casa da Isadora virou cenário de muitas memórias importantes do grupo."},
    {q:"Se o 18 é par resolvesse abrir uma empresa amanhã, quem teria mais chance de querer discutir contrato, sociedade e estratégia empresarial?", opts:["Lau","Ca","Falconi","Raquel"], correct:"Lau", note:"A Lau faz Direito na GV e se interessa por Direito Empresarial."},
    {q:"Quem tem no currículo uma sequência quase impossível de adivinhar: Engenharia Biomédica → cursinho → Poli → mercado financeiro?", opts:["Ca","Falconi","Gi","Gabi"], correct:"Ca", note:"Essa sequência é da Ca."},
    {q:"Quem provavelmente aceitaria primeiro uma oportunidade inesperada que envolvesse mudar totalmente os planos e viver uma experiência nova?", opts:["Ca","Isadora","Raquel","Gabi"], correct:"Ca", note:"A Ca é muito conhecida pela energia de 'bora, eu topo'."},
    {q:"Qual casal começou por um contexto muito específico da vida universitária, em que os dois já compartilhavam curso e atividades extracurriculares antes de começarem a namorar?", opts:["Gi e Gabriel","Bela e o marido","Tati e o namorado","Lau e o namorado"], correct:"Gi e Gabriel", note:"Gi e Gabriel Pincelli fazem Engenharia de Produção na Mauá e se conheceram na empresa júnior."},
    {q:"Quem recebeu uma das melhores notícias profissionais da vida enquanto já estava fora do Brasil por causa do próprio trabalho?", opts:["Tati","Falconi","Raquel","Ca"], correct:"Tati", note:"A Tati estava nos Estados Unidos a trabalho quando foi efetivada."},
    {q:"Quem combina mais com a ideia de uma amizade que continua presente mesmo quando a rotina está corrida, porque faz questão de aparecer, perguntar como você está e manter o vínculo vivo?", opts:["Isadora","Gi","Gabi","Bela"], correct:"Isadora", note:"Esse cuidado de manter contato é uma das características mais marcantes da Isadora como amiga."},
    {q:"Se começasse uma discussão sobre musicais e ninguém soubesse a resposta, para quem o grupo provavelmente olharia primeiro?", opts:["Tati","Bela","Lau","Raquel"], correct:"Tati", note:"Musicais são território oficial da Tati."},
    {q:"Quem saiu do Stoquinho, mudou de escola e anos depois acabou reencontrando boa parte do grupo no ensino médio?", opts:["Lau","Raquel","Gi","Isadora"], correct:"Lau", note:"A Lau estudou com algumas das meninas desde pequena, saiu da escola e depois reencontrou o grupo."},
    {q:"Qual dessas opções descreve melhor a relação histórica do grupo com o Arbos?", opts:[
      "Foi principalmente uma escola importante academicamente, mas sem tanta ligação emocional.",
      "Foi uma fase lembrada quase só pelas amizades, com poucas memórias de professores e rotina escolar.",
      "Virou uma mistura muito específica de carinho, ódio, nostalgia e piadas internas.",
      "Ficou marcado principalmente pela pandemia, enquanto o restante da experiência escolar acabou ficando em segundo plano."
    ], correct:"Virou uma mistura muito específica de carinho, ódio, nostalgia e piadas internas.", note:"O Arbos ficou ligado tanto às amizades e memórias boas quanto ao caos, professores, tarefas, colas e piadas internas."},
    {q:"O momento 'gente, acho que isso da pandemia vai passar rapidinho' aconteceu durante uma viagem para onde?", opts:["Holambra","Riviera","Santos","São Paulo"], correct:"Holambra", note:"O grupo estava junto na casa da Isadora quando a pandemia começou."},
    {q:"Qual lugar está ligado à história que acabou dando origem ao nome '18 é par'?", opts:["Riviera","Holambra","Gramado","Santos"], correct:"Riviera", note:"A origem do nome está ligada a uma viagem para a casa da Gabi em Riviera."},
    {q:"Quem provavelmente responderia 'claro' antes mesmo de terminar de ouvir o convite?", opts:["Ca","Bela","Tati","Lau"], correct:"Ca", note:"A Ca é a grande 'topa tudo' do grupo."},
    {q:"Quem tem uma personalidade tão alegre que 'luz do sol' virou uma descrição muito mais precisa do que qualquer currículo?", opts:["Bela","Tati","Gi","Gabi"], correct:"Bela", note:"A Bela é lembrada pela felicidade que contagia qualquer lugar."},
    {q:"Se você estivesse numa situação horrível e precisasse escolher alguém que dificilmente te abandonaria, quem tem fama de ser extremamente leal?", opts:["Gi","Isadora","Gabi","Raquel"], correct:"Gi", note:"A lealdade é uma das características mais marcantes da Gi."},
    {q:"Quem conseguiria contar uma história que você viveu junto e ainda assim fazer a versão dela parecer dez vezes mais engraçada?", opts:["Lau","Tati","Bela","Raquel"], correct:"Lau", note:"A Lau é lembrada como uma das pessoas mais engraçadas do grupo e uma ótima contadora de histórias."},
    {q:"Quem, apesar de ser mais tímida, é lembrada principalmente por ser uma das pessoas mais doces e agradáveis de ter por perto?", opts:["Gabi","Isadora","Bela","Raquel"], correct:"Gabi", note:"A Gabi é uma das pessoas mais fofas do grupo."},
    {q:"Quem passou de 'morro de medo de cachorro' para ter uma cachorrinha própria?", opts:["Gi","Tati","Gabi","Isadora"], correct:"Gi", note:"A Gi tinha muito medo de cachorro quando era mais nova e hoje tem uma cachorrinha."},
    {q:"Quem tem mais chance de, daqui a alguns anos, soltar casualmente numa conversa: 'quando eu fui apresentar meu projeto lá fora…'?", opts:["Falconi","Raquel","Gi","Ca"], correct:"Falconi", note:"A Falconi já tem histórico internacional apresentando o projeto de foguetes."}
  ];

  const el = id => document.getElementById(id);
  const loginView = el("loginView"), homeView = el("homeView"), gameView = el("gameView");
  let player = localStorage.getItem("18epar_player") || "";

  function cfgReady(){
    const c = window.EPAR_CONFIG || {};
    return Boolean(c.SUPABASE_URL && c.SUPABASE_PUBLISHABLE_KEY);
  }
  function headers(extra={}){
    const c = window.EPAR_CONFIG;
    return {"apikey":c.SUPABASE_PUBLISHABLE_KEY,"Authorization":`Bearer ${c.SUPABASE_PUBLISHABLE_KEY}`,"Content-Type":"application/json",...extra};
  }
  async function apiGet(path){
    const r=await fetch(`${window.EPAR_CONFIG.SUPABASE_URL}/rest/v1/${path}`,{headers:headers()});
    if(!r.ok) throw new Error(await r.text()); return r.json();
  }
  async function apiPost(path, body, prefer="return=minimal"){
    const r=await fetch(`${window.EPAR_CONFIG.SUPABASE_URL}/rest/v1/${path}`,{method:"POST",headers:headers({"Prefer":prefer}),body:JSON.stringify(body)});
    if(!r.ok) throw new Error(await r.text()); return true;
  }
  function show(view){[loginView,homeView,gameView].forEach(v=>v.classList.add("hidden"));view.classList.remove("hidden")}
  function renderNames(){
    el("nameGrid").innerHTML=PEOPLE.map(n=>`<button class="name-btn" type="button" data-name="${n}">${n}</button>`).join("");
    el("nameGrid").querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{player=b.dataset.name;localStorage.setItem("18epar_player",player);openHome()}));
  }
  function openHome(){
    el("currentPlayerLabel").textContent=player;
    el("syncStatus").textContent=cfgReady()?"☁️ Resultados compartilhados ativados.":"💾 Modo local ativo: configure o Supabase para juntar os votos de todos os celulares.";
    show(homeView);
  }
  function openGame(name){
    el("gamePlayerLabel").textContent=player;show(gameView);
    if(name==="personality") startPersonality();
    if(name==="likely") startLikely();
    if(name==="knowledge") startKnowledge();
  }

  function startPersonality(){
    let idx=0,scores=Object.fromEntries(PEOPLE.map(p=>[p,0]));
    function render(){
      const mount=el("gameMount");
      if(idx>=personalityQuestions.length){
        const ranking=Object.entries(scores).sort((a,b)=>b[1]-a[1]);
        const top=ranking[0][0], second=ranking[1][0];
        mount.innerHTML=`<div class="quiz-wrap"><div class="result-card"><span class="result-badge">Seu resultado</span><div class="result-name">${top}</div><p>${descriptions[top]}</p><p class="tiny-note">Sua segunda energia mais forte foi <strong>${second}</strong>.</p><button class="primary-btn" id="againPersonality">Jogar de novo</button></div></div>`;
        el("againPersonality").addEventListener("click",startPersonality); return;
      }
      const item=personalityQuestions[idx];
      mount.innerHTML=`<div class="quiz-wrap"><div class="progress"><div style="width:${(idx/personalityQuestions.length)*100}%"></div></div><div class="question-card"><div class="question-kicker">Pergunta ${idx+1} de ${personalityQuestions.length}</div><h2>${item.q}</h2><div class="answer-list">${item.a.map((x,i)=>`<button class="answer-btn" data-i="${i}" type="button">${x[0]}</button>`).join("")}</div></div></div>`;
      mount.querySelectorAll(".answer-btn").forEach(b=>b.addEventListener("click",()=>{const weights=item.a[Number(b.dataset.i)][1];Object.entries(weights).forEach(([k,v])=>scores[k]+=v);idx++;render()}));
    } render();
  }

  function localVoteKey(){return `18epar_votes_${player}`}
  function loadLocalVotes(){try{return JSON.parse(localStorage.getItem(localVoteKey())||"{}")}catch{return{}}}
  function saveLocalVotes(v){localStorage.setItem(localVoteKey(),JSON.stringify(v))}
  async function saveSharedVote(questionId,choice){
    if(!cfgReady()){const v=loadLocalVotes();v[questionId]=choice;saveLocalVotes(v);return}
    await apiPost("most_likely_votes?on_conflict=voter,question_id",{voter:player,question_id:questionId,choice},"resolution=merge-duplicates,return=minimal");
  }
  async function getMyVotes(){
    if(!cfgReady()) return loadLocalVotes();
    const rows=await apiGet(`most_likely_votes?select=question_id,choice&voter=eq.${encodeURIComponent(player)}`);
    return Object.fromEntries(rows.map(r=>[r.question_id,r.choice]));
  }
  async function getQuestionResults(questionId){
    if(!cfgReady()){const mine=loadLocalVotes(),counts={};if(mine[questionId])counts[mine[questionId]]=1;return{counts,total:mine[questionId]?1:0}}
    const rows=await apiGet(`most_likely_votes?select=choice&question_id=eq.${questionId}`);const counts={};rows.forEach(r=>counts[r.choice]=(counts[r.choice]||0)+1);return{counts,total:rows.length}
  }

  async function startLikely(){
    let idx=0,myVotes={};const mount=el("gameMount");
    mount.innerHTML=`<div class="quiz-wrap"><div class="question-card"><h2>Carregando votos…</h2><p>Preparando o placar de ${player}.</p></div></div>`;
    try{myVotes=await getMyVotes()}catch(e){console.error(e)}
    async function render(){
      const q=likelyQuestions[idx],selected=myVotes[idx]||"";
      mount.innerHTML=`<div class="quiz-wrap"><div class="progress"><div style="width:${((idx+1)/likelyQuestions.length)*100}%"></div></div><div class="question-card"><div class="question-kicker">Quem é mais provável? ${idx+1}/${likelyQuestions.length}</div><h2>${q}</h2><div class="vote-grid">${PEOPLE.map(n=>`<button class="vote-btn ${selected===n?"selected":""}" data-name="${n}" type="button">${n}</button>`).join("")}</div><div id="voteSummary" class="vote-summary"><p>Selecione alguém para votar.</p></div><div class="nav-row"><button class="secondary-btn" id="prevVote" type="button" ${idx===0?"disabled":""}>← Anterior</button><button class="primary-btn" id="nextVote" type="button">${idx===likelyQuestions.length-1?"Finalizar":"Próxima →"}</button></div><div class="tiny-note">Se você votar de novo nesta pergunta, seu voto anterior é substituído.</div></div></div>`;
      mount.querySelectorAll(".vote-btn").forEach(b=>b.addEventListener("click",async()=>{mount.querySelectorAll(".vote-btn").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");myVotes[idx]=b.dataset.name;try{await saveSharedVote(idx,b.dataset.name);await drawSummary()}catch(e){el("voteSummary").innerHTML="<p>Não consegui sincronizar agora. Confira a configuração do Supabase.</p>";console.error(e)}}));
      el("prevVote").addEventListener("click",()=>{if(idx>0){idx--;render()}});
      el("nextVote").addEventListener("click",()=>{if(idx===likelyQuestions.length-1)showFinal();else{idx++;render()}});
      if(selected) await drawSummary();
    }
    async function drawSummary(){
      const r=await getQuestionResults(idx),box=el("voteSummary");
      if(!r.total){box.innerHTML="<p>Ainda não há votos nesta pergunta.</p>";return}
      box.innerHTML=PEOPLE.map(n=>{const c=r.counts[n]||0,pct=Math.round(c/r.total*100);return `<div class="vote-row"><div class="vote-name">${n}</div><div class="vote-bar-track"><div class="vote-bar" style="width:${pct}%"></div></div><div class="vote-pct">${pct}%</div></div>`}).join("");
    }
    function showFinal(){
      mount.innerHTML=`<div class="quiz-wrap"><div class="result-card"><span class="result-badge">Votos salvos</span><div class="result-name">Feito ✨</div><p>Se você jogar novamente usando o mesmo nome, pode mudar qualquer resposta. O voto anterior será substituído.</p><button class="primary-btn" id="againLikely">Rever meus votos</button></div></div>`;
      el("againLikely").addEventListener("click",startLikely);
    }
    render();
  }

  function startKnowledge(){
    let idx=0,score=0,locked=false;
    function render(){
      const mount=el("gameMount");
      if(idx>=knowledgeQuestions.length){
        const pct=Math.round(score/knowledgeQuestions.length*100);
        const title=pct>=90?"Historiadora oficial do 18 é par":pct>=75?"Você conhece MUITA lore":pct>=55?"Passou, mas ainda tem arquivo para revisar":"Amiga… precisamos de uma noite de atualização 😭";
        mount.innerHTML=`<div class="quiz-wrap"><div class="result-card"><span class="result-badge">Resultado</span><div class="score-circle">${score}/${knowledgeQuestions.length}</div><h2>${title}</h2><p>Você acertou ${pct}% das perguntas.</p><button class="primary-btn" id="againKnowledge">Tentar de novo</button></div></div>`;
        el("againKnowledge").addEventListener("click",startKnowledge);return;
      }
      locked=false;const item=knowledgeQuestions[idx];
      mount.innerHTML=`<div class="quiz-wrap"><div class="progress"><div style="width:${((idx+1)/knowledgeQuestions.length)*100}%"></div></div><div class="question-card"><div class="question-kicker">Lore check ${idx+1}/${knowledgeQuestions.length}</div><h2>${item.q}</h2><div class="answer-list">${item.opts.map(o=>`<button class="answer-btn" data-o="${o}" type="button">${o}</button>`).join("")}</div><div id="feedbackBox"></div></div></div>`;
      mount.querySelectorAll(".answer-btn").forEach(b=>b.addEventListener("click",()=>{if(locked)return;locked=true;const ok=b.dataset.o===item.correct;if(ok)score++;b.classList.add("selected");el("feedbackBox").innerHTML=`<div class="feedback ${ok?"correct":"wrong"}"><strong>${ok?"Acertou 💖":"Não foi dessa vez 😭"}</strong><br>${item.note}</div><button class="primary-btn" id="nextKnowledge">${idx===knowledgeQuestions.length-1?"Ver resultado":"Próxima →"}</button>`;el("nextKnowledge").addEventListener("click",()=>{idx++;render()})}));
    } render();
  }

  renderNames();
  document.querySelectorAll(".game-card").forEach(b=>b.addEventListener("click",()=>openGame(b.dataset.game)));
  el("switchPlayerBtn").addEventListener("click",()=>{localStorage.removeItem("18epar_player");player="";show(loginView)});
  el("backBtn").addEventListener("click",openHome);
  if(player&&PEOPLE.includes(player))openHome();else show(loginView);
})();