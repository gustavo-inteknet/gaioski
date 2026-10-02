# Artigos de gaioski.com.br
# Fonte única da seção /artigos/. Depois de editar, rode: node tools/build-artigos.mjs
# Pastas que começam com "_" não são publicadas pelo GitHub Pages.

---
slug: travar-tudo-nao-e-seguranca
title: Travar tudo não é segurança: mapeie o ambiente antes de restringir
date: 2026-10-02
tema: Segurança
linkedin: 7511739051981529089
description: A gestão pediu para travar tudo e a empresa parou. Por que restrição de acesso só funciona depois de mapear o que cada área e cada sistema precisa.
---
"Trava tudo. Ninguém salva nada no computador, ninguém instala nada."

Foi o pedido da gestão num projeto que a gente tocou. Rede nova, computadores gerenciados com Active Directory, e a ordem era clara: o máximo de restrição possível. Bloquear Desktop, Downloads, Imagens, qualquer pasta local. Só salvar na pasta de rede. Nada de instalar programa. Usar só o que já estava no computador.

A gente avisou. Restrição pesada assim, num ambiente que ainda não tinha governança, é arriscado. Ninguém tinha mapeado o que cada setor precisa, quais permissões cada sistema exige pra rodar. Travar antes de entender isso podia parar a empresa. A gestão quis seguir mesmo assim.

Aplicamos tudo. E a empresa praticamente parou. Setor atrás de setor sem conseguir abrir o software do dia a dia. Sistema que não rodava porque precisava gravar numa pasta local que a gente tinha bloqueado. Um caos. A pressão foi tanta que a gestão ligava de cinco em cinco minutos pedindo exceção.

Libera isso. Libera aquilo. O projeto, que tinha prazo, acabou durando o dobro, agora abrindo na marra as portas que a gente tinha fechado sem saber se podia.

A lição que ficou: segurança não é o quanto você trava. É o quanto você conhece o seu ambiente antes de travar.

Restrição funciona quando vem depois do mapeamento. Você entende o que cada área usa, o que cada sistema precisa, e aí fecha o resto com critério. Pulando essa parte, você não ganha segurança. Ganha chamado, retrabalho e um time que perdeu a confiança na TI.

Hoje, quando um cliente pede pra "travar tudo", a primeira coisa que a gente faz não é travar. É mapear.

Na sua empresa, as regras de acesso foram desenhadas a partir do que cada área realmente usa, ou alguém decidiu fechar tudo e ver o que quebrava? Ou ainda não tem nada mapeado e tudo é liberado sem controle?

---
slug: cofre-de-senhas-corporativo
title: A senha que abre a empresa inteira: por que usar um cofre de senhas corporativo
date: 2026-09-30
tema: Segurança
linkedin: 7511005769224617984
description: Senha repetida e post-it não são preguiça, são falta de ferramenta. Como um cofre de senhas corporativo devolve controle, rastreabilidade e desligamento seguro.
---
Qual é a senha que, se vazar, abre a sua empresa inteira?

Você provavelmente tem uma. E provavelmente ela é parecida com outras que o time usa, anotada em algum lugar, ou repetida em vários sistemas.

O problema das senhas não é preguiça das pessoas. É que a gente pediu algo impossível: criar e lembrar dezenas de senhas fortes e diferentes. Ninguém consegue. Então todo mundo repete, simplifica ou cola num post-it.

E aí basta um vazamento (de um site qualquer, nem precisa ser o seu) pra que a mesma senha abra o e-mail, o sistema e o financeiro da empresa.

A solução é mais simples do que parece: um cofre de senhas. Ele cria senhas fortes e diferentes pra cada coisa, guarda tudo, e a pessoa só precisa lembrar de uma senha mestre.

Mas, num cofre pensado pra empresa, o ganho vai muito além de guardar. Ele te devolve o controle:

- Você vê quem acessou qual senha e quando. Rastreabilidade de verdade, não "acho que foi o fulano".
- Cada pessoa enxerga só as senhas que o trabalho dela exige. O estagiário não precisa ver a senha do banco.
- E quando alguém sai da empresa, você corta o acesso a tudo de uma vez, sem sair trocando senha por senha correndo.

Não é cobrar disciplina do time. É dar a ferramenta que faz o certo virar o caminho mais fácil, e ainda mostra quem acessou o quê.

Na sua empresa, as senhas importantes estão num cofre com controle e registro, ou na cabeça e nos post-its das pessoas?

---
slug: nuvem-ou-servidor-local
title: Nuvem ou servidor local? A pergunta certa para decidir
date: 2026-09-28
tema: Infraestrutura
linkedin: 7510301114790236160
description: "Vamos jogar tudo na nuvem" vira bandeira e atrapalha a decisão. Como escolher entre nuvem, servidor local ou ambiente híbrido pela necessidade de cada carga.
---
"A gente vai jogar tudo na nuvem." Escuto muito. E nem sempre é a melhor decisão.

A nuvem é ótima pra maioria das coisas: e-mail, arquivos, colaboração, sistema acessado de qualquer lugar. Pra isso, insistir em servidor local hoje costuma ser mais caro e mais trabalhoso.

Mas "tudo na nuvem" vira bandeira. E bandeira atrapalha decisão.

