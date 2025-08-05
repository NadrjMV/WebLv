// js/project-loader.js
import { projectsData } from './projects-data.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Pegar o 'apelido' do projeto do URL
    const params = new URLSearchParams(window.location.search);
    const projectKey = params.get('projeto');

    // 2. Encontrar os dados do projeto no nosso "banco de dados"
    const project = projectsData[projectKey];
    
    // 3. Selecionar os elementos do HTML que vamos preencher
    const content = document.getElementById('project-content');
    const categoryEl = document.getElementById('project-category');
    const titleEl = document.getElementById('project-title');
    const descriptionEl = document.getElementById('project-description');
    const techsEl = document.getElementById('project-technologies');
    const urlEl = document.getElementById('project-live-url');
    const galleryEl = document.getElementById('project-gallery');
    const myRoleEl = document.getElementById('project-my-role');
    const keyFeaturesEl = document.getElementById('project-key-features');

    if (project) {
        // 4. Se o projeto foi encontrado, preenchemos a página
        document.title = `Projeto | ${project.title}`; // Atualiza o título da aba do navegador

        categoryEl.textContent = project.category;
        titleEl.textContent = project.title;
        descriptionEl.textContent = project.description;
        urlEl.href = project.liveUrl;

        // Limpa as listas antes de preencher
        techsEl.innerHTML = '';
        galleryEl.innerHTML = '';
        myRoleEl.innerHTML = '';
        keyFeaturesEl.innerHTML = '';

        // Preenche a lista de tecnologias
        project.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            techsEl.appendChild(li);
        });

        // Preenche a galeria de imagens
        project.galleryImages.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = `Imagem do projeto ${project.title}`;
            galleryEl.appendChild(img);
        });

        // Preenche a lista de contribuições
        project.myRole.forEach(role => {
            const li = document.createElement('li');
            li.textContent = role;
            myRoleEl.appendChild(li);
        });
        
        // Preenche a lista de funcionalidades
        project.keyFeatures.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            keyFeaturesEl.appendChild(li);
        });

    } else {
        // 5. Se o projeto não foi encontrado, mostra uma mensagem de erro
        content.innerHTML = '<h1 class="project-title">Projeto não encontrado.</h1><p>O projeto que você está procurando não existe ou o link está incorreto.</p>';
    }
});