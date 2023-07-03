// fetching data
function fetchShows() {
    fetch('https://api.npoint.io/0b2aef194151f5771a43/films/')
      .then(res => res.json())
      .then(data => seeShows(data));
  }

function seeShows(data) {
    const div = document.getElementById('movie-items');
    const ul = document.getElementById('shows');
    
    data.forEach(movie => {
      const li = document.createElement('li');
      li.classList.add('pointer');
      li.innerHTML = movie.title;

      const showList = document.createElement("div");
      showList.classList.add('show-list');
      showList.innerHTML = `
        <img src="${movie.poster}" height=500px width=300px/>
        <h2 class="dark">${movie.title}</h2>
        <p class="dark">${movie.description}</p>
        <p><span class="case dark">Runtime: ${movie.runtime}</span></p>
        <p><span class="case dark">Showtime: ${movie.showtime}</span></p>
        `;

      const tickets = document.createElement("p");
      tickets.classList.add("text")
      tickets.innerHTML = `Available tickets: ${(movie.capacity) - (movie.tickets_sold)}`;

      showList.appendChild(tickets);

      const btn = document.createElement("button");
      btn.textContent = "Buy ticket";

      btn.addEventListener('click', () => {

        if (parseInt(tickets.innerText.split(': ')[1]) === 0) {

            alert("Ticket Sold Out");
        } else {
          tickets.innerText = `Available tickets: ${parseInt(tickets.innerText.split(': ')[1]) - 1}`;
        }
      });

      showList.appendChild(btn);

      li.addEventListener('click', () => {
        div.innerText=""
        div.appendChild(showList);
         if (!showList.classList.contains('active')) {
          showList.classList.add('active');  
          div.appendChild(showList);
        }
        
      });
      ul.appendChild(li);
    });
  }
  fetchShows();