Tem coisa que ainda faz sentido perto de você. Um sistema pesado que precisa de resposta imediata no chão de fábrica. Um volume enorme de arquivos que sai caro demais pra trafegar toda hora. Uma operação que não pode parar quando a internet oscila.

A pergunta certa não é "nuvem ou local?". É "o que essa carga precisa: velocidade, custo, disponibilidade ou controle?". A resposta quase sempre é uma mistura dos dois, o que a gente chama de ambiente híbrido.

O erro não é escolher nuvem ou local. É escolher por moda, e não pela necessidade real do negócio.

Na sua empresa, a ida pra nuvem foi pensada caso a caso? Ou foi "todo mundo está indo, então a gente vai também"?

---
slug: backup-que-falhou-redundancia
title: O backup que falhou na hora H: redundância é ter camadas independentes
date: 2026-09-25
tema: Continuidade
linkedin: 7509213831177326592
description: Um disco avisou que ia falhar, a troca foi adiada e o backup testado todo mês não restaurou. O caso real que mostra por que um backup só é aposta.
---
Um caso real que eu gosto de contar, porque quase deu muito errado.

Nosso monitoramento proativo avisou: um disco estava começando a falhar num servidor que rodava aplicações críticas de um cliente. Avisamos. E avisamos de novo. A recomendação era simples: trocar e colocar dois discos espelhados (RAID 1), pra que, se um morresse, o outro segurasse a operação.

O cliente foi adiando a compra. Acontece. Enquanto está funcionando, parece que dá pra deixar pra depois.

O disco morreu antes da aprovação. Servidor fora do ar, empresa parada.

Trocamos o hardware e fomos restaurar o backup. E aí veio o susto: a restauração falhou. Mesmo com o backup sendo testado todo mês.

O que salvou o dia foi ter um segundo backup, em outra ferramenta, independente do primeiro. Restauramos por ele e o servidor voltou a operar.

A lição saiu cara, mas ficou clara. Depois do incidente, o cliente aprovou os dois discos em RAID 1, montamos uma réplica do servidor e ainda adicionamos um backup na nuvem.

Hoje, pra derrubar essa operação de vez, teria que falhar tudo ao mesmo tempo.

Dois aprendizados que valem pra qualquer empresa:

- O monitoramento te dá o aviso. Mas o aviso só vira proteção quando alguém decide agir.
- E um backup só é aposta. Redundância de verdade é ter camadas que não dependem uma da outra.

Na sua empresa, se o backup principal falhasse na hora de restaurar, existe um plano B? Ou é ele ou nada?

---
slug: arquivo-nao-abre-onedrive-limite-caminho
title: Arquivo que não abre no OneDrive: o limite de caminho que ninguém conta
date: 2026-09-23
tema: Microsoft 365
linkedin: 7508506824409518080
description: O arquivo abre no navegador e não abre no computador. Na nuvem o caminho cabe; sincronizado no Windows, não. Por que migrar exige redesenhar a estrutura.
---
"O arquivo não abre." "Deu erro de sincronização de novo." Se você escuta isso na sua empresa, o culpado quase nunca é o Microsoft 365. Uma causa comum é o tamanho do caminho do arquivo.

Todo arquivo tem um "endereço": todas as pastas até chegar nele, mais o nome do arquivo, tudo somado. E esse endereço tem um tamanho máximo.

Na nuvem, ele pode ter até 400 caracteres. Parece muito. Mas quando o arquivo sincroniza pro computador Windows, quem manda é o sistema operacional, que aperta esse limite pra 255 caracteres.

E de onde vem um endereço tão comprido? Quase sempre de migração. A empresa tinha tudo num servidor antigo, com pasta dentro de pasta dentro de pasta e nomes enormes lá no fundo.

Só que, no computador, esse endereço não começa na sua pasta. Ele começa lá atrás:

> C:\Users\seu.usuario\OneDrive - Empresa\Comercial\Clientes\2024\Propostas\Em andamento\Contrato_Final_Cliente_Revisado_Versao_2_Assinado.pdf

Repare que boa parte do limite já foi gasta logo no começo, no "C:\Users...\OneDrive - Empresa\", antes mesmo de chegar nas suas pastas. Junte tudo e os 255 caracteres estouram fácil.

É por isso que acontece aquela cena: o arquivo existe e abre no navegador, mas no computador não abre ou dá erro de sincronização. Na nuvem cabia nos 400. No computador, passou dos 255.

O usuário conclui que "o Microsoft 365 é ruim". Não é o Microsoft 365. É a arquitetura da informação.

Migrar arquivo não é copiar e colar. Antes de mover, a gente redesenha a estrutura: pastas mais rasas, de um ou dois níveis, nomes mais curtos, e o que era profundidade vira organização por biblioteca e metadado. Dá um pouco mais de trabalho na largada e evita esses erros que ninguém entende depois.

Na sua empresa, é comum arquivo que não abre ou erro de sincronização sem explicação? Boa chance de ser isso.

---
slug: versoes-documento-final-coautoria
title: proposta_final_v2: como acabar com as versões de documento na empresa
date: 2026-09-19
tema: Microsoft 365
linkedin: 7507045953611141121
description: Cinco arquivos de "documento final" e ninguém sabe qual é o certo. Como a coautoria do Microsoft 365 Business resolve isso sem custo a mais.
---
Quantas versões de "documento final" a sua empresa tem?

