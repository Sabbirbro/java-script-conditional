var firstmargin = 2;
var secondmargin = 9;
var thirdmargin = 8;

if ( firstmargin == secondmargin || firstmargin == thirdmargin )
{
    console.log('somobahu triangle');
}
 else if ( secondmargin == firstmargin || secondmargin == thirdmargin )
{
    console.log('somobahu triangle');
}
else if ( thirdmargin == firstmargin || thirdmargin == secondmargin )
{
    console.log('somobahu triangle');
}
else
{
    console.log('NOT a somobahu triangle');
}
