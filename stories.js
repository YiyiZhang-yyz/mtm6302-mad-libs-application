const stories = [
  {
    title: 'Mission Statement',
    words: [
      'Adjective',
      'Verb 1',
      'Verb 2',
      'Plural Noun 1',
      'Plural Noun 2',
      'Plural Noun 3'
    ],
    output: function (words) {
      return `<p>Our mission is to <span class="word">${words['Verb 1']}</span> our <span class="word">${words['Plural Noun 2']}</span> with <span class="word">${words.Adjective}</span> <span class="word">${words['Plural Noun 3']}</span> that will <span class="word">${words['Verb 2']}</span> their <span class="word">${words['Plural Noun 1']}</span>.</p>`
    }
  },
  {
    title: 'Lunch Room!',
    words: [
      'Animal',
      'Adjective 1',
      'Adjective 2',
      'Vegetable 1',
      'Vegetable 2',
      'Noun',
      'Container'
    ],
    output: function (words) {
      return `<p>Make sure your lunch <span class="word">${words.Container}</span> is filled with <span class="word">${words['Adjective 1']}</span> food. Do not go to the <span class="word">${words['Adjective 2']}</span> food stand across the street from the school. The hamburgers they serve are fried in <span class="word">${words.Noun}</span> and are made of <span class="word">${words.Animal}</span> meat. So take a sandwich made of <span class="word">${words['Vegetable 1']}</span> or <span class="word">${words['Vegetable 2']}</span>, it's much healthier!</p>`
    }
  },

  {
    title: 'Weather Report',
    words: [
      'Adjective 1',
      'Adjective 2',
      'Article of Clothing',
      'Number 1',
      'Number 2',
      'Plural Noun 1',
      'Plural Noun 2'
    ],
    output: function (words) {
      return `<p>Early tomorrow, a <span class="word">${words['Adjective 1']}</span> front will collide with a mass of hot <span class="word">${words['Plural Noun 1']}</span> moving from the north. This means we can expect <span class="word">${words['Adjective 2']}</span> winds and occasional <span class="word">${words['Plural Noun 2']}</span> by late afternoon. Wind velocity will be <span class="word">${words['Number 1']}</span> miles an hour, and the high temperature should be around <span class="word">${words['Number 2']}</span> degrees. So, if you're going out, you had better plan on wearing your<span class="word"> ${words['Article of Clothing']}</span>.</p>`
    }
  }
]
  
// for (let word of stories[0].words){
// }
const storyInput = document.querySelector('#story_input');
const storyOutput = document.querySelector('#story_output');

const buttons = document.querySelectorAll('.story_btn');


for (let [index, button] of buttons.entries()) {
  button.addEventListener('click', () => {
    storyOutput.innerHTML = '';
    let inputs = '';
    const words = stories[index].words;

    for (let word of words) {
      inputs += `<div><input type="text" name='${word}' placeholder='${word}'/></div>`;
    }


    inputs += `<button id='readBtn'>Read Story</button>`;
    
    storyInput.innerHTML = inputs;
    const readBtn = document.querySelector('#readBtn');


    readBtn.addEventListener('click', () => readStory(index));
  });
}

var readStory = (index) => {
  
  const inputWords = document.querySelectorAll('#story_input input');
  const words = {};


  for (let input of inputWords) {
    words[input.name] = input.value;
  }

  output = words;
  storyOutput.innerHTML = stories[index].output(output);
};