Você conhece a cena. Alguém cria a proposta e manda por e-mail. Outro mexe e responde com o anexo. Um terceiro edita a versão errada. E de repente existem cinco arquivos: proposta_final, proposta_final_v2, proposta_final_AGORA_VAI, e ninguém sabe qual é a boa.

Isso não é só chato. Custa tempo e gera erro. A empresa manda pro cliente a versão desatualizada. Duas pessoas trabalham horas no mesmo arquivo sem saber. O ajuste que alguém fez ontem se perde porque foi feito na cópia errada.

E o detalhe: qualquer plano do Microsoft 365 Business já resolve isso, sem custo nenhum a mais.

Em vez de mandar o arquivo de um lado pro outro, o documento fica num lugar só e todo mundo trabalha nele ao mesmo tempo. Você vê o que o outro está editando na hora. Existe uma versão só, sempre a atual. E o histórico guarda as anteriores, caso precise voltar.

Parece bobagem de organização. Mas some com uma fonte inteira de retrabalho e de erro que a empresa nem contabiliza.

Na sua empresa, os documentos importantes ainda vão e voltam por e-mail? Ou já vivem num lugar só, com uma versão só?

---
slug: sinais-ti-saudavel
title: Silêncio não é saúde: 5 sinais de que a TI da sua empresa vai bem
date: 2026-09-16
tema: Gestão de TI
linkedin: 7505997635242344448
description: Anos sem incidente podem ser sorte, não gestão. Cinco sinais práticos para saber se a TI da empresa saiu do modo apaga-incêndio.
---
Como o gestor da empresa sabe se a TI dele está indo bem? Quase sempre pelo silêncio. Se ninguém reclama, "está tudo certo".

Só que silêncio não é o mesmo que saúde. Tem empresa que passa anos sem incidente e, quando ele chega, descobre que estava vulnerável o tempo todo. Teve sorte, não gestão.

Alguns sinais de que a TI está realmente bem, e que dependem menos de sorte:

- Quando algo quebra, existe um responsável claro, e você sabe quem é.
- Você é avisado dos problemas antes do usuário reclamar, não depois.
- Um funcionário novo começa a trabalhar no primeiro dia, sem improviso.
- Se pedirem, alguém consegue dizer quem tem acesso a quê, e mostrar que o backup funciona.
- Existe um plano do que fazer se cair, e não um "a gente vê na hora".

Se a maioria disso acontece na sua empresa, parabéns: sua TI passou do modo "apaga incêndio". Se a maioria não acontece, não é que ela seja ruim. É que ainda está sendo reativa, e reativo funciona até o dia em que não funciona.

Olhando essa lista, quantos desses a sua empresa marca com tranquilidade hoje?

---
slug: gambiarra-que-virou-fundacao
title: A gambiarra que virou fundação: os "por enquanto" que seguram a empresa
date: 2026-09-11
tema: Infraestrutura
linkedin: 7504233563366760448
description: O script de 2019 que roda o faturamento, a planilha que só abre num computador, o PC embaixo da mesa. Como achar as peças frágeis antes que elas quebrem.
---
Quase toda empresa tem uma gambiarra que virou permanente. E quase ninguém percebe que passou a depender dela.

Isso a gente encontra o tempo todo ao assumir um cliente. Um script que um estagiário fez lá em 2019 e que roda o faturamento até hoje. Uma planilha que "puxa" um relatório importante e só abre no computador de uma pessoa. Um PC velho embaixo de uma mesa fazendo as vezes de servidor, sem backup, sem ninguém lembrar direito o que tem ali dentro.

No começo era só por enquanto. Aí funcionou. E o que funciona, ninguém mexe.

O problema chega sem avisar. A pessoa que entendia daquilo sai. O PC embaixo da mesa morre num domingo. A planilha para de abrir depois de uma atualização. E de repente uma coisa que parecia bobagem trava um pedaço do negócio.

Não é sobre culpar quem improvisou. No aperto, a gambiarra salvou o dia, e isso tem valor.

O problema é deixar o "por enquanto" virar fundação sem ninguém perceber.

Boa parte do nosso trabalho ao assumir um ambiente é exatamente esse: achar essas peças frágeis antes de elas quebrarem e trocar o improviso por algo que aguenta o dia a dia.

Na sua empresa, tem algum "por enquanto" segurando algo importante há tempo demais?

---
slug: shadow-it-arquivos-da-empresa
title: Shadow IT: quando os arquivos da empresa moram onde não deveriam
date: 2026-09-10
tema: Segurança
linkedin: 7503803233211932672
description: Contrato no WhatsApp, planilha no pendrive, arquivo no Gmail pessoal. O que é Shadow IT, o risco para a empresa e por que ter Microsoft 365 não basta.
---
Uma pergunta que eu faria pra qualquer dono de empresa: se você precisasse de um contrato importante agora, saberia exatamente onde ele está?

Não "mais ou menos". Abrir o computador e achar em poucos segundos.

Porque, na maioria das empresas, a resposta real é outra: "está no OneDrive... ou talvez no WhatsApp... tem uma cópia no computador do financeiro... deixa eu perguntar pra quem cuidou disso."

