//we using for practice high-order-function so this fuction usilly use if i want to send a fuction in this fuction how will code looks like nad how we manage them

// const asyncHandler = (fn) => async (error,req,res,next) => {
//     try{    
//         await fn(req,res,next)
//     }catch(error){
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }



// role- asyncHandler → async controller/function ko handle karna
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }

}