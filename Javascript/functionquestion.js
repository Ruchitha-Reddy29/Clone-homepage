function countVowel(str){
    let count = 0;
    for(i=0;i<str.length;i++){
       if( str[i] === 'a'||str[i]==='e' || str[i]==='i'|| str[i]==='o'||str[i]==='u' ){
        count++
       }
      
       console.log(count)
    }
    console.log(`the no.of vowels in the string is ${count}`)
}

countVowel("Ruchitha")
countVowel("bcd")



//arrow function to perform the same task

const countvowel =(str)=>{
    let count = 0;
    for(i=0;i<str.length;i++){
       if( str[i] === 'a'||str[i]==='e' || str[i]==='i'|| str[i]==='o'||str[i]==='u' ){
        count++
       }
      
       console.log(count)
    }
    console.log(`the no.of vowels in the string is ${count}`)

}

countvowel("Lekhya")