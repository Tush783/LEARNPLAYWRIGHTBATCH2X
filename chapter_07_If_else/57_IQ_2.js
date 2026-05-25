//Student Grade Calculator
//Problem: Take marks (0-100) and print the grade based on these rules
//90 and above --> A 80-89 --> B 70-79-->C 60-69-->D Below 60 --> Fail
let score =50;
if(score >= 90)
{
    console.log("A GRADE");
}
else if (score >= 80 && score <= 89)
{
    console.log("B GRADE");
}
else if (score >= 70 && score <= 79)
{
    console.log("C GRADE");
}
else if (score >= 60 && score <= 69)
{
    console.log("C GRADE");
}
else
{
    console.log("FAIL - RETRY DON'T WORRY");
}
