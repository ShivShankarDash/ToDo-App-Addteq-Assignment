const zod = require('zod')


const createdToDo = zod.object({
    title : zod.string().min(6)
})

module.exports = createdToDo