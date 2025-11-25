//### CONFIGUARANDO O BROKER MQTT PARA O NAVEGADOR
const MQTT_URL = "wss://test.mosquitto.org:8081";
//Configurando o ID do cliente MQTT
const clienteId = 'web-casa-inteligente-victor';
 
//### Criando o cliente MQTT do navegador, Podem ainda não estamos conectados ao BROKER
// const cliente = mqtt.connect(MQTT_URL, 
// {
//     clienteId,
//     clean: true,
//     connectTimeout: 4000,
// });

// #### Variaveis dos dispositivos

// O * document.getElementById * E de onde puxa o elemento/Conteudo pelo ID do HTML **
const lampSalaInput = document.getElementById("lamp-sala");
const cortSalaInput = document.getElementById("cort-sala");
const portSalaInput = document.getElementById("port-sala")

// Variavel para mudar o texto, ao clicar no botão ligado/desliga
const lampSalaTexto = document.getElementById("lamp-sala-texto");
const cortSalaTexto = document.getElementById("cort-sala-texto");
const portSalaTexto = document.getElementById("port-sala-texto");
 
// =====  SALA =====
// #### Alterando estado dos dispositivos

// pegando o evento de mudação de estado do botão (ligado/desligado)
// change = modificação

// ==== Lampada ====
lampSalaInput.addEventListener("change", () => {
    // Variavel para verificar se o botão esta ligado = true 
    const ligado = lampSalaInput.checked === true;

    // Criando verificação para informa se o botão esta ligado/desligado 
    if(ligado === true)
    {
        console.log("Lampada ligada");
        // o * innerHTML * modifica o texto, no HTML
        lampSalaTexto.innerHTML = "Ligado";
    }
    else
    {
        console.log("Lampada desligada");
        lampSalaTexto.innerHTML = "Desigado";
    }
});

// ==== Cortina ====
cortSalaInput.addEventListener("change", () => {
    const aberta = cortSalaInput.checked === true;

    if(aberta === true)
    {
           console.log("Cortina aberta");
           cortSalaTexto.innerHTML = "Aberta"; 
    }
    else
    {
        console.log("Cortina fechada");
        cortSalaTexto.innerHTML = "Fechada"; 
    }
});

// ==== Porta ====
portSalaInput.addEventListener("change", () => {
    const aberta = portSalaInput.checked === true;

    if(aberta === true)
    {
        console.log("Porta aberta");
        portSalaTexto.innerHTML = "Aberta";
    }
    else
    {
        console.log("Porta fechada");
        portSalaTexto.innerHTML = "Fechada";
    }
});

// ======== COZINHA ========

// Variaveis do botão
const lampCozinhaInput = document.getElementById("lamp-cozinha");
const exausCozinhaInput = document.getElementById("exaus-cozinha");

// Variaveis do texto
const lampCozinhaTexto = document.getElementById("lamp-cozinha-texto");
const exausCozinhaTexto = document.getElementById("exaus-cozinha-texto");

// Lampada Cozinha
lampCozinhaInput.addEventListener("change", () => {
    const ligada = lampCozinhaInput.checked === true;

    if(ligada === true)
    {
        console.log("Lampada ligada");
        // o * innerHTML * modifica o texto, no HTML
        lampCozinhaTexto.innerHTML = "Ligada";
    }
    else
    {
        console.log("Lampada desligada");
        lampCozinhaTexto.innerHTML = "Desigada";
    }
});

// Exaustor Cozinha
exausCozinhaInput.addEventListener("change", () => {
    const ligado = exausCozinhaInput.checked === true;

    if(ligado === true)
    {
        console.log("Exaustor ligado");
        exausCozinhaTexto.innerHTML = "Ligado";
    }
    else
    {
        console.log("Exaustor desligado");
        exausCozinhaTexto.innerHTML = "Desligado";
    }
})

// ======== VARANDA/GARAGEM ========

// Botões
const lampVarandaInput = document.getElementById("lamp-varanda");
const varVarandaInput = document.getElementById("var-varanda");
const portVarandaInput = document.getElementById("port-varanda");
const irVarandaInput = document.getElementById("ir-varanda");

// Texto
const lampVarandaTexto = document.getElementById("lamp-varanda-texto");
const varVarandaTexto = document.getElementById("var-varanda-texto");
const portVarandaTexto = document.getElementById("port-varanda-texto");
const irVarandaTexto = document.getElementById("ir-varanda-texto");

// Iluminação
lampVarandaInput.addEventListener("change", () => {
    const ligada = lampVarandaInput.checked === true;

    if(ligada === true)
    {
        console.log("Iluminação ligada");
        lampVarandaTexto.innerHTML = "Ligada";
    }
    else
    {
        console.log("Iluminação desligada");
        lampVarandaTexto.innerHTML = "Desigada";
    }
});

// Varal
varVarandaInput.addEventListener("change", () => {
    const aberto = varVarandaInput.checked === true;

    if(aberto === true)
    {
        console.log("Varal Aberto");
        varVarandaTexto.innerHTML = "Aberto";
    }
    else
    {
        console.log("Varal fechado");
        varVarandaTexto.innerHTML = "Fechado";
    }
})

// Portão
portVarandaInput.addEventListener("change", () => {
    const aberto = portVarandaInput.checked === true;

     if(aberto === true)
    {
        console.log("Portão aberto");
        portVarandaTexto.innerHTML = "Aberto";
    }
    else
    {
        console.log("Portão fechado");
        portVarandaTexto.innerHTML = "Fechado";
    }
    
});

// irrigação
irVarandaInput.addEventListener("change", () => {
    const ligada = irVarandaInput.checked === true;
})

//### Chamando um evento JS do tipo "DOMContentLoard", que é o evento que acontece
// O * => * e uma função 
// document.addEventListener("DOMContentLoaded", () => 
// {
//     console.log("Página carregada com sucesso! ✅...Conectado ao Mosquitto!");
 
//     //## Estabelecendo a conexão com o broker mqtt
//     cliente.on("connect", () => 
//     {
//     console.log("Conexão estabelecida com sucesso ✅!");
//     console.log("Cliente conectado: ", clienteId);
 
//     //### Criando um topico para acessar mensagens do MQTT
//     const topicoTeste = 'teste/victor';
   
//     //### Recebendo mensagens do topico criado
//     cliente.subscribe(topicoTeste);
 
//     });
 
//     //#### Preparando mensagem de erro caso algo aconteça
//     cliente.on("error", (erro) => 
//     {
//         console.error("Erro ao se conectar ao Broker MQTT 🚫!");
//         console.error(erro);
//     });
   
//     //### Recebendo as mensagens dos tópicos assinados no MQTT pelo cliente
//     cliente.on("message", (topico, mensagem) => 
//     {
//         console.log("Topico recebido: ", topico);
//         console.log("Mensagem recebida ", mensagem);
//     });
// });