const express = require('express');
const router = express.Router();
const Game = require('../models/game');

router.post('/new',async(req,res)=>{
    let firstTurn;
    if(Math.random()>=0.5){
        firstTurn=req.body.player1
    }else{
        firstTurn=req.body.player2
    }
    const game = new Game({
        player1 : req.body.player1,
        player2: req.body.player2,
        firstTurn : firstTurn,
        currentTurn :firstTurn,
        winner:" ",
        w1:0,
        w2:0,
        draw:0,
        turn : "X",
        box1:" ",
        box2:" ",
        box3:" ",
        box4:" ",
        box5:" ",
        box6:" ",
        box7:" ",
        box8:" ",
        box9:" ",
        isOver:false,        
    });
    await game.save();
    
    res.send(game);
})
router.get('/:id',async(req,res)=>{
    const {id} = req.params;
    const game = await Game.findById(id);
    res.send(game);
})
router.put('/:id',async(req,res)=>{
    const move = req.body.move;
    const {id} = req.params;
    const game = await Game.findById(id);
    const changeTurn = ()=>{
        return game.turn === "X"? "0": "X"
    }
    const changeCurrentTurn =()=>{
        return game.currentTurn == game.player1 ? game.player2 : game.player1
    }
    game.winner=" "
    if(move==1 && game.box1==' '){game.box1= game.turn}
    if(move==2 && game.box2==' '){game.box2= game.turn}
    if(move==3 && game.box3==' '){game.box3= game.turn}
    if(move==4 && game.box4==' '){game.box4= game.turn}
    if(move==5 && game.box5==' '){game.box5= game.turn}
    if(move==6 && game.box6==' '){game.box6= game.turn}
    if(move==7 && game.box7==' '){game.box7= game.turn}
    if(move==8 && game.box8==' '){game.box8= game.turn}
    if(move==9 && game.box9==' '){game.box9= game.turn }
    game.turn = changeTurn();
    game.currentTurn = changeCurrentTurn();
   
    if(game.box1==game.box2 && game.box2==game.box3){ if(game.box1=='X'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box4==game.box5 && game.box5==game.box6){ if(game.box4=='X'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box7==game.box8 && game.box8==game.box9){ if(game.box8=='X'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box1==game.box4 && game.box4==game.box7){ if(game.box1=='X'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box2==game.box5 && game.box5==game.box8){ if(game.box2=='X'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box3==game.box6 && game.box6==game.box9){ if(game.box3=='X'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box1==game.box5 && game.box5==game.box9){ if(game.box1=='X'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box3==game.box5 && game.box5==game.box7){ if(game.box3=='X'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }

    if(game.box1==game.box2 && game.box2==game.box3){ if(game.box1=='0'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box4==game.box5 && game.box5==game.box6){ if(game.box4=='0'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box7==game.box8 && game.box8==game.box9){ if(game.box8=='0'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box1==game.box4 && game.box4==game.box7){ if(game.box1=='0'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box2==game.box5 && game.box5==game.box8){ if(game.box2=='0'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box3==game.box6 && game.box6==game.box9){ if(game.box3=='0'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box1==game.box5 && game.box5==game.box9){ if(game.box1=='0'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    if(game.box3==game.box5 && game.box5==game.box7){ if(game.box3=='0'){game.winner=changeCurrentTurn();game.isOver=true;if(game.winner==game.player1){game.w1=game.w1+1}else{game.w2=game.w2+1}} }
    let isAllFull=false;
    if(game.box1!=" " && game.box2!=" " && game.box3!=" " && game.box4!=" " && game.box5!=" " && game.box6!=" " && game.box7!=" " && game.box8!=" " && game.box9!=" "){
        isAllFull=true;
        game.winner='NoBody'
        game.draw=game.draw+1;
    }
    if(game.isOver || isAllFull){
        game.box1=" "
        game.box2=" "
        game.box3=" "
        game.box4=" "
        game.box5=" "
        game.box6=" "
        game.box7=" "
        game.box8=" "
        game.box9=" "
        game.isOver=false
    }
    const g = await Game.findByIdAndUpdate(id,game);
    await g.save()
    // if(game.isOver){
    //     res.send(g)
    //     console.log("reset")
    // }else{
        res.send(game);
   // } 
    
    
})

module.exports = router;