const MAX_POKEMON = 151;
const listwrapper = document.querySelector(".list-wrapper");
const searchInput = document.querySelector("#search-input");
const numberFilter = document.querySelector("#number");
const nameFilter = document.querySelector("#name");
const notFoundMessage = document.querySelector("#not-found-message");
//Mendeklarasikan sebuah array kosong untuk menyimpan data Pokemon
let allPokemons = [];
// Memanggil APT PokeAPI untuk mendapatkan data Pokemon
fetch(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`)
  // tabnine: test | explain | document | ask
  .then((response) => response.json()) // Mengubah response menjadi format JSON
  // tabnine: test | explain | document | ask
  .then((data) => {
    allPokemons = data.results; // Menyimpan data Pokemon yang didapat dari APT ke dalam array allPokemons
    console.log(allPokemons);
    displayPokemons(allPokemons);
  });

// Mendeklarasikan fungsi asinkron untuk mengambil data Pokemon sebelum melakukan redirect
async function fetchPokemonDataBeforeRedirect(id) {
  try {
    // Menggunakan Promise.all untuk menjalankan dua fetch request secara paralel
    const [pokemon, pokemonSpecies] = await Promise.all([fetch("https://pokeapi.co/api/v2/pokemon/${id}").then((res) => res.json()), fetch("https://pokeapi.co/api/v2/pokemon-species/${id}").then((res) => res.json())]);
    return true; // Mengembalikan nilai true jika data berhasil diambil
  } catch (error) {
    // Menangkap dan menampilkan kesalahan jika terjadi masalah saat mengambil data
    console.error("Failed to fetch Pokemon data before redirect");
  }
}

function displayPokemons(pokemon) {
  // Mengosongkan konten dari listurapper sebelum menambahkan elemen baru
  listwrapper.inneгHTML = "";
  // Mengiterasi setiap objek Pokemon dalam array pokemon
  pokemon.forEach((pokemon) => {
    const pokemonID = pokemon.url.split("/")[6]; // Mendapatkan ID Pokemon dari URL dengan memisahkan suring dan mengambil bagian ke-6
    const listItem = document.createElement("div"); //
    // Membuat clemen diu baru untuk setiap item dalam daftar
    listItem.className = "list-item"; // Menambalikan kelas CSS ke elemen diy
    // Menetapkan konten HTML dalam elemen listrem
    listItem.innerHTML = `
    <div class="number-wrap">
        <p class="caption-fonts">#${pokemonID}</p>
    </div>
    <div class="img-wrap">
        <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream world/${pokemonID}.svg" alt="$(pokemon.name)">
    </div>
    <div class="name wrap">
    <p class="body3-fonts">#${pokemon.name}</p>
    </div>`;
    // Menambahkan event listener untuk menangani klik pada setiap item
    listItem.addEventListener("click", async () => {
      const success = await fetchPokemonDataBeforeRedirect(pokemonID);
      if (success) {
        // Memanggil fungsi ferch Pakemor DataBe ForeRedirect schelum melakukan redirect
        // Tika data berhasil diambil, lakukan redirect ke halaman detail
        window.location.href = "/detail.html?id=${pokemonID}";
      }
    });
    listwrapper.appendChild(listItem); // Menambahkan elemen Listitem ke dalam Listwrapper
  });
}
const closeButton = document.querySelector(".search-close-icon");
// Menambahkan event listener untuk klik pada tombol close closeButton.addEventListener("click", clearsearch);
// Fungsi untuk membersihkan atau menghapus hasil pencarian
// tabnine: test | explain | document | ask
function clearSearch() {
  searchInput.value = ""; // Mengosongkan nilai input pencarian displayPokemons (allPokemons); // Menampilkan kembali semua Pokemon (tidak
  notFoundMessage.style.display = "none"; // Menyembunyikan pesan "not found
}
