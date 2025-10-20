// Seleciona todos os posts da página
const posts = document.querySelectorAll('.post');

// Itera sobre cada post para adicionar a funcionalidade
posts.forEach(post => {
    // Encontra os elementos importantes dentro de cada post
    const likeBtn = post.querySelector('.like-btn');
    const postImage = post.querySelector('.post-image');
    const heartIcon = post.querySelector('.like-heart');

    // Função para dar ou tirar o like
    const toggleLike = () => {
        // Alterna entre o ícone de coração preenchido e o vazio
        likeBtn.classList.toggle('fa-regular');
        likeBtn.classList.toggle('fa-solid');
        
        // Adiciona a classe 'liked' para ativar a animação de pulsar e a cor vermelha
        if (likeBtn.classList.contains('fa-solid')) {
            likeBtn.classList.add('liked');
        } else {
            likeBtn.classList.remove('liked');
        }
    };
    
    // Adiciona um "ouvinte" para o evento de clique no botão de like
    likeBtn.addEventListener('click', toggleLike);

    // Adiciona um "ouvinte" para o evento de duplo clique na imagem do post
    postImage.addEventListener('dblclick', () => {
        // Mostra o coração grande na imagem com a animação
        heartIcon.classList.add('show');
        
        // Garante que o post seja realmente curtido (caso ainda não esteja)
        if (!likeBtn.classList.contains('fa-solid')) {
            toggleLike();
        }

        // Remove a classe da animação do coração depois de um tempo,
        // para que a animação possa acontecer de novo no futuro.
        setTimeout(() => {
            heartIcon.classList.remove('show');
        }, 700); // Um tempo um pouco maior que a duração da animação
    });
});