import { Router } from "express"        //new way of importing router from express
const userRouter = Router();


userRouter.post("/signup", function(req, res){      //ab userRouter bana chuke hai aur routing kiye hai toh we don't have access of app so userRouter use krenge uske jgah pe 
    res.json({
        message: "Signup endpoint"
    })
})

userRouter.post("/signin", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})


userRouter.get("/purchases", function(req, res){           //this routes for user ne jo purchase kiya hua hai uske liye
    res.json({
        message: "Signup endpoint"
    })
})