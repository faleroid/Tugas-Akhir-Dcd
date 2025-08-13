export const navBar = () => {
  let dropdownToggle = document.getElementById('dropdown-toggle')
  let dropdownMenu = document.getElementById('dropdown-menu')
  let dropdownIcon = document.getElementById('dropdown-icon')

  dropdownToggle.addEventListener('click', function (event) {
    event.preventDefault()
    dropdownMenu.classList.toggle('show')

    dropdownIcon.textContent = dropdownMenu.classList.contains('show')
      ? ' <'
      : ' >'
  })

  document.addEventListener('click', function (event) {
    if (
      !dropdownToggle.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove('show')
      dropdownIcon.textContent = ' >'
    }
  })

  dropdownMenu.querySelectorAll('a').forEach((item) => {
    item.addEventListener('click', function () {
      dropdownMenu.classList.remove('show')
      dropdownIcon.textContent = ' >'
    })
  })
}
