/**
 * Buildmat Script 
 * @ver 1.0
 */
import MegaMenuHandle from './megaMenu';
import CustomSelectUI from './lib/custom-select-ui'

;((w, $) => {
  'use strict';
  w.__customSelectUI = [];

  const productGoApecificationsSection = () => {
    const handle = document.querySelector('.__go-apecifications-js');
    const targetSection = document.querySelector('.product-block--tab.Custom-Specifications');
    if(!handle || !targetSection) return;

    handle.addEventListener('click', e => {
      e.preventDefault();
      w.scrollTo({
        top: targetSection.offsetTop - 170
      })

      targetSection.querySelector('.collapsible-trigger-btn').click();
    })
  }

  const applyCustomSelectUIProductFilterColour = () => {
    const select = document.querySelector('select#ProductFilterColourField');
    const productListContainer = document.querySelector('.product-list-container');
    if(!select) return;

    const _finterFn = (filter) => {
      [...productListContainer.querySelectorAll('tr')].forEach(elem => {
        elem.style.display = 'none';
      })

      let activeItems = productListContainer.querySelectorAll(`[data-p-colour="${ filter }"]`);
      [...activeItems].forEach(elem => {
        elem.style.display = 'table-row';
      })
    }

    const SelectUI = new CustomSelectUI(select, {
      onChange: (value, object) => {
        document.querySelector('.__filter-current-value').innerHTML = `(${ value })`;
        _finterFn(value)
      }
    });
  }

  const ready = () => {
    new MegaMenuHandle($('#HeaderMegamenuWrapper')); 
    productGoApecificationsSection();
    applyCustomSelectUIProductFilterColour();
  }

  /**
  * DOM Ready
  */
  $(ready);

  /**
  * 
  */
})(window, jQuery)