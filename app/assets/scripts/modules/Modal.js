import $ from "jquery";

class Modal {
  constructor() {
    this.modalBox = $(".modal");
    this.closeX = $(".modal__close");
    this.buttons = $(".open-modal");
    this.events();
  }

  events() {
    this.closeX.click(this.closeTheMenu.bind(this));
    this.buttons.click(this.closeTheMenu.bind(this));
    $(document).keyup(this.keyPressHandler.bind(this));     
  }

  keyPressHandler(e) {
    if (e.which === 27) {
      this.closeTheMenu();
    }
  }

  closeTheMenu(e) {
    this.modalBox.toggleClass("modal--is-visible");
    e.preventDefault();
  }
}

export default Modal;

