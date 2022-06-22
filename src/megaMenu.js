/**
 * Megamenu handle
 */

export default class MegaMenuHandle {

  constructor($header) {
    this.$header = $header;
    this.$mobileMenu = jQuery('#MobileMegamenu');

    this.appendNavTo();
    this.addNavItemHandle();
    this.toggleButtonHandle(); 
  }

  appendNavTo() {
    this.$mobileMenu.find('.mobile-megamenu__nav').html(this.$header.find('#MegamenuBlock').html())
  }

  addNavItemHandle() {
    this.$mobileMenu.on('click', '.megamenu-block__item > a', function(event) {
      event.preventDefault();

      let status = $(this).data('is-open');

      if(!status || status == false) {
        $(this)
          .closest('li.megamenu-block__item')
          .find('.megamenu-block__mega').show()

        $(this).data('is-open', true);
      } else {
        $(this)
          .closest('li.megamenu-block__item')
          .find('.megamenu-block__mega').hide()

        $(this).data('is-open', false);
      }
    })
  }

  toggleButtonHandle() {
    jQuery('body').on('click', 'button.site-nav__mobile-nav-trigger', e => {
      jQuery('body').toggleClass('menumobi-open')
    })
  }
} 