const postRoute = require('express').Router();
const Post = require('./Post');

postRoute.post('/create', (req, res)=>{
    console.log(req.body.link);
    const newPost = new Post({
        content: req.body.content,
        link: req.body.link 
    })
    newPost.save()
    .then((user)=>{
        console.log('success: ', user);
        res.status(200).json({success: 'Done....'})
    }).catch(()=>{
        console.log('Something went wrong...POST');
        res.status(400).json({Error: 'DAMN....'})
    })
})
postRoute.get('/showpost', (req, res)=>{
    console.log('Called...');
    Post.find({})
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch(()=>{
        res.status(400).json({Error: 'Not available'})
    })
})
postRoute.delete('/remove/:id', (req, res)=>{
    Post.deleteOne({_id: req.params.id})
    .then(()=>{
        res.status(200).json({message: 'SUCCESS'});
    })
    .catch(()=>{
        res.status(400).json({message: ':ERROR:'});
    })
})

module.exports = postRoute