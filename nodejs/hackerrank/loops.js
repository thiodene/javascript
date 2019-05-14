/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowel = '';
    var consonant = '';
    //console.log(s.length);
    for (var i = 0; i <= s.length - 1; i++)
    {
        if (s.substr(i,1) == 'a' || s.substr(i,1) == 'e' || s.substr(i, 1) == 'i' || s.substr(i, 1) == 'o' || s.substr(i, 1) == 'u')
        {
            vowel += s.substr(i, 1);
            //console.log(s.substr(i,1));

        }
        else
        {
            consonant += s.substr(i, 1);
            //console.log(s.substr(i, 1));
        }
      
      
    }
    for (var j = 0; j <= vowel.length - 1; j++)
    {
        console.log(vowel.substr(j,1));
    }
    for (var k = 0; k <= consonant.length - 1; k++) {
        console.log(consonant.substr(k,1));
    }
}
