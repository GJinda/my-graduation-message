const $ = (selector) => {
  return document.querySelector(selector)
}

const addClass = (obj, classname) => {
  obj.classList.add(classname)
}

const delClass = (obj, classname) => {
  obj.classList.remove(classname)
}

const para = $('p.para')
const label1 = $('div.label1')
const label2 = $('div.label2')
const num = $('input.num')
const psw = $('input.psw')
const hint = $('div.hint')
const btn = $('.btn')

const showHint = (hintText) => {
  hint.innerHTML = hintText
}

btn.onclick = () => {
  if (psw.value == md5(num.value)) {
    addClass(num, 'fadeout')
    addClass(psw, 'fadeout')
    addClass(label1, 'fadeout')
    addClass(label2, 'fadeout')
    addClass(hint, 'fadeout')
    addClass(btn, 'fadeout')
    para.innerHTML = messages['num']
    addClass(para, 'fadein')
  } else {
    hint.innerHTML = 'please check it correct'
  }
}

window.onload = () => {
  addClass(num, 'fadein')
  addClass(psw, 'fadein')
  addClass(label1, 'fadein')
  addClass(label2, 'fadein')
  addClass(hint, 'fadein')
  addClass(btn, 'fadein')
}