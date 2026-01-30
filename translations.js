// Sistema de tradução para o currículo
const translations = {
  pt: {
    // Navbar e informações básicas
    title: "Currículo Lucas Aguiar",
    inicio: "Início",
    portfolio: "Portfólio",
    contato: "Contato",
    
    // Tags
    tagEng: "Eng. Eletricista",
    tagMestre: "Mestre em Eng.",
    tagDev: "DEV in progress",
    
    // Seções
    resumoProfissional: "Resumo Profissional",
    resumoTexto: "Engenheiro Eletricista com mestrado em Engenharia da Computação e Elétrica e doutorando em Telecomunicações pela UFC. Mais de 9 anos de experiência em supervisão de equipes, projetos de telecomunicações ópticas e energia solar fotovoltaica. Especialista em Python, Machine Learning e desenvolvimento web Full Stack. Pesquisador em gerenciamento de interferência em redes 6G e algoritmos de otimização para VANTs. Professor em pós-graduação e cursos técnicos. Busco desafios em tecnologia, inovação e desenvolvimento de soluções inteligentes.",
    
    sobreMim: "Sobre mim",
    sobre1: "Engenheiro Eletricista pela Universidade Federal do Ceará.",
    sobre2: "Desenvolvedor FullStack em formação.",
    sobre3: "Atualmente entre Sobral-CE e Fortaleza-CE.",
    sobre4: "Amante da tecnologia.",
    sobre5: "Projetista em telecomunicações ópticas e móveis.",
    sobre6: "Projetista de sistemas de energia solar.",
    sobre7: "Aberto a novos desafios.",
    sobre8: "Habilitação A e B.",
    sobre9: "27 anos.",
    sobre10: "Currículo Lattes",
    sobre11: "Meu Canal no Youtube (Ideias/Aulas)",
    
    habilidades: "Habilidades Técnicas",
    habProgramacao: "Programação:",
    habProg1: "Python (Machine Learning, Deep Learning, OpenCV)",
    habProg2: "JavaScript (Node.js, React - em formação)",
    habProg3: "MATLAB, Scilab, Octave",
    habProg4: "VBA (Excel, Selenium, Web Scraping)",
    
    habEngenharia: "Engenharia Elétrica:",
    habEng1: "Projetos de Energia Solar Fotovoltaica",
    habEng2: "Sistemas de Proteção (SPDA, NR10)",
    habEng3: "Instalações Elétricas Residenciais",
    habEng4: "Energias Renováveis e Hidrogênio Verde",
    
    habTelecom: "Telecomunicações:",
    habTel1: "Redes Ópticas (FTTH, GPON)",
    habTel2: "Redes Móveis (4G/5G/6G)",
    habTel3: "Gerenciamento de Interferência",
    habTel4: "Algoritmos de Otimização (ACS, A*, DWA)",
    
    habGestao: "Gestão e Outras:",
    habGes1: "Supervisão de Equipes",
    habGes2: "Redes de Computadores",
    habGes3: "Suporte Técnico e SAC",
    habGes4: "Inglês (Intermediário)",
    
    experiencias: "Experiências",
    
    // Gtel
    cargo1: "Pesquisador",
    empresa1: "Gtel (Grupo de Pesquisa em Telecomunicações sem Fio)",
    desc1: "Conduzindo pesquisa avançada em gerenciamento de interferência em redes 6G, desenvolvendo algoritmos de otimização e análise de desempenho de redes móveis de última geração. Contribuindo para publicações científicas e projetos de P&D em telecomunicações.",
    periodo1: "Abril/2025 - Atual",
    
    // Tesla
    cargo2: "Professor",
    empresa2: "Tesla Treinamentos",
    desc2_intro: "Ministrando aulas em pós-graduação e cursos técnicos, capacitando mais de 150 profissionais em:",
    desc2_item1: "• Pós-graduação em Segurança do Trabalho - Módulos 1 e 2 (Fundamentos Legais, Normativos, Éticos e Técnicos)",
    desc2_item2: "• Energia Solar Fotovoltaica (projeto, dimensionamento e homologação)",
    desc2_item3: "• SPDA (Sistema de Proteção contra Descargas Atmosféricas - NBR 5419)",
    desc2_item4: "• Instalações Elétricas Residenciais (NBR 5410)",
    desc2_extra: "Desenvolvendo material didático e aplicando metodologias ativas de ensino.",
    periodo2: "Julho/2024 - Atual (6 meses)",
    
    // New Call
    cargo3: "Supervisor",
    empresa3: "New Call",
    desc3: "Supervisionei equipe de 12 técnicos de SAC/Suporte em redes de computadores, reduzindo o tempo médio de atendimento em 30% e aumentando a satisfação dos clientes de 78% para 92%. Implementei processos de monitoramento de serviços, treinamento contínuo da equipe e melhorias operacionais para os clientes FasterNet/Desktop. Gerenciei mais de 5.000 tickets de suporte durante o período.",
    periodo3: "Janeiro/2016 - Agosto/2025 (9 anos)",
    
    // Assertiva
    cargo4: "Projetista de Engenharia Elétrica",
    empresa4: "Assertiva Engenharia",
    desc4: "Elaborei 25+ projetos de microgeração fotovoltaica homologados junto à concessionária, totalizando mais de 350 kWp instalados. Realizei dimensionamento técnico, análise de viabilidade econômica e vendas consultivas de equipamentos, gerando R$ 450.000 em negócios. Prestei suporte técnico pré e pós-venda aos clientes.",
    periodo4: "Março/2022 - Setembro/2022 (6 meses)",
    
    // Amplisol
    cargo5: "Estagiário de Engenharia Elétrica",
    empresa5: "Amplisol Engenharia",
    desc5: "Desenvolvi 40+ projetos de microgeração fotovoltaica e 15+ projetos de redes FTTH (Fiber to the Home) com tecnologia GPON. Realizei levantamento em campo, dimensionamento de equipamentos, elaboração de memoriais descritivos e plantas técnicas. Contribuí para aumento de 45% nas vendas técnicas através de consultoria especializada aos clientes.",
    periodo5: "Julho/2019 - Novembro/2020 (16 meses)",
    
    // EMBRAPA
    cargo6: "Estagiário no setor de NTI (Núcleo de Tecnologia da Informação)",
    empresa6: "EMBRAPA",
    desc6: "Prestei suporte técnico a 80+ colaboradores, solucionando problemas de hardware (manutenção de computadores e notebooks), software e rede. Realizei instalação e configuração de impressoras, backup de dados e manutenção preventiva. Documentei procedimentos técnicos e contribuí para redução de 25% no tempo de resolução de chamados.",
    periodo6: "Abril/2015 - Julho/2015 (400 horas)",
    
    formacao: "Formação",
    
    // Doutorado
    form1_titulo: "Doutorando em Engenharia de Teleinformática (PPGETI/UFC)",
    form1_instituicao: "Universidade Federal do Ceará",
    form1_periodo: "Abril/2025 - Atual",
    form1_desc: "Gerenciamento de interferência em redes 6G.",
    
    // Mestrado
    form2_titulo: "Mestre em Engenharia da Computação e Elétrica (UFC)",
    form2_instituicao: "Universidade Federal do Ceará",
    form2_periodo: "Fevereiro/2023 - Abril/2025 (Concluído)",
    form2_desc: "Linha de pesquisa em Algoritmos e Computação Distribuída com ênfase em planejamento de rotas com múltiplos VANTs colaborativos.",
    form2_item1: "• Aplicação dos algoritmos Ant Colony System (ACS), A* e DWA (Dynamic Window Approach).",
    form2_item2: "• Desenvolvimento de sistema de roteamento inteligente para veículos aéreos com desvio de obstáculos.",
    
    // Especialização
    form3_titulo: "Especialização em Energias Renováveis (CENTEC)",
    form3_instituicao: "Faculdade de Tecnologia CENTEC Cariri",
    form3_periodo: "Setembro/2024 - Janeiro/2025 (Concluído)",
    form3_item1: "• Energias Renováveis e Sustentabilidade",
    form3_item2: "• Hidrogênio Verde e Armazenamento de Energia",
    form3_item3: "• Energia Eólica e Sistemas Híbridos",
    
    // Graduação
    form4_titulo: "Engenheiro Eletricista (UFC)",
    form4_instituicao: "Universidade Federal do Ceará",
    form4_periodo: "Janeiro/2016 - Dezembro/2022 (Concluído)",
    form4_desc: "Habilidades em Machine Learning, Redes Neurais, Telecomunicações e Energias Renováveis.",
    
    // UVA
    form5_titulo: "Ciências da Computação (UVA)",
    form5_instituicao: "Universidade Estadual Vale do Acaraú",
    form5_periodo: "Janeiro/2015 - Dezembro/2016 (Interrompido)",
    form5_desc: "Bacharelado interrompido em 2016 (Pretensão de retornar caso surjam oportunidades).",
    
    // Técnico
    form6_titulo: "Técnico em Redes de Computadores",
    form6_instituicao: "Escola Dom Walfrido Teixeira Vieira",
    form6_periodo: "Janeiro/2013 - Dezembro/2015 (Concluído)",
    form6_desc: "Ensino médio técnico integrado.",
    
    qualificacoes: "Qualificação e atividades complementares",
    conhecimentos: "Conhecimentos complementares",
  },
  
  en: {
    // Navbar and basic info
    title: "Lucas Aguiar's Resume",
    inicio: "Home",
    portfolio: "Portfolio",
    contato: "Contact",
    
    // Tags
    tagEng: "Electrical Eng.",
    tagMestre: "Master's Degree",
    tagDev: "DEV in progress",
    
    // Sections
    resumoProfissional: "Professional Summary",
    resumoTexto: "Electrical Engineer with a Master's degree in Computer and Electrical Engineering and PhD candidate in Telecommunications at UFC. Over 9 years of experience in team supervision, optical telecommunications projects, and solar photovoltaic energy. Specialist in Python, Machine Learning, and Full Stack web development. Researcher in interference management in 6G networks and optimization algorithms for UAVs. Professor in graduate programs and technical courses. Seeking challenges in technology, innovation, and development of intelligent solutions.",
    
    sobreMim: "About Me",
    sobre1: "Electrical Engineer from the Federal University of Ceará.",
    sobre2: "FullStack Developer in training.",
    sobre3: "Currently between Sobral-CE and Fortaleza-CE.",
    sobre4: "Technology enthusiast.",
    sobre5: "Designer of optical and mobile telecommunications.",
    sobre6: "Solar energy systems designer.",
    sobre7: "Open to new challenges.",
    sobre8: "Driver's license A and B.",
    sobre9: "27 years old.",
    sobre10: "Lattes Curriculum",
    sobre11: "My YouTube Channel (Ideas/Lessons)",
    
    habilidades: "Technical Skills",
    habProgramacao: "Programming:",
    habProg1: "Python (Machine Learning, Deep Learning, OpenCV)",
    habProg2: "JavaScript (Node.js, React - in training)",
    habProg3: "MATLAB, Scilab, Octave",
    habProg4: "VBA (Excel, Selenium, Web Scraping)",
    
    habEngenharia: "Electrical Engineering:",
    habEng1: "Solar Photovoltaic Energy Projects",
    habEng2: "Protection Systems (Lightning Protection, NR10)",
    habEng3: "Residential Electrical Installations",
    habEng4: "Renewable Energy and Green Hydrogen",
    
    habTelecom: "Telecommunications:",
    habTel1: "Optical Networks (FTTH, GPON)",
    habTel2: "Mobile Networks (4G/5G/6G)",
    habTel3: "Interference Management",
    habTel4: "Optimization Algorithms (ACS, A*, DWA)",
    
    habGestao: "Management and Others:",
    habGes1: "Team Supervision",
    habGes2: "Computer Networks",
    habGes3: "Technical Support and Customer Service",
    habGes4: "English (Intermediate)",
    
    experiencias: "Experience",
    
    // Gtel
    cargo1: "Researcher",
    empresa1: "Gtel (Wireless Telecommunications Research Group)",
    desc1: "Conducting advanced research in interference management in 6G networks, developing optimization algorithms and performance analysis of next-generation mobile networks. Contributing to scientific publications and R&D projects in telecommunications.",
    periodo1: "April/2025 - Present",
    
    // Tesla
    cargo2: "Professor",
    empresa2: "Tesla Training",
    desc2_intro: "Teaching graduate and technical courses, training over 150 professionals in:",
    desc2_item1: "• Graduate program in Occupational Safety - Modules 1 and 2 (Legal, Regulatory, Ethical and Technical Fundamentals)",
    desc2_item2: "• Solar Photovoltaic Energy (design, sizing and approval)",
    desc2_item3: "• Lightning Protection System (Brazilian Standard NBR 5419)",
    desc2_item4: "• Residential Electrical Installations (NBR 5410)",
    desc2_extra: "Developing educational materials and applying active teaching methodologies.",
    periodo2: "July/2024 - Present (6 months)",
    
    // New Call
    cargo3: "Supervisor",
    empresa3: "New Call",
    desc3: "Supervised a team of 12 SAC/Support technicians in computer networks, reducing average service time by 30% and increasing customer satisfaction from 78% to 92%. Implemented service monitoring processes, continuous team training, and operational improvements for FasterNet/Desktop clients. Managed over 5,000 support tickets during the period.",
    periodo3: "January/2016 - August/2025 (9 years)",
    
    // Assertiva
    cargo4: "Electrical Engineering Designer",
    empresa4: "Assertiva Engineering",
    desc4: "Developed 25+ photovoltaic microgeneration projects approved by the utility company, totaling over 350 kWp installed. Performed technical sizing, economic feasibility analysis, and consultative equipment sales, generating R$ 450,000 in business. Provided pre and post-sales technical support to clients.",
    periodo4: "March/2022 - September/2022 (6 months)",
    
    // Amplisol
    cargo5: "Electrical Engineering Intern",
    empresa5: "Amplisol Engineering",
    desc5: "Developed 40+ photovoltaic microgeneration projects and 15+ FTTH (Fiber to the Home) network projects with GPON technology. Conducted field surveys, equipment sizing, preparation of descriptive reports and technical drawings. Contributed to a 45% increase in technical sales through specialized customer consulting.",
    periodo5: "July/2019 - November/2020 (16 months)",
    
    // EMBRAPA
    cargo6: "IT Department Intern (Information Technology Center)",
    empresa6: "EMBRAPA",
    desc6: "Provided technical support to 80+ employees, solving hardware problems (computer and notebook maintenance), software and network. Performed printer installation and configuration, data backup and preventive maintenance. Documented technical procedures and contributed to a 25% reduction in ticket resolution time.",
    periodo6: "April/2015 - July/2015 (400 hours)",
    
    formacao: "Education",
    
    // PhD
    form1_titulo: "PhD Candidate in Telecommunications Engineering (PPGETI/UFC)",
    form1_instituicao: "Federal University of Ceará",
    form1_periodo: "April/2025 - Present",
    form1_desc: "Interference management in 6G networks.",
    
    // Master's
    form2_titulo: "Master's in Computer and Electrical Engineering (UFC)",
    form2_instituicao: "Federal University of Ceará",
    form2_periodo: "February/2023 - April/2025 (Completed)",
    form2_desc: "Research in Algorithms and Distributed Computing with emphasis on route planning with multiple collaborative UAVs.",
    form2_item1: "• Application of Ant Colony System (ACS), A* and DWA (Dynamic Window Approach) algorithms.",
    form2_item2: "• Development of intelligent routing system for aerial vehicles with obstacle avoidance.",
    
    // Specialization
    form3_titulo: "Specialization in Renewable Energy (CENTEC)",
    form3_instituicao: "CENTEC Cariri Technology College",
    form3_periodo: "September/2024 - January/2025 (Completed)",
    form3_item1: "• Renewable Energy and Sustainability",
    form3_item2: "• Green Hydrogen and Energy Storage",
    form3_item3: "• Wind Energy and Hybrid Systems",
    
    // Bachelor's
    form4_titulo: "Electrical Engineer (UFC)",
    form4_instituicao: "Federal University of Ceará",
    form4_periodo: "January/2016 - December/2022 (Completed)",
    form4_desc: "Skills in Machine Learning, Neural Networks, Telecommunications and Renewable Energy.",
    
    // UVA
    form5_titulo: "Computer Science (UVA)",
    form5_instituicao: "Vale do Acaraú State University",
    form5_periodo: "January/2015 - December/2016 (Interrupted)",
    form5_desc: "Bachelor's degree interrupted in 2016 (Intention to return if opportunities arise).",
    
    // Technical
    form6_titulo: "Computer Networks Technician",
    form6_instituicao: "Dom Walfrido Teixeira Vieira School",
    form6_periodo: "January/2013 - December/2015 (Completed)",
    form6_desc: "Integrated technical high school.",
    
    qualificacoes: "Qualifications and Complementary Activities",
    conhecimentos: "Additional Knowledge",
  },
  
  de: {
    // Navbar und Grundinformationen
    title: "Lebenslauf Lucas Aguiar",
    inicio: "Startseite",
    portfolio: "Portfolio",
    contato: "Kontakt",
    
    // Tags
    tagEng: "Elektroingenieur",
    tagMestre: "Master-Abschluss",
    tagDev: "DEV in Ausbildung",
    
    // Abschnitte
    resumoProfissional: "Berufliche Zusammenfassung",
    resumoTexto: "Elektroingenieur mit Master-Abschluss in Computer- und Elektrotechnik und Doktorand in Telekommunikation an der UFC. Über 9 Jahre Erfahrung in Teamüberwachung, optischen Telekommunikationsprojekten und Solar-Photovoltaik-Energie. Spezialist für Python, Machine Learning und Full Stack Webentwicklung. Forscher im Bereich Interferenzmanagement in 6G-Netzen und Optimierungsalgorithmen für UAVs. Professor in Graduiertenprogrammen und technischen Kursen. Auf der Suche nach Herausforderungen in Technologie, Innovation und Entwicklung intelligenter Lösungen.",
    
    sobreMim: "Über mich",
    sobre1: "Elektroingenieur von der Bundesuniversität von Ceará.",
    sobre2: "FullStack-Entwickler in Ausbildung.",
    sobre3: "Derzeit zwischen Sobral-CE und Fortaleza-CE.",
    sobre4: "Technologie-Enthusiast.",
    sobre5: "Planer für optische und mobile Telekommunikation.",
    sobre6: "Planer für Solarenergiesysteme.",
    sobre7: "Offen für neue Herausforderungen.",
    sobre8: "Führerschein A und B.",
    sobre9: "27 Jahre alt.",
    sobre10: "Lattes Lebenslauf",
    sobre11: "Mein YouTube-Kanal (Ideen/Lektionen)",
    
    habilidades: "Technische Fähigkeiten",
    habProgramacao: "Programmierung:",
    habProg1: "Python (Machine Learning, Deep Learning, OpenCV)",
    habProg2: "JavaScript (Node.js, React - in Ausbildung)",
    habProg3: "MATLAB, Scilab, Octave",
    habProg4: "VBA (Excel, Selenium, Web Scraping)",
    
    habEngenharia: "Elektrotechnik:",
    habEng1: "Solar-Photovoltaik-Energieprojekte",
    habEng2: "Schutzsysteme (Blitzschutz, NR10)",
    habEng3: "Elektrische Wohnungsinstallationen",
    habEng4: "Erneuerbare Energie und grüner Wasserstoff",
    
    habTelecom: "Telekommunikation:",
    habTel1: "Optische Netze (FTTH, GPON)",
    habTel2: "Mobilfunknetze (4G/5G/6G)",
    habTel3: "Interferenzmanagement",
    habTel4: "Optimierungsalgorithmen (ACS, A*, DWA)",
    
    habGestao: "Management und Andere:",
    habGes1: "Teamüberwachung",
    habGes2: "Computernetzwerke",
    habGes3: "Technischer Support und Kundenservice",
    habGes4: "Englisch (Mittelstufe)",
    
    experiencias: "Berufserfahrung",
    
    // Gtel
    cargo1: "Forscher",
    empresa1: "Gtel (Forschungsgruppe für drahtlose Telekommunikation)",
    desc1: "Durchführung fortgeschrittener Forschung im Interferenzmanagement in 6G-Netzen, Entwicklung von Optimierungsalgorithmen und Leistungsanalyse von Mobilfunknetzen der nächsten Generation. Beitrag zu wissenschaftlichen Veröffentlichungen und F&E-Projekten in der Telekommunikation.",
    periodo1: "April/2025 - Aktuell",
    
    // Tesla
    cargo2: "Professor",
    empresa2: "Tesla Schulungen",
    desc2_intro: "Unterricht in Graduierten- und technischen Kursen, Ausbildung von über 150 Fachleuten in:",
    desc2_item1: "• Graduiertenprogramm in Arbeitssicherheit - Module 1 und 2 (Rechtliche, regulatorische, ethische und technische Grundlagen)",
    desc2_item2: "• Solar-Photovoltaik-Energie (Planung, Dimensionierung und Genehmigung)",
    desc2_item3: "• Blitzschutzsystem (Brasilianische Norm NBR 5419)",
    desc2_item4: "• Elektrische Wohnungsinstallationen (NBR 5410)",
    desc2_extra: "Entwicklung von Lehrmaterialien und Anwendung aktiver Lehrmethoden.",
    periodo2: "Juli/2024 - Aktuell (6 Monate)",
    
    // New Call
    cargo3: "Supervisor",
    empresa3: "New Call",
    desc3: "Überwachung eines Teams von 12 SAC/Support-Technikern in Computernetzwerken, Reduzierung der durchschnittlichen Servicezeit um 30% und Erhöhung der Kundenzufriedenheit von 78% auf 92%. Implementierung von Service-Überwachungsprozessen, kontinuierlicher Teamschulung und betrieblichen Verbesserungen für FasterNet/Desktop-Kunden. Verwaltung von über 5.000 Support-Tickets während des Zeitraums.",
    periodo3: "Januar/2016 - August/2025 (9 Jahre)",
    
    // Assertiva
    cargo4: "Elektrotechnik-Planer",
    empresa4: "Assertiva Ingenieurwesen",
    desc4: "Entwicklung von 25+ photovoltaischen Mikrogenerationsprojekten, die vom Versorgungsunternehmen genehmigt wurden, mit insgesamt über 350 kWp installiert. Durchführung technischer Dimensionierung, wirtschaftlicher Machbarkeitsanalyse und beratender Geräteverkauf mit einem Umsatz von R$ 450.000. Bereitstellung von technischem Support vor und nach dem Verkauf für Kunden.",
    periodo4: "März/2022 - September/2022 (6 Monate)",
    
    // Amplisol
    cargo5: "Praktikant Elektrotechnik",
    empresa5: "Amplisol Ingenieurwesen",
    desc5: "Entwicklung von 40+ photovoltaischen Mikrogenerationsprojekten und 15+ FTTH (Fiber to the Home) Netzwerkprojekten mit GPON-Technologie. Durchführung von Felduntersuchungen, Gerätedimensionierung, Erstellung beschreibender Berichte und technischer Zeichnungen. Beitrag zu einer 45%igen Steigerung des technischen Verkaufs durch spezialisierte Kundenberatung.",
    periodo5: "Juli/2019 - November/2020 (16 Monate)",
    
    // EMBRAPA
    cargo6: "IT-Abteilungspraktikant (Informationstechnologiezentrum)",
    empresa6: "EMBRAPA",
    desc6: "Bereitstellung von technischem Support für 80+ Mitarbeiter, Lösung von Hardware-Problemen (Computer- und Notebook-Wartung), Software und Netzwerk. Durchführung von Druckerinstallation und -konfiguration, Datensicherung und vorbeugende Wartung. Dokumentation technischer Verfahren und Beitrag zu einer 25%igen Reduzierung der Ticket-Lösungszeit.",
    periodo6: "April/2015 - Juli/2015 (400 Stunden)",
    
    formacao: "Ausbildung",
    
    // Doktorat
    form1_titulo: "Doktorand in Telekommunikationstechnik (PPGETI/UFC)",
    form1_instituicao: "Bundesuniversität von Ceará",
    form1_periodo: "April/2025 - Aktuell",
    form1_desc: "Interferenzmanagement in 6G-Netzen.",
    
    // Master
    form2_titulo: "Master in Computer- und Elektrotechnik (UFC)",
    form2_instituicao: "Bundesuniversität von Ceará",
    form2_periodo: "Februar/2023 - April/2025 (Abgeschlossen)",
    form2_desc: "Forschung in Algorithmen und verteiltem Computing mit Schwerpunkt auf Routenplanung mit mehreren kollaborativen UAVs.",
    form2_item1: "• Anwendung von Ant Colony System (ACS), A* und DWA (Dynamic Window Approach) Algorithmen.",
    form2_item2: "• Entwicklung eines intelligenten Routing-Systems für Luftfahrzeuge mit Hindernisumgehung.",
    
    // Spezialisierung
    form3_titulo: "Spezialisierung in erneuerbaren Energien (CENTEC)",
    form3_instituicao: "CENTEC Cariri Technologie-Hochschule",
    form3_periodo: "September/2024 - Januar/2025 (Abgeschlossen)",
    form3_item1: "• Erneuerbare Energie und Nachhaltigkeit",
    form3_item2: "• Grüner Wasserstoff und Energiespeicherung",
    form3_item3: "• Windenergie und Hybridsysteme",
    
    // Bachelor
    form4_titulo: "Elektroingenieur (UFC)",
    form4_instituicao: "Bundesuniversität von Ceará",
    form4_periodo: "Januar/2016 - Dezember/2022 (Abgeschlossen)",
    form4_desc: "Fähigkeiten in Machine Learning, neuronalen Netzen, Telekommunikation und erneuerbaren Energien.",
    
    // UVA
    form5_titulo: "Informatik (UVA)",
    form5_instituicao: "Staatliche Universität Vale do Acaraú",
    form5_periodo: "Januar/2015 - Dezember/2016 (Unterbrochen)",
    form5_desc: "Bachelor-Abschluss 2016 unterbrochen (Absicht, zurückzukehren, wenn sich Gelegenheiten ergeben).",
    
    // Techniker
    form6_titulo: "Computernetzwerk-Techniker",
    form6_instituicao: "Dom Walfrido Teixeira Vieira Schule",
    form6_periodo: "Januar/2013 - Dezember/2015 (Abgeschlossen)",
    form6_desc: "Integrierte technische Oberschule.",
    
    qualificacoes: "Qualifikationen und ergänzende Aktivitäten",
    conhecimentos: "Zusätzliches Wissen",
  }
};

// Função para alterar idioma
function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Se for um input, muda o placeholder
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Atualiza o título da página
  document.title = translations[lang].title;
  
  // Salva a preferência no localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Atualiza os botões ativos
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('is-active');
  });
  document.querySelector(`[data-lang="${lang}"]`).classList.add('is-active');
}

// Inicializa com o idioma salvo ou português por padrão
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
  changeLanguage(savedLang);
  
  // Adiciona event listeners aos botões de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
});
