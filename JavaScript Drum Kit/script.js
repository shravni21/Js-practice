const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
  }
  
  const creatediv = (text) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = text;
    div.id = text;
    document.getElementById('container').appendChild(div);
  }
  
  const display = (sons) => Object.keys(sons).forEach(creatediv);
  
  const playsound = (letter) => {
    const audio = new Audio(`./sounds/${sons[letter]}`);
    audio.play();
  }
  
  const addeffect = (letter) => document.getElementById(letter)
                                           .classList.toggle('active');
  
  const removeeffect = (letter) => {
    const div = document.getElementById(letter);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend',removeActive);
  };
  
  const activatediv = (event) => {
  
    const l = event.type == 'click' ? event.target.id : event.key.toUpperCase();
    const final = sons.hasOwnProperty(l);
    if (final){
        addeffect(l);
        playsound(l);
        removeeffect(l);
    }
  }
  
  display(sons);
  
  document.getElementById('container')
        .addEventListener('click', activatediv);
  
  window.addEventListener('keyup',activatediv);