Os arquivos da empresa começam a morar onde não deveriam. Um pedaço num grupo de WhatsApp, outro no Gmail pessoal de alguém, uma planilha num pen drive, um contrato salvo só no computador de uma pessoa. Quase nunca por má intenção. Na maioria das vezes é simples: a pessoa precisa resolver uma coisa e usa a ferramenta que está à mão. Isso tem nome: Shadow IT.

E tem uma ironia aí. Boa parte dessas empresas já paga por uma estrutura que resolveria o problema. O Microsoft 365 tem onde guardar, compartilhar e controlar o acesso aos arquivos. Só que ter a tecnologia não é a mesma coisa que tê-la organizada. Se ninguém define onde cada informação fica, quem acessa e como se compartilha, cada um inventa o próprio jeitinho.

E o risco aparece quando menos se espera. Um celular é roubado e leva junto os dados dos clientes. Um funcionário sai e ninguém sabe o que ficou na conta pessoal dele. Um contrato importante estava naquele computador que pifou no domingo.

O problema não é só perder um arquivo. É perder o controle sobre a informação.

Pensa na sua empresa agora: se eu pedisse os 10 documentos mais importantes do negócio, você saberia onde procurar? Ou a primeira reação seria "quem tem esse arquivo?".

---
slug: onboarding-ti-primeiro-dia
title: Onboarding de TI: o funcionário novo trabalha no primeiro dia?
date: 2026-09-09
tema: Gestão de TI
linkedin: 7503488873017245696
description: Computador não pronto, e-mail não criado, acessos "depois". Por que onboarding é processo de TI e como ele evita produtividade perdida e risco de segurança.
---
Quanto tempo, na sua empresa, uma pessoa nova leva pra começar a produzir de verdade?

Parece pergunta de RH. Mas é de TI.

Em muita empresa, o primeiro dia de um contratado é uma sequência de "aguenta aí": o computador ainda não ficou pronto, o e-mail foi solicitado mas ninguém criou, e alguém vai verificar depois quais acessos ele precisa. O que era pra ser o primeiro dia de trabalho vira um dia de espera. Às vezes dois ou três, até tudo funcionar.

E tem um segundo problema, mais silencioso. Quando a configuração é feita na correria, aparecem os atalhos: acesso a mais "pra não travar", senha padrão que ninguém troca, um computador montado diferente dos outros, e permissões que ficam com a pessoa mesmo depois que ela muda de função.

Isso não é só desorganização. É produtividade perdida e risco de segurança que ninguém parou pra somar.

Quando a TI trata o onboarding como processo, muda tudo. A função já tem um perfil de acessos definido. O computador sai no padrão. As contas ficam prontas antes de a pessoa chegar. No primeiro dia, ela senta e trabalha.

É um detalhe de bastidor que ninguém nota quando funciona. Mas quando não funciona, todo mundo nota. E a conta chega de dois lados: no tempo da pessoa nova sendo paga pra esperar, e no tempo de quem largou o próprio trabalho pra resolver tudo na pressa.

Na sua empresa, uma pessoa nova trabalha já no primeiro dia? Ou o onboarding começa com um "espera aí que estou resolvendo seus acessos"?

---
slug: automacao-microsoft-365-trabalho-manual
title: Automação no Microsoft 365: o trabalho manual que você já paga para eliminar
date: 2026-09-02
tema: Microsoft 365
linkedin: 7500870138741657600
description: Pedido em planilha, digitação repetida, cobrança por e-mail. Como montar fluxos automáticos com o que já vem no Microsoft 365, sem projeto de meses.
---
Tem trabalho manual na sua empresa que a máquina já poderia estar fazendo. E você provavelmente já paga por isso.

Um exemplo do tipo que a gente vê direto: a empresa coleta um pedido, uma solicitação ou uma aprovação por planilha ou papel. Alguém digita de novo em outro sistema. Alguém avisa por e-mail. E quando trava, alguém tem que cobrar. Horas por semana gastas em copia, cola e "você já viu aquilo?".

Dentro do Microsoft 365 que a empresa já assina, dá pra montar isso de forma automática. Um formulário coleta a informação. Ela cai organizada num lugar só. As pessoas certas são avisadas na hora. E o que estava emperrado passa a andar sozinho.

Não é robô de filme, não é projeto de meses. É juntar peças que já estão pagas e paradas.

O ganho não é só tempo. É gente parando de fazer trabalho de copia e cola e sobrando pra fazer o que realmente precisa de cabeça.

Qual é, hoje, aquele processo manual e repetitivo que todo mundo na sua empresa reclama e ninguém nunca parou pra resolver?

---
slug: teams-whatsapp-corporativo
title: O Teams virou WhatsApp corporativo? Como organizar a colaboração
date: 2026-08-31
tema: Microsoft 365
linkedin: 7500242600071929856
description: Decisão perdida no chat, arquivo enviado três vezes, um grupo para cada assunto. As três definições que transformam o Teams em estrutura de colaboração.
---
O Teams da sua empresa virou um WhatsApp corporativo?

Os sinais são fáceis de reconhecer. Uma decisão importante foi tomada num chat e ninguém acha depois. O mesmo arquivo foi enviado três vezes porque ninguém sabe qual é a versão certa. Tem um grupo pra cada assunto, e nenhum é o oficial. E quem entra novo passa os primeiros dias perguntando "você sabe onde está aquele arquivo?".

