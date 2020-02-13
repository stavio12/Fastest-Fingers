//Setting up the variables
const startBtn  = document.querySelector("#startbtn");
const  letter= document.querySelector("letter");
const  text= document.querySelector("#text");
const  result = document.querySelector("#result");
const  timer = document.querySelector('#time'); 
const  level = document.querySelector('#level option');
const disPlay = document.querySelector('#display');
const newScore = document.querySelector('#score'); 


//calling out event listner
eventListener();

function eventListener (){
    startBtn.addEventListener('click', disappear);
    
    text.addEventListener('input', answers);

  }

//initing time word and score 
let randomWord;

let score = 0;

let time = 11;

// Set difficulty to value in ls or Beginner
let difficulty =
  localStorage.getItem('difficulty') !== null
   ? localStorage.getItem('difficulty')
    : 'Expert';


// Set difficulty select value
level.value =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'Expert';



    // setting  up the JSON
    const words = ["one","Day","you","tip","Ate","ion","ace","man","ice","art","end","her","car","seven","world","about","again","heart","pizza","water","happy","sixty","board","month","Angel","death","green","music","fifty","three","party","piano","Kelly","mouth","woman","sugar","amber","dream","apple","laugh","tiger","faith","earth","river","money","peace","forty","words","absolute","abstract","accepted","academic","accepted","accident","accuracy","accurate","achieved","acquired","activity","actually","addition","adequate","adjacent","adjusted","advanced","advisory","advocate","affected","aircraft","alliance","although","aluminum","analysis","announce","anything","anywhere","apparent","appendix","approach","approval","argument","artistic","assembly","assuming","athletic","attached","attitude","attorney","audience","autonomy","aviation","bachelor","bacteria","baseball","bathroom","becoming","benjamin","birthday","boundary","breaking","breeding","building","bulletin","business","calendar","campaign","capacity","casualty","catching","category","Catholic","cautious","cellular","ceremony","chairman","champion","chemical","children","circular","civilian","clearing","clinical","clothing","collapse","colonial","colorful","commence","commerce","complain","complete","composed","compound","comprise","computer","conclude","concrete","conflict","confused","congress","consider","constant","consumer","continue","contract","contrary","contrast","convince","corridor","coverage","covering","creation","creative","criminal","critical","crossing","cultural","currency","customer","database","daughter","daylight","deadline","deciding","decision","decrease","deferred","definite","delicate","delivery","describe","designer","detailed","diabetes","dialogue","diameter","directly","director","disabled","disaster","disclose","discount","discover","disorder","disposal","distance","distinct","district","dividend","division","doctrine","document","domestic","dominant","dominate","doubtful","dramatic","dressing","dropping","duration","dynamics","earnings","economic","educated","efficacy","eighteen","election","electric","eligible","emerging","emphasis","employee","endeavor","engaging","engineer","enormous","entirely","entrance","envelope","equality","equation","estimate","evaluate","eventual","everyday","everyone","evidence","exchange","exciting","exercise","explicit","exposure","extended","external","facility","familiar","featured","feedback","festival","fireboard","identical","chocolate","Christmas","beautiful","happiness","Wednesday","challenge","celebrate","adventure","important","consonant","Christian","dangerous","masculine","Australia","irregular","something","knowledge","Elizabeth","macaronic","pollution","President","wrestling","pineapple","adjective","secretary","undefined","Halloween","Amerindic","ambulance","alligator","seventeen","affection","equality","familiar","featured","feedback","festival","fireboard","identical","chocolate","Christmas","beautiful","curiosity","Louisiana","celebrity","Delicious","turquoise","attention","companion","elocution","whimsical","difficult","agitation","accomplishments","unprepossessing","acknowledgeable","Americanization","acknowledgement","prognostication","antepenultimate","acclimatization","maneuverability","rationalisation","bioluminescence","atherosclerosis","syllabification","mischievousness","parthenogenesis","acclimatisation","discombobulated","trustworthiness","carnivorousness","Armadillidiidae","serviceableness","reapportionment","masculinisation","plenipotentiary","interreflection","hemochromatosis","agriculturalist","hospitalization","disadvantageous","therapeutically","anthropomorphic","hypoproteinemia","demagnetisation","nearsightedness","synchronization","Mastigomycotina","levelheadedness","lightheadedness","forthcomingness","desensitization","disorganisation"];
    
// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];

}


// Add word to DOM
function addWordToDOM() {
randomWord = getRandomWord();

disPlay.innerHTML = randomWord;

}


//setting put timer and scoreboard
function tScore(){
  //setting up timer.
  var countDown = setInterval(()=>{
    time--;
    timer.textContent = `
    Time left: ${time}s`;

    if(time === 0){
   clearInterval(countDown);
   updateTime(); 

  }
  },1000);


}

function updatescore(){
  score
 newScore.innerHTML = `Score: ${score}`;
}




function disappear(){
  document.querySelector('#level select').disabled = true;


  startBtn.style.display = "none";
  const words = document.querySelector('#words div');
  words.style.display = 'block';
  addWordToDOM();
   tScore();
   updatescore();
      text.focus();
  
}




function updateTime(){
  document.querySelector('#tscore').style.display = 'none';
  startBtn.style.display = "none";
  const words = document.querySelector('#words div');
  words.style.display = 'none';

  document.querySelector('#start').innerHTML = `
  <div>
            <h1>Time run out</h1> <br>
        <h5 id="result">Your final score is ${score}</h5> 
        <button onclick="location.reload()" id="reload" class="btn btn-outline-primary">Reload</button>
        </div>
  ` 

}

function answers(e){
const insertedText = e.target.value;

if(insertedText === randomWord){
  addWordToDOM();
  updatescore();
  e.target.value = '';


  if(difficulty === 'Expert'){
    time += 3

  }
  else if (difficulty === 'Intermediate' ){
    time+= 4
  }
  else{

    time+= 5

  }

}

}

  
document.querySelector('form').addEventListener("change", e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);

})