function addQuestion(){
    fs=require('questionManager');
    var donnee="";
    donnee+="questions =";
    fs.writeFileSync('questionManager.json', donnee);
}