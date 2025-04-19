function longRunningTask(stepName,callback){
setTimeout(function(){

console.log(stepName + "completed");
callback();

},1000);



}

function step1(){
return new Promise(function(resolve){
longRunningTask("step 1", resolve);
});

}

function step2(){
    return new Promise(function(resolve){
    longRunningTask("step 2", resolve);
    });
    
    }

    
function step3(){
    return new Promise(function(resolve){
    longRunningTask("step 3", resolve);
    });
    
    }
    async function taskrun(){
   await step1();
   await step2();
   await step3();
   console.log("All task completed");

    }
    taskrun();