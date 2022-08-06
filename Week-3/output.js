function createIncrement()
{
    let count = 0;
    function increment()
    {
        count++;
    }
    let message = `Count is ${count}`;
    function log()
    {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

/*
 0 will print always!
 because when return log & increment the message variable stores -> [message = `Count is 0`]
 every time increment is called it increment the count variable and does not update the message string. string is always same.
*/



