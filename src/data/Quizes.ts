import {QuizQuestion} from '../../Types/quiz';
// Sample quiz data
const quizList: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is the Capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    id: 3,
    question: 'What is the largest mammal?',
    options: ['Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
    correctAnswer: 'Blue Whale',
  },
  {
    id: 4,
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'O2', 'CO2', 'NaCl'],
    correctAnswer: 'H2O',
  },
  {
    id: 5,
    question: 'Who developed the theory of relativity?',
    options: [
      'Isaac Newton',
      'Galileo Galilei',
      'Albert Einstein',
      'Nikola Tesla',
    ],
    correctAnswer: 'Albert Einstein',
  },
  {
    id: 6,
    question: 'What is the longest river in the world?',
    options: [
      'Amazon River',
      'Nile River',
      'Yangtze River',
      'Mississippi River',
    ],
    correctAnswer: 'Nile River',
  },
  {
    id: 7,
    question: 'Which element has the chemical symbol "O"?',
    options: ['Oxygen', 'Gold', 'Osmium', 'Ozone'],
    correctAnswer: 'Oxygen',
  },
  {
    id: 8,
    question: 'What is the smallest planet in our solar system?',
    options: ['Mars', 'Mercury', 'Venus', 'Pluto'],
    correctAnswer: 'Mercury',
  },
  {
    id: 9,
    question: 'Who painted the Mona Lisa?',
    options: [
      'Vincent van Gogh',
      'Pablo Picasso',
      'Leonardo da Vinci',
      'Claude Monet',
    ],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    id: 10,
    question: 'How many continents are there on Earth?',
    options: ['5', '6', '7', '8'],
    correctAnswer: '7',
  },
  {
    id: 11,
    question: 'Which gas is most abundant in Earth’s atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 'Nitrogen',
  },
  {
    id: 12,
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    correctAnswer: 'Canberra',
  },
  {
    id: 13,
    question: 'Who wrote "Romeo and Juliet"?',
    options: [
      'Charles Dickens',
      'William Shakespeare',
      'Mark Twain',
      'Jane Austen',
    ],
    correctAnswer: 'William Shakespeare',
  },
  {
    id: 14,
    question: 'What is the hardest known natural material?',
    options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
    correctAnswer: 'Diamond',
  },
  {
    id: 15,
    question: 'Which ocean is the largest?',
    options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    correctAnswer: 'Pacific',
  },
  {
    id: 16,
    question: 'What is the capital of Italy?',
    options: ['Rome', 'Venice', 'Milan', 'Naples'],
    correctAnswer: 'Rome',
  },
  {
    id: 17,
    question: 'Who discovered penicillin?',
    options: [
      'Marie Curie',
      'Alexander Fleming',
      'Louis Pasteur',
      'Joseph Lister',
    ],
    correctAnswer: 'Alexander Fleming',
  },
  {
    id: 18,
    question: 'What is the currency of Japan?',
    options: ['Yen', 'Won', 'Dollar', 'Rupee'],
    correctAnswer: 'Yen',
  },
  {
    id: 19,
    question: 'What is the national flower of the United States?',
    options: ['Tulip', 'Rose', 'Lily', 'Sunflower'],
    correctAnswer: 'Rose',
  },
  {
    id: 20,
    question: 'What is the square root of 144?',
    options: ['10', '12', '14', '16'],
    correctAnswer: '12',
  },
   {
    id: 21,
    question: 'What is the tallest mountain in the world?',
    options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'],
    correctAnswer: 'Mount Everest',
  },
  {
    id: 22,
    question: 'Which country gifted the Statue of Liberty to the USA?',
    options: ['France', 'Germany', 'United Kingdom', 'Italy'],
    correctAnswer: 'France',
  },
  {
    id: 23,
    question: 'What is the largest desert in the world?',
    options: ['Sahara', 'Gobi', 'Antarctic', 'Kalahari'],
    correctAnswer: 'Antarctic',
  },
  {
    id: 24,
    question: 'Which scientist formulated the laws of motion?',
    options: ['Galileo Galilei', 'Albert Einstein', 'Isaac Newton', 'Nikola Tesla'],
    correctAnswer: 'Isaac Newton',
  },
  {
    id: 25,
    question: 'What is the boiling point of water in Celsius?',
    options: ['90°C', '100°C', '110°C', '120°C'],
    correctAnswer: '100°C',
  },
  {
    id: 26,
    question: 'Who was the first man to walk on the moon?',
    options: ['Buzz Aldrin', 'Neil Armstrong', 'Michael Collins', 'Yuri Gagarin'],
    correctAnswer: 'Neil Armstrong',
  },
  {
    id: 27,
    question: 'Which is the largest island in the world?',
    options: ['Greenland', 'Australia', 'Madagascar', 'Borneo'],
    correctAnswer: 'Greenland',
  },
  {
    id: 28,
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Pb', 'Fe'],
    correctAnswer: 'Au',
  },
  {
    id: 29,
    question: 'Which blood type is known as the universal donor?',
    options: ['A', 'B', 'AB', 'O negative'],
    correctAnswer: 'O negative',
  },
  {
    id: 30,
    question: 'How many players are there in a standard soccer team?',
    options: ['9', '10', '11', '12'],
    correctAnswer: '11',
  },
  {
    id: 21,
    question: 'What is the tallest mountain in the world?',
    options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Makalu'],
    correctAnswer: 'Mount Everest',
  },
  {
    id: 22,
    question: 'Which is the longest-running animated TV show?',
    options: ['Family Guy', 'The Simpsons', 'South Park', 'Tom and Jerry'],
    correctAnswer: 'The Simpsons',
  },
  {
    id: 23,
    question: 'What is the capital of Canada?',
    options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
    correctAnswer: 'Ottawa',
  },
  {
    id: 24,
    question: 'Which country is famous for the Great Wall?',
    options: ['Japan', 'China', 'India', 'Russia'],
    correctAnswer: 'China',
  },
  {
    id: 25,
    question: 'What is the name of the largest ocean on Earth?',
    options: ['Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Arctic Ocean'],
    correctAnswer: 'Pacific Ocean',
  },
  {
    id: 26,
    question: 'Which year did the Titanic sink?',
    options: ['1912', '1905', '1898', '1923'],
    correctAnswer: '1912',
  },
  {
    id: 27,
    question: 'Who invented the telephone?',
    options: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'],
    correctAnswer: 'Alexander Graham Bell',
  },
  {
    id: 28,
    question: 'What is the name of the fairy tale character who leaves a glass slipper at the ball?',
    options: ['Snow White', 'Cinderella', 'Sleeping Beauty', 'Rapunzel'],
    correctAnswer: 'Cinderella',
  },
  {
    id: 29,
    question: 'Which is the smallest country in the world?',
    options: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'],
    correctAnswer: 'Vatican City',
  },
  {
    id: 30,
    question: 'Which planet is closest to the Sun?',
    options: ['Earth', 'Venus', 'Mercury', 'Mars'],
    correctAnswer: 'Mercury',
  },
    {
    id: 31,
    question: 'What is the largest desert in the world?',
    options: ['Sahara Desert', 'Gobi Desert', 'Antarctic Desert', 'Kalahari Desert'],
    correctAnswer: 'Antarctic Desert',
  },
  {
    id: 32,
    question: 'Which animal is known as the "King of the Jungle"?',
    options: ['Tiger', 'Elephant', 'Lion', 'Cheetah'],
    correctAnswer: 'Lion',
  },
  {
    id: 33,
    question: 'What is the main ingredient in traditional Japanese miso soup?',
    options: ['Soybeans', 'Tofu', 'Rice', 'Seaweed'],
    correctAnswer: 'Soybeans',
  },
  {
    id: 34,
    question: 'Who was the first person to walk on the moon?',
    options: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'Michael Collins'],
    correctAnswer: 'Neil Armstrong',
  },
  {
    id: 35,
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'Japan', 'South Korea', 'Thailand'],
    correctAnswer: 'Japan',
  },
  {
    id: 36,
    question: 'What is the chemical symbol for gold?',
    options: ['Ag', 'Au', 'Pb', 'Fe'],
    correctAnswer: 'Au',
  },
  {
    id: 37,
    question: 'How many legs does a spider have?',
    options: ['6', '8', '10', '12'],
    correctAnswer: '8',
  },
  {
    id: 38,
    question: 'Which country hosted the 2016 Summer Olympics?',
    options: ['China', 'United Kingdom', 'Brazil', 'Russia'],
    correctAnswer: 'Brazil',
  },
  {
    id: 39,
    question: 'What is the hardest substance in the human body?',
    options: ['Bones', 'Enamel', 'Cartilage', 'Tendons'],
    correctAnswer: 'Enamel',
  },
  {
    id: 40,
    question: 'Which famous scientist developed the three laws of motion?',
    options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Stephen Hawking'],
    correctAnswer: 'Isaac Newton',
  },
  {
    id: 41,
    question: 'What is the national animal of Australia?',
    options: ['Kangaroo', 'Koala', 'Emu', 'Platypus'],
    correctAnswer: 'Kangaroo',
  },
  {
    id: 42,
    question: 'Which language has the most native speakers worldwide?',
    options: ['English', 'Spanish', 'Mandarin Chinese', 'Hindi'],
    correctAnswer: 'Mandarin Chinese',
  },
  {
    id: 43,
    question: 'What is the chemical symbol for sodium?',
    options: ['Na', 'S', 'So', 'Sn'],
    correctAnswer: 'Na',
  },
  {
    id: 44,
    question: 'Which country gifted the Statue of Liberty to the United States?',
    options: ['United Kingdom', 'France', 'Germany', 'Spain'],
    correctAnswer: 'France',
  },
  {
    id: 45,
    question: 'How many bones are in the adult human body?',
    options: ['206', '208', '210', '212'],
    correctAnswer: '206',
  },
  {
    id: 46,
    question: 'What is the name of the fairy in Peter Pan?',
    options: ['Tinker Bell', 'Fairy Dust', 'Silvermist', 'Rosetta'],
    correctAnswer: 'Tinker Bell',
  },
  {
    id: 47,
    question: 'Which planet has the most moons?',
    options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correctAnswer: 'Saturn',
  },
  {
    id: 48,
    question: 'What is the boiling point of water in Celsius?',
    options: ['50°C', '75°C', '100°C', '150°C'],
    correctAnswer: '100°C',
  },
  {
    id: 49,
    question: 'Who was the first President of the United States?',
    options: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Abraham Lincoln'],
    correctAnswer: 'George Washington',
  },
  {
    id: 50,
    question: 'Which continent is the largest by land area?',
    options: ['Africa', 'Asia', 'North America', 'Antarctica'],
    correctAnswer: 'Asia',
  },

    {
    id: 51,
    question: 'Which is the fastest land animal?',
    options: ['Cheetah', 'Lion', 'Greyhound', 'Horse'],
    correctAnswer: 'Cheetah',
  },
  {
    id: 52,
    question: 'What is the national dish of Italy?',
    options: ['Pizza', 'Pasta', 'Lasagna', 'Risotto'],
    correctAnswer: 'Pasta',
  },
  {
    id: 53,
    question: 'Which country has the most volcanoes?',
    options: ['Indonesia', 'Japan', 'United States', 'Philippines'],
    correctAnswer: 'Indonesia',
  },
  {
    id: 54,
    question: 'What is the name of the largest island in the world?',
    options: ['Greenland', 'Australia', 'Madagascar', 'Borneo'],
    correctAnswer: 'Greenland',
  },
  {
    id: 55,
    question: 'Which planet is known for its rings?',
    options: ['Jupiter', 'Uranus', 'Saturn', 'Neptune'],
    correctAnswer: 'Saturn',
  },
  {
    id: 56,
    question: 'Which famous ship sank after hitting an iceberg?',
    options: ['Titanic', 'Queen Mary', 'Lusitania', 'Bismarck'],
    correctAnswer: 'Titanic',
  },
  {
    id: 57,
    question: 'What is the national currency of the United Kingdom?',
    options: ['Euro', 'Pound Sterling', 'Dollar', 'Franc'],
    correctAnswer: 'Pound Sterling',
  },
  {
    id: 58,
    question: 'How many players are on a standard soccer team?',
    options: ['9', '10', '11', '12'],
    correctAnswer: '11',
  },
  {
    id: 59,
    question: 'Who painted the ceiling of the Sistine Chapel?',
    options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Donatello'],
    correctAnswer: 'Michelangelo',
  },
  {
    id: 60,
    question: 'Which U.S. state is known as the "Sunshine State"?',
    options: ['California', 'Florida', 'Texas', 'Arizona'],
    correctAnswer: 'Florida',
  },
  {
    id: 61,
    question: 'What is the tallest building in the world?',
    options: ['Shanghai Tower', 'Burj Khalifa', 'One World Trade Center', 'Petronas Towers'],
    correctAnswer: 'Burj Khalifa',
  },
  {
    id: 62,
    question: 'Which scientist proposed the theory of evolution by natural selection?',
    options: ['Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'Isaac Newton'],
    correctAnswer: 'Charles Darwin',
  },
  {
    id: 63,
    question: 'Which country is home to the famous Machu Picchu ruins?',
    options: ['Mexico', 'Peru', 'Brazil', 'Colombia'],
    correctAnswer: 'Peru',
  },
  {
    id: 64,
    question: 'What is the capital of South Korea?',
    options: ['Seoul', 'Busan', 'Tokyo', 'Bangkok'],
    correctAnswer: 'Seoul',
  },
  {
    id: 65,
    question: 'Which instrument is used to measure atmospheric pressure?',
    options: ['Barometer', 'Thermometer', 'Hygrometer', 'Altimeter'],
    correctAnswer: 'Barometer',
  },
  {
    id: 66,
    question: 'What is the largest organ in the human body?',
    options: ['Heart', 'Liver', 'Skin', 'Lungs'],
    correctAnswer: 'Skin',
  },
  {
    id: 67,
    question: 'Which country is known for inventing the Olympic Games?',
    options: ['Italy', 'Greece', 'France', 'United States'],
    correctAnswer: 'Greece',
  },
  {
    id: 68,
    question: 'How many sides does a hexagon have?',
    options: ['4', '5', '6', '8'],
    correctAnswer: '6',
  },
  {
    id: 69,
    question: 'What is the capital of Brazil?',
    options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
    correctAnswer: 'Brasília',
  },
  {
    id: 70,
    question: 'Which gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 'Carbon Dioxide',
  },
  {
    id: 71,
    question: 'What is the capital of Russia?',
    options: ['Saint Petersburg', 'Moscow', 'Kiev', 'Vladivostok'],
    correctAnswer: 'Moscow',
  },
  {
    id: 72,
    question: 'Which metal is liquid at room temperature?',
    options: ['Mercury', 'Gold', 'Silver', 'Lead'],
    correctAnswer: 'Mercury',
  },
  {
    id: 73,
    question: 'Which bird is known for its ability to mimic human speech?',
    options: ['Parrot', 'Owl', 'Pigeon', 'Eagle'],
    correctAnswer: 'Parrot',
  },
  {
    id: 74,
    question: 'What is the process of plants making their own food called?',
    options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Evaporation'],
    correctAnswer: 'Photosynthesis',
  },
  {
    id: 75,
    question: 'What is the hardest rock on Earth?',
    options: ['Granite', 'Marble', 'Diamond', 'Obsidian'],
    correctAnswer: 'Diamond',
  },
  {
    id: 76,
    question: 'Which is the smallest bone in the human body?',
    options: ['Femur', 'Tibia', 'Stapes', 'Radius'],
    correctAnswer: 'Stapes',
  },
  {
    id: 77,
    question: 'Which country is famous for its maple syrup?',
    options: ['United States', 'Canada', 'Sweden', 'Germany'],
    correctAnswer: 'Canada',
  },
  {
    id: 78,
    question: 'Who discovered gravity?',
    options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Nikola Tesla'],
    correctAnswer: 'Isaac Newton',
  },
  {
    id: 79,
    question: 'Which is the only mammal capable of true flight?',
    options: ['Flying Squirrel', 'Bat', 'Eagle', 'Penguin'],
    correctAnswer: 'Bat',
  },
  {
    id: 80,
    question: 'What is the capital of Egypt?',
    options: ['Cairo', 'Alexandria', 'Luxor', 'Giza'],
    correctAnswer: 'Cairo',
  },
  {
    id: 81,
    question: 'Which ocean is the deepest in the world?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
    correctAnswer: 'Pacific Ocean',
  },
  {
    id: 82,
    question: 'What is the smallest country in the world by land area?',
    options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
    correctAnswer: 'Vatican City',
  },
  {
    id: 83,
    question: 'How many hearts does an octopus have?',
    options: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: 'Three',
  },
  {
    id: 84,
    question: 'What is the main gas found in the sun?',
    options: ['Oxygen', 'Hydrogen', 'Helium', 'Nitrogen'],
    correctAnswer: 'Hydrogen',
  },
  {
    id: 85,
    question: 'Which country invented paper?',
    options: ['Egypt', 'China', 'Greece', 'India'],
    correctAnswer: 'China',
  },
  {
    id: 86,
    question: 'Which is the largest island country in the world?',
    options: ['Japan', 'Australia', 'Madagascar', 'Indonesia'],
    correctAnswer: 'Indonesia',
  },
  {
    id: 87,
    question: 'Which famous landmark is located in Agra, India?',
    options: ['Great Wall of China', 'Machu Picchu', 'Taj Mahal', 'Eiffel Tower'],
    correctAnswer: 'Taj Mahal',
  },
  {
    id: 88,
    question: 'Which planet in our solar system has the most gravity?',
    options: ['Earth', 'Jupiter', 'Neptune', 'Saturn'],
    correctAnswer: 'Jupiter',
  },
  {
    id: 89,
    question: 'Which blood type is the universal donor?',
    options: ['A', 'B', 'O-', 'AB+'],
    correctAnswer: 'O-',
  },
  {
    id: 90,
    question: 'What is the most widely spoken language in South America?',
    options: ['English', 'Spanish', 'Portuguese', 'French'],
    correctAnswer: 'Spanish',
  },
  {
    id: 91,
    question: 'What is the capital of Canada?',
    options: ['Toronto', 'Ottawa', 'Vancouver', 'Montreal'],
    correctAnswer: 'Ottawa',
  },
  {
    id: 92,
    question: 'Which is the longest bone in the human body?',
    options: ['Humerus', 'Femur', 'Tibia', 'Radius'],
    correctAnswer: 'Femur',
  },
  {
    id: 93,
    question: 'Who was the first man to walk on the moon?',
    options: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'Michael Collins'],
    correctAnswer: 'Neil Armstrong',
  },
  {
    id: 94,
    question: 'Which organ in the human body produces insulin?',
    options: ['Liver', 'Pancreas', 'Kidney', 'Stomach'],
    correctAnswer: 'Pancreas',
  },
  {
    id: 95,
    question: 'What is the largest desert in the world?',
    options: ['Sahara Desert', 'Gobi Desert', 'Antarctic Desert', 'Kalahari Desert'],
    correctAnswer: 'Antarctic Desert',
  },
  {
    id: 96,
    question: 'How many planets are there in the solar system?',
    options: ['7', '8', '9', '10'],
    correctAnswer: '8',
  },
  {
    id: 97,
    question: 'Which instrument is used to see distant objects in space?',
    options: ['Microscope', 'Periscope', 'Telescope', 'Binoculars'],
    correctAnswer: 'Telescope',
  },
  {
    id: 98,
    question: 'What is the national sport of Japan?',
    options: ['Baseball', 'Sumo Wrestling', 'Karate', 'Judo'],
    correctAnswer: 'Sumo Wrestling',
  },
  {
    id: 99,
    question: 'What is the largest ocean predator?',
    options: ['Orca', 'Great White Shark', 'Giant Squid', 'Sperm Whale'],
    correctAnswer: 'Orca',
  },
  {
    id: 100,
    question: 'What does the "HTTP" in a website URL stand for?',
    options: ['Hyper Text Transfer Protocol', 'High Tech Transfer Process', 'Hyperlink Transport Protocol', 'Home Transfer Text Protocol'],
    correctAnswer: 'Hyper Text Transfer Protocol',
  },
  {
    id: 101,
    question: 'What is the capital of Argentina?',
    options: ['Buenos Aires', 'Lima', 'Bogotá', 'Santiago'],
    correctAnswer: 'Buenos Aires',
  },
  {
    id: 102,
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Pb', 'Fe'],
    correctAnswer: 'Au',
  },
  {
    id: 103,
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'Japan', 'South Korea', 'Thailand'],
    correctAnswer: 'Japan',
  },
  {
    id: 104,
    question: 'What is the name of the fairy in Peter Pan?',
    options: ['Tinker Bell', 'Fairy Godmother', 'Glinda', 'Bellatrix'],
    correctAnswer: 'Tinker Bell',
  },
  {
    id: 105,
    question: 'Which mountain is the highest in the world?',
    options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Makalu'],
    correctAnswer: 'Mount Everest',
  },
  {
    id: 106,
    question: 'Who painted "The Starry Night"?',
    options: ['Vincent van Gogh', 'Pablo Picasso', 'Claude Monet', 'Leonardo da Vinci'],
    correctAnswer: 'Vincent van Gogh',
  },
  {
    id: 107,
    question: 'What is the capital of Thailand?',
    options: ['Hanoi', 'Bangkok', 'Manila', 'Jakarta'],
    correctAnswer: 'Bangkok',
  },
  {
    id: 108,
    question: 'Which planet is the hottest in the solar system?',
    options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
    correctAnswer: 'Venus',
  },
  {
    id: 109,
    question: 'Which animal is known as the "Ship of the Desert"?',
    options: ['Horse', 'Camel', 'Elephant', 'Donkey'],
    correctAnswer: 'Camel',
  },
  {
    id: 110,
    question: 'What does "www" stand for in a website address?',
    options: ['World Wide Web', 'Web Wireless Wave', 'World Website Web', 'Wide Web World'],
    correctAnswer: 'World Wide Web',
  },
 {
    id: 101,
    question: "What is the capital of Argentina?",
    options: ["Buenos Aires", "Lima", "Bogotá", "Santiago"],
    correctAnswer: "Buenos Aires"
  },
  {
    id: 102,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au"
  },
  {
    id: 103,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 104,
    question: "What is the name of the fairy in Peter Pan?",
    options: ["Tinker Bell", "Fairy Godmother", "Glinda", "Bellatrix"],
    correctAnswer: "Tinker Bell"
  },
  {
    id: 105,
    question: "Which mountain is the highest in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
    correctAnswer: "Mount Everest"
  },
  {
    id: 106,
    question: "Who painted 'The Starry Night'?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
    correctAnswer: "Vincent van Gogh"
  },
  {
    id: 107,
    question: "What is the capital of Thailand?",
    options: ["Hanoi", "Bangkok", "Manila", "Jakarta"],
    correctAnswer: "Bangkok"
  },
  {
    id: 108,
    question: "Which planet is the hottest in the solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Venus"
  },
  {
    id: 109,
    question: "Which animal is known as the 'Ship of the Desert'?",
    options: ["Horse", "Camel", "Elephant", "Donkey"],
    correctAnswer: "Camel"
  },
  {
    id: 110,
    question: "What does 'www' stand for in a website address?",
    options: ["World Wide Web", "Web Wireless Wave", "World Website Web", "Wide Web World"],
    correctAnswer: "World Wide Web"
  },
  {
    id: 111,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
    correctAnswer: "William Shakespeare"
  },
  {
    id: 112,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    id: 113,
    question: "Which element has the atomic number 1?",
    options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
    correctAnswer: "Hydrogen"
  },
  {
    id: 114,
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    correctAnswer: "2"
  },
  {
    id: 115,
    question: "Which country is famous for inventing pizza?",
    options: ["France", "Italy", "Spain", "Greece"],
    correctAnswer: "Italy"
  },
  {
    id: 116,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    id: 117,
    question: "Who discovered gravity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    correctAnswer: "Isaac Newton"
  },
  {
    id: 118,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    id: 119,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswer: "Mars"
  },
  {
    id: 120,
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: "Ottawa"
  },
  {
    id: 121,
    question: "Who is the author of 'Harry Potter'?",
    options: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "Dan Brown"],
    correctAnswer: "J.K. Rowling"
  },
  {
    id: 122,
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: "H2O"
  },
  {
    id: 123,
    question: "Which country is home to the kangaroo?",
    options: ["South Africa", "Australia", "Brazil", "India"],
    correctAnswer: "Australia"
  },
  {
    id: 124,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 125,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 126,
    question: "What is the largest planet in the solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Neptune"],
    correctAnswer: "Jupiter"
  },
  {
    id: 127,
    question: "Which country is known as the Land of the Midnight Sun?",
    options: ["Norway", "Sweden", "Finland", "Iceland"],
    correctAnswer: "Norway"
  },
  {
    id: 128,
    question: "What is the capital of Japan?",
    options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
    correctAnswer: "Tokyo"
  },
  {
    id: 129,
    question: "Who wrote '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
    correctAnswer: "George Orwell"
  },
  {
    id: 130,
    question: "What is the chemical symbol for oxygen?",
    options: ["O2", "CO2", "H2O", "N2"],
    correctAnswer: "O2"
  },
  {
    id: 131,
    question: "Which country is famous for the Great Wall?",
    options: ["Japan", "China", "India", "South Korea"],
    correctAnswer: "China"
  },
  {
    id: 132,
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: "Brasília"
  },
  {
    id: 133,
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    correctAnswer: "Charles Babbage"
  },
  {
    id: 134,
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
    correctAnswer: "Antarctica"
  },
  {
    id: 135,
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury"
  },
  {
    id: 136,
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    correctAnswer: "Berlin"
  },
  {
    id: 137,
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Virginia Woolf"],
    correctAnswer: "Jane Austen"
  },
  {
    id: 138,
    question: "What is the chemical symbol for carbon?",
    options: ["C", "CO2", "O2", "H2O"],
    correctAnswer: "C"
  },
  {
    id: 139,
    question: "Which country is known as the Land of Fire and Ice?",
    options: ["Iceland", "Greenland", "Norway", "Canada"],
    correctAnswer: "Iceland"
  },
  {
    id: 140,
    question: "What is the capital of Russia?",
    options: ["St. Petersburg", "Moscow", "Kiev", "Minsk"],
    correctAnswer: "Moscow"
  },
  {
    id: 141,
    question: "Who painted 'The Last Supper'?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Vincent van Gogh"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 142,
    question: "What is the largest continent by area?",
    options: ["Africa", "Asia", "North America", "Europe"],
    correctAnswer: "Asia"
  },
  {
    id: 143,
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 144,
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    correctAnswer: "Cairo"
  },
  {
    id: 145,
    question: "Who wrote 'The Great Gatsby'?",
    options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
    correctAnswer: "F. Scott Fitzgerald"
  },
  {
    id: 146,
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "S", "K"],
    correctAnswer: "Na"
  },
  {
    id: 147,
    question: "Which country is known as the Land of a Thousand Lakes?",
    options: ["Sweden", "Finland", "Norway", "Canada"],
    correctAnswer: "Finland"
  },
  {
    id: 148,
    question: "What is the capital of South Korea?",
    options: ["Seoul", "Busan", "Incheon", "Daegu"],
    correctAnswer: "Seoul"
  },
  {
    id: 149,
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Joseph Lister"],
    correctAnswer: "Alexander Fleming"
  },
  {
    id: 150,
    question: "What is the largest bird in the world?",
    options: ["Ostrich", "Eagle", "Albatross", "Penguin"],
    correctAnswer: "Ostrich"
  },
  {
    id: 151,
    question: "Which planet is known as the 'Morning Star'?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Venus"
  },
  {
    id: 152,
    question: "What is the capital of Spain?",
    options: ["Barcelona", "Madrid", "Valencia", "Seville"],
    correctAnswer: "Madrid"
  },
  {
    id: 153,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "John Steinbeck", "Ernest Hemingway"],
    correctAnswer: "Harper Lee"
  },
  {
    id: 154,
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Ir", "In", "Au"],
    correctAnswer: "Fe"
  },
  {
    id: 155,
    question: "Which country is known as the Land of the Long White Cloud?",
    options: ["Australia", "New Zealand", "Fiji", "Samoa"],
    correctAnswer: "New Zealand"
  },
  {
    id: 156,
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Venice", "Florence"],
    correctAnswer: "Rome"
  },
  {
    id: 157,
    question: "Who painted 'The Scream'?",
    options: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
    correctAnswer: "Edvard Munch"
  },
  {
    id: 158,
    question: "What is the largest lake in the world?",
    options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Baikal"],
    correctAnswer: "Caspian Sea"
  },
  {
    id: 159,
    question: "Which planet is known as the 'Blue Planet'?",
    options: ["Earth", "Neptune", "Uranus", "Saturn"],
    correctAnswer: "Earth"
  },
  {
    id: 160,
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Bangalore", "Kolkata"],
    correctAnswer: "Delhi"
  },
  {
    id: 161,
    question: "Who wrote 'The Catcher in the Rye'?",
    options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
    correctAnswer: "J.D. Salinger"
  },
  {
    id: 162,
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Si", "Sr"],
    correctAnswer: "Ag"
  },
  {
    id: 163,
    question: "Which country is known as the Land of the Thunder Dragon?",
    options: ["Bhutan", "Nepal", "Tibet", "Myanmar"],
    correctAnswer: "Bhutan"
  },
  {
    id: 164,
    question: "What is the capital of Mexico?",
    options: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
    correctAnswer: "Mexico City"
  },
  {
    id: 165,
    question: "Who discovered electricity?",
    options: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
    correctAnswer: "Benjamin Franklin"
  },
  {
    id: 166,
    question: "What is the largest reptile in the world?",
    options: ["Saltwater Crocodile", "Komodo Dragon", "Anaconda", "Green Anaconda"],
    correctAnswer: "Saltwater Crocodile"
  },
  {
    id: 167,
    question: "Which planet is known as the 'Ringed Planet'?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 168,
    question: "What is the capital of South Africa?",
    options: ["Cape Town", "Pretoria", "Johannesburg", "Durban"],
    correctAnswer: "Pretoria"
  },
  {
    id: 169,
    question: "Who wrote 'The Odyssey'?",
    options: ["Homer", "Virgil", "Plato", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    id: 170,
    question: "What is the chemical symbol for potassium?",
    options: ["K", "P", "Po", "Pt"],
    correctAnswer: "K"
  },
  {
    id: 171,
    question: "Which country is known as the Land of the Free?",
    options: ["United States", "Canada", "Australia", "New Zealand"],
    correctAnswer: "United States"
  },
  {
    id: 172,
    question: "What is the capital of China?",
    options: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
    correctAnswer: "Beijing"
  },
  {
    id: 173,
    question: "Who painted 'The Persistence of Memory'?",
    options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    correctAnswer: "Salvador Dalí"
  },
   {
    id: 201,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 202,
    question: "Who wrote 'The Great Gatsby'?",
    options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
    correctAnswer: "F. Scott Fitzgerald"
  },
  {
    id: 203,
    question: "What is the chemical symbol for oxygen?",
    options: ["O2", "CO2", "H2O", "N2"],
    correctAnswer: "O2"
  },
  {
    id: 204,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswer: "Mars"
  },
  {
    id: 205,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    id: 206,
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 207,
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    correctAnswer: "Tokyo"
  },
  {
    id: 208,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 209,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au"
  },
  {
    id: 210,
    question: "Which mountain is the highest in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    correctAnswer: "Mount Everest"
  },
  {
    id: 211,
    question: "Who wrote '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
    correctAnswer: "George Orwell"
  },
  {
    id: 212,
    question: "What is the capital of Brazil?",
    options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    correctAnswer: "Brasília"
  },
  {
    id: 213,
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury"
  },
  {
    id: 214,
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
    correctAnswer: "Antarctica"
  },
  {
    id: 215,
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    correctAnswer: "Charles Babbage"
  },
  {
    id: 216,
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    correctAnswer: "Berlin"
  },
  {
    id: 217,
    question: "Which country is famous for the Great Wall?",
    options: ["China", "Japan", "India", "South Korea"],
    correctAnswer: "China"
  },
  {
    id: 218,
    question: "What is the chemical symbol for carbon?",
    options: ["C", "CO2", "O2", "H2O"],
    correctAnswer: "C"
  },
  {
    id: 219,
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Virginia Woolf"],
    correctAnswer: "Jane Austen"
  },
  {
    id: 220,
    question: "What is the capital of Russia?",
    options: ["Moscow", "St. Petersburg", "Kiev", "Minsk"],
    correctAnswer: "Moscow"
  },
  {
    id: 221,
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 222,
    question: "What is the largest continent by area?",
    options: ["Asia", "Africa", "North America", "Europe"],
    correctAnswer: "Asia"
  },
  {
    id: 223,
    question: "Who painted 'The Last Supper'?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Vincent van Gogh"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 224,
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    correctAnswer: "Cairo"
  },
  {
    id: 225,
    question: "Who wrote 'The Catcher in the Rye'?",
    options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
    correctAnswer: "J.D. Salinger"
  },
  {
    id: 226,
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "S", "K"],
    correctAnswer: "Na"
  },
  {
    id: 227,
    question: "Which country is known as the Land of a Thousand Lakes?",
    options: ["Finland", "Sweden", "Norway", "Canada"],
    correctAnswer: "Finland"
  },
  {
    id: 228,
    question: "What is the capital of South Korea?",
    options: ["Seoul", "Busan", "Incheon", "Daegu"],
    correctAnswer: "Seoul"
  },
  {
    id: 229,
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Joseph Lister"],
    correctAnswer: "Alexander Fleming"
  },
  {
    id: 230,
    question: "What is the largest bird in the world?",
    options: ["Ostrich", "Eagle", "Albatross", "Penguin"],
    correctAnswer: "Ostrich"
  },
  {
    id: 231,
    question: "Which planet is known as the 'Morning Star'?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    correctAnswer: "Venus"
  },
  {
    id: 232,
    question: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Valencia", "Seville"],
    correctAnswer: "Madrid"
  },
  {
    id: 233,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "John Steinbeck", "Ernest Hemingway"],
    correctAnswer: "Harper Lee"
  },
  {
    id: 234,
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Ir", "In", "Au"],
    correctAnswer: "Fe"
  },
  {
    id: 235,
    question: "Which country is known as the Land of the Long White Cloud?",
    options: ["New Zealand", "Australia", "Fiji", "Samoa"],
    correctAnswer: "New Zealand"
  },
  {
    id: 236,
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Venice", "Florence"],
    correctAnswer: "Rome"
  },
  {
    id: 237,
    question: "Who painted 'The Scream'?",
    options: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
    correctAnswer: "Edvard Munch"
  },
  {
    id: 238,
    question: "What is the largest lake in the world?",
    options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Baikal"],
    correctAnswer: "Caspian Sea"
  },
  {
    id: 239,
    question: "Which planet is known as the 'Blue Planet'?",
    options: ["Earth", "Neptune", "Uranus", "Saturn"],
    correctAnswer: "Earth"
  },
  {
    id: 240,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
    correctAnswer: "Delhi"
  },
  {
    id: 241,
    question: "Who wrote 'The Odyssey'?",
    options: ["Homer", "Virgil", "Plato", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    id: 242,
    question: "What is the chemical symbol for potassium?",
    options: ["K", "P", "Po", "Pt"],
    correctAnswer: "K"
  },
  {
    id: 243,
    question: "Which country is known as the Land of the Free?",
    options: ["United States", "Canada", "Australia", "New Zealand"],
    correctAnswer: "United States"
  },
  {
    id: 244,
    question: "What is the capital of China?",
    options: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"],
    correctAnswer: "Beijing"
  },
  {
    id: 245,
    question: "Who painted 'The Persistence of Memory'?",
    options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    correctAnswer: "Salvador Dalí"
  },
  {
    id: 246,
    question: "What is the largest reptile in the world?",
    options: ["Saltwater Crocodile", "Komodo Dragon", "Anaconda", "Green Anaconda"],
    correctAnswer: "Saltwater Crocodile"
  },
  {
    id: 247,
    question: "Which planet is known as the 'Ringed Planet'?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 248,
    question: "What is the capital of South Africa?",
    options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"],
    correctAnswer: "Pretoria"
  },
  {
    id: 249,
    question: "Who wrote 'The Iliad'?",
    options: ["Homer", "Virgil", "Plato", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    id: 250,
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Si", "Sr"],
    correctAnswer: "Ag"
  },
  {
    id: 251,
    question: "Which country is known as the Land of the Thunder Dragon?",
    options: ["Bhutan", "Nepal", "Tibet", "Myanmar"],
    correctAnswer: "Bhutan"
  },
  {
    id: 252,
    question: "What is the capital of Mexico?",
    options: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
    correctAnswer: "Mexico City"
  },
  {
    id: 253,
    question: "Who discovered electricity?",
    options: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
    correctAnswer: "Benjamin Franklin"
  },
  {
    id: 254,
    question: "What is the largest fish in the world?",
    options: ["Whale Shark", "Great White Shark", "Blue Whale", "Giant Manta Ray"],
    correctAnswer: "Whale Shark"
  },
  {
    id: 255,
    question: "Which planet is known as the 'Ice Giant'?",
    options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
    correctAnswer: "Uranus"
  },
  {
    id: 256,
    question: "What is the capital of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    correctAnswer: "Ottawa"
  },
  {
    id: 257,
    question: "Who wrote 'The Divine Comedy'?",
    options: ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "William Shakespeare"],
    correctAnswer: "Dante Alighieri"
  },
  {
    id: 258,
    question: "What is the chemical symbol for nitrogen?",
    options: ["N", "Ni", "Na", "Ne"],
    correctAnswer: "N"
  },
  {
    id: 259,
    question: "Which country is known as the Land of the Midnight Sun?",
    options: ["Norway", "Sweden", "Finland", "Iceland"],
    correctAnswer: "Norway"
  },
  {
    id: 260,
    question: "What is the capital of Australia?",
    options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    id: 261,
    question: "Who wrote 'The Canterbury Tales'?",
    options: ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "Dante Alighieri"],
    correctAnswer: "Geoffrey Chaucer"
  },
  {
    id: 262,
    question: "What is the chemical symbol for helium?",
    options: ["He", "H", "Li", "Ne"],
    correctAnswer: "He"
  },
  {
    id: 263,
    question: "Which country is known as the Land of the White Elephant?",
    options: ["Thailand", "Cambodia", "Laos", "Myanmar"],
    correctAnswer: "Thailand"
  },
  {
    id: 264,
    question: "What is the capital of Argentina?",
    options: ["Buenos Aires", "Lima", "Bogotá", "Santiago"],
    correctAnswer: "Buenos Aires"
  },
  {
    id: 265,
    question: "Who wrote 'War and Peace'?",
    options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Nikolai Gogol"],
    correctAnswer: "Leo Tolstoy"
  },
  {
    id: 266,
    question: "What is the chemical symbol for calcium?",
    options: ["Ca", "C", "Cl", "Co"],
    correctAnswer: "Ca"
  },
  {
    id: 267,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 268,
    question: "What is the capital of Turkey?",
    options: ["Ankara", "Istanbul", "Izmir", "Antalya"],
    correctAnswer: "Ankara"
  },
  {
    id: 269,
    question: "Who wrote 'The Brothers Karamazov'?",
    options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Nikolai Gogol"],
    correctAnswer: "Fyodor Dostoevsky"
  },
  {
    id: 270,
    question: "What is the chemical symbol for magnesium?",
    options: ["Mg", "Mn", "Ma", "Mo"],
    correctAnswer: "Mg"
  },
  {
    id: 271,
    question: "Which country is known as the Land of the Golden Fleece?",
    options: ["Georgia", "Armenia", "Azerbaijan", "Turkey"],
    correctAnswer: "Georgia"
  },
  {
    id: 272,
    question: "What is the capital of Greece?",
    options: ["Athens", "Thessaloniki", "Patras", "Heraklion"],
    correctAnswer: "Athens"
  },
  {
    id: 301,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 302,
    question: "Who wrote 'The Great Gatsby'?",
    options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
    correctAnswer: "F. Scott Fitzgerald"
  },
  {
    id: 303,
    question: "What is the chemical symbol for oxygen?",
    options: ["O2", "CO2", "H2O", "N2"],
    correctAnswer: "O2"
  },
  {
    id: 304,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswer: "Mars"
  },
  {
    id: 305,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    id: 306,
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 307,
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    correctAnswer: "Tokyo"
  },
  {
    id: 308,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 309,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au"
  },
  {
    id: 310,
    question: "Which mountain is the highest in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    correctAnswer: "Mount Everest"
  },
  {
    id: 311,
    question: "Who wrote '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
    correctAnswer: "George Orwell"
  },
  {
    id: 312,
    question: "What is the capital of Brazil?",
    options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    correctAnswer: "Brasília"
  },
  {
    id: 313,
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury"
  },
  {
    id: 314,
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
    correctAnswer: "Antarctica"
  },
  {
    id: 315,
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    correctAnswer: "Charles Babbage"
  },
  {
    id: 316,
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    correctAnswer: "Berlin"
  },
  {
    id: 317,
    question: "Which country is famous for the Great Wall?",
    options: ["China", "Japan", "India", "South Korea"],
    correctAnswer: "China"
  },
  {
    id: 318,
    question: "What is the chemical symbol for carbon?",
    options: ["C", "CO2", "O2", "H2O"],
    correctAnswer: "C"
  },
  {
    id: 319,
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Virginia Woolf"],
    correctAnswer: "Jane Austen"
  },
  {
    id: 320,
    question: "What is the capital of Russia?",
    options: ["Moscow", "St. Petersburg", "Kiev", "Minsk"],
    correctAnswer: "Moscow"
  },
  {
    id: 321,
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 322,
    question: "What is the largest continent by area?",
    options: ["Asia", "Africa", "North America", "Europe"],
    correctAnswer: "Asia"
  },
  {
    id: 323,
    question: "Who painted 'The Last Supper'?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Vincent van Gogh"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 324,
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    correctAnswer: "Cairo"
  },
  {
    id: 325,
    question: "Who wrote 'The Catcher in the Rye'?",
    options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
    correctAnswer: "J.D. Salinger"
  },
  {
    id: 326,
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "S", "K"],
    correctAnswer: "Na"
  },
  {
    id: 327,
    question: "Which country is known as the Land of a Thousand Lakes?",
    options: ["Finland", "Sweden", "Norway", "Canada"],
    correctAnswer: "Finland"
  },
  {
    id: 328,
    question: "What is the capital of South Korea?",
    options: ["Seoul", "Busan", "Incheon", "Daegu"],
    correctAnswer: "Seoul"
  },
  {
    id: 329,
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Joseph Lister"],
    correctAnswer: "Alexander Fleming"
  },
  {
    id: 330,
    question: "What is the largest bird in the world?",
    options: ["Ostrich", "Eagle", "Albatross", "Penguin"],
    correctAnswer: "Ostrich"
  },
  {
    id: 331,
    question: "Which planet is known as the 'Morning Star'?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    correctAnswer: "Venus"
  },
  {
    id: 332,
    question: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Valencia", "Seville"],
    correctAnswer: "Madrid"
  },
  {
    id: 333,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "John Steinbeck", "Ernest Hemingway"],
    correctAnswer: "Harper Lee"
  },
  {
    id: 334,
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Ir", "In", "Au"],
    correctAnswer: "Fe"
  },
  {
    id: 335,
    question: "Which country is known as the Land of the Long White Cloud?",
    options: ["New Zealand", "Australia", "Fiji", "Samoa"],
    correctAnswer: "New Zealand"
  },
  {
    id: 336,
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Venice", "Florence"],
    correctAnswer: "Rome"
  },
  {
    id: 337,
    question: "Who painted 'The Scream'?",
    options: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
    correctAnswer: "Edvard Munch"
  },
  {
    id: 338,
    question: "What is the largest lake in the world?",
    options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Baikal"],
    correctAnswer: "Caspian Sea"
  },
  {
    id: 339,
    question: "Which planet is known as the 'Blue Planet'?",
    options: ["Earth", "Neptune", "Uranus", "Saturn"],
    correctAnswer: "Earth"
  },
  {
    id: 340,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
    correctAnswer: "Delhi"
  },
  {
    id: 341,
    question: "Who wrote 'The Odyssey'?",
    options: ["Homer", "Virgil", "Plato", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    id: 342,
    question: "What is the chemical symbol for potassium?",
    options: ["K", "P", "Po", "Pt"],
    correctAnswer: "K"
  },
  {
    id: 343,
    question: "Which country is known as the Land of the Free?",
    options: ["United States", "Canada", "Australia", "New Zealand"],
    correctAnswer: "United States"
  },
  {
    id: 344,
    question: "What is the capital of China?",
    options: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"],
    correctAnswer: "Beijing"
  },
  {
    id: 345,
    question: "Who painted 'The Persistence of Memory'?",
    options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    correctAnswer: "Salvador Dalí"
  },
  {
    id: 346,
    question: "What is the largest reptile in the world?",
    options: ["Saltwater Crocodile", "Komodo Dragon", "Anaconda", "Green Anaconda"],
    correctAnswer: "Saltwater Crocodile"
  },
  {
    id: 347,
    question: "Which planet is known as the 'Ringed Planet'?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 348,
    question: "What is the capital of South Africa?",
    options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"],
    correctAnswer: "Pretoria"
  },
  {
    id: 349,
    question: "Who wrote 'The Iliad'?",
    options: ["Homer", "Virgil", "Plato", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    id: 350,
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Si", "Sr"],
    correctAnswer: "Ag"
  },
  {
    id: 351,
    question: "Which country is known as the Land of the Thunder Dragon?",
    options: ["Bhutan", "Nepal", "Tibet", "Myanmar"],
    correctAnswer: "Bhutan"
  },
  {
    id: 352,
    question: "What is the capital of Mexico?",
    options: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
    correctAnswer: "Mexico City"
  },
  {
    id: 353,
    question: "Who discovered electricity?",
    options: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
    correctAnswer: "Benjamin Franklin"
  },
  {
    id: 354,
    question: "What is the largest fish in the world?",
    options: ["Whale Shark", "Great White Shark", "Blue Whale", "Giant Manta Ray"],
    correctAnswer: "Whale Shark"
  },
  {
    id: 355,
    question: "Which planet is known as the 'Ice Giant'?",
    options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
    correctAnswer: "Uranus"
  },
  {
    id: 356,
    question: "What is the capital of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    correctAnswer: "Ottawa"
  },
  {
    id: 357,
    question: "Who wrote 'The Divine Comedy'?",
    options: ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "William Shakespeare"],
    correctAnswer: "Dante Alighieri"
  },
  {
    id: 358,
    question: "What is the chemical symbol for nitrogen?",
    options: ["N", "Ni", "Na", "Ne"],
    correctAnswer: "N"
  },
  {
    id: 359,
    question: "Which country is known as the Land of the Midnight Sun?",
    options: ["Norway", "Sweden", "Finland", "Iceland"],
    correctAnswer: "Norway"
  },
  {
    id: 360,
    question: "What is the capital of Australia?",
    options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    id: 361,
    question: "Who wrote 'The Canterbury Tales'?",
    options: ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "Dante Alighieri"],
    correctAnswer: "Geoffrey Chaucer"
  },
  {
    id: 362,
    question: "What is the chemical symbol for helium?",
    options: ["He", "H", "Li", "Ne"],
    correctAnswer: "He"
  },
  {
    id: 363,
    question: "Which country is known as the Land of the White Elephant?",
    options: ["Thailand", "Cambodia", "Laos", "Myanmar"],
    correctAnswer: "Thailand"
  },
  {
    id: 364,
    question: "What is the capital of Argentina?",
    options: ["Buenos Aires", "Lima", "Bogotá", "Santiago"],
    correctAnswer: "Buenos Aires"
  },
  {
    id: 365,
    question: "Who wrote 'War and Peace'?",
    options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Nikolai Gogol"],
    correctAnswer: "Leo Tolstoy"
  },
  {
    id: 366,
    question: "What is the chemical symbol for calcium?",
    options: ["Ca", "C", "Cl", "Co"],
    correctAnswer: "Ca"
  },
  {
    id: 367,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 368,
    question: "What is the capital of Turkey?",
    options: ["Ankara", "Istanbul", "Izmir", "Antalya"],
    correctAnswer: "Ankara"
  },
  {
    id: 369,
    question: "Who wrote 'The Brothers Karamazov'?",
    options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Nikolai Gogol"],
    correctAnswer: "Fyodor Dostoevsky"
  },
  {
    id: 370,
    question: "What is the chemical symbol for magnesium?",
    options: ["Mg", "Mn", "Ma", "Mo"],
    correctAnswer: "Mg"
  },
  {
    id: 371,
    question: "Which country is known as the Land of the Golden Fleece?",
    options: ["Georgia", "Armenia", "Azerbaijan", "Turkey"],
    correctAnswer: "Georgia"
  },
  {
    id: 372,
    question: "What is the capital of Greece?",
    options: ["Athens", "Thessaloniki", "Patras", "Heraklion"],
    correctAnswer: "Athens"
  },{
    id: 401,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 402,
    question: "Who wrote 'The Great Gatsby'?",
    options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
    correctAnswer: "F. Scott Fitzgerald"
  },
  {
    id: 403,
    question: "What is the chemical symbol for oxygen?",
    options: ["O2", "CO2", "H2O", "N2"],
    correctAnswer: "O2"
  },
  {
    id: 404,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswer: "Mars"
  },
  {
    id: 405,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    id: 406,
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 407,
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    correctAnswer: "Tokyo"
  },
  {
    id: 408,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 409,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au"
  },
  {
    id: 410,
    question: "Which mountain is the highest in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    correctAnswer: "Mount Everest"
  },
  {
    id: 411,
    question: "Who wrote '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
    correctAnswer: "George Orwell"
  },
  {
    id: 412,
    question: "What is the capital of Brazil?",
    options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    correctAnswer: "Brasília"
  },
  {
    id: 413,
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury"
  },
  {
    id: 414,
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
    correctAnswer: "Antarctica"
  },
  {
    id: 415,
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    correctAnswer: "Charles Babbage"
  },
  {
    id: 416,
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    correctAnswer: "Berlin"
  },
  {
    id: 417,
    question: "Which country is famous for the Great Wall?",
    options: ["China", "Japan", "India", "South Korea"],
    correctAnswer: "China"
  },
  {
    id: 418,
    question: "What is the chemical symbol for carbon?",
    options: ["C", "CO2", "O2", "H2O"],
    correctAnswer: "C"
  },
  {
    id: 419,
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Virginia Woolf"],
    correctAnswer: "Jane Austen"
  },
  {
    id: 420,
    question: "What is the capital of Russia?",
    options: ["Moscow", "St. Petersburg", "Kiev", "Minsk"],
    correctAnswer: "Moscow"
  },
  {
    id: 421,
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 422,
    question: "What is the largest continent by area?",
    options: ["Asia", "Africa", "North America", "Europe"],
    correctAnswer: "Asia"
  },
  {
    id: 423,
    question: "Who painted 'The Last Supper'?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Vincent van Gogh"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 424,
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    correctAnswer: "Cairo"
  },
  {
    id: 425,
    question: "Who wrote 'The Catcher in the Rye'?",
    options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
    correctAnswer: "J.D. Salinger"
  },
  {
    id: 426,
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "S", "K"],
    correctAnswer: "Na"
  },
  {
    id: 427,
    question: "Which country is known as the Land of a Thousand Lakes?",
    options: ["Finland", "Sweden", "Norway", "Canada"],
    correctAnswer: "Finland"
  },
  {
    id: 428,
    question: "What is the capital of South Korea?",
    options: ["Seoul", "Busan", "Incheon", "Daegu"],
    correctAnswer: "Seoul"
  },
  {
    id: 429,
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Joseph Lister"],
    correctAnswer: "Alexander Fleming"
  },
  {
    id: 430,
    question: "What is the largest bird in the world?",
    options: ["Ostrich", "Eagle", "Albatross", "Penguin"],
    correctAnswer: "Ostrich"
  },
  {
    id: 431,
    question: "Which planet is known as the 'Morning Star'?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    correctAnswer: "Venus"
  },
  {
    id: 432,
    question: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Valencia", "Seville"],
    correctAnswer: "Madrid"
  },
  {
    id: 433,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "John Steinbeck", "Ernest Hemingway"],
    correctAnswer: "Harper Lee"
  },
  {
    id: 434,
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Ir", "In", "Au"],
    correctAnswer: "Fe"
  },
  {
    id: 435,
    question: "Which country is known as the Land of the Long White Cloud?",
    options: ["New Zealand", "Australia", "Fiji", "Samoa"],
    correctAnswer: "New Zealand"
  },
  {
    id: 436,
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Venice", "Florence"],
    correctAnswer: "Rome"
  },
  {
    id: 437,
    question: "Who painted 'The Scream'?",
    options: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
    correctAnswer: "Edvard Munch"
  },
  {
    id: 438,
    question: "What is the largest lake in the world?",
    options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Baikal"],
    correctAnswer: "Caspian Sea"
  },
  {
    id: 439,
    question: "Which planet is known as the 'Blue Planet'?",
    options: ["Earth", "Neptune", "Uranus", "Saturn"],
    correctAnswer: "Earth"
  },
  {
    id: 440,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
    correctAnswer: "Delhi"
  },
  {
    id: 441,
    question: "Who wrote 'The Odyssey'?",
    options: ["Homer", "Virgil", "Plato", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    id: 442,
    question: "What is the chemical symbol for potassium?",
    options: ["K", "P", "Po", "Pt"],
    correctAnswer: "K"
  },
  {
    id: 443,
    question: "Which country is known as the Land of the Free?",
    options: ["United States", "Canada", "Australia", "New Zealand"],
    correctAnswer: "United States"
  },
  {
    id: 444,
    question: "What is the capital of China?",
    options: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"],
    correctAnswer: "Beijing"
  },
  {
    id: 445,
    question: "Who painted 'The Persistence of Memory'?",
    options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    correctAnswer: "Salvador Dalí"
  },
  {
    id: 446,
    question: "What is the largest reptile in the world?",
    options: ["Saltwater Crocodile", "Komodo Dragon", "Anaconda", "Green Anaconda"],
    correctAnswer: "Saltwater Crocodile"
  },
  {
    id: 447,
    question: "Which planet is known as the 'Ringed Planet'?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 448,
    question: "What is the capital of South Africa?",
    options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"],
    correctAnswer: "Pretoria"
  },
  {
    id: 449,
    question: "Who wrote 'The Iliad'?",
    options: ["Homer", "Virgil", "Plato", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    id: 450,
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Si", "Sr"],
    correctAnswer: "Ag"
  },
  {
    id: 451,
    question: "Which country is known as the Land of the Thunder Dragon?",
    options: ["Bhutan", "Nepal", "Tibet", "Myanmar"],
    correctAnswer: "Bhutan"
  },
  {
    id: 452,
    question: "What is the capital of Mexico?",
    options: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
    correctAnswer: "Mexico City"
  },
  {
    id: 453,
    question: "Who discovered electricity?",
    options: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
    correctAnswer: "Benjamin Franklin"
  },
  {
    id: 454,
    question: "What is the largest fish in the world?",
    options: ["Whale Shark", "Great White Shark", "Blue Whale", "Giant Manta Ray"],
    correctAnswer: "Whale Shark"
  },
  {
    id: 455,
    question: "Which planet is known as the 'Ice Giant'?",
    options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
    correctAnswer: "Uranus"
  },
  {
    id: 456,
    question: "What is the capital of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    correctAnswer: "Ottawa"
  },
  {
    id: 457,
    question: "Who wrote 'The Divine Comedy'?",
    options: ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "William Shakespeare"],
    correctAnswer: "Dante Alighieri"
  },
  {
    id: 458,
    question: "What is the chemical symbol for nitrogen?",
    options: ["N", "Ni", "Na", "Ne"],
    correctAnswer: "N"
  },
  {
    id: 459,
    question: "Which country is known as the Land of the Midnight Sun?",
    options: ["Norway", "Sweden", "Finland", "Iceland"],
    correctAnswer: "Norway"
  },
  {
    id: 460,
    question: "What is the capital of Australia?",
    options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    id: 461,
    question: "Who wrote 'The Canterbury Tales'?",
    options: ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "Dante Alighieri"],
    correctAnswer: "Geoffrey Chaucer"
  },
  {
    id: 462,
    question: "What is the chemical symbol for helium?",
    options: ["He", "H", "Li", "Ne"],
    correctAnswer: "He"
  },
  {
    id: 463,
    question: "Which country is known as the Land of the White Elephant?",
    options: ["Thailand", "Cambodia", "Laos", "Myanmar"],
    correctAnswer: "Thailand"
  },
  {
    id: 464,
    question: "What is the capital of Argentina?",
    options: ["Buenos Aires", "Lima", "Bogotá", "Santiago"],
    correctAnswer: "Buenos Aires"
  },
  {
    id: 465,
    question: "Who wrote 'War and Peace'?",
    options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Nikolai Gogol"],
    correctAnswer: "Leo Tolstoy"
  },
  {
    id: 466,
    question: "What is the chemical symbol for calcium?",
    options: ["Ca", "C", "Cl", "Co"],
    correctAnswer: "Ca"
  },
  {
    id: 467,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 468,
    question: "What is the capital of Turkey?",
    options: ["Ankara", "Istanbul", "Izmir", "Antalya"],
    correctAnswer: "Ankara"
  },
  {
    id: 469,
    question: "Who wrote 'The Brothers Karamazov'?",
    options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Nikolai Gogol"],
    correctAnswer: "Fyodor Dostoevsky"
  },
  {
    id: 470,
    question: "What is the chemical symbol for magnesium?",
    options: ["Mg", "Mn", "Ma", "Mo"],
    correctAnswer: "Mg"
  },
  {
    id: 471,
    question: "Which country is known as the Land of the Golden Fleece?",
    options: ["Georgia", "Armenia", "Azerbaijan", "Turkey"],
    correctAnswer: "Georgia"
  },
  {
    id: 472,
    question: "What is the capital of Greece?",
    options: ["Athens", "Thessaloniki", "Patras", "Heraklion"],
    correctAnswer: "Athens"
  },
   {
    id: 501,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 502,
    question: "Who wrote 'The Great Gatsby'?",
    options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
    correctAnswer: "F. Scott Fitzgerald"
  },
  {
    id: 503,
    question: "What is the chemical symbol for oxygen?",
    options: ["O2", "CO2", "H2O", "N2"],
    correctAnswer: "O2"
  },
  {
    id: 504,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswer: "Mars"
  },
  {
    id: 505,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    id: 506,
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 507,
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    correctAnswer: "Tokyo"
  },
  {
    id: 508,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 509,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au"
  },
  {
    id: 510,
    question: "Which mountain is the highest in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    correctAnswer: "Mount Everest"
  },
  {
    id: 511,
    question: "Who wrote '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
    correctAnswer: "George Orwell"
  },
  {
    id: 512,
    question: "What is the capital of Brazil?",
    options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    correctAnswer: "Brasília"
  },
  {
    id: 513,
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury"
  },
  {
    id: 514,
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
    correctAnswer: "Antarctica"
  },
  {
    id: 515,
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    correctAnswer: "Charles Babbage"
  },
  {
    id: 516,
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    correctAnswer: "Berlin"
  },
  {
    id: 517,
    question: "Which country is famous for the Great Wall?",
    options: ["China", "Japan", "India", "South Korea"],
    correctAnswer: "China"
  },
  {
    id: 518,
    question: "What is the chemical symbol for carbon?",
    options: ["C", "CO2", "O2", "H2O"],
    correctAnswer: "C"
  },
  {
    id: 519,
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Virginia Woolf"],
    correctAnswer: "Jane Austen"
  },
  {
    id: 520,
    question: "What is the capital of Russia?",
    options: ["Moscow", "St. Petersburg", "Kiev", "Minsk"],
    correctAnswer: "Moscow"
  },
  {
    id: 521,
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 522,
    question: "What is the largest continent by area?",
    options: ["Asia", "Africa", "North America", "Europe"],
    correctAnswer: "Asia"
  },
  {
    id: 523,
    question: "Who painted 'The Last Supper'?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Vincent van Gogh"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 524,
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    correctAnswer: "Cairo"
  },
  {
    id: 525,
    question: "Who wrote 'The Catcher in the Rye'?",
    options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
    correctAnswer: "J.D. Salinger"
  },
  {
    id: 526,
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "S", "K"],
    correctAnswer: "Na"
  },
  {
    id: 527,
    question: "Which country is known as the Land of a Thousand Lakes?",
    options: ["Finland", "Sweden", "Norway", "Canada"],
    correctAnswer: "Finland"
  },
  {
    id: 528,
    question: "What is the capital of South Korea?",
    options: ["Seoul", "Busan", "Incheon", "Daegu"],
    correctAnswer: "Seoul"
  },
  {
    id: 529,
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Joseph Lister"],
    correctAnswer: "Alexander Fleming"
  },
  {
    id: 530,
    question: "What is the largest bird in the world?",
    options: ["Ostrich", "Eagle", "Albatross", "Penguin"],
    correctAnswer: "Ostrich"
  },
  {
    id: 531,
    question: "Which planet is known as the 'Morning Star'?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    correctAnswer: "Venus"
  },
  {
    id: 532,
    question: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Valencia", "Seville"],
    correctAnswer: "Madrid"
  },
  {
    id: 533,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "John Steinbeck", "Ernest Hemingway"],
    correctAnswer: "Harper Lee"
  },
  {
    id: 534,
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Ir", "In", "Au"],
    correctAnswer: "Fe"
  },
  {
    id: 535,
    question: "Which country is known as the Land of the Long White Cloud?",
    options: ["New Zealand", "Australia", "Fiji", "Samoa"],
    correctAnswer: "New Zealand"
  },
  {
    id: 536,
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Venice", "Florence"],
    correctAnswer: "Rome"
  },
  {
    id: 537,
    question: "Who painted 'The Scream'?",
    options: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
    correctAnswer: "Edvard Munch"
  },
  {
    id: 538,
    question: "What is the largest lake in the world?",
    options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Baikal"],
    correctAnswer: "Caspian Sea"
  },
  {
    id: 539,
    question: "Which planet is known as the 'Blue Planet'?",
    options: ["Earth", "Neptune", "Uranus", "Saturn"],
    correctAnswer: "Earth"
  },
  {
    id: 540,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
    correctAnswer: "Delhi"
  },
  {
    id: 541,
    question: "Who wrote 'The Odyssey'?",
    options: ["Homer", "Virgil", "Plato", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    id: 542,
    question: "What is the chemical symbol for potassium?",
    options: ["K", "P", "Po", "Pt"],
    correctAnswer: "K"
  },
  {
    id: 543,
    question: "Which country is known as the Land of the Free?",
    options: ["United States", "Canada", "Australia", "New Zealand"],
    correctAnswer: "United States"
  },
  {
    id: 544,
    question: "What is the capital of China?",
    options: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"],
    correctAnswer: "Beijing"
  },
  {
    id: 545,
    question: "Who painted 'The Persistence of Memory'?",
    options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    correctAnswer: "Salvador Dalí"
  },
  {
    id: 546,
    question: "What is the largest reptile in the world?",
    options: ["Saltwater Crocodile", "Komodo Dragon", "Anaconda", "Green Anaconda"],
    correctAnswer: "Saltwater Crocodile"
  },
  {
    id: 547,
    question: "Which planet is known as the 'Ringed Planet'?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 548,
    question: "What is the capital of South Africa?",
    options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"],
    correctAnswer: "Pretoria"
  },
  {
    id: 549,
    question: "Who wrote 'The Iliad'?",
    options: ["Homer", "Virgil", "Plato", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    id: 550,
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Si", "Sr"],
    correctAnswer: "Ag"
  },
  {
    id: 551,
    question: "Which country is known as the Land of the Thunder Dragon?",
    options: ["Bhutan", "Nepal", "Tibet", "Myanmar"],
    correctAnswer: "Bhutan"
  },
  {
    id: 552,
    question: "What is the capital of Mexico?",
    options: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
    correctAnswer: "Mexico City"
  },
  {
    id: 553,
    question: "Who discovered electricity?",
    options: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
    correctAnswer: "Benjamin Franklin"
  },
  {
    id: 554,
    question: "What is the largest fish in the world?",
    options: ["Whale Shark", "Great White Shark", "Blue Whale", "Giant Manta Ray"],
    correctAnswer: "Whale Shark"
  },
  {
    id: 555,
    question: "Which planet is known as the 'Ice Giant'?",
    options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
    correctAnswer: "Uranus"
  },
  {
    id: 556,
    question: "What is the capital of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    correctAnswer: "Ottawa"
  },
  {
    id: 557,
    question: "Who wrote 'The Divine Comedy'?",
    options: ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "William Shakespeare"],
    correctAnswer: "Dante Alighieri"
  },
  {
    id: 558,
    question: "What is the chemical symbol for nitrogen?",
    options: ["N", "Ni", "Na", "Ne"],
    correctAnswer: "N"
  },
  {
    id: 559,
    question: "Which country is known as the Land of the Midnight Sun?",
    options: ["Norway", "Sweden", "Finland", "Iceland"],
    correctAnswer: "Norway"
  },
  {
    id: 560,
    question: "What is the capital of Australia?",
    options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    id: 561,
    question: "Who wrote 'The Canterbury Tales'?",
    options: ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "Dante Alighieri"],
    correctAnswer: "Geoffrey Chaucer"
  },
  {
    id: 562,
    question: "What is the chemical symbol for helium?",
    options: ["He", "H", "Li", "Ne"],
    correctAnswer: "He"
  },
  {
    id: 563,
    question: "Which country is known as the Land of the White Elephant?",
    options: ["Thailand", "Cambodia", "Laos", "Myanmar"],
    correctAnswer: "Thailand"
  },
  {
    id: 564,
    question: "What is the capital of Argentina?",
    options: ["Buenos Aires", "Lima", "Bogotá", "Santiago"],
    correctAnswer: "Buenos Aires"
  },
  {
    id: 565,
    question: "Who wrote 'War and Peace'?",
    options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Nikolai Gogol"],
    correctAnswer: "Leo Tolstoy"
  },
  {
    id: 566,
    question: "What is the chemical symbol for calcium?",
    options: ["Ca", "C", "Cl", "Co"],
    correctAnswer: "Ca"
  },
  {
    id: 567,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 568,
    question: "What is the capital of Turkey?",
    options: ["Ankara", "Istanbul", "Izmir", "Antalya"],
    correctAnswer: "Ankara"
  },
  {
    id: 569,
    question: "Who wrote 'The Brothers Karamazov'?",
    options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Nikolai Gogol"],
    correctAnswer: "Fyodor Dostoevsky"
  },
  {
    id: 570,
    question: "What is the chemical symbol for magnesium?",
    options: ["Mg", "Mn", "Ma", "Mo"],
    correctAnswer: "Mg"
  },
  {
    id: 571,
    question: "Which country is known as the Land of the Golden Fleece?",
    options: ["Georgia", "Armenia", "Azerbaijan", "Turkey"],
    correctAnswer: "Georgia"
  },
  {
    id: 572,
    question: "What is the capital of Greece?",
    options: ["Athens", "Thessaloniki", "Patras", "Heraklion"],
    correctAnswer: "Athens"
  },
   {
    id: 601,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 602,
    question: "Who wrote 'The Great Gatsby'?",
    options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
    correctAnswer: "F. Scott Fitzgerald"
  },
  {
    id: 603,
    question: "What is the chemical symbol for oxygen?",
    options: ["O2", "CO2", "H2O", "N2"],
    correctAnswer: "O2"
  },
  {
    id: 604,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswer: "Mars"
  },
  {
    id: 605,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    id: 606,
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 607,
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    correctAnswer: "Tokyo"
  },
  {
    id: 608,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 609,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au"
  },
  {
    id: 610,
    question: "Which mountain is the highest in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    correctAnswer: "Mount Everest"
  },
  {
    id: 611,
    question: "Who wrote '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
    correctAnswer: "George Orwell"
  },
  {
    id: 612,
    question: "What is the capital of Brazil?",
    options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    correctAnswer: "Brasília"
  },
  {
    id: 613,
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury"
  },
  {
    id: 614,
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
    correctAnswer: "Antarctica"
  },
  {
    id: 615,
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    correctAnswer: "Charles Babbage"
  },
  {
    id: 616,
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    correctAnswer: "Berlin"
  },
  {
    id: 617,
    question: "Which country is famous for the Great Wall?",
    options: ["China", "Japan", "India", "South Korea"],
    correctAnswer: "China"
  },
  {
    id: 618,
    question: "What is the chemical symbol for carbon?",
    options: ["C", "CO2", "O2", "H2O"],
    correctAnswer: "C"
  },
  {
    id: 619,
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Virginia Woolf"],
    correctAnswer: "Jane Austen"
  },
  {
    id: 620,
    question: "What is the capital of Russia?",
    options: ["Moscow", "St. Petersburg", "Kiev", "Minsk"],
    correctAnswer: "Moscow"
  },
  {
    id: 621,
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 622,
    question: "What is the largest continent by area?",
    options: ["Asia", "Africa", "North America", "Europe"],
    correctAnswer: "Asia"
  },
  {
    id: 623,
    question: "Who painted 'The Last Supper'?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Vincent van Gogh"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 624,
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    correctAnswer: "Cairo"
  },
  {
    id: 625,
    question: "Who wrote 'The Catcher in the Rye'?",
    options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
    correctAnswer: "J.D. Salinger"
  },
  {
    id: 626,
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "S", "K"],
    correctAnswer: "Na"
  },
  {
    id: 627,
    question: "Which country is known as the Land of a Thousand Lakes?",
    options: ["Finland", "Sweden", "Norway", "Canada"],
    correctAnswer: "Finland"
  },
  {
    id: 628,
    question: "What is the capital of South Korea?",
    options: ["Seoul", "Busan", "Incheon", "Daegu"],
    correctAnswer: "Seoul"
  },
  {
    id: 629,
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Joseph Lister"],
    correctAnswer: "Alexander Fleming"
  },
  {
    id: 630,
    question: "What is the largest bird in the world?",
    options: ["Ostrich", "Eagle", "Albatross", "Penguin"],
    correctAnswer: "Ostrich"
  },
  {
    id: 631,
    question: "Which planet is known as the 'Morning Star'?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    correctAnswer: "Venus"
  },
  {
    id: 632,
    question: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Valencia", "Seville"],
    correctAnswer: "Madrid"
  },
  {
    id: 633,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "John Steinbeck", "Ernest Hemingway"],
    correctAnswer: "Harper Lee"
  },
  {
    id: 634,
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Ir", "In", "Au"],
    correctAnswer: "Fe"
  },
  {
    id: 635,
    question: "Which country is known as the Land of the Long White Cloud?",
    options: ["New Zealand", "Australia", "Fiji", "Samoa"],
    correctAnswer: "New Zealand"
  },
  {
    id: 636,
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Venice", "Florence"],
    correctAnswer: "Rome"
  },
  {
    id: 637,
    question: "Who painted 'The Scream'?",
    options: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
    correctAnswer: "Edvard Munch"
  },
  {
    id: 638,
    question: "What is the largest lake in the world?",
    options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Baikal"],
    correctAnswer: "Caspian Sea"
  },
  {
    id: 639,
    question: "Which planet is known as the 'Blue Planet'?",
    options: ["Earth", "Neptune", "Uranus", "Saturn"],
    correctAnswer: "Earth"
  },
  {
    id: 640,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
    correctAnswer: "Delhi"
  },
  {
    id: 641,
    question: "Who wrote 'The Odyssey'?",
    options: ["Homer", "Virgil", "Plato", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    id: 642,
    question: "What is the chemical symbol for potassium?",
    options: ["K", "P", "Po", "Pt"],
    correctAnswer: "K"
  },
  {
    id: 643,
    question: "Which country is known as the Land of the Free?",
    options: ["United States", "Canada", "Australia", "New Zealand"],
    correctAnswer: "United States"
  },
  {
    id: 644,
    question: "What is the capital of China?",
    options: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"],
    correctAnswer: "Beijing"
  },
  {
    id: 645,
    question: "Who painted 'The Persistence of Memory'?",
    options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    correctAnswer: "Salvador Dalí"
  },
  {
    id: 646,
    question: "What is the largest reptile in the world?",
    options: ["Saltwater Crocodile", "Komodo Dragon", "Anaconda", "Green Anaconda"],
    correctAnswer: "Saltwater Crocodile"
  },
  {
    id: 647,
    question: "Which planet is known as the 'Ringed Planet'?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 648,
    question: "What is the capital of South Africa?",
    options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"],
    correctAnswer: "Pretoria"
  },
  {
    id: 649,
    question: "Who wrote 'The Iliad'?",
    options: ["Homer", "Virgil", "Plato", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    id: 650,
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Si", "Sr"],
    correctAnswer: "Ag"
  },
  {
    id: 651,
    question: "Which country is known as the Land of the Thunder Dragon?",
    options: ["Bhutan", "Nepal", "Tibet", "Myanmar"],
    correctAnswer: "Bhutan"
  },
  {
    id: 652,
    question: "What is the capital of Mexico?",
    options: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
    correctAnswer: "Mexico City"
  },
  {
    id: 653,
    question: "Who discovered electricity?",
    options: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
    correctAnswer: "Benjamin Franklin"
  },
  {
    id: 654,
    question: "What is the largest fish in the world?",
    options: ["Whale Shark", "Great White Shark", "Blue Whale", "Giant Manta Ray"],
    correctAnswer: "Whale Shark"
  },
  {
    id: 655,
    question: "Which planet is known as the 'Ice Giant'?",
    options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
    correctAnswer: "Uranus"
  },
  {
    id: 656,
    question: "What is the capital of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    correctAnswer: "Ottawa"
  },
  {
    id: 657,
    question: "Who wrote 'The Divine Comedy'?",
    options: ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "William Shakespeare"],
    correctAnswer: "Dante Alighieri"
  },
  {
    id: 658,
    question: "What is the chemical symbol for nitrogen?",
    options: ["N", "Ni", "Na", "Ne"],
    correctAnswer: "N"
  },
  {
    id: 659,
    question: "Which country is known as the Land of the Midnight Sun?",
    options: ["Norway", "Sweden", "Finland", "Iceland"],
    correctAnswer: "Norway"
  },
  {
    id: 660,
    question: "What is the capital of Australia?",
    options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    id: 661,
    question: "Who wrote 'The Canterbury Tales'?",
    options: ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "Dante Alighieri"],
    correctAnswer: "Geoffrey Chaucer"
  },
  {
    id: 662,
    question: "What is the chemical symbol for helium?",
    options: ["He", "H", "Li", "Ne"],
    correctAnswer: "He"
  },
  {
    id: 663,
    question: "Which country is known as the Land of the White Elephant?",
    options: ["Thailand", "Cambodia", "Laos", "Myanmar"],
    correctAnswer: "Thailand"
  },
  {
    id: 664,
    question: "What is the capital of Argentina?",
    options: ["Buenos Aires", "Lima", "Bogotá", "Santiago"],
    correctAnswer: "Buenos Aires"
  },
  {
    id: 665,
    question: "Who wrote 'War and Peace'?",
    options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Nikolai Gogol"],
    correctAnswer: "Leo Tolstoy"
  },
  {
    id: 666,
    question: "What is the chemical symbol for calcium?",
    options: ["Ca", "C", "Cl", "Co"],
    correctAnswer: "Ca"
  },
  {
    id: 667,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 668,
    question: "What is the capital of Turkey?",
    options: ["Ankara", "Istanbul", "Izmir", "Antalya"],
    correctAnswer: "Ankara"
  },
  {
    id: 669,
    question: "Who wrote 'The Brothers Karamazov'?",
    options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Nikolai Gogol"],
    correctAnswer: "Fyodor Dostoevsky"
  },
  {
    id: 670,
    question: "What is the chemical symbol for magnesium?",
    options: ["Mg", "Mn", "Ma", "Mo"],
    correctAnswer: "Mg"
  },
  {
    id: 701,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 702,
    question: "Who wrote 'The Great Gatsby'?",
    options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
    correctAnswer: "F. Scott Fitzgerald"
  },
  {
    id: 703,
    question: "What is the chemical symbol for oxygen?",
    options: ["O2", "CO2", "H2O", "N2"],
    correctAnswer: "O2"
  },
  {
    id: 704,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswer: "Mars"
  },
  {
    id: 705,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    id: 706,
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 707,
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    correctAnswer: "Tokyo"
  },
  {
    id: 708,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 709,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au"
  },
  {
    id: 710,
    question: "Which mountain is the highest in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    correctAnswer: "Mount Everest"
  },
  {
    id: 711,
    question: "Who wrote '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
    correctAnswer: "George Orwell"
  },
  {
    id: 712,
    question: "What is the capital of Brazil?",
    options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    correctAnswer: "Brasília"
  },
  {
    id: 713,
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury"
  },
  {
    id: 714,
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
    correctAnswer: "Antarctica"
  },
  {
    id: 715,
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    correctAnswer: "Charles Babbage"
  },
  {
    id: 716,
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    correctAnswer: "Berlin"
  },
  {
    id: 717,
    question: "Which country is famous for the Great Wall?",
    options: ["China", "Japan", "India", "South Korea"],
    correctAnswer: "China"
  },
  {
    id: 718,
    question: "What is the chemical symbol for carbon?",
    options: ["C", "CO2", "O2", "H2O"],
    correctAnswer: "C"
  },
  {
    id: 719,
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Virginia Woolf"],
    correctAnswer: "Jane Austen"
  },
  {
    id: 720,
    question: "What is the capital of Russia?",
    options: ["Moscow", "St. Petersburg", "Kiev", "Minsk"],
    correctAnswer: "Moscow"
  },
  {
    id: 721,
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 722,
    question: "What is the largest continent by area?",
    options: ["Asia", "Africa", "North America", "Europe"],
    correctAnswer: "Asia"
  },
  {
    id: 723,
    question: "Who painted 'The Last Supper'?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Vincent van Gogh"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 724,
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    correctAnswer: "Cairo"
  },
  {
    id: 725,
    question: "Who wrote 'The Catcher in the Rye'?",
    options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
    correctAnswer: "J.D. Salinger"
  },
  {
    id: 726,
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "S", "K"],
    correctAnswer: "Na"
  },
  {
    id: 727,
    question: "Which country is known as the Land of a Thousand Lakes?",
    options: ["Finland", "Sweden", "Norway", "Canada"],
    correctAnswer: "Finland"
  },
  {
    id: 728,
    question: "What is the capital of South Korea?",
    options: ["Seoul", "Busan", "Incheon", "Daegu"],
    correctAnswer: "Seoul"
  },
  {
    id: 729,
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Joseph Lister"],
    correctAnswer: "Alexander Fleming"
  },
  {
    id: 730,
    question: "What is the largest bird in the world?",
    options: ["Ostrich", "Eagle", "Albatross", "Penguin"],
    correctAnswer: "Ostrich"
  },
  {
    id: 731,
    question: "Which planet is known as the 'Morning Star'?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    correctAnswer: "Venus"
  },
  {
    id: 732,
    question: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Valencia", "Seville"],
    correctAnswer: "Madrid"
  },
  {
    id: 733,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "John Steinbeck", "Ernest Hemingway"],
    correctAnswer: "Harper Lee"
  },
  {
    id: 734,
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Ir", "In", "Au"],
    correctAnswer: "Fe"
  },
  {
    id: 735,
    question: "Which country is known as the Land of the Long White Cloud?",
    options: ["New Zealand", "Australia", "Fiji", "Samoa"],
    correctAnswer: "New Zealand"
  },
  {
    id: 736,
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Venice", "Florence"],
    correctAnswer: "Rome"
  },
  {
    id: 737,
    question: "Who painted 'The Scream'?",
    options: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
    correctAnswer: "Edvard Munch"
  },
  {
    id: 738,
    question: "What is the largest lake in the world?",
    options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Baikal"],
    correctAnswer: "Caspian Sea"
  },
  {
    id: 739,
    question: "Which planet is known as the 'Blue Planet'?",
    options: ["Earth", "Neptune", "Uranus", "Saturn"],
    correctAnswer: "Earth"
  },
  {
    id: 740,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
    correctAnswer: "Delhi"
  },
  {
    id: 741,
    question: "Who wrote 'The Odyssey'?",
    options: ["Homer", "Virgil", "Plato", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    id: 742,
    question: "What is the chemical symbol for potassium?",
    options: ["K", "P", "Po", "Pt"],
    correctAnswer: "K"
  },
  {
    id: 743,
    question: "Which country is known as the Land of the Free?",
    options: ["United States", "Canada", "Australia", "New Zealand"],
    correctAnswer: "United States"
  },
  {
    id: 744,
    question: "What is the capital of China?",
    options: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"],
    correctAnswer: "Beijing"
  },
  {
    id: 745,
    question: "Who painted 'The Persistence of Memory'?",
    options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    correctAnswer: "Salvador Dalí"
  },
  {
    id: 746,
    question: "What is the largest reptile in the world?",
    options: ["Saltwater Crocodile", "Komodo Dragon", "Anaconda", "Green Anaconda"],
    correctAnswer: "Saltwater Crocodile"
  },
  {
    id: 747,
    question: "Which planet is known as the 'Ringed Planet'?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correctAnswer: "Saturn"
  },
  {
    id: 748,
    question: "What is the capital of South Africa?",
    options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"],
    correctAnswer: "Pretoria"
  },
  {
    id: 749,
    question: "Who wrote 'The Iliad'?",
    options: ["Homer", "Virgil", "Plato", "Aristotle"],
    correctAnswer: "Homer"
  },
  {
    id: 750,
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Si", "Sr"],
    correctAnswer: "Ag"
  },
  {
    id: 751,
    question: "Which country is known as the Land of the Thunder Dragon?",
    options: ["Bhutan", "Nepal", "Tibet", "Myanmar"],
    correctAnswer: "Bhutan"
  },
  {
    id: 752,
    question: "What is the capital of Mexico?",
    options: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
    correctAnswer: "Mexico City"
  },
  {
    id: 753,
    question: "Who discovered electricity?",
    options: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
    correctAnswer: "Benjamin Franklin"
  },
  {
    id: 754,
    question: "What is the largest fish in the world?",
    options: ["Whale Shark", "Great White Shark", "Blue Whale", "Giant Manta Ray"],
    correctAnswer: "Whale Shark"
  },
  {
    id: 755,
    question: "Which planet is known as the 'Ice Giant'?",
    options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
    correctAnswer: "Uranus"
  },
  {
    id: 756,
    question: "What is the capital of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    correctAnswer: "Ottawa"
  },
  {
    id: 757,
    question: "Who wrote 'The Divine Comedy'?",
    options: ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "William Shakespeare"],
    correctAnswer: "Dante Alighieri"
  },
  {
    id: 758,
    question: "What is the chemical symbol for nitrogen?",
    options: ["N", "Ni", "Na", "Ne"],
    correctAnswer: "N"
  },
  {
    id: 759,
    question: "Which country is known as the Land of the Midnight Sun?",
    options: ["Norway", "Sweden", "Finland", "Iceland"],
    correctAnswer: "Norway"
  },
  {
    id: 760,
    question: "What is the capital of Australia?",
    options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    id: 761,
    question: "Who wrote 'The Canterbury Tales'?",
    options: ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "Dante Alighieri"],
    correctAnswer: "Geoffrey Chaucer"
  },
  {
    id: 762,
    question: "What is the chemical symbol for helium?",
    options: ["He", "H", "Li", "Ne"],
    correctAnswer: "He"
  },
  {
    id: 763,
    question: "Which country is known as the Land of the White Elephant?",
    options: ["Thailand", "Cambodia", "Laos", "Myanmar"],
    correctAnswer: "Thailand"
  },
  {
    id: 764,
    question: "What is the capital of Argentina?",
    options: ["Buenos Aires", "Lima", "Bogotá", "Santiago"],
    correctAnswer: "Buenos Aires"
  },
  {
    id: 765,
    question: "Who wrote 'War and Peace'?",
    options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Nikolai Gogol"],
    correctAnswer: "Leo Tolstoy"
  },
  {
    id: 766,
    question: "What is the chemical symbol for calcium?",
    options: ["Ca", "C", "Cl", "Co"],
    correctAnswer: "Ca"
  },
  {
    id: 767,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 768,
    question: "What is the capital of Turkey?",
    options: ["Ankara", "Istanbul", "Izmir", "Antalya"],
    correctAnswer: "Ankara"
  },
  {
    id: 769,
    question: "Who wrote 'The Brothers Karamazov'?",
    options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Nikolai Gogol"],
    correctAnswer: "Fyodor Dostoevsky"
  },
  {
    id: 770,
    question: "What is the chemical symbol for magnesium?",
    options: ["Mg", "Mn", "Ma", "Mo"],
    correctAnswer: "Mg"
  }
  // Add more questions as needed
];

const random30Questions = (quizList: QuizQuestion[]) => {
    const randomQuestions = quizList.sort(() => Math.random() - 0.5).slice(0, 30);
    return randomQuestions;
}

 const quizData=  random30Questions(quizList)

export default quizData;



