/**
 * Buildmat Script 
 * @ver 1.0
 */
import MegaMenuHandle from './megaMenu';
import CustomSelectUI from './lib/custom-select-ui';
import { getQueryUrl } from './lib/helpers';

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

    const urlQueryname = 'colour';
    const _historyFn = (args) => {
      const url = new URL(w.location);
      if(args) { url.searchParams.set(...args); } 
      else { url.searchParams.delete(urlQueryname); }
      
      w.history.pushState({}, '', url);
    }

    const _filterFn = (filter) => {
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
        _filterFn(value);

        if(object.defaultValue == value) { _historyFn(); } 
        else { _historyFn([urlQueryname, value]); }
      },
      onInit: (object) => {
        document.querySelector('.__filter-current-value').innerHTML = `(${ object.value })`;
        _filterFn(object.value);

        if(getQueryUrl.colour != null) {
          object.setValue(getQueryUrl.colour);
        }
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