var body = ['eye','tongue','nose','brain','face',"forehead", "tooth", "throat", "eyelash", "breast", "armpit", "arm", "stomach", "belly-button", "thigh", "leg", "shin", "pinky", "finger", "knee", "hip", "ear", "chin", "toe", "groin", "back", "toenail", "fist", "tongue", "foot", "eye", "abdomen", "heel", "elbow", "lung", "jaw", "nostril"];
var adj1 = ['uglier','fouler','smellier','nastier','slimier','more offensive','more rotten','yuckier','more vile','more horrible','more revolting','more unpleasant','more repellant','more sickening','more putrid','grosser','more nauseating','stinkier','despicable','more squalid','more abhorrent','more disgusting','cruddier','more grody','sloppier'];
var anim = ['giraffe','worthog','ox','goat','pig','Aardwolf','Afghan','Hound','Albatross','Alligator','Alpaca','Anaconda','Angelfish','Anglerfish','Chimpanzee','Chinchilla','Chipmunk','Clam','Clownfish','Cobra','Cockroach','Cod','Collie','Condor','Constrictor','Damselfly','Deer','Dingo','Dinosaur','Dog','Dolphin','Donkey','Dormouse','Dove','Ermine','Falcon','Ferret','Finch','Firefly','Fish','Flamingo','Flea','Fly','Flyingfish','Fowl','Fox','Frog','Fruitfly','Bat','Gazelle','Gecko','Gerbil','Gibbon','Guanaco','Guineafowl','Giraffe','Golden Retriever','Goldfinch','Goldfish','Goose','Jellyfish','Kangaroo','Kingfisher','Kiwi','Koala','Koi','Komodo dragon','Krill','Labrador','Retriever','Ladybug','Lamprey','Lark','Leech','Lemming','Lemur','Leopard','Mammoth','Manta','Ray','Marmoset','Marmot','Opossum','Orangutan','Orca','Ostrich','Otter','Owl','Pelican','Penguin','Perch','Puma','Yak','Zebra'];
var anib = ['rump','snout','flank','hoof','tooth','tail','fur','leg','fang'];
var insult = '';

function rand(thing){
 return thing[Math.floor(Math.random() * thing.length)];
}
function myFunction(){
  insult = 'Your ' + rand(body) + ' is ' + rand(adj1) + ' than a ' + rand(anim).toLowerCase() + "'s " + rand(anib) + '!';
  document.getElementsByClassName("paragraph")[0].innerHTML = insult;
}