Parece só desorganização. Mas é informação da empresa ficando espalhada.

O Teams é uma excelente ferramenta. O problema começa quando cada pessoa inventa a própria forma de usar. Chat pra projeto. Grupo pra documento. E-mail pra decisão. OneDrive pra arquivo compartilhado. SharePoint pra alguma coisa que ninguém sabe exatamente o quê.

No fim, a empresa até tem o Microsoft 365. Só não tem uma estrutura clara pra informação. Comprou a ferramenta certa e nunca definiu como ela deveria ser usada. Esse é um dos erros que mais encontro.

E a correção é mais simples do que parece. Basta deixar claro três coisas:

- Onde o arquivo fica.
- Onde a conversa acontece.
- Onde a decisão é registrada.

Quando isso está definido, o Teams deixa de ser um aplicativo de mensagens e vira parte da estrutura de colaboração da empresa. O documento tem um lugar só. A conversa do projeto fica no canal do projeto. A decisão dá pra encontrar depois. E quem chega novo acha as coisas sozinho, sem depender de "quem sabe onde está tudo".

Não é sobre usar menos Teams. É sobre parar de usar o Teams como um WhatsApp corporativo.

Na sua empresa, se alguém pedir agora a última versão de um documento importante, vocês acham em menos de 2 minutos? Ou começa a caça ao tesouro?

---
slug: copilot-ia-permissoes-microsoft-365
title: Copilot e IA na empresa: antes da IA, organize quem acessa o quê
date: 2026-08-28
tema: IA e governança
linkedin: 7499058240190652416
description: O Copilot respeita as permissões que o usuário já tem. Se ninguém organizou quem acessa o quê, a IA só deixa a bagunça mais fácil de consultar.
---
Todo mundo quer colocar IA para trabalhar dentro da empresa. Poucos param para perguntar o que a IA vai conseguir enxergar.

O Copilot, dentro do Microsoft 365, é extremamente poderoso. Resume reuniões, encontra documentos, escreve e-mails, analisa informação e acelera tarefas que antes levavam horas.

Mas tem um detalhe que muda tudo: ele respeita as permissões que o usuário já tem. Nem mais, nem menos.

E é aí que aparece um problema que encontro com frequência: a empresa nunca parou para organizar quem pode acessar o quê.

Aquele SharePoint onde "todo mundo vê tudo". Pastas antigas que ninguém revisa. Documentos de ex-funcionários esquecidos. Contratos abertos para quem não deveria. Informação financeira espalhada em lugares sem política nenhuma de acesso.

A IA não conserta essa bagunça. Ela só deixa a bagunça muito mais fácil de consultar. Se um dado está acessível para determinado usuário, a IA ajuda esse usuário a chegar nele em segundos.

A IA não criou o problema de permissão. Ela só acendeu a luz em cima dele.

E tem outro problema acontecendo ao mesmo tempo: gente jogando planilha de faturamento, contrato e dado de cliente em ferramenta pública de IA para "ganhar alguns minutos". Aí a conversa deixa de ser produtividade. É governança, segurança e controle sobre a informação da empresa.

IA dentro das empresas é caminho sem volta. E é ótimo que seja. Mas a ordem importa: primeiro organiza a informação, depois define quem acessa o quê, estabelece as políticas, e só então coloca uma IA poderosa para trabalhar em cima disso.

Antes de liberar IA para a sua equipe, faça uma pergunta simples: se a IA mostrasse tudo que cada colaborador consegue acessar hoje, você ficaria tranquilo com o resultado?

---
slug: custo-da-ti-lenta
title: Quanto custa a TI lenta? A conta das horas perdidas todo mês
date: 2026-08-27
tema: Gestão de TI
linkedin: 7498814079189532674
description: 20 minutos por dia de computador lento viram 200 horas por mês numa equipe de 30 pessoas. Como a gestão de TI encontra o gargalo antes da compra no desespero.
---
Quanto a sua empresa paga todos os meses para os funcionários esperarem a TI funcionar?

A pergunta é meio dura. A conta é pior.

Imagine que cada pessoa perca apenas 20 minutos por dia entre computador lento, sistema travando e o famoso "deixa eu reiniciar aqui rapidinho".

20 minutos por dia parecem pouco. Mas, em 20 dias úteis, são mais de 6 horas improdutivas por mês. Por pessoa.

Agora imagine isso numa equipe de 30 pessoas. São 200 horas por mês que não foram usadas pra vender, produzir, atender clientes ou entregar projetos.

E nem sempre a solução é comprar computador novo. Às vezes, um SSD e mais memória fazem uma máquina antiga voltar a entregar um bom desempenho.

Mas o gargalo também pode estar em outro lugar. Um switch antigo limitando a rede. Um servidor operando sempre no limite. Uma internet oscilando e ninguém sabendo exatamente por quê.

O problema é que muita empresa se acostuma. "É assim mesmo." "Esse computador é meio lento." "A internet dá umas travadas."

Até alguém perceber que aquilo não é um problema de TI. É hora de trabalho sendo desperdiçada todos os dias.

É aí que gestão de TI deixa de ser só suporte. O papel não é esperar o equipamento parar pra descobrir o que estava errado. É acompanhar os sinais, identificar os gargalos e decidir o que corrigir agora, o que pode esperar e o que precisa ser substituído, e quando.

