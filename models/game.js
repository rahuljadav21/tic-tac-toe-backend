const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const gameSchema = new Schema({
 player1 :{
     type : String,
     required : true
 },
 player2 :{
    type : String,
    required : true
},
winner:{
    type : String,
    required : true
},
w1:{
    type : Number,
    required : true 
},
w2:{
    type : Number,
    required : true
},
draw:{
    type : Number,
    required : true
},
firstTurn :{
    type : String,
    required : true
},
currentTurn:{
    type : String,
    required : true
}
,
turn:{
    type:String,
    required:true
},
box1 :{
    type : String,
    required : true
},
box2 :{
    type : String,
    required : true
}, 
box3 :{
    type : String,
    required : true
}, 
box4 :{
    type : String,
    required : true
}, 
box5 :{
    type : String,
    required : true
}, 
box6 :{
    type : String,
    required : true
},  
box7 :{
    type : String,
    required : true
}, 
box8 :{
    type : String,
    required : true
}, 
box9 :{
    type : String,
    required : true
}, 
isOver:{
    type:Boolean,
    required:true
}
})


module.exports = mongoose.model('Game',gameSchema)