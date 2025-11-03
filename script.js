function filterTopics() {
  let input = document.getElementById('searchBox').value.toLowerCase();
  let topics = document.getElementsByClassName('topic');
  for (let i = 0; i < topics.length; i++) {
    let title = topics[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
    let content = topics[i].getElementsByTagName('p')[0].innerText.toLowerCase();
    if(title.includes(input) || content.includes(input)) {
      topics[i].style.display = '';
    } else {
      topics[i].style.display = 'none';
    }
  }
}
