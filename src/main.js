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

  const thicknessProgressBarPreviewAminate = () => {
    const elems = document.querySelectorAll('.thickness-progress-bar-preview__do-aminate');
    if(elems.length == 0) return;

    const _itemsTriggerScroll = [];

    [...elems].forEach((wrap) => {
      let items = wrap.querySelectorAll('.thickness-progress-bar-preview__item');
      [...items].forEach(_item => {

        // reset width
        _item.querySelector('.thickness-progress-bar-preview__item-bar-inner').style.width = '0%';

        _itemsTriggerScroll.push(_item);
      })
    })

    if(!_itemsTriggerScroll.length) return;
    let wHeight = w.innerHeight;

    w.addEventListener('scroll', e => {
      wHeight = w.innerHeight;
      if(_itemsTriggerScroll.length == 0) return;

      _itemsTriggerScroll.forEach((el, _index) => {
        const { top } = el.getBoundingClientRect();
        if(wHeight > top + 100) {
          el.classList.add('__trigger-scroll-active');
          let innerBar = el.querySelector('.thickness-progress-bar-preview__item-bar-inner');
          let percent = innerBar.dataset.percent;

          el.querySelector('.thickness-progress-bar-preview__item-bar-inner').style.width = `${ percent }%`;
          _itemsTriggerScroll.splice(_index, 1);
        } 
      })
    })
  }

  const accordionHandle = () => {
    const accordionElems = document.querySelectorAll('.accordion-target-js');
    if(accordionElems.length == 0) return;

    [...accordionElems].forEach((el, _accIndex) => {
      let items = el.querySelectorAll('.accordion-item');
      let activeItem = el.dataset.activeItemDefault;

      if(items.length == 0) return; // check items exists

      [...items].forEach((item, _itemIndex) => {
        let heading = item.querySelector('.accordion-item__heading');
        let content = item.querySelector('.accordion-item__content');

        if((_itemIndex + 1) == activeItem) {
          item.classList.add('__active');
          $(content).slideDown('slow')
        }

        heading.addEventListener('click', e => {
          e.preventDefault();

          if($(item).hasClass('__active')) {
            $(content).stop(true, true).slideUp('slow')
            $(item).removeClass('__active')
          } else {
            $(content).stop(true, true).slideDown('slow')
            $(item).addClass('__active')
          }
        })
      })
    })
  }

  const ready = () => {
    new MegaMenuHandle($('#HeaderMegamenuWrapper')); 
    productGoApecificationsSection();
    // applyCustomSelectUIProductFilterColour();
    thicknessProgressBarPreviewAminate();
    accordionHandle();
  }

  /**
  * DOM Ready
  */
  $(ready);

  /**
  * 
  */
})(window, jQuery)