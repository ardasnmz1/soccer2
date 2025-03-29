document.addEventListener("DOMContentLoaded", function() {
    // 4-4-2 formasyonuna göre başlangıç kadrosu
    const kadro = {
      GK: ["Manuel Neuer"],
      DF: ["Sergio Ramos", "Virgil van Dijk", "Gerard Piqué", "Thiago Silva"],
      MF: ["Luka Modrić", "Kevin De Bruyne", "N'Golo Kanté", "Andrés Iniesta"],
      FW: ["Lionel Messi", "Cristiano Ronaldo"]
    };
  
    // Yedek kadro
    const yedekler = {
      GK: ["Jan Oblak"],
      DF: ["Kalidou Koulibaly", "Andrew Robertson", "Trent Alexander-Arnold"],
      MF: ["Toni Kroos", "Bruno Fernandes", "Eden Hazard"],
      FW: ["Neymar Jr.", "Robert Lewandowski", "Kylian Mbappé", "Mohamed Salah"]
    };
  
    // Sahanın çizilmesi; CSS sınıflarıyla konumlandırma yapıyoruz
    function sahayiCiz() {
      const saha = document.getElementById("saha");
      saha.innerHTML = ""; // Önceki içerikleri temizle
  
      // Her pozisyon için
      for (let poz in kadro) {
        kadro[poz].forEach((oyuncuAdi, i) => {
          const oyuncuDiv = document.createElement("div");
          oyuncuDiv.className = "oyuncu";
  
          // Pozisyona göre CSS sınıfı ekle
          if (poz === "GK") {
            oyuncuDiv.classList.add("gk");
          } else if (poz === "DF") {
            oyuncuDiv.classList.add("df-" + i);
          } else if (poz === "MF") {
            oyuncuDiv.classList.add("mf-" + i);
          } else if (poz === "FW") {
            oyuncuDiv.classList.add("fw-" + i);
          }
  
          // Oyuncu ismi ve "Değiştir" butonu ekle
          oyuncuDiv.innerHTML = oyuncuAdi + "<br>" +
            "<button onclick='oyuncuDegistir(\"" + poz + "\", " + i + ")'>Değiştir</button>";
          saha.appendChild(oyuncuDiv);
        });
      }
    }
  
    // Belirtilen pozisyonda, ilgili indexteki oyuncuyu yedekle değiştir
    window.oyuncuDegistir = function(poz, index) {
      if (yedekler[poz].length === 0) {
        alert("Bu pozisyonda yedek oyuncu kalmadı!");
        return;
      }
      // Yedekten ilk oyuncuyu al, çıkan oyuncuyu en sona ekle
      const yeniOyuncu = yedekler[poz].shift();
      const cikacakOyuncu = kadro[poz][index];
      kadro[poz][index] = yeniOyuncu;
      yedekler[poz].push(cikacakOyuncu);
  
      // Sahayı yeniden çiz
      sahayiCiz();
    };
  
    // Sayfa yüklendiğinde kadroyu çiz
    sahayiCiz();
  });
  