Sem compra no desespero. Sem trocar equipamento que ainda produziria por anos. E sem aceitar como "normal" uma perda que acontece todo dia.

Máquina obsoleta não é necessariamente economia. Às vezes é só um custo que chega parcelado e escondido na folha de pagamento.

Na sua empresa, o que mais faz o time perder tempo hoje: computador, sistema, rede ou internet?

---
slug: wifi-corporativo-sem-senha-compartilhada
title: Wi-Fi corporativo sem senha compartilhada: login com Microsoft 365 e rastreabilidade
date: 2026-08-21
tema: Redes
linkedin: 7496517719224127488
description: Na IntekNet ninguém sabe a senha do Wi-Fi, de propósito. Como o acesso com login do Microsoft 365 acaba com a rede anônima e traz rastreabilidade.
---
Aqui na IntekNet, ninguém sabe a senha do Wi-Fi. E é de propósito.

Na maioria das empresas, o Wi-Fi tem uma senha só. Colada num papel, repassada no grupo do WhatsApp, conhecida por todo mundo. Inclusive por quem já saiu.

Funciona para conectar. Mas cria um problema silencioso: se uma atividade indevida acontece usando a internet da empresa, não dá para saber quem foi. É "a rede da empresa", e acabou.

A gente resolveu isso primeiro dentro de casa, na própria IntekNet, antes de levar pra qualquer cliente.

Aqui ninguém entra no Wi-Fi digitando uma senha compartilhada. Cada pessoa entra com o próprio login do Microsoft 365, o mesmo do e-mail. E, conforme o grupo dela no Entra ID, navega com uma regra própria. Quem é do comercial não precisa do mesmo acesso de quem cuida da infraestrutura.

Na prática, mudamos três coisas de uma vez:

- Desligou o usuário, desligou a rede. Quando alguém sai da empresa, perde o Wi-Fi junto com o e-mail. Ninguém troca senha, ninguém precisa avisar ninguém.
- O acesso deixou de ser anônimo. Cada conexão fica ligada a uma pessoa. Se precisar entender o que aconteceu em determinado horário, existe um nome pra começar.
- A empresa ganha rastreabilidade. E aqui tem um ponto que pouca gente liga ao Wi-Fi: o Marco Civil trata dos registros de acesso, e a LGPD trata de como esses dados pessoais são cuidados.

Isso não quer dizer que toda empresa precise desse mesmo modelo. Quer dizer que segurança, rastreabilidade e governança não deveriam começar só depois do incidente. No nosso caso, a gente preferiu estruturar antes.

Por baixo, o Hotspot do firewall WatchGuard usa SAML para conversar com o Microsoft 365 e validar quem é cada usuário. O cliente não precisa decorar a sigla. Ele precisa entender o resultado: o Wi-Fi da empresa deixou de ser uma porta anônima.

Uma pergunta que vale fazer hoje: se pedissem pra você provar quem usou a internet da sua empresa numa determinada hora, você conseguiria?

---
slug: acesso-condicional-microsoft-365
title: Acesso Condicional no Microsoft 365: senha certa não deveria bastar
date: 2026-08-19
tema: Segurança
linkedin: 7495796721919262720
description: Com a senha certa, a conta entra de qualquer lugar e a qualquer hora. Como o Acesso Condicional do Entra ID avalia o contexto antes de liberar o acesso.
---
Na maioria das empresas, uma conta do Microsoft 365 funciona igual em qualquer lugar. Do computador do escritório ou de um aparelho desconhecido. De uma rede corporativa ou de um Wi-Fi público. Às 9h da manhã ou às 3h da madrugada. Se o usuário tem a senha certa, entra.

Isso deveria incomodar mais gente.

No Microsoft 365, o Conditional Access (Acesso Condicional) permite mudar essa lógica. Em vez de perguntar apenas "a senha está correta?", o Microsoft Entra ID pode avaliar o contexto daquela autenticação:

- Quem está tentando acessar?
- De qual localização?
- Qual dispositivo está sendo utilizado?
- O dispositivo é gerenciado e compatível com as políticas da empresa?
- Qual aplicação está sendo acessada?
- Existe algum sinal de risco naquela autenticação?

A partir dessas condições, a empresa pode definir o que acontece:

- Exigir MFA.
- Bloquear o acesso.
- Permitir somente dispositivos gerenciados.
- Restringir determinadas aplicações.
- Limitar o acesso dependendo da localização.
- Aplicar controles diferentes para dispositivos pessoais.

E isso muda completamente o cenário. Porque o problema não é apenas quando um colaborador perde a senha. É quando um criminoso consegue a senha correta. Nesse momento, senha e usuário não deveriam ser suficientes para entrar no ambiente corporativo. É justamente aí que uma política de Acesso Condicional faz diferença.

E existe um ponto importante: não adianta criar dezenas de regras sem critério. Conditional Access precisa fazer parte de uma estratégia de identidade, junto com MFA, gestão de dispositivos, políticas de risco e revisão contínua dos acessos.

Segurança não é impedir todo acesso. É permitir o acesso certo, nas condições certas.

No ambiente da sua empresa, o Microsoft 365 decide apenas com base em usuário e senha? Ou existe uma política avaliando quem, de onde, como e em quais condições está tentando acessar?

