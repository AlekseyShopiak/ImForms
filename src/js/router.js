const getDT = require("./getter");
const express = require('express');
const router = express.Router();
const db = require('./config');

const getAllActions = (req, res) => {
   const query = `SELECT * FROM actions;`;
   db.query(query, (err, result) => {
       if (err) return res.status(500).json(err);
       res.status(200).json(result);
   });
};

const getAction = (req, res) => {
   const query = `SELECT * FROM actions WHERE id=${req.params.id}`;
   db.query(query, (err, result) => {
       if (err) return res.status(500).json(err);
       if(result.length){ res.status(200).json(result) }
       else{ res.status(404).json(`Action №${req.params.id} doesn't exist`) }
   });
};

const addAction = (req, res) => {
   const {state_id, actionType_id} = req.body;
   let id=1;
   if(!state_id && !actionType_id){
       return res
       .status(400)
       .json({ message: "Too few items. State and action type are required" });
   }

   //getting max id and incrementing it
   const queryid = `SELECT max(id) as id FROM actions`;
   db.query(queryid, (err, result) => {
       if (err) return res.status(500).json(err);
       if(result[0]){id += result[0].id;}

       //checking if state_id is correct
       const querystate = `SELECT * FROM state WHERE id=${state_id}`;
       db.query(querystate, (err, result) => {
           if (err) return res.status(500).json(err);
           if(!result.length) return res.status(406).json(`There is no id:${state_id} in state table`);

           //checking if actionType_id is correct
           const queryactiontype = `SELECT * FROM actionType WHERE id=${actionType_id}`;
           db.query(queryactiontype, (err, result) => {
               if (err) return res.status(500).json(err);
               if(!result.length) return res.status(406).json(`There is no id:${actionType_id} in actionType table`);
           
               //inserting new action in action table
               const query = `INSERT INTO actions VALUES ( ${id}, \"${getDT}\", ${state_id}, ${actionType_id});`;
               db.query(query, (err, result) => {
                   if (err) return res.status(500).json(err);
                   res.status(201).json(`Action №${id} was created`);
               });
           });
       });
   });    
};

const deleteAction = (req, res) => {
   const queryid = `SELECT * FROM actions WHERE id=${req.params.id}`;
   db.query(queryid, (err, result) => {
       if (err) return res.status(500).json(err);

       if(result.length >0){
           const query = `DELETE FROM actions WHERE id=${req.params.id}`;
           db.query(query, (err, result) => {
               if (err) return res.status(500).json(err);
               res.status(200).json(`Action №${req.params.id} was deleted`);
           });
       }
       else{res.status(404).json(`Action №${req.params.id} doesn't exist`);}
   });
};

const deleteAllActions = (req, res) => {
   const query = `DELETE FROM actions WHERE id>0;`;
   db.query(query, (err, result) => {
       if (err) return res.status(500).json(err);
       res.status(200).json("All actions were deleted");
   });
};

router
   .get("/actions", getAllActions)
   .get("/action/:id", getAction)
   .post("/action", addAction)
   .delete("/action/:id", deleteAction)
   .delete("/actions", deleteAllActions);

module.exports = router;