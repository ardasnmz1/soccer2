document.addEventListener("DOMContentLoaded", function() {
    const kadro = {
      GK: ["Manuel Neuer"],
      DF: ["Sergio Ramos", "Virgil van Dijk", "Gerard Piqué", "Thiago Silva"],
      MF: ["Luka Modrić", "Kevin De Bruyne", "N'Golo Kanté", "Andrés Iniesta"],
      FW: ["Lionel Messi", "Cristiano Ronaldo"]
    };
  
    const yedekler = {
      GK: ["Jan Oblak"],
      DF: ["Kalidou Koulibaly", "Andrew Robertson", "Trent Alexander-Arnold"],
      MF: ["Toni Kroos", "Bruno Fernandes", "Eden Hazard"],
      FW: ["Neymar Jr.", "Robert Lewandowski", "Kylian Mbappé", "Mohamed Salah"]
    };
  
    function sahayiCiz() {
      const saha = document.getElementById("saha");
      saha.innerHTML = ""; 
  
      // Her pozisyon için
      for (let poz in kadro) {
        kadro[poz].forEach((oyuncuAdi, i) => {
          const oyuncuDiv = document.createElement("div");
          oyuncuDiv.className = "oyuncu";
  
          
          if (poz === "GK") {
            oyuncuDiv.classList.add("gk");
          } else if (poz === "DF") {
            oyuncuDiv.classList.add("df-" + i);
          } else if (poz === "MF") {
            oyuncuDiv.classList.add("mf-" + i);
          } else if (poz === "FW") {
            oyuncuDiv.classList.add("fw-" + i);
          }
  
          
          oyuncuDiv.innerHTML = oyuncuAdi + "<br>" +
            "<button onclick='oyuncuDegistir(\"" + poz + "\", " + i + ")'>Değiştir</button>";
          saha.appendChild(oyuncuDiv);
        });
      }
    }
  
    
    window.oyuncuDegistir = function(poz, index) {
      if (yedekler[poz].length === 0) {
        alert("Bu pozisyonda yedek oyuncu kalmadı!");
        return;
      }

      const yeniOyuncu = yedekler[poz].shift();
      const cikacakOyuncu = kadro[poz][index];
      kadro[poz][index] = yeniOyuncu;
      yedekler[poz].push(cikacakOyuncu);
  
      sahayiCiz();
    };
  
    // Sayfa yüklendiğinde kadroyu çiz
    sahayiCiz();
  });
  
