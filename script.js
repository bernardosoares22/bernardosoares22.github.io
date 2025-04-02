const movieDatabase = [
    {
        id: 1,
        title: "O Poderoso Chefão",
        year: "1972",
        genre: ["drama", "crime"],
        director: "Francis Ford Coppola",
        cast: ["Marlon Brando", "Al Pacino", "James Caan"],
        duration: "175 min",
        rating: 9.2,
        overview: "A saga da família Corleone, liderada por Don Vito Corleone, que tenta manter o controle de seu império do crime em Nova York.",
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/sY1S34973zA"
    },
    {
        id: 2,
        title: "Interestelar",
        year: "2014",
        genre: ["ficcao", "aventura", "drama"],
        director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        duration: "169 min",
        rating: 8.6,
        overview: "Um grupo de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
        id: 3,
        title: "Gente Grande",
        year: "2010",
        genre: ["comedia", "drama"],
        director: "Dennis Dugan",
        cast: ["Adam Sandler", "Kevin James", "Chris Rock"],
        duration: "102 min",
        rating: 6,
        overview: "A morte do treinador de basquete de infância de velhos amigos reúne a turma no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade.",
        poster: "https://i.pinimg.com/736x/36/e9/20/36e9208cdefcf54cb9a21afb8ae6fc8a.jpg",
        trailer: "https://www.youtube.com/watch?v=HKVve_VSz58&pp=ygUUZ2VudGUgZ3JhbmRlIHRyYWlsZXI%3D"
    },
    {
        id: 4,
        title: "Clube da Luta",
        year: "1999",
        genre: ["drama"],
        director: "David Fincher",
        cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        duration: "139 min",
        rating: 8.8,
        overview: "Um homem deprimido que sofre de insônia conhece um vendedor de sabonetes chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído.",
        poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/qtRKdVHc-cE"
    },
    {
        id: 5,
        title: "Django Livre",
        year: "2012",
        genre: ["faroeste", "acao"],
        director: "Quentin Tarantino",
        cast: ["Jamie Foxx", "Leonardo DiCaprio", "Christoph Waltz"],
        duration: "165 min",
        rating: 8.5,
        overview: "No sul dos Estados Unidos, o ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para perseguir os criminosos mais procurados do país e resgatar sua esposa de um fazendeiro que força seus escravos a entrarem em competições mortais.",
        poster: "https://i.pinimg.com/736x/75/5a/5a/755a5a304c8e73839d673053dba87d51.jpg",
        trailer: "https://www.youtube.com/watch?v=0fUCuvNlOCg&pp=ygUOZGphbmdvIHRyYWlsZXI%3D"
    },
    {
        id: 6,
        title: "Os Donos da Rua",
        year: "1991",
        genre: ["crime", "drama"],
        director: "John Singleton",
        cast: ["Ice Cube", "Cuba Cooding Jr.", "Laurence Fishburne"],
        duration: "112 min",
        rating: 7.8,
        overview: "Tre é enviado para viver com seu pai, Furious Styles, na difícil área centro-sul de Los Angeles. Embora seu pai durão instigue valores adequados e respeito por ele, e sua devota namorada Brandi lhe ensinar sobre a fé, os amigos de Tre, Doughboy e Ricky não têm o mesmo tipo de apoio. Constantemente, eles são atraídos para uma vizinhança de grande tráfico de drogas e cultura de gangues, com resultados cada vez mais trágicos.",
        poster: "https://i.pinimg.com/736x/de/08/b0/de08b077e62ae184fb49b3b4a84fcf14.jpg",
        trailer: "https://www.youtube.com/watch?v=ZI-qlj-4cpk&pp=ygUXYm95eiBuIHRoZSBob29kIHRyYWlsZXI%3D"
    },
    {
        id: 7,
        title: "Cidade de Deus",
        year: "2002",
        genre: ["crime", "drama"],
        director: "Fernando Meirelles",
        cast: ["Alexandre Rodrigues", "Leandro Firmino", "Phellipe Haagensen"],
        duration: "130 min",
        rating: 8.6,
        overview: "Na favela Cidade de Deus, no Rio de Janeiro, dois rapazes seguem caminhos diferentes: um se torna fotógrafo e o outro, um traficante.",
        poster: "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/ioUE_5wpg_E"
    },
    {
        id: 8,
        title: "Projeto X",
        year: "2012",
        genre: ["acao", "comedia"],
        director: "Nima Nourizadeh",
        cast: ["Dax Flame", "Miles Teller", "Oliver Cooper"],
        duration: "88 min",
        rating: 6.7,
        overview: "Três amigos de colégio planejam uma festa inesquecível para entrar para a história na tentativa de ficarem famosos. A notícia se espalha rapidamente e tudo foge ao controle quando os imprevistos começam a acontecer.",
        poster: "https://i.pinimg.com/736x/9b/4a/e7/9b4ae7613921a3565fac73703c7d3afb.jpg",
        trailer: "https://www.youtube.com/watch?v=kFwGmQIe-rU&pp=ygURcHJvamV0byB4IHRyYWlsZXI%3D"
    },
    {
        id: 9,
        title: "Superbad",
        year: "2007",
        genre: ["comedia"],
        director: "Greg Mottola",
        cast: ["Seth Rogan", "Jonah Hill", "Michael Cera"],
        duration: "119 min",
        rating: 7.6,
        overview: "Os adolescentes Seth e Evan têm grandes esperanças para uma festa de formatura. Eles pretendem beber e conquistar as garotas para que eles possam se tornar parte da turma mais popular da escola, mas a ansiedade de separação e dois policiais entediados complicam missão dos amigos.",
        poster: "https://i.pinimg.com/736x/df/0a/4d/df0a4dab07e028b9db874afd82054ca2.jpg",
        trailer: "https://www.youtube.com/watch?v=4eaZ_48ZYog&pp=ygUQc3VwZXJiYWQgdHJhaWxlcg%3D%3D"
    },
    {
        id: 10,
        title: "Jogos Vorazes",
        year: "2012",
        genre: ["acao", "aventura"],
        director: "Gary Ross",
        cast: ["Jennifer Lawrence", "Josh Hutcherson", "Stanley Tucci"],
        duration: "142 min",
        rating: 7.2,
        overview: "Na região antigamente conhecida como América do Norte, a Capital de Panem controla 12 distritos e os força a escolher um garoto e uma garota, conhecidos como tributos, para competir em um evento anual televisionado. Todos os cidadãos assistem aos temidos jogos, no qual os jovens lutam até a morte, de modo que apenas um saia vitorioso. A jovem Katniss Everdeen, do Distrito 12, confia na habilidade de caça e na destreza com o arco, além dos instintos aguçados, nesta competição mortal.",
        poster: "https://i.pinimg.com/736x/f3/31/43/f33143eebc79d04021f741976ab4335e.jpg",
        trailer: "https://www.youtube.com/watch?v=mfmrPu43DF8&pp=ygUVam9nb3Mgdm9yYXplcyB0cmFpbGVy"
    },
    {
        id: 11,
        title: "Fique Rico ou Morra Tentando",
        year: "2005",
        genre: ["acao"],
        director: "Jim Sheridan",
        cast: ["50 Cent", "Terrence Howard", "Bill Duke"],
        duration: "134 min",
        rating: 5.5,
        overview: "Após a morte de sua mãe quando ele era um menino, Marcus tem pouco apoio em sua vida. Ele começa a trabalhar para o traficante Levar e seu assistente. Apesar de Marcus fazer bom dinheiro vendendo drogas, seu sonho é se tornar um rapper. Quando ele reencontra um antigo amor e é baleado várias vezes durante um assalto, Marcus decide que é hora de mudar sua vida. No entanto, seus antigos sócios não vão deixá-lo ir tão facilmente.",
        poster: "https://i.pinimg.com/736x/4c/7f/49/4c7f49fc20d621233f88692156a51943.jpg",
        trailer: "https://www.youtube.com/watch?v=hG46_SvgtRI&pp=ygUkdHJhaWxlciBmaXF1ZSByaWNvIG91IG1vcnJhIHRlbnRhbmRv"
    },
];

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedMovies();
    loadAllMovies();
    setupEventListeners();
});


