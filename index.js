function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var ndList = document.querySelectorAll('.ranked-list li')
  ndList.forEach(element => {
    element.innerHTML = (parseInt(element.innerHTML)+n).toString()
  })
}

function deepestChild() {
  var node = document.getElementById('grand-node'),
      nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
