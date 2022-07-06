const $ = (selector) => {
  return document.querySelector(selector)
}

const addClass = (obj, classname1, classname2) => {
  if (classname1) {
    obj.classList.add(classname1)
  }
  if (classname2) {
    obj.classList.add(classname2)
  }
}

const delClass = (obj, classname) => {
  obj.classList.remove(classname)
}

const createDom = (tpl) => {
  const div = document.createElement('div');
  div.innerHTML = tpl;
  return div.children[0];
}

const para = $('p.para')
const label1 = $('div.label1')
const label2 = $('div.label2')
const inputNum = $('input.num')
const inputPsw = $('input.psw')
const hint = $('div.hint')
const btn = $('.btn')

const showHint = (hintText) => {
  hint.innerHTML = hintText
}

btn.onclick = () => {
  // console.log(inputNum.value, md5(inputNum.value))
  if (inputPsw.value == md5(inputNum.value)) {
    addClass(inputNum, 'fadeout', 'disappear')
    addClass(inputPsw, 'fadeout', 'disappear')
    addClass(label1, 'fadeout', 'disappear')
    addClass(label2, 'fadeout', 'disappear')
    addClass(hint, 'fadeout', 'disappear')
    addClass(btn, 'fadeout', 'disappear')

    if (inputNum.value == '2209baoxuesha') {
      para.appendChild(createDom(messages[inputNum.value][0]))
      para.appendChild(createDom(messages[inputNum.value][1]))
      para.appendChild(createDom(messages[inputNum.value][2]))
    } else {
      para.innerHTML = messages[inputNum.value]
    }
    delClass(para, 'disappear')
    addClass(para, 'fadein', 'appear')
  } else {
    hint.innerHTML = 'please check it correct'
  }
}

window.onload = () => {
  addClass(inputNum, 'fadein')
  addClass(inputPsw, 'fadein')
  addClass(label1, 'fadein')
  addClass(label2, 'fadein')
  addClass(hint, 'fadein')
  addClass(btn, 'fadein')
}