function loadFeaturedMovies() {
    const featuredMoviesContainer = document.getElementById('featured-movies');
    featuredMoviesContainer.innerHTML = '';
    
    
    const featuredMovies = movieDatabase.slice(0, 3);
    
    featuredMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        featuredMoviesContainer.appendChild(movieCard);
    });
}


function loadAllMovies(filterGenre = null, filterYear = null, searchQuery = null) {
    const popularMoviesContainer = document.getElementById('popular-movies');
    popularMoviesContainer.innerHTML = '';
    
    let filteredMovies = movieDatabase;
    
    
    if (filterGenre) {
        filteredMovies = filteredMovies.filter(movie => 
            movie.genre.includes(filterGenre)
        );
    }
    
    if (filterYear) {
        filteredMovies = filteredMovies.filter(movie => 
            movie.year === filterYear
        );
    }
    
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredMovies = filteredMovies.filter(movie => 
            movie.title.toLowerCase().includes(query) ||
            movie.director.toLowerCase().includes(query) ||
            movie.cast.some(actor => actor.toLowerCase().includes(query))
        );
    }
    
    
    if (filteredMovies.length === 0) {
        popularMoviesContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <h4 class="text-muted">Nenhum filme encontrado</h4>
                <button class="btn btn-primary mt-3" onclick="resetFilters()">Limpar filtros</button>
            </div>
        `;
    } else {
        filteredMovies.forEach(movie => {
            const movieCard = createMovieCard(movie);
            popularMoviesContainer.appendChild(movieCard);
        });
    }
}


function createMovieCard(movie) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 col-xl-3';
    
    const card = document.createElement('div');
    card.className = 'movie-card card h-100';
    card.dataset.id = movie.id;
    
    card.innerHTML = `
        <div style="height: 400px; overflow: hidden;">
            ${movie.poster ? 
                `<img src="${movie.poster}" class="card-img-top h-100" alt="${movie.title}" style="object-fit: cover;">` : 
                `<div class="no-poster h-100">${movie.title}</div>`
            }
        </div>
        <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.overview || 'Sinopse não disponível.'}</p>
            <div class="d-flex justify-content-between align-items-center">
                <span class="badge bg-primary">${movie.year || 'N/A'}</span>
                <span class="badge bg-warning text-dark">
                    <i class="bi bi-star-fill"></i> ${movie.rating ? movie.rating.toFixed(1) : 'N/A'}
                </span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => showMovieDetails(movie.id));
    
    col.appendChild(card);
    return col;
}


