var item_menu = document.querySelectorAll('.item-menu');

function selecionar_link() {
    item_menu.forEach((item) => 
        item.classList.remove('ativo')
    )

    this.classList.add('ativo')
}

item_menu.forEach((item) =>
    item.addEventListener('click', selecionar_link)
)