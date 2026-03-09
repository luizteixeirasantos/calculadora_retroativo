# 📊 Calculadora de Retroativo Salarial

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)

Aplicação web desenvolvida em **React + Vite** para cálculo de **valores retroativos salariais**, incluindo:

* Diferença salarial
* Retroativos
* 13º proporcional
* INSS automático
* Total líquido
* Gráficos dinâmicos
* Exportação em **PDF e Excel**
* Histórico de cálculos

Projeto criado com foco em **boas práticas de desenvolvimento front-end**, **UX** e **estrutura profissional de código**.

---

# 🖥️ Preview

<img src="https://via.placeholder.com/900x450.png?text=Preview+da+Calculadora" alt="preview do sistema"/>

---

# 🚀 Funcionalidades

### 💰 Cálculos financeiros

✔ Diferença entre salário anterior e atual
✔ Cálculo de retroativo salarial
✔ 13º salário proporcional
✔ Cálculo automático da alíquota de INSS
✔ Total líquido após descontos

---

### 📊 Visualização de dados

✔ Gráfico dinâmico dos resultados
✔ Comparação visual entre valores
✔ Dashboard simples e intuitivo

---

### 📂 Exportação de dados

✔ Exportar resultado em **PDF**
✔ Exportar resultado em **Excel (.xlsx)**

---

### 🧠 Recursos adicionais

✔ Histórico de cálculos
✔ Armazenamento em **LocalStorage**
✔ Layout responsivo
✔ Interface simples e profissional

---

# 🛠️ Tecnologias utilizadas

| Tecnologia  | Descrição                               |
| ----------- | --------------------------------------- |
| React       | Biblioteca para construção da interface |
| Vite        | Build tool moderna e rápida             |
| TailwindCSS | Estilização e layout                    |
| Recharts    | Gráficos dinâmicos                      |
| jsPDF       | Geração de arquivos PDF                 |
| XLSX        | Exportação de planilhas Excel           |

---

# 📂 Estrutura do projeto

```
src
 ├── components
 │   ├── Sidebar.jsx
 │   ├── Navbar.jsx
 │
 ├── pages
 │   ├── Calculator.jsx
 │   ├── History.jsx
 │
 ├── utils
 │   ├── inssTable.js
 │
 ├── services
 │   ├── calculationEngine.js
 │
 ├── App.jsx
 ├── main.jsx
```

---

# ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/calculadora_retroativo.git
```

Entre na pasta do projeto:

```bash
cd calculadora_retroativo
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

# 🏗️ Build para produção

```bash
npm run build
```

Preview local do build:

```bash
npm run preview
```

---

# 🌐 Deploy

O projeto pode ser publicado facilmente em:

* **Vercel**
* **Netlify**
* **GitHub Pages**

Deploy recomendado:

```bash
Vercel
```

---

# 📈 Roadmap (melhorias futuras)

* [x] Comparação entre cálculos
* [x] Dashboard analítico
* [x] Cálculo progressivo real do INSS
* [x] Histórico avançado com filtros
* [x] Exportação completa do histórico
* [x] PWA (funcionar offline)
* [x] Dark Mode

---

# 🤝 Contribuição

Contribuições são bem-vindas!

1. Faça um **fork** do projeto
2. Crie uma **branch**

```bash
git checkout -b feature/minha-feature
```

3. Commit suas mudanças

```bash
git commit -m "Nova funcionalidade"
```

4. Push para a branch

```bash
git push origin feature/minha-feature
```

5. Abra um **Pull Request**

---

# 📜 Licença

Este projeto está sob a licença **MIT**.

---

# 👨‍💻 Autor

Desenvolvido por **Luiz Henrique Teixeira Santos**
Full Stack Developer

GitHub:
https://github.com/luizteixeirasantos