function showMovieDetails(movieId) {
    const movie = movieDatabase.find(m => m.id === movieId);
    if (!movie) return;
    
    const modalTitle = document.getElementById('movie-title');
    const modalBody = document.getElementById('movie-details');
    const favoriteBtn = document.getElementById('favorite-btn');
    
    
    modalTitle.textContent = movie.title;
    
    
    const isFavorite = favorites.includes(movie.id);
    favoriteBtn.innerHTML = isFavorite ? 
        '<i class="bi bi-heart-fill"></i> Remover dos Favoritos' : 
        '<i class="bi bi-heart"></i> Favoritar';
    favoriteBtn.className = isFavorite ? 'btn btn-danger' : 'btn btn-outline-danger';
    
  
    favoriteBtn.onclick = () => toggleFavorite(movie.id, favoriteBtn);
    
   
    let detailsHTML = `
        <div class="row">
            <div class="col-md-4">
                ${movie.poster ? 
                    `<img src="${movie.poster}" class="movie-poster img-fluid mb-3" alt="${movie.title}">` : 
                    `<div class="no-poster" style="height: 400px;">${movie.title}</div>`
                }
            </div>
            <div class="col-md-8">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <div class="details mb-3">
                        <span><strong>Ano:</strong> ${movie.year || 'N/A'}</span>
                        <span><strong>Duração:</strong> ${movie.duration || 'N/A'}</span>
                        <span><strong>Diretor:</strong> ${movie.director || 'N/A'}</span>
                        <span><strong>Avaliação:</strong> ${movie.rating ? `${movie.rating}/10` : 'N/A'}</span>
                    </div>
                    
                    <div class="genres mb-3">
                        ${movie.genre.map(g => `<span class="badge badge-genre">${getGenreName(g)}</span>`).join('')}
                    </div>
                    
                    <h5>Sinopse</h5>
                    <p class="overview">${movie.overview || 'Sinopse não disponível.'}</p>
                    
                    <h5 class="mt-4">Elenco Principal</h5>
                    <div class="cast-container">
                        ${movie.cast ? movie.cast.map(actor => `<span class="d-block">${actor}</span>`).join('') : 'N/A'}
                    </div>
                </div>
            </div>
        </div>
    `;
    
   
    if (movie.trailer) {
        const videoId = extractYouTubeId(movie.trailer);
        if (videoId) {
            detailsHTML += `
                <div class="row mt-3">
                    <div class="col-12">
                        <h5>Trailer</h5>
                        <div class="trailer-container">
                            <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    modalBody.innerHTML = detailsHTML;
    
   
    const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
    movieModal.show();
}


function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}


function getGenreName(genreId) {
    const genres = {
        'acao': 'Ação',
        'aventura': 'Aventura',
        'comedia': 'Comédia',
        'drama': 'Drama',
        'fantasia': 'Fantasia',
        'ficcao': 'Ficção Científica',
        'crime': 'Crime',
        'thriller': 'Thriller'
    };
    return genres[genreId] || genreId;
}


function toggleFavorite(movieId, button) {
    const index = favorites.indexOf(movieId);
    
    if (index === -1) {
        favorites.push(movieId);
        button.innerHTML = '<i class="bi bi-heart-fill"></i> Remover dos Favoritos';
        button.className = 'btn btn-danger';
    } else {
        favorites.splice(index, 1);
        button.innerHTML = '<i class="bi bi-heart"></i> Favoritar';
        button.className = 'btn btn-outline-danger';
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}


function setupEventListeners() {
    
    document.querySelectorAll('#genres-menu .dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const genre = e.target.dataset.genre;
            document.getElementById('year-filter').value = '';
            loadAllMovies(genre, null, null);
        });
    });
    
    
    document.getElementById('year-filter').addEventListener('change', (e) => {
        const year = e.target.value || null;
        loadAllMovies(null, year, null);
    });
    
    
    document.getElementById('search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.getElementById('search-input').value.trim();
        document.getElementById('year-filter').value = '';
        loadAllMovies(null, null, query);
    });
    
    
    document.getElementById('favorites-link').addEventListener('click', (e) => {
        e.preventDefault();
        showFavorites();
    });
    
    
    document.getElementById('home-link').addEventListener('click', (e) => {
        e.preventDefault();
        resetFilters();
    });
}


function showFavorites() {
    if (favorites.length === 0) {
        alert('Você ainda não tem filmes favoritos!');
        return;
    }
    
    const popularMoviesContainer = document.getElementById('popular-movies');
    popularMoviesContainer.innerHTML = '';
    
    favorites.forEach(favId => {
        const movie = movieDatabase.find(m => m.id === favId);
        if (movie) {
            const movieCard = createMovieCard(movie);
            popularMoviesContainer.appendChild(movieCard);
        }
    });
    
    document.getElementById('year-filter').value = '';
    document.getElementById('search-input').value = '';
}


function resetFilters() {
    document.getElementById('year-filter').value = '';
    document.getElementById('search-input').value = '';
    loadFeaturedMovies();
    loadAllMovies();
}


window.resetFilters = resetFilters;