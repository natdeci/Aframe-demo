AFRAME.registerComponent('info-panel', {
    init: function () {
      var buttonEls = document.querySelectorAll('.menu-button');
  
      this.movieTitleEl = document.querySelector('#movieTitle');
      this.movieDescriptionEl = document.querySelector('#movieDescription');
      this.infoPanelEl = document.querySelector('#infoPanel');
  
      this.movieInfo = {
        karigurashiButton: {
          title: 'Dashboard Geospatial',
          imgEl: document.querySelector('#karigurashiMovieImage'),
          description: 'Website SIGA menyediakan dashboard geospasial untuk melihat statistik seputar keluarga berdasarkan peta geografi Indonesia.'
        },
        kazetachinuButton: {
          title: 'Gedung BKKBN',
          imgEl: document.querySelector('#kazetachinuMovieImage'),
          description: 'Gedung BKKBN berada di daerah Halim Perdana Kusuma, daerah Jakarta Timur.'
        },
        ponyoButton: {
          title: 'Satgas Stunting',
          imgEl: document.querySelector('#ponyoMovieImage'),
          description: 'Tersedia juga dashboard untuk satgas stunting di mana dashboard dapat menampilkan statistik tentang stunting, risiko, dan capaian indikator PPS.'
        }
      };
  
      buttonEls.forEach(button => {
        button.addEventListener('click', (event) => {
          let targetId = button.id;
          let movieInfo = this.movieInfo[targetId];
  
          if (!movieInfo) return;
  
          this.infoPanelEl.setAttribute('visible', true);
          this.infoPanelEl.setAttribute('animation', {
            property: 'scale',
            to: '1 1 1',
            dur: 400,
            easing: 'easeOutBack'
          });
  
          if (this.movieImageEl) {
            this.movieImageEl.object3D.visible = false;
          }
  
          this.movieImageEl = movieInfo.imgEl;
          this.movieImageEl.object3D.visible = true;
  
          this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
          this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
        });
      });
    }
  });  