let getTestController = async(req,res) =>{

    return res.send("hello i am working");
    // try{
    //     const {username,userId} = req.body;

    //     const existingUser = await UserModel({username});
    //     if(!existingUser) 
    //     {
    //         console.log("this is not valid user name");
    //     }

    //     return res.json(existingUser);
        

    // } catch(err){

    // }
}

module.exports = getTestController;