---
slug: fatura-microsoft-365-gestao-licencas
title: Você sabe explicar a fatura do Microsoft 365 da sua empresa?
date: 2026-08-17
tema: Microsoft 365
linkedin: 7495215377954799617
description: O problema quase nunca é pagar muito, é não ter gestão sobre o que se paga. As perguntas para revisar licenças, recursos inclusos e o que nunca foi ligado.
---
Tem empresa que discute centavos na conta de energia, mas não sabe explicar a própria fatura do Microsoft 365.

E isso me chama atenção. Não porque o Microsoft 365 seja caro. Mas porque, na maioria das empresas, ninguém parou pra entender o que está sendo contratado.

- Quantas licenças existem?
- Por que cada usuário está naquele plano?
- Quais recursos de segurança já vêm inclusos?
- O que disso está de fato configurado?
- E, principalmente: o que a empresa paga e não usa?

Depois de alguns anos dentro de ambientes Microsoft 365, uma coisa ficou clara pra mim: o problema quase nunca é "pagar muito". É não ter gestão sobre o que se paga.

Às vezes é desperdício. Às vezes é risco. Às vezes é um recurso ótimo, já pago, que nunca foi ligado. E, de vez em quando, a empresa precisa mesmo de algo a mais.

Só que, sem olhar o ambiente primeiro, tudo vira chute.

Uma fatura que ninguém sabe explicar não é problema de preço. É sinal de que ninguém está cuidando.

Quando foi a última vez que alguém sentou e revisou, linha por linha, o que a sua empresa tem no Microsoft 365?

---
slug: dropbox-compartilhado-construtora-microsoft-365
title: Uma conta de Dropbox para a empresa toda: o caso de uma construtora
date: 2026-08-14
tema: Segurança
linkedin: 7493984785812340737
description: Uma construtora trabalhava com uma única conta de Dropbox e a mesma senha para todos. Como Microsoft 365 com Intune devolveu o controle sobre os projetos.
---
Uma construtora inteira trabalhava com uma única conta de Dropbox. A mesma senha, na mão de todo mundo.

Funcionava pra trocar arquivo rápido. Até começar a dar errado. Projeto vazando. Arquivo sigiloso na mão de quem não devia. E ninguém conseguia dizer quem tinha acessado o quê, nem quando.

Numa construtora, isso não é problema de TI. É concorrente vendo sua planta antes de a obra sair do papel.

Quando assumimos, trocamos aquilo por Microsoft 365 com Intune. Na prática:

- Cada setor e cada projeto ganhou a sua permissão, e quem não é do projeto não enxerga o projeto.
- Os arquivos ficaram presos ao computador corporativo, sem copiar pra um pendrive nem mandar pra fora.
- E o acesso virou da empresa, não da pessoa.

O teste de fogo veio com a equipe remota. No dia em que um colaborador foi desligado, o acesso aos dados corporativos foi revogado em segundos. Sem visita técnica, sem correr atrás do notebook. Sem torcer pra ele "apagar depois".

O problema nunca foi o Dropbox. Dropbox é ótimo pra muita coisa. O problema é dado de empresa morando numa conta compartilhada, sem dono e sem controle. Quando vaza, não tem volta.

Na sua empresa: se um funcionário sair amanhã, os arquivos vão embora com ele ou ficam com a empresa?

---
slug: microsoft-365-industria-configuracao
title: Microsoft 365 na indústria: o que encontramos quando abrimos o ambiente
date: 2026-08-12
tema: Microsoft 365
linkedin: 7493260016809078785
description: Configurado às pressas, funciona e ninguém volta para olhar. Os problemas que quase sempre aparecem no Microsoft 365 de indústrias e por que custam caro.
---
Na maioria das indústrias que visito, o Microsoft 365 foi configurado às pressas por alguém que "entendia um pouco".

Funciona. Os e-mails chegam, o pessoal trabalha. E é por isso que ninguém volta pra olhar.

Aí a gente abre o ambiente pra conhecer e encontra quase sempre as mesmas coisas:

- Conta de gente que saiu há meses ainda ativa.
- Usuário comum com poder de administrador.
- Verificação em duas etapas desligada.
- Recursos básicos de segurança desabilitados.
- Licença que não bate com o que a empresa usa de verdade.

Nada disso atrapalha o dia a dia, então passa batido. O problema aparece de uma vez só, no dia do incidente. E numa indústria, esse custo não fica na TI. Ele para a linha, logística e faturamento.

Configurar o Microsoft 365 pra funcionar é fácil, qualquer um faz. Deixar ele organizado, seguro e sob controle é outro trabalho. E é esse que quase nunca foi feito.

Na sua empresa, quem configurou o Microsoft 365 de vocês, e quem cuida dele hoje?

---
slug: informacao-maior-ativo-da-empresa
title: O maior ativo da empresa não está no servidor
date: 2026-08-10
tema: Segurança
linkedin: 7492534742295429120
description: Proteger a empresa já foi proteger o servidor. Hoje o que mantém o negócio de pé é a informação espalhada na nuvem, e sem controle ela vira risco.
---
O maior ativo da sua empresa provavelmente não está dentro de nenhum servidor. E talvez isso esteja mudando a forma como você deveria pensar em segurança de TI.

