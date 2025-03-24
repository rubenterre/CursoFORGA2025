

const dropdownBtn = document.getElementById('dropdownBtn');
const dropdown = document.getElementById('dropdown');

function toggleDropdown() {
  dropdown.classList.toggle('show');
}

dropdownBtn.addEventListener('click', toggleDropdown);


document.addEventListener('click', function(event) {
  if (!dropdownBtn.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove('show');
  }
});