const express = require("express")
const db = require("../data/dbConfig")

const router = express.Router()

router.get("/", async (req, res, next) =>{
    try{
        const accounts = await db.select("*")
        res.json(accounts)
    } catch (err){
        next(err)
    }
})

router.get("/:id", async (req, res, next) =>{
    try{
        const account = await db.select("*").where("id", req.params.id).first()
        res.json(account)
    } catch (err){
        next(err)
    }
})


router.post("/", async (req, res, next) =>{
    try{


        const [id] = await db("accounts").where("id", req.params.id).insert(payload)
        const account = await db("accounts").where("id", req.params.id).first()

        res.json(account)
    } catch (err){
        next(err)
    }
})

router.put("/:id", async (req, res, next) =>{
    try{
        const payload = {
            name: req.body.name,
            budget: req.body.bodget
        }

        await db("accounts").where("id", req.params.id).update(payload)
        const account = await db("accounts").where("id", req.params.id).first()

        res.json(account)
    } catch (err){
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try{
        await db("accounts").where("id", req.params.id).del()
        res.status(204).end()
    }catch(err){
        next(err)
    }
})


module.exports = router;