Durante muito tempo, proteger a empresa significava proteger o servidor. Backup. Firewall. Antivírus. Nobreak.

Só que boa parte do que mantém uma empresa funcionando hoje está espalhada pela nuvem: e-mails, contratos, projetos, dados financeiros, documentos, histórico de clientes, conhecimento dos colaboradores.

O servidor pode parar. O problema é quando a empresa perde o controle sobre essas informações. E isso pode acontecer de várias formas:

- Um ex-colaborador que ainda possui acesso.
- Um arquivo compartilhado com a pessoa errada.
- Uma conta administrativa sem MFA.
- Um usuário com permissões que não deveria ter.
- Um backup que existe, mas nunca foi testado.

Nada disso necessariamente aparece quando você olha para a infraestrutura.

Por isso, uma pergunta que gosto de fazer quando analisamos um ambiente: "se a sua empresa perdesse o acesso às informações amanhã, quanto tempo conseguiria continuar operando?"

Essa resposta diz muito mais sobre a maturidade da TI do que saber quantos servidores existem.

Porque hoje, o ativo mais importante talvez não seja mais o servidor. É a informação que está circulando pela empresa. E informação sem controle vira risco.

---
slug: migracao-microsoft-365-levantamento-do-ambiente
title: Antes de migrar para o Microsoft 365, descubra o que realmente existe
date: 2026-08-07
tema: Microsoft 365
linkedin: 7491448104571953152
description: E-mail na Locaweb, arquivos no Google Drive e no OneDrive pessoal, nenhum inventário. Um caso real de migração que começou pelo levantamento do ambiente.
---
Migrar para o Microsoft 365 parecia ser a parte fácil.

O cliente usava e-mail na Locaweb, arquivos espalhados entre Google Drive e OneDrive pessoal. Até aí, nada muito fora do comum.

O problema apareceu quando começamos a levantar o ambiente. Ninguém sabia exatamente:

- Quantas contas existiam.
- Quem tinha acesso a quais arquivos.
- Onde determinados documentos estavam armazenados.
- Quais contas ainda eram utilizadas.
- O que estava em cada computador.
- Qual a senha de cada conta "pessoal".

Não havia um inventário ou documentação confiável. Então, antes de migrar, tivemos que descobrir o ambiente.

Fomos computador por computador. Conversamos com cada colaborador. Identificamos contas, arquivos, acessos e informações que estavam espalhadas pelo ambiente. Só depois conseguimos estruturar a migração para o Microsoft 365 com segurança.

E esse é um ponto que muitas vezes passa despercebido: uma migração de Microsoft 365 não é simplesmente mover e-mails e arquivos. É entender o ambiente atual, identificar riscos, organizar informações e tomar decisões antes de fazer qualquer mudança.

No final do projeto, durante a reunião de encerramento, o cliente nos disse:

> "Sua equipe é ótima, estão de parabéns. Não pareciam um prestador de serviço, parecia que faziam parte da nossa equipe."

Para mim, essa foi uma das melhores avaliações que poderíamos receber. Porque é exatamente assim que acredito que um projeto de TI deve ser conduzido: não como um fornecedor executando uma tarefa, mas como alguém que entende o negócio e trabalha junto com a equipe. Relação de parceria.

Tecnologia é importante. Mas, em projetos críticos, confiança, parceria e dedicação fazem tanta diferença quanto a tecnologia.

---
slug: licenca-microsoft-365-business-ou-enterprise
title: Business ou Enterprise? Como escolher a licença Microsoft 365
date: 2026-08-05
tema: Microsoft 365
linkedin: 7490783693637271553
description: Pagar por recurso que não usa ou ficar numa licença que não atende. O limite de 300 usuários da linha Business e como escolher a licença certa.
---
Escolher uma licença Microsoft 365 não deveria ser uma decisão baseada apenas no preço.

Mesmo assim, já encontramos empresas em duas situações bastante comuns:

- Pagando por recursos que nunca utilizam.
- Ou pior: utilizando licenças que não atendem ao cenário da empresa, criando riscos de compliance e limitações que só aparecem quando precisam de um recurso importante.

A dúvida mais frequente é: "Business ou Enterprise. Qual é a certa?"

Muita gente acredita que a diferença está apenas no preço ou na quantidade de recursos. Mas existe um detalhe importante:

- A linha Microsoft 365 Business foi desenvolvida para empresas com até 300 licenças por tenant.
- Acima desse limite, a empresa deve utilizar licenças da linha Microsoft 365 Enterprise, que além de não possuírem essa limitação, oferecem recursos mais avançados de segurança, conformidade e gerenciamento.

E aqui está o erro que vemos com frequência. Algumas empresas compram licenças Enterprise sem precisar, aumentando o custo mensal. Outras permanecem na linha Business quando o cenário já exige recursos Enterprise, criando limitações operacionais e até riscos de compliance.

A licença ideal não é a mais cara. É aquela que atende às necessidades da empresa hoje e continua fazendo sentido conforme ela cresce.

Antes de contratar ou renovar as licenças do Microsoft 365, vale a pena revisar se elas realmente fazem sentido para o cenário atual da empresa. Muitas vezes, uma análise de poucos minutos evita custos desnecessários e reduz riscos futuros.

Você já encontrou empresas utilizando licenças acima ou abaixo do que realmente precisavam?
