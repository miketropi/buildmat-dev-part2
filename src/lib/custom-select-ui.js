import { insertAfter } from './helpers';

export default class CustomSelectUI {
  constructor(elem, opts) {
    this.elem = elem;
    this.options = elem.querySelectorAll('option');
    this.opts = opts;
    this.defaultValue = elem.value;
    this.value = this.defaultValue;

    elem.style.display = 'none';

    this.buildTempalte();
    this.render();
    this.addAttrs();
    this.addEvents();
  }

  buildTempalte() {
    const self = this;
    const arrowIcon = `<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.5 5L7.5 10L2.5 5" stroke="#333333" stroke-width="1.5"/> </svg>`

    this.targetTemp = document.createElement('DIV');
    this.targetTemp.className = 'custom-select-ui';
    this.targetTemp.innerHTML = `
    <div class="custom-select-ui__inner">
      <div class="custom-select-ui__target">${ this.defaultValue }</div>
      <span class="arrow-icon">${ arrowIcon }</span>
    </div>`;

    this.selectListTemp = document.createElement('DIV');
    this.selectListTemp.className = 'custom-select-ui__select-list';
    this.selectListTemp.style.display = 'none';
    this.selectListTemp.style.position = 'absolute';
    this.selectListTemp.innerHTML = `
    <ul>
      ${
        [...this.options].map(item => {
          const iconClass = item.dataset.iconClass;
          const classes = (item.value == self.getValue() ? '__selected' : '');
          return `
          <li class="${ classes } __item" data-option-value="${ item.value }">
            <span class="__icon-class __icon-${ iconClass }"></span>
            <span>${ item.innerHTML }</span>
          </li>`;
        }).join('')
      }
    </ul>`;
  }

  fixSelectListPos() {
    this.selectListTemp.style.left = `${this.targetTemp.offsetLeft}px`;
    this.selectListTemp.style.top = `${this.targetTemp.offsetTop + this.targetTemp.clientHeight + 4}px`;
    this.selectListTemp.style.width = `${this.targetTemp.offsetWidth}px`;
    this.selectListTemp.style.zIndex = 90;
  }

  setValue(value) {
    let findOpt = this.selectListTemp.querySelector(`[data-option-value="${ value }"]`);
    if(!findOpt) return;

    this.value = value;
    this.handleAfterSetValue();
  }

  handleAfterSetValue() {
    let value = this.getValue();
    let findOpt = this.selectListTemp.querySelector(`[data-option-value="${ value }"]`);

    this.elem.value = value; // Update value real select

    // update custom ui
    this.targetTemp.querySelector('.custom-select-ui__target').innerHTML = findOpt.innerHTML;
    this.selectListTemp.querySelector('.__item.__selected').classList.remove('__selected');
    findOpt.classList.add('__selected');

    if(this?.opts?.onChange) {
      this.opts.onChange.call(null, value, this); // callback onchange
    }
  }

  getValue() {
    return this.value;
  }

  controlSelectListDisplay(status) {
    // 1 show
    // 0 hidden
    const self = this;

    if(status == 1) {
      self.fixSelectListPos();
      self.selectListTemp.style.display = 'block';
      self.targetTemp.dataset.status = 1;
    } else {
      self.selectListTemp.style.display = 'none';
      self.targetTemp.dataset.status = 0;
    }
  }

  addEvents() {
    const self = this;
    const items = this.selectListTemp.querySelectorAll('.__item');

    this.targetTemp.addEventListener('click', function() {
      let status = this.dataset.status;

      if(!status || status == false) {
        self.controlSelectListDisplay(1);
      } else {
        self.controlSelectListDisplay(0);
      }
    });

    // Select option
    [...items].forEach(li => {
      li.addEventListener('click', function() {
        // console.log(this.dataset.optionValue)
        self.setValue(this.dataset.optionValue)
        self.controlSelectListDisplay(0);
      })
    })
  }

  addAttrs() {
    this.elem.customSelectUi = this;
  }

  render() {
    const self = this;

    insertAfter(this.targetTemp, this.elem);
    document.body.appendChild(this.selectListTemp);
    this.fixSelectListPos();
    this.setValue(this.defaultValue);

    window.onresize = () => {
      self.fixSelectListPos();
    }
  }
}