# minhascompras
App para controle pessoal de compras em supermercado desenvolvido em HTML, CSS e JavaScript puro. Funciona offline, pode ser instalado na tela inicial do Android e não requer nenhuma instalação de loja de aplicativos.

📱 Funcionalidades
📷 Scanner de Código de Barras

Leitura via câmera traseira do dispositivo Android
Motor ZXing — compatível com EAN-13, EAN-8, Code 128, QR Code e outros formatos
Preenchimento automático do nome e categoria do produto baseado em compras anteriores
Incremento automático de quantidade ao escanear o mesmo produto duas vezes

🏷️ Registro de Produtos

Nome, categoria, preço, quantidade e foto tirada na hora
14 categorias disponíveis: Carnes, Hortifruti, Laticínios, Bebidas, Limpeza, entre outras
Entrada manual como alternativa ao scanner

⚠️ Alerta de Variação de Preço

Ao escanear um produto já registrado anteriormente, o app exibe o último preço pago como referência
Conforme o novo preço é digitado, a variação é calculada em tempo real
Indicação visual de alta (▲ vermelho) ou baixa (▼ verde) com percentual e diferença em reais

🛒 Lista de Compras

Total calculado automaticamente a cada item adicionado
Miniatura da foto e emoji da categoria em cada item
Remoção individual de itens
Botão para finalizar e salvar a sessão no histórico

📋 Histórico

Todas as compras salvas por supermercado e data
Expansível para visualizar os itens com foto, categoria e valor
Exclusão individual ou total do histórico

📊 Comparativo de Preços

Compara o mesmo produto (por código de barras) em diferentes supermercados
Destaca automaticamente o local mais barato com badge + barato
Utiliza sempre o preço mais recente registrado por supermercado

📈 Relatório de Gastos

Filtro por período: 7, 30, 90 dias, último ano ou todo o histórico
Total gasto, número de compras, média por compra e total de itens
Gráfico de barras por supermercado
Gráfico de barras por categoria


🛠️ Tecnologias Utilizadas
TecnologiaUsoHTML5 / CSS3 / JavaScriptBase do aplicativoZXing Library @0.20.0Leitura de código de barrasService WorkerCache offline e funcionamento sem internetWeb ManifestInstalação como PWA na tela inicialLocalStoragePersistência de dados no dispositivoMediaDevices APICâmera para scanner e foto dos produtosGoogle Fonts (Syne + DM Sans)Tipografia

📁 Estrutura de Arquivos
/
├── compras.html       # Aplicativo principal
├── sw.js              # Service Worker (cache offline)
├── manifest.json      # Configuração PWA
├── icon-192.png       # Ícone para tela inicial
├── icon-512.png       # Ícone em alta resolução
└── README.md          # Este arquivo

⚠️ Importante: todos os arquivos devem estar na mesma pasta para o app funcionar corretamente.


🚀 Como Usar
Publicação no GitHub Pages

Crie um repositório no GitHub
Faça upload dos 5 arquivos (compras.html, sw.js, manifest.json, icon-192.png, icon-512.png) na raiz
Ative o GitHub Pages nas configurações do repositório
Acesse a URL gerada pelo Chrome no Android

Instalação no celular (Android)

Abra o app no Chrome para Android com internet ativa (primeira vez)
O Service Worker fará o cache automático de todos os recursos
Toque no menu do Chrome → "Adicionar à tela inicial"
O ícone do app aparecerá na tela inicial como um aplicativo nativo
A partir daí, funciona 100% offline

Atualização do app
Sempre que o compras.html for modificado:

Incremente a versão do cache no sw.js: minhacompra-v2 → minhacompra-v3
Faça upload dos dois arquivos juntos no GitHub


📋 Como Funciona o Fluxo de Compras
Iniciar Sessão (escolher supermercado)
        ↓
Escanear código de barras do produto
        ↓
Preencher nome, categoria, preço e foto
        ↓
        ├── Produto novo → cadastra e adiciona
        └── Produto já registrado → mostra variação de preço
        ↓
Total atualizado automaticamente na Lista
        ↓
Finalizar → salvo no Histórico
        ↓
Comparativo e Relatório disponíveis

📦 Compatibilidade
PlataformaStatusAndroid + Chrome✅ Totalmente compatívelDesktop + Chrome/Edge✅ Funciona (sem instalação PWA)iOS + Safari⚠️ Funciona parcialmente (câmera pode ter limitações)

© Direitos Autorais
© 2026 SDInformática Educação e Tecnologia — Todos os direitos reservados.
Desenvolvido por Profª Synthia Duarte
SDInformática Educação e Tecnologia
Belém — Pará — Brasil
DOI: https://doi.org/10.5281/zenodo.20091389
Este software é de uso pessoal e educacional. É proibida a reprodução, distribuição ou comercialização sem autorização expressa da autora.
