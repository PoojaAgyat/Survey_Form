const express = require("express")
const Login = require("../models/User");
const surveyModel = require("../models/surveyModel")
const questionModel=require("../models/questionModel")
const Theme = require('../models/Theme')
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const route = express.Router()
const SC_KEY = "MUKKOTI&&SHASHANK&&123456789"
module.exports = route
route.post("/login", async (req, res) => {
    try {
        const Registereduser = await Login.findOne({ email: req.body.email })
        if (!Registereduser) {
            res.status(400).json({
                status: "error",
                message: "please Register to get login"
            })
        } else {
            bcrypt.compare(req.body.password, Registereduser.password, async function (err, result) {
                if (err) {
                    res.status(400).json({
                        status: "error",
                        message: err
                    })
                } else {
                    if (result) {
                        const data = await Login.findOne({ email: req.body.email })
                        const token = jwt.sign({
                            data: data._id
                        }, SC_KEY, { expiresIn: 90000000 });
                        res.status(200).json({
                            status: "sucess",
                            message: "user successfully verified ",
                            token
                        })
                    } else {
                        res.status(400).json({
                            status: "error",
                            message: "incorrect password"
                        })

                    }
                }
            });
        }

    } catch {

    }
})
route.post("/register", async (req, res) => {
    try {

        const Registereduser = await Login.findOne({ email: req.body.email })
        //checking user is existed or not
        if (!Registereduser) {
            try {

                bcrypt.hash(req.body.password, 10, async function (err, hash) {
                    if (err) {
                        res.status(400).json({
                            status: "error",
                            message: err
                        })
                    } else {
                        await Login.create({ name: req.body.name, email: req.body.email, phone: req.body.phone, password: hash, profession: req.body.profession })
                        res.status(200).json({
                            status: "sucess",
                            message: "sucessfully registered, please login"

                        })
                    }
                });

            }
            catch (err) {
                res.status(400).json({
                    status: "error",
                    message: err.message
                })
            }

        } else {
            res.status(400).json({
                status: "error",
                message: "user already registered, you can login directly"
            })
        }

    }
    catch (err) {

        res.status(400).json({
            status: "error",
            message: err.message
        })

    }

})
route.post("/createsurvey", async (req, res) => {
    const { name, startDate, endDate, description, typeOfSurvey, criteria, img } =
        req.body;
    try {
        const survey = await surveyModel.create({
            name: name,
            startDate: startDate,
            endDate: endDate,
            description: description,
            typeOfSurvey: typeOfSurvey,
            criteria: c+riteria,
            image: img,
        });
        res.status(200).json({
            status: "Success",
            data: survey,
            message: "Data Save Successfully!",
        });
    } catch (error) {
        res.status(500).json({ error });
    }
})
route.get("/surveylist", async (req, res) => {
    try {
        const list = await surveyModel.find({});

        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({ Error: error });
    }
});
route.post("/que", async (req, res) => {
    //console.log(req.body);
    const questions = req.body.questions;
    const option = req.body.option;
    const response = req.body.answers;
  
    const data = await questionModel.create({
      questions: questions,
      option: option,
      response: response,
    });
    res.json({
      status: "successful",
      message: "questions added",
    });
  });
  
  route.get("/getque", async (req, res) => {
    const query = req.body.id;
    console.log(query);
    const questions = await questionModel.findOne({ question_id: query });
    console.log(questions);
    res.json({
      questions: questions,
    });
  });
  route.post("/createheme", async (req, res) => {
    try {
      const theme = await Theme.create(req.body)
      res.status(201).json({ theme })
    }
    catch (err) {
      console.log(err)
    }
  });
