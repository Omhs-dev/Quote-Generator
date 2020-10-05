const btn = document.getElementById('btn');
const output = document.getElementById('output');
const quotes = 
[
    '"Early in my life, I had learned that if you want something, you had better make some noise." Malcom X',
    '"I have no mercy or compassion in me for a society that will crush people, and then penalize them for not being able to stand up under the weight." Malcom X',
    '"The ability to read awoke inside of me some long dormant craving to be mentally alive." Malcom X',
    '"It is only after slavery and prison that the sweetest appreciation of freedom can come." Malcom X',
    '"I want to be remembered as someone who was sincere. Even if I made mistakes, they were made in sincerity." Malcom X',
    '"A man who stands for nothing will fall for anything." Malcom X',
    '"A race of people is like an individual man; until it uses its own talent, takes pride in its own history, expresses its own culture, affirms its own selfhood, it can never fulfill itself." Malcom X',
    '"A man who stands for nothing will fall for anything." Malcom X',
    '"Stumbling is not falling." Malcom X',
    '"They put your mind right in a bag, and take it wherever they want." Malcom X'

];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})