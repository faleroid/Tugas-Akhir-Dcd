class CompetitionCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  set data(lomba) {
    this._data = lomba
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* STYLE INI SEKARANG TERENKAPSULASI (TERISOLASI) DI DALAM KOMPONEN.
          Gaya dari file CSS global tidak akan memengaruhinya, dan sebaliknya.
        */

        /* Efek fade-in diterapkan pada komponen itu sendiri (:host) */
        :host {
          display: block; /* Komponen butuh display block untuk transisi */
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1.5s ease-in, transform 1.5s ease-in; /* Disesuaikan dengan CSS */
        }

        :host(.show) {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Gaya untuk .card */
        .card {
          border-radius: 5px;
          box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
          padding: 10px;
          /* Menambahkan overflow hidden agar border-radius pada gambar tetap terlihat */
          overflow: hidden;
        }

        /* Gaya untuk .featured-image */
        .featured-image {
          max-height: 300px;
          object-fit: cover;
          object-position: center;
          width: 100%;
        }

        /* Gaya default untuk teks di dalam card */
        .card h2 {
          font-family: 'Poppins', sans-serif;
          margin-top: 10px;
        }

        .card p {
          font-family: 'Poppins', sans-serif;
          font-size: 16px; /* Ukuran font dasar */
          line-height: 1.6;
        }

        /* MEDIA QUERY (RESPONSIVE DESIGN)
          Gaya ini akan aktif ketika lebar layar 768px atau kurang.
        */
        @media screen and (max-width: 768px) {
          .card {
            box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2);
            padding-top: 0;
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 10px;
          }

          .card .featured-image {
            border-radius: 3px;
          }

          /* Atur padding konten agar tidak menempel ke tepi */
          .card-content {
            padding: 0 15px;
          }

          .card h2 {
            font-size: 20px;
          }

          .card p {
            font-size: 14px;
          }
        }
      </style>

      <article class="card" id="${this._data.id}">
        <img loading="lazy" src="${this._data.image}" alt="${this._data.alt}" class="featured-image"/>
        <div class="card-content">
            <h2>${this._data.title}</h2>
            <p>${this._data.description}</p>
        </div>
      </article>
    `
  }
}

customElements.define('competition-card', CompetitionCard)
