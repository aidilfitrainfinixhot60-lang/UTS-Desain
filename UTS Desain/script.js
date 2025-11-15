const data = {
    name: "Aidil Fitra",
    nim: "24220168",
    kelas: "SI-3F",
    progresCount: 3,
    aktifitasCount: 4,
    dokCount: 3,
    activities: [
      { date: "Senin, 1 November 2025", title: "Perkuliahan Daring 1" },
      { date: "Selasa, 2 November 2025", title: "Perkuliahan Daring 1" },
      { date: "Rabu, 3 November 2025", title: "Perkuliahan Daring 1" },
      { date: "Kamis, 4 november 2025", title: "Perkuliahan Daring 1" }
    ]
  };

  // DOM nodes
  const btnToggle = document.getElementById('btnToggle');
  const sidebar = document.getElementById('sidebar');
  const activityList = document.getElementById('activityList');
  const userName = document.getElementById('userName');
  const welcomeName = document.getElementById('welcomeName');
  const userClass = document.getElementById('userClass');
  const countProgres = document.getElementById('countProgres');
  const countAktifitas = document.getElementById('countAktifitas');
  const countDok = document.getElementById('countDok');

  // fill user info
  if(userName) userName.textContent = data.name;
  if(welcomeName) welcomeName.textContent = data.name.split(' ')[0] || data.name;
  if(userClass) userClass.textContent = data.kelas;
  if(countProgres) countProgres.textContent = data.progresCount;
  if(countAktifitas) countAktifitas.textContent = data.aktifitasCount;
  if(countDok) countDok.textContent = data.dokCount;

  // fill activities
  if(activityList){
    activityList.innerHTML = '';
    data.activities.forEach((a) => {
      const li = document.createElement('li');
      li.innerHTML = `<div>
        <div class="date">${a.date}</div>
        <div class="small">${a.title}</div>
      </div>
      <div class="small">Detail</div>`;
      activityList.appendChild(li);
    });
  }

  // sidebar toggle for small screens
  btnToggle.addEventListener('click', function () {
    sidebar.classList.toggle('open');
  });

  // close sidebar when clicking outside on small screens
  document.addEventListener('click', function(e){
    if(window.innerWidth <= 900){
      const isClickInside = sidebar.contains(e.target) || btnToggle.contains(e.target);
      if(!isClickInside){
        sidebar.classList.remove('open');
      }
    }
  });

  // keyboard: press "/" to focus search
  const searchInput = document.getElementById('searchInput');
  document.addEventListener('keydown', (e) => {
    if(e.key === "/"){
      if(searchInput) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    }
  });

